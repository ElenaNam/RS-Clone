import React from 'react';
/* import Button from '@material-ui/core/Button'; */
import Dialog from '@material-ui/core/Dialog';
/* import DialogActions from '@material-ui/core/DialogActions'; */
import DialogContent from '@material-ui/core/DialogContent';
/* import DialogContentText from '@material-ui/core/DialogContentText'; */
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper, { PaperProps } from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { useStyles } from './Dialog.style';
import { links } from '../data/menu';
import Manual from '../Manual/Manual';

import { AppState, GameState, Gender, Lang } from '../../store/types';

function PaperComponent(props: PaperProps) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}


export interface DialogInstructionProps {
  lang?: Lang;
}


const DialogInstruction = ( props: DialogInstructionProps ) => {
  const { lang = 'ru' } = props;
  // const lang = 'ru';

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <NavLink 
        to={links[3].link} 
        onClick={handleClickOpen} 
        exact
        /* activeStyle={{ color: '#1565c0' }}   */       
        className={classes.link} 
      >
        {links[3][lang]}
      </NavLink>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        fullWidth={true}
        maxWidth="md"
        
      >
        <DialogTitle className={classes.titleDialog} id="draggable-dialog-title">
          {links[3][lang]}
        </DialogTitle>
        <DialogContent>
          <Manual />
        </DialogContent>
      </Dialog>
    </div>
  );
};


const mapStateToProps = (state: AppState) => ({
  lang: state.game.lang,
});

export default connect(mapStateToProps, null)(DialogInstruction);