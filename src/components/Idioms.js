import React from "react";
import nextId from "react-id-generator";
import TranslateIcon from "@material-ui/icons/Translate";

function Idioms(props) {
  const idioms = props.data.map((idiom) => {
    let id = nextId();
    return (
      <div key={id}>
        <h3>{idiom.info}</h3>
        <h3>
          {idiom.language}: {idiom.level}
        </h3>
      </div>
    );
  });

  return (
    <div>
      <div>
        <TranslateIcon />
        <h3>Idiomas</h3>
      </div>
      {idioms}
    </div>
  );
}

export default Idioms;
