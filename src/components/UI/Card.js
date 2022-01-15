import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  const className =
    props.using === "form"
      ? `${classes.card} ${classes.card_form}`
      : `${classes.card}`;

  return <div className={className}>{props.children}</div>;
};

export default Card;
