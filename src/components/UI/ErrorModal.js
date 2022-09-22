import React, { useCallback } from "react";

import Card from "./Card";
import Button from "./Button";

import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const escapeInput = useCallback((modalElement) => {
    if (modalElement) {
      modalElement.focus();
    }
  }, []);

  return (
    <div>
      <div
        className={classes.backdrop}
        onClick={props.onHandleError}
        onKeyDown={props.onHandleEscape}
        tabIndex={-1}
        ref={escapeInput}
      />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onHandleError}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
