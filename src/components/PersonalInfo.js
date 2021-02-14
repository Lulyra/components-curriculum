import React from "react";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import RoomIcon from "@material-ui/icons/Room";
import "../styles/PersonalInfo.css";

function PersonalInfo(props) {
  return (
    <div>
      <h1 className="Name">{props.data.name}</h1>
      <h2 className="Profession">{props.data.profession}</h2>
      <div className="Phone">
        <PhoneAndroidIcon />
        <p className="Phone__value">{props.data.phone}</p>
      </div>
      <div className="Email">
        <MailOutlineIcon />
        <p className="Email__value">{props.data.email}</p>
      </div>
      <div className="Location">
        <RoomIcon />
        <p className="Location__value">{props.data.location}</p>
      </div>
    </div>
  );
}

export default PersonalInfo;
