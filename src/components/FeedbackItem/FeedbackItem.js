import React, { Component } from 'react';
import Moment from 'react-moment';
import ButtonDelete from '../ButtonDelete/ButtonDelete';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class OrderItem extends Component {

  render() {
    return (
      <TableRow>
        <TableCell>{this.props.item.id}</TableCell>

        <TableCell>{this.props.item.feeling}</TableCell>
        <TableCell>{this.props.item.understanding}</TableCell>
        <TableCell>{this.props.item.support}</TableCell>
        <TableCell>{this.props.item.comments}</TableCell>
        <TableCell>{this.props.item.flagged}</TableCell>
        <TableCell><Moment format="YYYY-MM-DD">{this.props.item.date}</Moment></TableCell>
        <TableCell><ButtonDelete onClick={() => {this.props.delete(this.props.item.id)}} /></TableCell>
      </TableRow>
    )
  }
}

export default OrderItem;