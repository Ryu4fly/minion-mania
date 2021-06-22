import React from "react";

import ReactLogo from "../../../asset/logo.svg";

import classes from "./ProjectSum.module.css";

const ProjectSum = () => {
  return (
    <section className={classes["summary-container"]}>
      <div className={classes.header}>
        <img
          className={`${classes["react-logo"]} ${classes["logo-clockwise"]}`}
          src={ReactLogo}
          alt="react logo rotating clock-wise"
        />
        <h2 className={classes.welcome}>Welcome!</h2>
        <img
          className={`${classes["react-logo"]} ${classes["logo-counter"]}`}
          src={ReactLogo}
          alt="react logo rotating counter-clock-wise"
        />
      </div>
      <p className={classes.summary}>
        This site was created to apply what I have learned so far with React
        (more features to come), and also to have fun!{" "}
        <span>
          -{" "}
          <a className={classes.portfolio} href="https://www.ryugisuguro.com/">
            [=R_S=]
          </a>
        </span>
      </p>
    </section>
  );
};

export default ProjectSum;
