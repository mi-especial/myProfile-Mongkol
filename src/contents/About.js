import React, { Component } from 'react';
import profile from '../img/Profile.jpg';

class About extends Component {
    render () {
        return (
            <div className="condiv about">
                <h1 className="subtopic">About Me</h1>
                <img
          src={profile}
          alt="profile"
          className="profile"
        />
                <h3>Hello, I'm Mongkol</h3>

                <p>Atque quae sunt molestiae. Amet sit tempore. Neque illo id soluta voluptas non sunt itaque aut et.</p>
            </div>


        )
    }
}
export default About;