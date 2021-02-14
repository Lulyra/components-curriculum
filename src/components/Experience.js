import React from "react";
import nextId from "react-id-generator";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import "../styles/Experience.css";

function Experience(props) {
  const experiences = props.data.map((exp) => {
    let id = nextId();
    return (
      <div key={id} className="item">
        <p className="item__title">
          {exp.where} - {exp.year}
        </p>
        <p>{exp.details}</p>
      </div>
    );
  });

  return (
    <div className="main">
      <div className="title">
        <EmojiTransportationIcon />
        <h2>Experiências</h2>
      </div>
      {experiences}
    </div>
  );
}

export default Experience;
