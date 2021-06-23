import React, { Fragment, useState } from "react";

import classes from "./Form.module.css";

import Button from "../Button/Button";

const Form = (props) => {
  const [enteredAmount, setEnteredAmount] = useState(1);

  const amountChangeHandler = (event) => {
    setEnteredAmount(+event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredAmount);
  };

  return (
    <Fragment>
      <form onSubmit={submitHandler} htmlFor={`amount-${props.id}`}>
        <input
          id={`amount-${props.id}`}
          className={classes.input}
          onChange={amountChangeHandler}
          type="number"
          min="0"
          max="10"
          defaultValue="1"
          step="1"
        />
        <Button type="submit" text="Add to Cart" />
      </form>
      <Button text="Cancel" onClick={props.onCancel} />
    </Fragment>
  );
};

export default Form;
