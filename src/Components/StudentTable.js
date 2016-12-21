import React, { Component } from 'react';
import {Table, TableRowColumn, TableHeader, TableRow, TableBody, TableHeaderColumn} from 'material-ui/Table';

class StudentTable extends Component {
  render() {


    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Score</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>John Smith</TableRowColumn>
            <TableRowColumn>8</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>2</TableRowColumn>
            <TableRowColumn>Randal White</TableRowColumn>
            <TableRowColumn>6</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>3</TableRowColumn>
            <TableRowColumn>Stephanie Sanders</TableRowColumn>
            <TableRowColumn>5</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>4</TableRowColumn>
            <TableRowColumn>Steve Brown</TableRowColumn>
            <TableRowColumn>8</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

export default StudentTable;
