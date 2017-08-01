import React, { Component } from 'react';

import './App.scss';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-inverse navbar-static-top">
              <a className="navbar-brand"> </a> <Link to="/">Beauty Boxx</Link>
              <ul className="nav navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Review">Submit a Review</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
              </ul>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default App;

