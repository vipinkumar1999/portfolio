import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import setCharacter from "./utils/character";
import setLighting from "./utils/lighting";
import { useLoading } from "../../context/LoadingProvider";
import handleResize from "./utils/resizeUtils";
import {
  handleMouseMove,
  handleTouchEnd,
  handleHeadRotation,
  handleTouchMove,
} from "./utils/mouseUtils";
import setAnimations from "./utils/animationUtils";
import { setProgress } from "../Loading";
import { setAllTimeline } from "../utils/GsapScroll";

function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl2") || canvas.getContext("webgl"))
    );
  } catch {
    return false;
  }
}

const Scene = () => {
  const canvasDiv = useRef<HTMLDivElement | null>(null);
  const hoverDivRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef(new THREE.Scene());
  const { setLoading } = useLoading();
  const [webglFailed, setWebglFailed] = useState(false);

  const [, setChar] = useState<THREE.Object3D | null>(null);

  useEffect(() => {
    // Skip WebGL on small phones to avoid context loss and performance issues
    const isSmallMobile = window.innerWidth <= 768;

    if (!isWebGLAvailable() || isSmallMobile) {
      setWebglFailed(true);
      // Still set up section scroll animations even without the 3D character
      setAllTimeline();
      return;
    }

    if (!canvasDiv.current) return;

    const canvasEl = canvasDiv.current;
    const rect = canvasEl.getBoundingClientRect();
    const container = { width: rect.width, height: rect.height };
    const aspect = container.width / container.height;
    const scene = sceneRef.current;
    const isMobile = window.innerWidth <= 1024;

    let renderer!: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        // antialias off on mobile saves GPU memory and improves Safari stability
        antialias: !isMobile,
        // 'default' is safer than 'high-performance' across Safari / Windows Chrome
        powerPreference: "default",
        // Prevents Safari from refusing to create a context on low-end GPUs
        failIfMajorPerformanceCaveat: false,
      });
    } catch {
      setWebglFailed(true);
      setAllTimeline();
      return;
    }

    renderer.setSize(container.width, container.height);
    // Cap pixel ratio lower on mobile to reduce memory pressure on iOS
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    canvasEl.appendChild(renderer.domElement);

    let isRunning = true;
    renderer.domElement.addEventListener("webglcontextlost", (e) => {
      e.preventDefault();
      isRunning = false;
      setWebglFailed(true);
      setAllTimeline();
    });

    renderer.domElement.addEventListener("webglcontextrestored", () => {
      isRunning = true;
    });

    const camera = new THREE.PerspectiveCamera(14.5, aspect, 0.1, 1000);
    camera.position.z = 10;
    camera.position.set(0, 13.1, 24.7);
    camera.zoom = 1.1;
    camera.updateProjectionMatrix();

    let headBone: THREE.Object3D | null = null;
    let screenLight: any | null = null;
    let mixer: THREE.AnimationMixer;
    let charRef: THREE.Object3D | null = null;

    const clock = new THREE.Clock();

    const light = setLighting(scene);
    const progress = setProgress((value) => setLoading(value));
    const { loadCharacter } = setCharacter(renderer, scene, camera);

    const onResize = () => {
      if (charRef) handleResize(renderer, camera, canvasDiv, charRef);
    };

    loadCharacter()
      .then((gltf) => {
        if (gltf) {
          const animations = setAnimations(gltf);
          hoverDivRef.current && animations.hover(gltf, hoverDivRef.current);
          mixer = animations.mixer;
          const character = gltf.scene;
          charRef = character;
          setChar(character);
          scene.add(character);
          headBone = character.getObjectByName("spine006") || null;
          screenLight = character.getObjectByName("screenlight") || null;
          progress.loaded().then(() => {
            setTimeout(() => {
              light.turnOnLights();
              animations.startIntro();
            }, 2500);
          });
          window.addEventListener("resize", onResize);
        }
      })
      .catch((err) => {
        progress.clear();
        console.error("Character model failed to load:", err);
      });

    let mouse = { x: 0, y: 0 },
      interpolation = { x: 0.1, y: 0.2 };

    const onMouseMove = (event: MouseEvent) => {
      handleMouseMove(event, (x, y) => (mouse = { x, y }));
    };
    let debounce: number | undefined;
    const onTouchStart = (event: TouchEvent) => {
      const element = event.target as HTMLElement;
      debounce = setTimeout(() => {
        element?.addEventListener("touchmove", (e: TouchEvent) =>
          handleTouchMove(e, (x, y) => (mouse = { x, y }))
        );
      }, 200);
    };

    const onTouchEnd = () => {
      handleTouchEnd((x, y, interpolationX, interpolationY) => {
        mouse = { x, y };
        interpolation = { x: interpolationX, y: interpolationY };
      });
    };

    document.addEventListener("mousemove", onMouseMove);
    const landingDiv = document.getElementById("landingDiv");
    if (landingDiv) {
      landingDiv.addEventListener("touchstart", onTouchStart);
      landingDiv.addEventListener("touchend", onTouchEnd);
    }

    const animate = () => {
      if (!isRunning) return;
      requestAnimationFrame(animate);
      if (headBone) {
        handleHeadRotation(
          headBone,
          mouse.x,
          mouse.y,
          interpolation.x,
          interpolation.y,
          THREE.MathUtils.lerp
        );
        light.setPointLight(screenLight);
      }
      const delta = clock.getDelta();
      if (mixer) {
        mixer.update(delta);
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      isRunning = false;
      clearTimeout(debounce);
      scene.clear();
      renderer.dispose();
      window.removeEventListener("resize", onResize);
      if (canvasEl.contains(renderer.domElement)) {
        canvasEl.removeChild(renderer.domElement);
      }
      document.removeEventListener("mousemove", onMouseMove);
      if (landingDiv) {
        landingDiv.removeEventListener("touchstart", onTouchStart);
        landingDiv.removeEventListener("touchend", onTouchEnd);
      }
    };
  }, []);

  return (
    <>
      <div className="character-container">
        <div
          className={`character-model${webglFailed ? " character-model--fallback" : ""}`}
          ref={canvasDiv}
        >
          {!webglFailed && (
            <>
              <div className="character-rim"></div>
              <div className="character-hover" ref={hoverDivRef}></div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Scene;
