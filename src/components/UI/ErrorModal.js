import React from "react";
import classes from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <div>
        <div claasName={classes.backdrop}/>
    <Card claasName={classes.modal}>
      <header claasName={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div claasName={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer claasName={classes.actions}>
        <Button>Okay</Button>
      </footer>
    </Card>
    </div>
  );
};

export default ErrorModal;
