import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';

const style = {margin: 5};

class NavBar extends Component {
  render() {
    return (
      <AppBar title="Student Results" iconElementRight={
      <div>
      <FlatButton label="Welcome, John!">
      <Avatar
      color="{blue300}"
      backgroundColor="white"
      size={30}
      style={style} >A</Avatar>
      </FlatButton>
      </div>
      }/>
    );
  }
}

export default NavBar;
