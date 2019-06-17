import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './containers/Dashboard';
import { screenWidth } from './utils/constants';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false,
    };

    this.handleSidebarToggle = this.handleSidebarToggle.bind(this);
  }

  handleSidebarToggle() {
    const { isToggled } = this.state;
    this.setState({ isToggled: !isToggled });
  }

  render() {
    const { isToggled } = this.state;

    return (
      <Router>
        <div className="App" style={screenWidth}>
          <Navbar setToggle={this.handleSidebarToggle} />
          <div className="navbar ui divider" style={screenWidth} />
          <Sidebar isToggled={isToggled} />
          <Route exact path="/dashboard" render={props => <Dashboard {...props} isToggled={isToggled} />} />
        </div>
      </Router>
    );
  }
}

export default App;
