import React from "react";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <ul>
      <li>
        <span className={classes.name}>Steve</span>
        <span className={classes.amount}>x 1</span>
        <span className={classes.price}>$5.00</span>
        <button className={`${classes.actions} ${classes.add}`}>+</button>
        <button className={`${classes.actions} ${classes.subtract}`}>-</button>
      </li>
      <li>
        <span className={classes.name}>Steve</span>
        <span className={classes.amount}>x 1</span>
        <span className={classes.price}>$5.00</span>
        <button className={`${classes.actions} ${classes.add}`}>+</button>
        <button className={`${classes.actions} ${classes.subtract}`}>-</button>
      </li>
      <li>
        <span className={classes.name}>Steve</span>
        <span className={classes.amount}>x 1</span>
        <span className={classes.price}>$5.00</span>
        <button className={`${classes.actions} ${classes.add}`}>+</button>
        <button className={`${classes.actions} ${classes.subtract}`}>-</button>
      </li>
      <li>
        <span className={classes.name}>Steve</span>
        <span className={classes.amount}>x 1</span>
        <span className={classes.price}>$5.00</span>
        <button className={`${classes.actions} ${classes.add}`}>+</button>
        <button className={`${classes.actions} ${classes.subtract}`}>-</button>
      </li>
      <li>
        <span className={classes.name}>Steve</span>
        <span className={classes.amount}>x 1</span>
        <span className={classes.price}>$5.00</span>
        <button className={`${classes.actions} ${classes.add}`}>+</button>
        <button className={`${classes.actions} ${classes.subtract}`}>-</button>
      </li>
      <li>
        <span className={classes.name}>Steve</span>
        <span className={classes.amount}>x 1</span>
        <span className={classes.price}>$5.00</span>
        <button className={`${classes.actions} ${classes.add}`}>+</button>
        <button className={`${classes.actions} ${classes.subtract}`}>-</button>
      </li>
    </ul>
  );
};

export default CartItem;
