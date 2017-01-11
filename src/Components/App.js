import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import StudentTable from './StudentTable'
import NavBar from './NavBar';
import Charts from './Charts';

import './App.css';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';


const insert = [
      {name: 'John Doe 1', attempts: 400, score: 200, amt: 200},
      {name: 'John Doe 2', attempts: 300, score: 198, amt: 210},
      {name: 'John Doe 3', attempts: 20, score: 50, amt: 290},
      {name: 'John Doe 4', attempts: 278, score: 38, amt: 200},
      {name: 'John Doe 5', attempts: 190, score: 40, amt: 181},
      {name: 'John Doe 6', attempts: 290, score: 300, amt: 500},
      {name: 'John Doe 7', attempts: 340, score: 430, amt: 200},
];
const initial  = [
      {name: 'John Doe 8', attempts: 4000, score: 2400, amt: 240},
      {name: 'John Doe 9', attempts: 3000, score: 998, amt: 2210},
      {name: 'John Doe 10', attempts: 9807, score: 9800, amt: 220},
      {name: 'John Doe 11', attempts: 7800, score: 398, amt: 200},
      {name: 'John Doe 12', attempts: 1200, score: 4800, amt: 2181},
      {name: 'John Doe 13', attempts: 2300, score: 3900, amt: 290},
      {name: 'John Doe 14', attempts: 9090, score: 4300, amt: 2100},
];
injectTapEventPlugin();

class App extends Component {

  constructor(){
    super()
    this.loadSamples = this.loadSamples.bind(this);
    this.state = {
      data:  initial,
    };
  }

  loadSamples(){
    this.setState({
      data: insert
    })
  }

  insertScores(key){
    const data = {...this.state.data};
    data[key] = data[key + 1] || 1;
    this.setState({ data: data })
  }

  updateScores(){

  }

  deleteScores(){

  }
  render() {


    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div className="App">
          <NavBar/>
          <div className="App-intro">
            <Charts data={this.state.data}/>
            <StudentTable />
            <FlatButton onClick={() => (this.loadSamples())} backgroundColor="rgb(0, 188, 212)" label="Populate your graphs"/> 
          </div>
        </div>
      </MuiThemeProvider>    
  );
  }
}

export default App;
