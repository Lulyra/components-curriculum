import React from "react";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import RoomIcon from "@material-ui/icons/Room";

function PersonalInfo() {
  return (
    <div className="PersonalInfo">
      <p className=""></p>
      <p className="">Engenheiro de Software</p>
      <div className="Phone">
        <PhoneAndroidIcon />
        <p className="Phone__value">+55 (21) 99404-6890</p>
      </div>
      <div className="Email">
        <MailOutlineIcon />
        <p className="Email__value">luiz_paulo6@hotmail.com</p>
      </div>
      <div className="Location">
        <RoomIcon />
        <p className="Location__value">Rio de Janeiro, RJ - Brasil</p>
      </div>
    </div>
  );
}

export default PersonalInfo;
