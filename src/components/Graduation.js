import React from "react";
import nextId from "react-id-generator";
import SchoolIcon from "@material-ui/icons/School";
import "../styles/Graduation.css";

function Graduation(props) {
  const graduationComponents = props.data.map((formation) => {
    let id = nextId();
    return (
      <div key={id} className="case">
        <h4>{formation.typeOfGraduation}</h4>
        <h4 className="university">{formation.university}</h4>
        <h4>
          {formation.startDate} - {formation.endDate}
        </h4>
        <h4>{formation.subject}</h4>
      </div>
    );
  });

  return (
    <div>
      <div className="title">
        <SchoolIcon />
        <h3>Formação</h3>
      </div>
      {graduationComponents}
    </div>
  );
}

export default Graduation;
