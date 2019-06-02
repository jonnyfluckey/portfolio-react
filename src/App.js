import React, { Component } from 'react';
import './App.css';
import ReactGA from 'react-ga';
import {BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import ResponsiveDrawer from './Components/Shared/ResponsiveDrawer';
import BottomNavigation from './Components/Shared/BottomNavigation';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Splash from './Components/Splash';
import { CssBaseline } from '@material-ui/core';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Blog from './Components/Blog';
import NoMatch from './Components/NoMatch';
import BlogPost from './Components/BlogPost';


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
  ReactGA.initialize('UA-140679342-1');
  ReactGA.pageview('/homepage');
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
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/blog' component={Blog} />
        <Route path='/blog/:page' exact component={Blog} />
        <Route path='/blog/posts/:post' component={BlogPost} />
        <Route component={NoMatch} />
        </Switch>
      {/* <BottomNavigation /> */}
      </div>
      </Router>
      </MuiThemeProvider>
      </>
    );
  }
}

export default App;
