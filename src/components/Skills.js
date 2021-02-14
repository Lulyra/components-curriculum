import React from "react";
import nextId from "react-id-generator";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import "../styles/Skills.css";

function Skills(props) {
  const habilidades = props.data.map((hab) => {
    const id = nextId();
    return <li key={id}>{hab}</li>;
  });

  return (
    <div>
      <div className="title">
        <DonutLargeIcon />
        <h2>Habilidades</h2>
      </div>
      <ul className="list">{habilidades}</ul>
    </div>
  );
}

export default Skills;
