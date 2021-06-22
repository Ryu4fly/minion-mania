import React from "react";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  return (
    <button className={classes["cart-button"]} onClick={props.onClick}>
      {props.text}
      <div className={classes["cart-counter"]}>0</div>
    </button>
  );
};

export default CartButton;
