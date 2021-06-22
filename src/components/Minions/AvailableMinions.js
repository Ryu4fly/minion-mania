import React from "react";

import classes from "./AvailableMinions.module.css";

import MinionAvatar from "./MinionAvatar/MinionAvatar";

const MINIONS_DATA = [
  {
    id: "m1",
    name: "Stuart",
    img: "https://cjmart.jp/en/upload/save_image/0130_190824_mp4otl_y_3.jpg",
  },
  {
    id: "m2",
    name: "Kevin",
    img: "https://cjmart.jp/en/upload/save_image/0130_190824_mp4otl_y_3.jpg",
  },
  {
    id: "m3",
    name: "Bob",
    img: "https://cjmart.jp/en/upload/save_image/0130_190824_mp4otl_y_3.jpg",
  },
  {
    id: "m4",
    name: "Dave",
    img: "https://cjmart.jp/en/upload/save_image/0130_190824_mp4otl_y_3.jpg",
  },
  {
    id: "m5",
    name: "Phil",
    img: "https://cjmart.jp/en/upload/save_image/0130_190824_mp4otl_y_3.jpg",
  },
  {
    id: "m6",
    name: "Tim",
    img: "https://cjmart.jp/en/upload/save_image/0130_190824_mp4otl_y_3.jpg",
  },
  {
    id: "m7",
    name: "Carl",
    img: "https://cjmart.jp/en/upload/save_image/0130_190824_mp4otl_y_3.jpg",
  },
  {
    id: "m8",
    name: "Jorge",
    img: "https://cjmart.jp/en/upload/save_image/0130_190824_mp4otl_y_3.jpg",
  },
];

const AvailableMinions = (props) => {
  const minionList = MINIONS_DATA.map((minion) => (
    <MinionAvatar
      key={minion.id}
      id={minion.id}
      name={minion.name}
      img={minion.img}
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
