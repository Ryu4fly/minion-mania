import React from "react";

import classes from "./MinionProfile.module.css";

import Modal from "../../UI/Modal/Modal";

const MinionProfile = (props) => {
  const minion = props.onSelectedMinion;

  return (
    <Modal
      className={`${minion.id} ${classes.profile}`}
      onClick={props.onClick}
    >
      <img
        className={classes["profile-pic"]}
        src={minion.profileImg}
        alt={`${minion.name}`}
      />
      <p>{minion.name}</p>
    </Modal>
  );
};

export default MinionProfile;
