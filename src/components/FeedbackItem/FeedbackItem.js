import React, { Component } from 'react';
import Moment from 'react-moment';
import axios from 'axios';

class OrderItem extends Component {

  render() {
    return (
      <tr>
        <td>{this.props.item._id}</td>
  
        <td>{this.props.item.feeling}</td>
        <td>{this.props.item.understanding}</td>
        <td>{this.props.item.support}</td>
        <td>{this.props.item.comments}</td>
        <td>{this.props.item.flagged}</td>
        <td><Moment format="YYYY-MM-DD">{this.props.item.date}</Moment></td>

        <td><button onClick={() => {this.props.delete(this.props.item._id)}}>Delete</button></td>
      </tr>
    )
  }
}

export default OrderItem;