import React, { Component } from "react";
import { Jumbotron, Container, Button } from 'reactstrap';
import './Home.css'
 
class Home extends Component {
  render() {
    return (
      // <div className="fluid-container">
      //   <h2>Welcome, Galactic Polymaths!</h2>
      // </div>
      <div>
      <Jumbotron fluid>
        <h1>Welcome, Galactic Polymaths!</h1>
        <Button color="primary">Students</Button>
        <Button color="primary">Teachers</Button>
      </Jumbotron>
      </div>
    );
  }
}
 
export default Home;