import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  startPage: {
    /* marginTop: '100px', */
    /* marginTop: 30, */
    [theme.breakpoints.down('md')]: { 
      marginTop: 100,
    },

    height: '80vh',
    display: 'flex',

    justifyContent: 'center',

    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    marginBottom: 20,
    /* background: 'linear-gradient(45deg, Peru 30%, SaddleBrown 80%)', */
    background: 'linear-gradient(45deg, Moccasin 10%, BurlyWood 90%)', 
    

  },
  paperInner: {
    position: 'relative',
    marginTop: 80,
    marginBottom: 20,
    /* background: 'linear-gradient(45deg, Peru 30%, SaddleBrown 80%)', */
    /* background: 'linear-gradient(45deg, Moccasin 10%, BurlyWood 90%)',  */
    verticalAlign: 'middle',    

  },

  startNewGame: {   
    padding: '0',
    marginBottom: '16px',
    listStyleType: 'none',
  },

  messagesWrapper: {
    /* display: 'flex', */
    /* justify-content: center; */
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,    
  },
  
  greetingMessage: {
    padding: '5px',  
    flex: '0 0 auto',
    margin: '20px auto 0',    
  },
  
  maleChoice: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 30,
  },

  genderItem: {


  },
  
  imgUser: {
    width: '100px',
  },
  gin: {
    position: 'absolute',
    width: 150,    
    [theme.breakpoints.up('sm')]: { 
      width: 200, 
    },
    
  },
}));