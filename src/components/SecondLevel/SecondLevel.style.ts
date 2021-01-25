import { makeStyles } from '@material-ui/core/styles';
import backgoundImg from '../../assets/images/locations/city.jpg';

export const useStyles = makeStyles(() => ({
  pageWrapper: {
    margin: '0 auto',
    padding: '0',
    // marginBottom: '16px',
    listStyleType: 'none',
    backgroundImage: `url(${backgoundImg})`,
    // backgroundColor: 'yellow',
    // maxWidth: '1024px',
    // height: '576px',
    backgroundSize: 'cover',
    // height: '200px',

    height: 'calc(100vh - 120px)',
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
  },



  // personsBlock: {
  //   display: 'flex',
  // }
}));