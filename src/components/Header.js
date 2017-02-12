import React, {Component} from 'react';

import logo from '../logo.svg';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <img alt="Stowaway" src={logo}/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem>Become a host</NavItem>
                        <NavItem>Sign in</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
