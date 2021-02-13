import React from "react";
import nextId from "react-id-generator";
import WorkIcon from "@material-ui/icons/Work";

function Projects(props) {
  const projects = props.data.map((project) => {
    let id = nextId();
    return (
      <div key={id}>
        <h3>{project.title}</h3>
        <h3>{project.technology.join(", ")}</h3>
      </div>
    );
  });

  return (
    <div>
      <div>
        <WorkIcon />
        <h3>Projetos</h3>
      </div>
      {projects}
    </div>
  );
}

export default Projects;
