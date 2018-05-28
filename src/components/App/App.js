import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';

// page components
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Admin from '../Admin/Admin';
import ThankYou from '../ThankYou/ThankYou';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Route exact path="/" component={Feeling} />
        <Route exact path="/understanding" component={Understanding} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/comments" component={Comments} />
        <Route exact path="/thank_you" component={ThankYou} />
        <Route exact path="/admin" component={Admin} />
      </div>
      </Router>
    );
  }
}

export default connect()(App);
