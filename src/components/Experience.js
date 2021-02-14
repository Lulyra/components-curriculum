import React from "react";
import nextId from "react-id-generator";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";

function Experience(props) {
  const experiences = props.data.map((exp) => {
    let id = nextId();
    return (
      <div key={id}>
        <h3>
          {exp.where} - {exp.year}
        </h3>
        <h3>{exp.details}</h3>
      </div>
    );
  });

  return (
    <div>
      <div>
        <EmojiTransportationIcon />
        <h2>Experiências</h2>
      </div>
      {experiences}
    </div>
  );
}

export default Experience;
