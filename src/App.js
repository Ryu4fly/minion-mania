import React, { Fragment, useState } from "react";

import BackgroundImage from "./components/Layout/BackgroundImage/BackgroundImage";
import Navbar from "./components/Layout/Navbar/Navbar";
import ProjectSum from "./components/Layout/ProjectSum/ProjectSum";
import AvailableMinions from "./components/Minions/AvailableMinions";
import Modal from "./components/UI/Modal/Modal";
function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart((prevCartState) => !prevCartState);
    console.log("hello");
  };

  return (
    <Fragment>
      {showCart && <Modal onClick={showCartHandler} />}
      <BackgroundImage>
        <Navbar onClick={showCartHandler} />
        <ProjectSum />
        <AvailableMinions />
      </BackgroundImage>
    </Fragment>
  );
}

export default App;
