import React from "react";
import "../styles/Introduction.css";

function Introduction(props) {
  return (
    <div>
      <p className="Text">{props.data}</p>
    </div>
  );
}

export default Introduction;
