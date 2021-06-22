import React from "react";

import BackgroundImage from "./components/Layout/BackgroundImage/BackgroundImage";
import Navbar from "./components/Layout/Navbar/Navbar";
import ProjectSum from "./components/Layout/ProjectSum/ProjectSum";
import AvailableMinions from "./components/Minions/AvailableMinions";

function App() {
  return (
    <BackgroundImage>
      <Navbar />
      <ProjectSum />
      <AvailableMinions />
    </BackgroundImage>
  );
}

export default App;
