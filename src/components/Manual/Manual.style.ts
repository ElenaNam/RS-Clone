import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  text: {
    [theme.breakpoints.down('xs')]: {fontSize: 14}
  },
  card: {
    textAlign: 'center',
    marginTop: 30,
  },

}));