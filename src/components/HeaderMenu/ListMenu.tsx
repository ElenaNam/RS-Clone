import React from 'react';
import { Switch, Route, Redirect, withRouter, NavLink } from 'react-router-dom'; 

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SentimentVerySatisfiedOutlinedIcon from '@material-ui/icons/SentimentVerySatisfiedOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';

import logo from '../../assets/images/logo_rs.png';
import DraggableDialog from '../Dialog/Dialog';

import { Links, links } from '../data/menu';
import { Lang, AppState } from '../../store/types';

import { setLanguage, restartGame } from '../../store/actions/startNewGameAction';

const gameLinks = links.slice(0, 3);

export interface ListMenuProps {
  lang: Lang;
  setLanguage: (lang: Lang) => void;
  restartGame: () => void;
}

const ListMenu = (props: ListMenuProps) => {
  const theme = useTheme();
  const { lang } = props;
  // const lang = 'ru'; 

  const handleMenuEl = (buttonName: string) => {
    if (buttonName === 'New Game') {
      props.restartGame();
    }
    console.log('кнопка меню нажата', buttonName);
  };

  const setIcon = (value: number): React.ReactNode => {
    if (value === 0) return (<HomeOutlinedIcon
      style={{ color: 'DarkOrange' }}
    />);
    if (value === 1) return (<SentimentVerySatisfiedOutlinedIcon
      style={{ color: 'Tomato'}}
    />);
    if (value === 2) return (<SendOutlinedIcon
      style={{ color: 'lime' }}
    />
    );
    return null;
  };

  return (
    <List style={{padding: 0}}>
      {gameLinks.map((item: Links, index: number) => (
        <ListItem
          button
          key={item.id}
          component={NavLink}
          exact
          to={item.link}
          /* activeStyle={{ color: '#1565c0' }}   */        
          onClick={()=>{handleMenuEl(item.en);}}
        >
          <ListItemIcon>
            { setIcon(index) }
          </ListItemIcon>
          <ListItemText primary={item[lang]} />
        </ListItem>
      ))}       
    </List>
  );
};

const mapStateToProps = (state: AppState) => ({
  lang: state.game.lang,
});

const mapDispatchToProps = {
  setLanguage,
  restartGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMenu);