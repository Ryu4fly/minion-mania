import React from "react";

import classes from "./MinionProfile.module.css";

import Form from "../../UI/Form/Form";
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
      <Form id={minion.id} onCancel={props.onClick} />
    </Modal>
  );
};

export default MinionProfile;
