import React, { Fragment, useState } from "react";

import BackgroundImage from "./components/Layout/BackgroundImage/BackgroundImage";

import AvailableMinions from "./components/Minions/AvailableMinions";
import CartModal from "./components/Layout/Navbar/CartModal/CartModal";
import Navbar from "./components/Layout/Navbar/Navbar";
import ProjectSum from "./components/Layout/ProjectSum/ProjectSum";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart((prevCartState) => !prevCartState);
    console.log("hello");
  };

  return (
    <Fragment>
      {showCart && <CartModal onClick={showCartHandler} />}
      <BackgroundImage>
        <Navbar onClick={showCartHandler} />
        <ProjectSum />
        <AvailableMinions />
      </BackgroundImage>
    </Fragment>
  );
}

export default App;
