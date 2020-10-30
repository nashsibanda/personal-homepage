import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ user }) => (
  <footer>
    <nav>
      <ul className="main-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
    <ul className="social-links">
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/nashsibanda"
          aria-label="Github: nashsibanda"
        >
          <img
            className="preload"
            src="https://img.icons8.com/dotty/80/000000/github.png"
            alt="Github: nashsibanda"
          />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/nashsibanda"
          aria-label="Twitter: @nashsibanda"
        >
          <img
            className="preload"
            src="https://img.icons8.com/dotty/80/000000/twitter.png"
            alt="Twitter: @nashsibanda"
          />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/nashsibanda/"
          aria-label="LinkedIn: nashsibanda"
        >
          <img
            className="preload"
            src="https://img.icons8.com/dotty/80/000000/linkedin.png"
            alt="LinkedIn: nashsibanda"
          />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/channel/UC_xCDnvZEKJ0v_1C3IBiJTg"
          aria-label="YouTube: NashX"
        >
          <img
            className="preload"
            src="https://img.icons8.com/dotty/80/000000/youtube.png"
            alt="YouTube: NashX"
          />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/nashsibanda/"
          aria-label="Instagram: nashsibanda"
        >
          <img
            className="preload"
            src="https://img.icons8.com/dotty/80/000000/instagram.png"
            alt="Instagram: nashsibanda"
          />
        </a>
      </li>
    </ul>
    <div className="footer-information">
      <a href="/#">
        <img src={user.logo} alt={`Site logo for ${user.siteUrl}`}></img>
      </a>
      <span>Copyright 2020</span>
    </div>
  </footer>
);

export default Footer;
