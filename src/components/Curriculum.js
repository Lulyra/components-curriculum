import React from "react";
import PersonalInfo from "./PersonalInfo";
import SocialInfo from "./SocialInfo";
import Introduction from "./Introduction";
import Graduation from "./Graduation";
import Experience from "./Experience";

function Curriculum(props) {
  return (
    <div class="grid-container">
      <div class="PersonalInfo">
        <PersonalInfo data={props.PersonalInfo} />
      </div>
      <div class="SocialInfo">
        <SocialInfo data={props.SocialInfo} />
      </div>
      <div class="Introduction">
        <Introduction data={props.Introduction} />
      </div>
      <div class="Graduation">
        <Graduation data={props.Graduation} />
      </div>
      <div class="Experience">
        <Experience data={props.Experience} />
      </div>
    </div>
  );
}

export default Curriculum;
