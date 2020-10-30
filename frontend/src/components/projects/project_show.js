import React from "react";
import { useParams } from "react-router-dom";
import Gallery from "../gallery";
import parse from "html-react-parser";

const ProjectShow = ({ projects, match }) => {
  let { projectSlug } = useParams();
  const project = projects.find(project => project.slug === projectSlug);
  const {
    title,
    description,
    oneLineDescription,
    technologies,
    gallery,
    repositoryUrl,
    deployedUrl,
  } = project;

  return (
    <main className="project-show">
      <Gallery gallery={gallery} />
      <div className="info">
        <h1>{title}</h1>
        <summary>{oneLineDescription}</summary>
        <div className="links">
          {deployedUrl && (
            <a href={deployedUrl} target="_blank" rel="noreferrer">
              Deployed
            </a>
          )}
          {repositoryUrl && (
            <a href={repositoryUrl} target="_blank" rel="noreferrer">
              Repository
            </a>
          )}
        </div>
        <details>{parse(description)}</details>
        <figure className="tech-list">
          <figcaption>Technologies used:</figcaption>
          <ul>
            {technologies.map(tech => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </figure>
      </div>
    </main>
  );
};

export default ProjectShow;
