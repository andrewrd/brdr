import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Charts from './Charts';

class ChartCard extends Component {
  render() {


    return (
    <Card>
      <CardHeader
      title="Result Graphs and Trends"
      subtitle="Click to expand"
      actAsExpander={true}
      showExpandableButton={true}
      />
      <CardActions>
      </CardActions>
      <CardText expandable={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.<br/><br/>
      <Charts data={this.props.data}/>
      </CardText>
    </Card> 
    );
  }
}

export default ChartCard;
