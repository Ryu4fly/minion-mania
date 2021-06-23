import React, { Fragment, useState } from "react";

import BackgroundImage from "./components/Layout/BackgroundImage/BackgroundImage";

import AvailableMinions from "./components/Minions/AvailableMinions";
import CartModal from "./components/Layout/Navbar/CartModal/CartModal";
import MinionProfile from "./components/Minions/MinionProfile/MinionProfile";
import Navbar from "./components/Layout/Navbar/Navbar";
import ProjectSum from "./components/Layout/ProjectSum/ProjectSum";

export const MINIONS_DATA = [
  {
    id: "m1",
    name: "Stuart",
    img: "https://cjmart.jp/en/upload/save_image/0130_190824_mp4otl_y_3.jpg",
    profileImg:
      "https://images.halloweencostumes.com/blog/images/685/2765-1/stuart-minion.jpg",
  },
  {
    id: "m2",
    name: "Kevin",
    img: "https://i.pinimg.com/originals/77/12/9b/77129bb9cbeb89bb75ce8e4fe160507e.jpg",
    profileImg:
      "https://images.halloweencostumes.com/blog/images/685/2766-1/kevin-minion.jpg",
  },
  {
    id: "m3",
    name: "Bob",
    img: "https://i.pinimg.com/originals/3e/0b/d9/3e0bd971ef4434d9354ee6dde37aed88.jpg",
    profileImg:
      "https://images.halloweencostumes.com/blog/images/685/2767-1/bob-minion.jpg",
  },
  {
    id: "m4",
    name: "Dave",
    img: "https://i.ebayimg.com/images/g/J18AAOSwstxU41Lp/s-l400.jpg",
    profileImg:
      "https://images.halloweencostumes.com/blog/images/685/2768-1/dave-minion.jpg",
  },
  {
    id: "m5",
    name: "Phil",
    img: "https://pbs.twimg.com/media/EtQV6lfVgAAfYKW.jpg",
    profileImg:
      "https://images.halloweencostumes.com/blog/images/685/2769-1/phil-minion.jpg",
  },
  {
    id: "m6",
    name: "Tim",
    img: "https://cjmart.jp/en/upload/save_image/0134_190824_mp4otl_y_3.jpg",
    profileImg:
      "https://images.halloweencostumes.com/blog/images/685/2770-1/tim-minion.jpg",
  },
  {
    id: "m7",
    name: "Carl",
    img: "http://sfwallpaper.com/images/minions-despicable-me-8.jpg",
    profileImg:
      "https://images.halloweencostumes.com/blog/images/685/2771-1/carl-minion.jpg",
  },
  {
    id: "m8",
    name: "Jorge",
    img: "https://m.media-amazon.com/images/M/MV5BMGUwZGQxMDEtZjU0Yi00YTM5LWI2NjEtYzQ4YjYzM2E1ODVmXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_.jpg",
    profileImg:
      "https://images.halloweencostumes.com/blog/images/685/2772-1/jorge-minion.jpg",
  },
];

function App() {
  const [showCart, setShowCart] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [selectedMinion, setSelectedMinion] = useState();

  const showCartHandler = () => {
    setShowCart((prevCartState) => !prevCartState);
  };

  const showProfileHandler = () => {
    setShowProfile((prevProfileState) => !prevProfileState);
  };

  const filterMinionHandler = (id) => {
    setSelectedMinion(
      MINIONS_DATA.filter((minion) => {
        return minion.id === id;
      })[0]
    );
  };

  return (
    <Fragment>
      {showCart && <CartModal onClick={showCartHandler} />}
      {showProfile && (
        <MinionProfile
          onSelectedMinion={selectedMinion}
          onClick={showProfileHandler}
        />
      )}
      <BackgroundImage>
        <Navbar onClick={showCartHandler} />
        <ProjectSum />
        <AvailableMinions
          data={MINIONS_DATA}
          onFilterMinon={filterMinionHandler}
          onClick={showProfileHandler}
        />
      </BackgroundImage>
    </Fragment>
  );
}

export default App;
