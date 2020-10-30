import React from "react";
import { Link } from "react-router-dom";

const ProjectsIndexItem = ({ project }) => (
  <li className="projects-index-item">
    <Link to={`/projects/${project._id}`}>
      <img src={project.mainImage} alt={`${project.title} project`} />
      <h2>{project.title}</h2>
      <summary>{project.oneLineDescription}</summary>
    </Link>
  </li>
);

export default ProjectsIndexItem;
