import React from "react";
import PersonalInfo from "./PersonalInfo";
import SocialInfo from "./SocialInfo";
import Introduction from "./Introduction";
import Graduation from "./Graduation";
import Experience from "./Experience";
import Idioms from "./Idioms";
import Projects from "./Projects";
import Skills from "./Skills";

function Curriculum(props) {
  return (
    <div className="grid-container">
      <div className="PersonalInfo">
        <PersonalInfo data={props.info.PersonalInfo} />
      </div>
      <div className="SocialInfo">
        <SocialInfo data={props.info.SocialInfo} />
      </div>
      <div className="Introduction">
        <Introduction data={props.info.Introduction} />
      </div>
      <div className="Graduation">
        <Graduation data={props.info.Graduation} />
      </div>
      <div className="Idioms">
        <Idioms data={props.info.Idioms} />
      </div>
      <div className="Experience">
        <Experience data={props.info.Experience} />
      </div>
      <div className="Projects">
        <Projects data={props.info.Projects} />
      </div>
      <div className="Skills">
        <Skills data={props.info.Skills} />
      </div>
    </div>
  );
}

export default Curriculum;
