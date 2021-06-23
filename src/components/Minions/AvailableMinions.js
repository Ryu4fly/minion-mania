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
    img: "https://i.pinimg.com/originals/77/12/9b/77129bb9cbeb89bb75ce8e4fe160507e.jpg",
  },
  {
    id: "m3",
    name: "Bob",
    img: "https://i.pinimg.com/originals/3e/0b/d9/3e0bd971ef4434d9354ee6dde37aed88.jpg",
  },
  {
    id: "m4",
    name: "Dave",
    img: "https://i.ebayimg.com/images/g/J18AAOSwstxU41Lp/s-l400.jpg",
  },
  {
    id: "m5",
    name: "Phil",
    img: "https://pbs.twimg.com/media/EtQV6lfVgAAfYKW.jpg",
  },
  {
    id: "m6",
    name: "Tim",
    img: "https://cjmart.jp/en/upload/save_image/0134_190824_mp4otl_y_3.jpg",
  },
  {
    id: "m7",
    name: "Carl",
    img: "http://sfwallpaper.com/images/minions-despicable-me-8.jpg",
  },
  {
    id: "m8",
    name: "Jorge",
    img: "https://m.media-amazon.com/images/M/MV5BMGUwZGQxMDEtZjU0Yi00YTM5LWI2NjEtYzQ4YjYzM2E1ODVmXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg",
  },
];

const AvailableMinions = (props) => {
  const minionList = MINIONS_DATA.map((minion) => (
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
