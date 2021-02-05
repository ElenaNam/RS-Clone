import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
    },

  },
  content: {
    alignSelf: 'flex-start',
    margin: 10,
    padding: '5px',
    background: 'linear-gradient(45deg, Peru 30%, SaddleBrown 80%)', 
  },
  paper: {
    margin: '10px 0 10px',
    padding: 10,

  },
  text: {
    margin: '5px 5px 15px 5px',
    /* fontSize: 16, */
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
    },
  },


}));