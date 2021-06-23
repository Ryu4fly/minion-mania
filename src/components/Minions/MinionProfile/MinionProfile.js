import React from "react";

import classes from "./MinionProfile.module.css";

import Modal from "../../UI/Modal/Modal";

const MinionProfile = (props) => {
  return <Modal className="profile" onClick={props.onClick}></Modal>;
};

export default MinionProfile;
