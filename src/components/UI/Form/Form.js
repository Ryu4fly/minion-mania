import React, { Fragment, useState, useContext } from "react";

import classes from "./Form.module.css";

import Button from "../Button/Button";
import CartContext from "../../../store/cart-context";

const Form = (props) => {
  const ctx = useContext(CartContext);
  const [enteredAmount, setEnteredAmount] = useState(1);

  const amountChangeHandler = (event) => {
    setEnteredAmount((prevAmount) => {
      return (prevAmount = +event.target.value);
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const item = {
      id: props.id,
      name: props.name,
      amount: enteredAmount,
    };
    ctx.addItem(item);
  };

  return (
    <Fragment>
      <form
        className={classes["profile-form"]}
        onSubmit={submitHandler}
        htmlFor={`amount-${props.id}`}
      >
        <input
          id={`amount-${props.id}`}
          className={classes["amount-input"]}
          onChange={amountChangeHandler}
          type="number"
          min="0"
          max="10"
          defaultValue="1"
          step="1"
        />
        <Button type="submit" text="Add to Cart" />
        <Button text="Cancel" onClick={props.onCancel} />
      </form>
    </Fragment>
  );
};

export default Form;
