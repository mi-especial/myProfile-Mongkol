import React, { Component } from 'react';
import NavItems from './NavItems';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive' : ''
        }
    }

    activeitem = (item) => {
        if (this.state.NavItemActive.length) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({ 'NavItemActive' : item }, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        })
    }

    render() {
        return (
            <nav>
                <ul>
                    <NavItems item ="Home" tolink="/" activenav={this.activeitem}></NavItems>
                    <NavItems item ="About" tolink="/about" activenav={this.activeitem}></NavItems>
                    <NavItems item ="Education" tolink="/education" activenav={this.activeitem}></NavItems>
                    <NavItems item ="Skills" tolink="/skills" activenav={this.activeitem}></NavItems>
                    <NavItems item ="Contact" tolink="/contact" activenav={this.activeitem}></NavItems>
                </ul>
            </nav>
        )
    }
}

export default Navbar;