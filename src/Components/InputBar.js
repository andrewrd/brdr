import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';

const style = {margin: 5};

class InputBar extends Component {
  render() {
    return (
    <div class="inputForm" style={{margin:'20px'}}>
      <TextField hintText="Hint Text" />

      <TextField hintText="Hint Text" />

      <TextField hintText="Hint Text" />
     
      <TextField hintText="Hint Text" />       
    </div>
    );
  }
}

export default InputBar;
