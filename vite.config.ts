import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

// Preload the headline and body fonts so the hero text (the LCP element)
// doesn't wait for the CSS to be parsed before the font request starts.
const preloadFonts = (): Plugin => ({
  name: "preload-fonts",
  apply: "build",
  transformIndexHtml(_html, ctx) {
    const fonts = Object.keys(ctx.bundle ?? {}).filter((f) =>
      /(fraunces|outfit).*\.woff2$/.test(f)
    );
    return fonts.map((f) => ({
      tag: "link",
      attrs: { rel: "preload", href: `/portfolio/${f}`, as: "font", type: "font/woff2", crossorigin: "" },
      injectTo: "head",
    }));
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), preloadFonts()],
  base: "/portfolio/",
});
