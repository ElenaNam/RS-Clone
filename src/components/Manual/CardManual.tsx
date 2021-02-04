import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { 
      maxWidth: 400,   
      minWidth: 170,
      width: '100%', 
      background: 'linear-gradient(45deg, Moccasin 10%, BurlyWood 90%)',      
      margin: 20,  
      
    },
    headerCard: {
      display: 'flex',
      alignItems: 'center',  
    },
    titleCard: {
      display: 'inline-flex',
      marginLeft: 10,
      padding: 2,
      marginRight: 2,
      [theme.breakpoints.down('xs')]: {
        fontSize: 12,
      },
    },
    contentCard: {
      display: 'flex',
      alignItems: 'center',
    },
    media: {
      width: '100%',
      minWidth: '100%',
      backgroundSize: 'contain',      
      paddingTop: '56.25%', // 16:9
    }, 
    avatar: {
      display: 'inline-flex',
      backgroundColor: 'transparent',
      color: 'red',
      border: '1px solid OrangeRed',
    },
  })
);

interface MProps {
  number: string
  text: string
  img: string
  // eslint-disable-next-line react/require-default-props
  img1?: string
}

export default function CardManual(props: MProps) {
  const classes = useStyles();
  const { number, text, img, img1 } = props;
  return (
    <Card className={classes.root}>
      <CardContent>  
        <Box className={classes.headerCard}>
          <Avatar className={classes.avatar}>
            {number}
          </Avatar>        

          <Box
            className={classes.titleCard}                        
            fontFamily="fontFamily"
            fontWeight='bold'
            fontSize={{ xs: 14, sm: 16, md: 16, lg: 18 }}
            p={{ xs: 1, sm: 1, md: 1, lg: 1 }}
          >
            {text}
          </Box> 
        </Box> 
        <Box className={classes.contentCard}>
          <CardMedia   
            className={classes.media}       
            component="div"
            image={img}           
            title=""
          />
          <CardMedia   
            className={classes.media}       
            component="div"
            image={img1}           
            title=""
          />
        </Box>  
      </CardContent>         
    </Card>
  );
}