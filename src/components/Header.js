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
                        <NavItem> <a href="#">Become a host</a> </NavItem>
                        <NavItem> <a href="#">Sign in</a> </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
