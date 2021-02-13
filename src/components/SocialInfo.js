import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function SocialInfo(props) {
  return (
    <div>
      <div>
        <GitHubIcon />
        <p>{props.data.github}</p>
      </div>
      <div>
        <LinkedInIcon />
        <p>{props.data.linkedIn}</p>
      </div>
    </div>
  );
}

export default SocialInfo;
