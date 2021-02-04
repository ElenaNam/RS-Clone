import React from 'react';
import { Switch, Route, Redirect, withRouter, NavLink } from 'react-router-dom'; 

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import logo from '../../assets/images/logo_rs.png';
import DraggableDialog from '../Dialog/Dialog';

import { Links, links } from '../data/menu';
import { Lang, AppState } from '../../store/types';

import { setLanguage, restartGame } from '../../store/actions/startNewGameAction';

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

  return (
    <List>
      {links.map((item: Links, index: number) => (
        <ListItem
          button
          key={item.id}
          component={NavLink}
          exact
          to={item.link}
          activeStyle={{ color: '#1565c0' }}
          onClick={()=>{handleMenuEl(item.en);}}
        >
          <ListItemIcon>
            {index % 2 === 0 ? (
              <DoneOutlineRoundedIcon
                style={{ color: theme.palette.warning.light }}
              />
            ) : (
              <DoneOutlineRoundedIcon
                style={{ color: theme.palette.error.main }}
              />
            )}
          </ListItemIcon>
          <ListItemText primary={item[lang]} />
        </ListItem>
      ))}
      <ListItem>
        <DraggableDialog />
      </ListItem>
      <Box mt={15}>
        <a href='https://rs.school/js/' target="_blank" rel='noreferrer'>
          <img src={logo} alt="logo_rsschool" width="60%" />
        </a>
      </Box>
      <Route exact path="/information" component={withRouter(DraggableDialog)} /> 
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