import React, { useCallback } from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";

import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  const escapeInput = useCallback((modalElement) => {
    if (modalElement) {
      modalElement.focus();
    }
  }, []);

  return (
    <div
      className={classes.backdrop}
      onClick={props.onHandleError}
      onKeyDown={props.onHandleEscape}
      tabIndex={-1}
      ref={escapeInput}
    />
  );
};

const ModalOverlay = (props) => {
  return (
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
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop
          onHandleError={props.onHandleError}
          onHandleEscape={props.onHandleEscape}
        />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onHandleError={props.onHandleError}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
