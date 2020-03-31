import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p> <h1>Contact Me</h1></p>
        <div>
        <form action="/action_page.php">
        <label> First Name </label>
        <input type="text" id="fname" name="firstname"placeholder="Your Name.."/>
        <label>Last Name</label>
        <input type="text"id="lname" name="lastname" placeholder="Your last name.."/>
    <label>Contact Number</label> 

  <input type="text" id="Contact"name="contact"placeholder="Your Contact Number"/>
     
  <label>Email</label> 
  <input type="email"id="email"name="email"placeholder="Your email"/>
   <label>City</label> 
  <input type="text"id="city"name="city"placeholder="Your City"/>
  <label>Subject</label>
  <textarea id="subject"name="subject"placeholder="Write something.."></textarea>
  <input type="submit"value="Submit"/>
</form>
</div>

      </div>
    );
  }
}

export default App;
