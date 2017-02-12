import React, {Component} from 'react';

import logo from '../logo.svg';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { Link } from 'react-router'

class Header extends Component {
	constructor(props){
		super(props)
		let localLoggedIn = localStorage.getItem( 'localLoggedIn' ) || 1;
		this.state = {
			isLoggedIn: localLoggedIn || false
		}
	}
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
                        <NavItem href={!this.state.isLoggedIn ? '#' : '/listing/2'}>
                        	{
                        		!this.state.isLoggedIn 
                        		? 'Become a host'
                        		: 'Check your listing'
                        	}
                        </NavItem>
                        {
                    		!this.state.isLoggedIn 
                    		? (<NavItem onClick={(e)=>{ 
                    			this.setState({ isLoggedIn: !this.state.isLoggedIn})
                    			localStorage.setItem( 'localLoggedIn', !this.state.isLoggedIn); 
                    		}} style={{padding: 0}}>
	                        	<a href="#" id="LoginWithAmazon">
								  <img style={{marginTop: -8, marginRight: -46}} border="0" alt="Login with Amazon"
								    src="https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_gold_156x32.png"
								    width="156" height="32" />
								</a>
	                        </NavItem>)
                    		: 'Image'
                    	}
                        
                        <NavItem>
                        	<img src="" />
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
