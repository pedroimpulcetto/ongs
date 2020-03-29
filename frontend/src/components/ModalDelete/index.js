import React from "react";
import "./style.css";

import DialogActions from "../Dialog/DialogActions";
import DialogContent from "../Dialog/DialogContent";
import DialogTitle from "../Dialog/DialogTitle";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

export default function ModalDelete(props) {
  let { toggle, onSave, record } = props;

  return (
    <div>
      <Dialog
        style={{
          display: "grid",
          justifyContent: "center",
          alignContent: "flex-start"
        }}
        fullWidth={true}
        maxWidth="sm"
        onClose={toggle}
        open={true}
      >
        <DialogTitle onClose={toggle} className="title-modal-delete">
          Alerta!
        </DialogTitle>
        <DialogContent
          dividers
          className="div-input-modal-integration text-confirm-delete"
        >
          Voce tem certeza que deseja excluir esse caso?
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => onSave(record)}
            variant="contained"
            className="button-success"
          >
            Confirm
          </Button>
          <Button
            variant="contained"
            className="button-cancel"
            onClick={toggle}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
