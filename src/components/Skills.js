import React from "react";
import nextId from "react-id-generator";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";

function Skills(props) {
  const habilidades = props.data.map((hab) => {
    const id = nextId();
    return <li key={id}>{hab}</li>;
  });

  return (
    <div>
      <div>
        <DonutLargeIcon />
        <h3>Habilidades</h3>
      </div>
      <ul>{habilidades}</ul>
    </div>
  );
}

export default Skills;