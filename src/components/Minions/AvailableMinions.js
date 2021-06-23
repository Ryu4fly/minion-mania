import React from "react";

import classes from "./AvailableMinions.module.css";

import MinionAvatar from "./MinionAvatar/MinionAvatar";

const AvailableMinions = (props) => {
  const minionList = props.data.map((minion) => (
    <MinionAvatar
      key={minion.id}
      id={minion.id}
      name={minion.name}
      img={minion.img}
      onFilterMinon={props.onFilterMinon}
      onClick={props.onClick}
    />
  ));
  return (
    <div className={classes["shopping-list-container"]}>
      <h3 className={classes["shopping-list-title"]}>
        Get Your Minion Clone Today!
      </h3>
      <div className={classes["shopping-list-items"]}>{minionList}</div>
    </div>
  );
};

export default AvailableMinions;
