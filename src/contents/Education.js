import React, { Component } from 'react'
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Software Developers" where="Developer" from="2020" to="Present" />
                <Widecard title="Rajamangkala University" where="RMUTL" from="2012 - 2020" to="Present" />
            </div>

        )
    }
}

export default Education;