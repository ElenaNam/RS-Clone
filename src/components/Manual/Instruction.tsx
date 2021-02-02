/* import React from 'react';
import './Manual.module.css';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

export default function Instruction(): JSX.Element {
  return (
    <Container maxWidth="sm">
      <Typography paragraph>Пойди туда не знаю куда</Typography>
    </Container>
  );
} */

import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { Box } from '@material-ui/core';
import girl from '../../assets/images/girl.png';
import boy from '../../assets/images/boy.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {     
      /* display: 'flex',
      justifyContent: 'space-between', */
      maxWidth: 345,
      /* maxHeight: 600, */
      backgroundColor: '#e1f5fe',
    },
    headerCard: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    titleCard: {
      display: 'inline-flex',
      /* justifyContent: 'flex-start', */
      /* marginLeft: 30, */
      /* border: '1px solid OrangeRed', */
    },
    media: {
      width: '100%',
      backgroundSize: 'contain',      
      paddingTop: '56.25%', // 16:9
      /* border: '1px solid OrangeRed', */
    }, 
    avatar: {
      display: 'inline-flex',
      backgroundColor: 'transparent',
      color: 'red',
      border: '1px solid OrangeRed',
    },
  })
);

export default function Instruction() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>  
        <Box className={classes.headerCard}>
          <Avatar className={classes.avatar}>
            1
          </Avatar>      
        
          <Box component="h2" className={classes.titleCard}>
            Выбери героя
          </Box>
        </Box> 
        <Box className={classes.headerCard}>
          <CardMedia   
            className={classes.media}       
            component="div"
            image={girl}           
            title=""
          />
          <CardMedia   
            className={classes.media}       
            component="div"
            image={boy}           
            title=""
          />
        </Box>  


      </CardContent>    
       
    </Card>
  );
}
