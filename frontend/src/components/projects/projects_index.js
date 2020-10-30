import React from "react";
import ProjectsIndexItem from "./projects_index_item";

const ProjectsIndex = ({ projects }) => (
  <main className="projects-index">
    <h1>Projects</h1>
    {projects && (
      <ul className="projects-index-list">
        {projects.map(project => (
          <ProjectsIndexItem key={project._id} project={project} />
        ))}
      </ul>
    )}
  </main>
);

export default ProjectsIndex;
