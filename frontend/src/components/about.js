import React from "react";
import parse from "html-react-parser";

const AboutPage = ({ user }) => {
  const { profilePicture, name, headline, bio, links } = user;

  return (
    <main className="about-page">
      <div className="profile-picture">
        <img src={profilePicture} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{headline}</h2>
        <figure className="links-list">
          <figcaption>Links:</figcaption>
          <ul>
            {links.map(link => (
              <li key={`link to ${link.title}`}>
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </figure>
        <details open>
          <summary>Bio:</summary>
          {parse(bio)}
        </details>
      </div>
    </main>
  );
};

export default AboutPage;
