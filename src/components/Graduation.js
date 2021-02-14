import React from "react";
import nextId from "react-id-generator";
import SchoolIcon from "@material-ui/icons/School";
import "../styles/Graduation.css";

function Graduation(props) {
  const graduationComponents = props.data.map((formation) => {
    let id = nextId();
    return (
      <div key={id} className="item">
        <p className="item__title">{formation.typeOfGraduation}</p>
        <p className="university">{formation.university}</p>
        <p>
          {formation.startDate} - {formation.endDate}
        </p>
        <p>{formation.subject}</p>
      </div>
    );
  });

  return (
    <div>
      <div className="title">
        <SchoolIcon />
        <h2>Formação</h2>
      </div>
      {graduationComponents}
    </div>
  );
}

export default Graduation;
