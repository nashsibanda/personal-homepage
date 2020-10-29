import React from "react";

const NavMenu = ({ user }) => (
  <>
    <nav>
      <ul className="main-menu">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
      </ul>
    </nav>
    <div className="footer-information">
      <a href="/#">
        <img src={user.logo} alt={`Site logo for ${user.siteUrl}`}></img>
      </a>
      <span>Copyright 2020</span>
    </div>
  </>
);

export default NavMenu;
