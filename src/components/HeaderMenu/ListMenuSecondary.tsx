import React from 'react';
import { Switch, Route, Redirect, withRouter, NavLink } from 'react-router-dom'; 

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import DnsOutlinedIcon from '@material-ui/icons/DnsOutlined';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import logo from '../../assets/images/logo_rs.png';

import DialogInstruction from '../Dialog/DialogInstruction';
import DialogSettings from '../Dialog/DialogSettings';
import DialogInformation from '../Dialog/DialogInformation';


export function ListMenuSecondary(): JSX.Element {
  const theme = useTheme();
  const lang = 'ru'; 
  return (
    <List style={{padding: 0}}>
      <ListItem>           
        <ListItemIcon>
          <DnsOutlinedIcon
            style={{ color: 'DodgerBlue' }}
          />
        </ListItemIcon>
        <DialogInstruction /> 
      </ListItem>

      <ListItem>          
        <ListItemIcon>
          <SettingsOutlinedIcon
            style={{ color: theme.palette.secondary.light }}
          />
        </ListItemIcon>
        <DialogSettings />  
      </ListItem>

      <ListItem>            
        <ListItemIcon>
          <AssignmentOutlinedIcon
            style={{ color: theme.palette.warning.dark}}
          />
        </ListItemIcon>
        <DialogInformation />
      </ListItem> 

      {/*       <Switch>
        <Route exact path="/manual" component={withRouter(DialogInstruction)} />
        <Route exact path="/settings" component={withRouter(DialogSettings)} />
        <Route exact path="/information" component={withRouter(DialogInformation)} /> 
      </Switch> */}


      <Box mt={15}>
        <a href='https://rs.school/js/' target="_blank" rel='noreferrer'>
          <img src={logo} alt="logo_rsschool" width="60%" />
        </a>
      </Box>
      
    </List>
  );
}
