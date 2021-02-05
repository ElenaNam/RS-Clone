import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles(() => ({
  imgBlock: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  
  imgUser: {
    width: '20vw',
    // height: '200px',
    alignSelf: 'flex-end',
  },

  avatar: {
    backgroundColor: 'blue[100]',
    color: 'blue[600]',
  },
}));