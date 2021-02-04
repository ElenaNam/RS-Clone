import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
  text: {
    marginBottom: 20,
    [theme.breakpoints.down('xs')]: {fontSize: 14},
  },
}));