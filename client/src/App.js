import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Route, NavLink, HashRouter } from 'react-router-dom';
// import Navbar from './Components/Layout/Navbar';
// import Footer from './Components/Layout/Footer';
// import Home from './Components/Layout/Home';
// import Social from './Components/social/Social';
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
      // <Router>
      //   <div className="container">
      //     {/* <Navbar />
      //     <Route exact path="/" component={Home} />
      //     <Route exact path="/social" component={Social} />
      //     <Footer /> */}
      //     <RenderedChart />
      //   </div>
      // </Router>
      <Router>
        <div className="container">
          <h1>Galactic Polymath</h1>
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