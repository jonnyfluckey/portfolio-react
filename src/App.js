import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import ResponsiveDrawer from './Components/Shared/ResponsiveDrawer';
import BottomNavigation from './Components/Shared/BottomNavigation';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Splash from './Components/Splash';
import { CssBaseline } from '@material-ui/core';
import Home from './Components/Home';
import Contact from './Components/Contact';
import NoMatch from './Components/NoMatch';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#6d6d6d',
      main: '#181D26',
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
      <Router>
      <div>
      <ResponsiveDrawer  />
        <Switch>
        <Route exact path='/' component={Splash} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/contact' component={Contact} />
        <Route component={NoMatch} />
        </Switch>
      <BottomNavigation />
      </div>
      </Router>
      </MuiThemeProvider>
      </>
    );
  }
}

export default App;
