import React, { Component } from "react";
import Social from "../components/Social";
import profile from "../img/Profile.jpg";
import ReactTypingEffect from 'react-typing-effect';

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <h1 className="subtopic">Home Page</h1>
        <img
          src={profile}
          alt="profile"
          className="profile"
        />
        <ReactTypingEffect text={['I am Mongkol Chaiwat.' , 'I am developer.']} speed={80} className="typingeffect" />
        <Social />
        
      </div>
    );
  }
}

export default Home;
