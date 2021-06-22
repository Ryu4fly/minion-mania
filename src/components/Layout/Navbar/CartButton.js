import React from "react";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  return <button className={classes["cart-button"]}>{props.text}</button>;
};

export default CartButton;
