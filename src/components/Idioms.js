import React from "react";
import nextId from "react-id-generator";
import TranslateIcon from "@material-ui/icons/Translate";
import "../styles/Idioms.css";

function Idioms(props) {
  const idioms = props.data.map((idiom) => {
    let id = nextId();
    return (
      <div key={id} className="item">
        <p >{idiom.info}</p>
        <p>
          {idiom.language}: {idiom.level}
        </p>
      </div>
    );
  });

  return (
    <div className="main">
      <div className="title">
        <TranslateIcon />
        <h2>Idiomas</h2>
      </div>
      {idioms}
    </div>
  );
}

export default Idioms;
