import React from "react";
import PersonalInfo from "./PersonalInfo";

function Curriculum(props) {
  return (
    <div class="grid-container">
      <div class="PersonalInfo">
        <PersonalInfo />
      </div>
      <div class="SocialInfo"></div>
      <div class="Introduction"></div>
      <div class="Graduation"></div>
      <div class="Experience"></div>
    </div>
  );
}

export default Curriculum;
