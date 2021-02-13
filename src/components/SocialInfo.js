import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/SocialInfo.css";

function SocialInfo(props) {
  return (
    <div className="socialInfo__main">
      <div className="github">
        <GitHubIcon />
        <p>{props.data.github}</p>
      </div>
      <div className="linkedIn">
        <LinkedInIcon />
        <p>{props.data.linkedIn}</p>
      </div>
    </div>
  );
}

export default SocialInfo;
