import React from "react";

import classes from "./Navbar.module.css";

import CartButton from "./CartButton";

const Navbar = (porps) => {
  return (
    <div className={classes.navbar}>
      <div className={classes.banner}>
        <img
          className={classes["banner-img"]}
          src="https://m.media-amazon.com/images/M/MV5BMzMwYjc1N2MtY2U2Ny00MTc3LTk1YWQtYzE3NmM5NWQ2YzkyXkEyXkFqcGdeQXVyMzAzODY0NzE@._V1_.jpg"
          alt="minion holding a banana"
        />
        <h1 className={classes["banner-title"]}>MINION MANIA</h1>
      </div>
      <CartButton text="CART" />
    </div>
  );
};

export default Navbar;
