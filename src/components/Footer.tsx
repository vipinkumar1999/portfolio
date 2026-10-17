import { profile } from "../content";
import "../styles/footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="container footer__inner">
      <p>
        {profile.name} <span className="footer__sep">·</span> © {new Date().getFullYear()}
      </p>
      <a href="#summary">Back to top ↑</a>
      <p className="footer__built">Built with React · Hosted on GitHub Pages</p>
    </div>
  </footer>
);

export default Footer;
