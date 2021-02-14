import React from "react";
import nextId from "react-id-generator";
import WorkIcon from "@material-ui/icons/Work";

function Projects(props) {
  const projects = props.data.map((project) => {
    let id = nextId();
    return (
      <div key={id}>
        <p>{project.title}</p>
        <p>{project.technology.join(", ")}</p>
      </div>
    );
  });

  return (
    <div>
      <div>
        <WorkIcon />
        <h2>Projetos</h2>
      </div>
      {projects}
    </div>
  );
}

export default Projects;
