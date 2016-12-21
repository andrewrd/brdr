import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import GoogleLogin from 'react-google-login';

import { Link } from 'react-router';
const responseGoogle = (response) => {
  console.log(response);
}
class login extends Component {
  render() {


    return (
<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
              <div className="App">
                <AppBar zDepth="0"/>
    			<div className="container">
    			<br/>	
    			      <img src={logo} className="App-logo" alt="logo" />
    			      <h2> Welcome to Scoreboardr </h2>
	                  <GoogleLogin
                          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                          buttonText="Login with your OneID"
                          onSuccess={this.context.router.transitionTo(`/app`)}
                          onFailure={console.log('please login ')}
                        />
	                  <br/>
	             </div>
	              <div className="container-2">

	             </div>
                </div>
</MuiThemeProvider>    
    );
  }
}

export default login;

login.contextTypes = {
  router: React.PropTypes.object
}