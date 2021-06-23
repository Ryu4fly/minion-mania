import React, { Fragment, useState } from "react";

import BackgroundImage from "./components/Layout/BackgroundImage/BackgroundImage";

import AvailableMinions from "./components/Minions/AvailableMinions";
import CartModal from "./components/Layout/Navbar/CartModal/CartModal";
import MinionProfile from "./components/Minions/MinionProfile/MinionProfile";
import Navbar from "./components/Layout/Navbar/Navbar";
import ProjectSum from "./components/Layout/ProjectSum/ProjectSum";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const showCartHandler = () => {
    setShowCart((prevCartState) => !prevCartState);
  };

  const showProfileHandler = () => {
    setShowProfile((prevProfileState) => !prevProfileState);
  };

  return (
    <Fragment>
      {showCart && <CartModal onClick={showCartHandler} />}
      {showProfile && <MinionProfile onClick={showProfileHandler} />}
      <BackgroundImage>
        <Navbar onClick={showCartHandler} />
        <ProjectSum />
        <AvailableMinions onClick={showProfileHandler} />
      </BackgroundImage>
    </Fragment>
  );
}

export default App;
