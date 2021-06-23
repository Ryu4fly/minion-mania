import React, { useContext } from "react";

import classes from "./AvailableMinions.module.css";

import MinionAvatar from "./MinionAvatar/MinionAvatar";
import MinionContext from "../../store/minion-context";

const AvailableMinions = (props) => {
  const ctx = useContext(MinionContext);
  const { data } = ctx;

  const minionList = data.map((minion) => (
    <MinionAvatar
      key={minion.id}
      id={minion.id}
      name={minion.name}
      img={minion.img}
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
