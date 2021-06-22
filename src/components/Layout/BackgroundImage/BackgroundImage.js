import React from "react";

import classes from "./BackgroundImage.module.css";

const BackgroundImage = (props) => {
  return <div className={classes["bg-img"]}>{props.children}</div>;
};

export default BackgroundImage;
