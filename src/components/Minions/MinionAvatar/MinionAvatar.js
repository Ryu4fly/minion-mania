import React from "react";

import classes from "./MinionAvatar.module.css";

const MinionAvatar = (props) => {
  const filterMinionHander = () => {
    props.onFilterMinon(props.id);
    props.onClick();
  };

  return (
    <div id={props.id} className={classes.avatar} onClick={filterMinionHander}>
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
