import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  startPage: {
    marginTop: '100px',

    height: '80vh',
    display: 'flex',

    justifyContent: 'center',

    flexDirection: 'column',
    alignItems: 'center',
  },

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
  
  maleChoice: {
    display: 'flex',
    justifyContent: 'center',
  },

  genderItem: {

  },
  
  imgUser: {
    width: '100px',
  }
}));