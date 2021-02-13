import React from "react";
import nextId from "react-id-generator";
import SchoolIcon from "@material-ui/icons/School";

function Graduation(props) {
  const graduationComponents = props.data.map((formation) => {
    let id = nextId();
    return (
      <div key={id}>
        <h4>{formation.typeOfGraduation}</h4>
        <h4>{formation.university}</h4>
        <h4>
          {formation.startDate} - {formation.endDate}
        </h4>
        <h4>{formation.subject}</h4>
      </div>
    );
  });

  return (
    <div>
      <div>
        <SchoolIcon />
        <h3>Formação</h3>
      </div>
      {graduationComponents}
    </div>
  );
}

export default Graduation;
