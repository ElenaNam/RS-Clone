import React from 'react';
/* import Button from '@material-ui/core/Button'; */
import Dialog from '@material-ui/core/Dialog';
/* import DialogActions from '@material-ui/core/DialogActions'; */
import DialogContent from '@material-ui/core/DialogContent';
/* import DialogContentText from '@material-ui/core/DialogContentText'; */
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import { Link } from 'react-router-dom';
import Information from '../Information/Information';

function PaperComponent(props: PaperProps) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Link to='/information' onClick={handleClickOpen}>
        О разработчиках
      </Link>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          О разработчиках
        </DialogTitle>
        <DialogContent>
          <Information />
        </DialogContent>
      </Dialog>
    </div>
  );
}