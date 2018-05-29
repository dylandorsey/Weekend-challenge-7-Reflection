import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class ThankYou extends Component {
  render() {
    return (
      <div className="progressIndicator">
        <Paper elevation={3}>
        <Typography variant="title">Thank you!</Typography>
        <Typography variant="subheading">Your feedback has been submitted.</Typography>
        </Paper>
      </div>
    );
  }
}

export default ThankYou;