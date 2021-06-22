import React from "react";

import classes from "./MinionAvatar.module.css";

const MinionAvatar = (props) => {
  return (
    <div id={props.id} className={classes.avatar}>
      <img
        className={classes["avatar-img"]}
        src={props.img}
        alt={`${props.name}'s face`}
      />
      <h4 className={classes["avatar-name"]}>{props.name}</h4>
    </div>
  );
};

export default MinionAvatar;
