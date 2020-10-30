import React from "react";
import CopyrightInformation from "./copyright_information";
import NavMenu from "./nav_menu";
import SocialLinks from "./social_links";

const Footer = ({ user }) => (
  <footer>
    <NavMenu />
    <SocialLinks />
    {user && <CopyrightInformation user={user} />}
  </footer>
);

export default Footer;
