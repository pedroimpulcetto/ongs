import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Slide from "@material-ui/core/Slide";

import * as ActionsAlert from "../../store/modules/alert/actions";

function SlideTransition(props) {
  return <Slide {...props} direction="left" />;
}

export default function MyAlert() {
  const dispatch = useDispatch();
  const alert = useSelector(state => state.alert);

  function handleClose() {
    dispatch(ActionsAlert.close());
  }

  return (
    <Snackbar
      open={alert.open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      TransitionComponent={SlideTransition}
    >
      <Alert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity={alert.type}
      >
        {alert.msg}
      </Alert>
    </Snackbar>
  );
}
