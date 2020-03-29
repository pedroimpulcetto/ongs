import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

import * as LoadingActions from "../../store/modules/loading/actions";

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));

export default function Loading() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading);

  const handleClose = () => {
    dispatch(LoadingActions.closeLoading());
  };

  return (
    <Backdrop className={classes.backdrop} open={loading} onClick={handleClose}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
