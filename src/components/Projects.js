import React from "react";
import nextId from "react-id-generator";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Projects.css";

function Projects(props) {
  const projects = props.data.map((project) => {
    let id = nextId();
    return (
      <div key={id} className="item">
        <p className="item__title">{project.title}</p>
        <p className="Projects__technology">{project.technology.join(", ")}</p>
      </div>
    );
  });

  return (
    <div className="main">
      <div className="title">
        <WorkIcon />
        <h2>Projetos</h2>
      </div>
      {projects}
    </div>
  );
}

export default Projects;
