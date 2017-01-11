import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import { Link } from 'react-router';

class login extends Component {

  render() {


    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                    <div className="App">
                      <AppBar zDepth="0"/>
          			<div className="container">
          			<br/>	
          			      <img src={logo} className="App-logo" alt="logo" />
          			      <h2> Welcome to Brdr </h2>
                        <Link to="/app">
                          <FlatButton  backgroundColor="white" label="Start"/> 
                        </Link>
      	             </div>
      	              <div className="container-2">

      	             </div>
                      </div>
      </MuiThemeProvider>    
    );
  }
}

export default login;
