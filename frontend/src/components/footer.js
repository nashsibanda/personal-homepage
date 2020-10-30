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
            src="/images/github.png"
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
            src="/images/twitter.png"
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
            src="/images/linkedin.png"
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
            src="/images/youtube.png"
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
            src="/images/instagram.png"
            alt="Instagram: nashsibanda"
          />
        </a>
      </li>
    </ul>
    {user && (
      <div className="footer-information">
        <Link to="/">
          <img src={user.logo} alt={`Site logo for ${user.siteUrl}`}></img>
        </Link>
        <span>
          Copyright 2020 {user.name} | Social icons by{" "}
          <a target="_blank" rel="noreferrer" href="https://icons8.com">
            Icons8
          </a>
        </span>
      </div>
    )}
  </footer>
);

export default Footer;
