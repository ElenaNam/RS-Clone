import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
  imgUser: {
    // width: '150px',
    // height: '200px',
    height: '15vw',
  },
  titleDialog: {
    textAlign: 'center',    
    fontWeight: 800,

  },
  avatar: {
    backgroundColor: 'blue[100]',
    color: 'blue[600]',
  },
  titleDialogInt: {
    position: 'relative',
    textAlign: 'center',
    whiteSpace: 'pre-line',

  },
  gin: {
    position: 'absolute',
    opacity: .4,
    width: 150,    
    [theme.breakpoints.up('sm')]: { 
      width: 200, 
    },    
  },
  tooltip: {
    fontSize: 40,

  },
}));