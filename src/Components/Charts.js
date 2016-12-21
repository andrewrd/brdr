import React, { Component } from 'react';
import {BarChart, Bar, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";

class Charts extends Component {
  render() {


    return (
      <BarChart width={600} height={300} data={this.props.data}
      margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <ReferenceLine y={0} stroke='#000'/>
       <Bar dataKey="attempts" fill="#8884d8" />
       <Bar dataKey="score" fill="#82ca9d" />
      </BarChart>
    );
  }
}

export default Charts;
