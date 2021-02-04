import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  link: {    
    color: theme.palette.text.primary,
    textDecoration: 'none',
    fontSize: 16,
  },
  titleDialog: {
    cursor: 'move', 
    color: theme.palette.primary.main,
    textAlign: 'center',
  },
  /*   paper: { 
    minHeight: '80vh',
    maxHeight: '80vh', 
  }, */
  content: {
    padding: 0,
  }

}));