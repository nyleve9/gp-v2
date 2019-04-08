import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import RenderedChart from './RenderedChart';
import DrawTreeChart from './DrawTreeChart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.connectToServer = this.connectToServer.bind(this);
  }

  connectToServer() {
    fetch('/');
  }

  componentDidMount() {
    this.connectToServer();
  }

  render() {
    return (
      <Router>
        <div className="fluid-container">
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/jobverse">Jobverse</NavLink></li>
            <li><NavLink to="/charts">Charts</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/jobverse" component={DrawTreeChart}/>
            <Route path="/charts" component={RenderedChart}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;