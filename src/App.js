import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Deals from './pages/Deals/Deals';
import Box from './pages/Box/Box';

class App extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className="App">
        <Router>
          <div className="layout-inner">
            <Switch>
              <Route exact path="/deals" component={Deals} />
              <Route exact path="/about" component={Box} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
