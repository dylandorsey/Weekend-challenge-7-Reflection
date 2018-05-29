import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';

// style imports
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import Typography from '@material-ui/core/Typography';


// page components
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Admin from '../Admin/Admin';
import ThankYou from '../ThankYou/ThankYou';

const myTheme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: grey,
    error: red,
    constrastThreshold: 3,
    tonalOffset: 0.2,
  }
});

const styles = {
  jumbotron: {
    backgroundColor: teal,

  },
  root: {
    width: '100%',
    madWidth: 500,
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={myTheme}>
          <div className="App-header">
            <Typography variant="headline">Feedback</Typography>
            <Typography variant="subheading">Give it on the daily!</Typography>
          </div>
          <Router>
            <div>
              <Route exact path="/" component={Feeling} />
              <Route exact path="/understanding" component={Understanding} />
              <Route exact path="/support" component={Support} />
              <Route exact path="/comments" component={Comments} />
              <Route exact path="/thank_you" component={ThankYou} />
              <Route exact path="/admin" component={Admin} />
            </div>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default connect()(App);
