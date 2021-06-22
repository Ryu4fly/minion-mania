import React from "react";

import classes from "./CartModal.module.css";

import Button from "../../../UI/Button/Button";
import Modal from "../../../UI/Modal/Modal";

const CartModal = (props) => {
  return (
    <Modal className={classes["cart-modal"]} onClick={props.onClick}>
      <img
        className={classes["cart-background"]}
        src="https://i.pinimg.com/736x/f5/37/c2/f537c23fbff19738170f80e8b3f148d4.jpg"
        alt="minions stacked on one another"
      />
      <div className={classes["cart-contents"]}>
        <div className={classes["cart-items-list"]}>
          <h2 className={classes["cart-title"]}>CART</h2>
          <ul>
            <li>
              <span className={classes.name}>Steve</span>
              <span className={classes.amount}>x 1</span>
              <span className={classes.price}>$5.00</span>
              <button className={`${classes.actions} ${classes.add}`}>+</button>
              <button className={`${classes.actions} ${classes.subtract}`}>
                -
              </button>
            </li>
            <li>
              <span className={classes.name}>Steve</span>
              <span className={classes.amount}>x 1</span>
              <span className={classes.price}>$5.00</span>
              <button className={`${classes.actions} ${classes.add}`}>+</button>
              <button className={`${classes.actions} ${classes.subtract}`}>
                -
              </button>
            </li>
            <li>
              <span className={classes.name}>Steve</span>
              <span className={classes.amount}>x 1</span>
              <span className={classes.price}>$5.00</span>
              <button className={`${classes.actions} ${classes.add}`}>+</button>
              <button className={`${classes.actions} ${classes.subtract}`}>
                -
              </button>
            </li>
            <li>
              <span className={classes.name}>Steve</span>
              <span className={classes.amount}>x 1</span>
              <span className={classes.price}>$5.00</span>
              <button className={`${classes.actions} ${classes.add}`}>+</button>
              <button className={`${classes.actions} ${classes.subtract}`}>
                -
              </button>
            </li>
            <li>
              <span className={classes.name}>Steve</span>
              <span className={classes.amount}>x 1</span>
              <span className={classes.price}>$5.00</span>
              <button className={`${classes.actions} ${classes.add}`}>+</button>
              <button className={`${classes.actions} ${classes.subtract}`}>
                -
              </button>
            </li>
            <li>
              <span className={classes.name}>Steve</span>
              <span className={classes.amount}>x 1</span>
              <span className={classes.price}>$5.00</span>
              <button className={`${classes.actions} ${classes.add}`}>+</button>
              <button className={`${classes.actions} ${classes.subtract}`}>
                -
              </button>
            </li>
          </ul>
          <h3 className={classes.total}>Total: $10.00</h3>
        </div>
        <div className={classes.controls}>
          <Button text="ORDER" />
          <Button text="CLOSE" onClick={props.onClick} />
        </div>
      </div>
    </Modal>
  );
};

export default CartModal;
