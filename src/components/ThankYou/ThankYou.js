import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

class ThankYou extends Component {
  render() {
    return (
      <div >
        <Paper elevation={3}>
          <h2>Thank you!</h2>
          <h4>Your feedback has been submitted.</h4>
        </Paper>
      </div>
    );
  }
}

export default ThankYou;