import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Home from './components/Home'
import Navigation from './components/Navigation';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffab40',
    },
    secondary: {
      main: '#dd2c00',
    }
  }
})

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <Navigation />
          <Switch>
            <Route exact path='/' Component={Home} />
          </Switch>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
