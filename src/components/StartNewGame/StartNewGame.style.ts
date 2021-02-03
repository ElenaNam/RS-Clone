import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  startNewGame: {
    padding: '0',
    marginBottom: '16px',
    listStyleType: 'none',
  },

  messagesWrapper: {
    display: 'flex',
    /* justify-content: center; */
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  greetingMessage: {
    border: '1px solid black',
    padding: '5px',
    backgroundColor: 'yellow',
  
    flex: '0 0 auto',
  },
  
  maleСhoice: {
    display: 'flex',
    justifyContent: 'center',
  },
  
  imgUser: {
    width: '100px',
  }
}));