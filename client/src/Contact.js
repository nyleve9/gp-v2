import React, { Component } from "react";
import './Contact.css';
 
class Contact extends Component {
  render() {
    return (
      <div className="fluid-container" id="contactpage">
        <h2>GOT QUESTIONS?</h2>
        <p>For now, the best thing might be to look for answers here :
        <a href="https://duckduckgo.com/">The Internet</a>.
        </p>
      </div>
    );
  }
}
 
export default Contact;