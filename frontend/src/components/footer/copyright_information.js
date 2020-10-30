import React from "react";
import { Link } from "react-router-dom";

const CopyrightInformation = ({ user }) => (
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
);

export default CopyrightInformation;
