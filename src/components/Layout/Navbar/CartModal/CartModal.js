import React, { useContext } from "react";

import classes from "./CartModal.module.css";

import CartItem from "./CartItem/CartItem";
import Button from "../../../UI/Button/Button";
import Modal from "../../../UI/Modal/Modal";

import CartContext from "../../../../store/cart-context";

const CartModal = (props) => {
  const ctx = useContext(CartContext);

  const { totalCost } = ctx;

  const items = ctx.items.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      amount={item.amount}
    />
  ));

  const emptyCart = <p>You Have No Items In The Cart</p>;

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
          {items.length === 0 ? emptyCart : <ul>{items}</ul>}
          <h3 className={classes.total}>Total: ${totalCost.toFixed(2)}</h3>
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
