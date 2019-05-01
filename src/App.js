import React, { Component } from 'react';
import './App.css';
import {Route, Switch } from 'react-router-dom';
import ResponsiveDrawer from './Components/Shared/ResponsiveDrawer';
import BottomNavigation from './Components/Shared/BottomNavigation';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Splash from './Components/Splash';
import { CssBaseline } from '@material-ui/core';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#6d6d6d',
      main: '#424242',
      dark: '#1b1b1b',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#b2fef7',
      main: '#80cbc4',
      dark: '#4f9a94',
      contrastText: '#000000',
    },
  },
});


class App extends Component {
  render() {
    return (
      <>
      <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveDrawer  />
      <Splash />
      <BottomNavigation />
      </MuiThemeProvider>
      </>
    );
  }
}

export default App;
