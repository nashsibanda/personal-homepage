import React from "react";

const Homepage = ({ user }) => (
  <main className="homepage">
    <img src={user.logo} alt={`Site logo for ${user.siteUrl}`}></img>
    <h1>{user.name}</h1>
    <h2>{user.headline}</h2>
  </main>
);

export default Homepage;
