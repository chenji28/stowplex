import React, {Component} from 'react';

import logo from '../logo.png';
import logoText from '../logo_text.png';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { Link } from 'react-router'
import userImage from '../pages/ListingPage/img/joey.jpg'
import FacebookLogin from './Facebook';


const responseFacebook = (response) => {
	console.log(response);
	/*1088597931155576*/
}

class Header extends Component {
	constructor(props){
		super(props)
		let localLoggedIn = localStorage.getItem( 'localLoggedIn' ) || false;
		this.state = {
			isLoggedIn: localLoggedIn
		}
	}


    render() {
        return (
            <Navbar>
                <Navbar.Header>
										<Link to='/'>
											<img style={{margin: '5px 0', width: 50}} alt="Stowaway" src={logo}/>
										</Link> &nbsp;&nbsp;
										<Link to='/'>
											<img style={{margin: '5px 0', height: 20}} alt="Stowaway" src={logoText}/>
										</Link>
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
															alert('Log in succesfull!')
		                    		}} style={{padding: 0}}>
	                        	<a href="#" id="LoginWithAmazon">
														  <img style={{marginTop: -8, marginRight: -46}} border="0" alt="Login with Amazon"
														    src="https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_gold_156x32.png"
														    width="156" height="32" />
														</a>
	                        </NavItem>
													)
                    		: (
													<NavDropdown title={<img style={{ maxWidth: 35}} className="img-circle" src={userImage} alt=""/>}>

														<MenuItem onClick={(e)=>{
															this.setState({ isLoggedIn: !this.state.isLoggedIn})
															localStorage.setItem( 'localLoggedIn', !this.state.isLoggedIn);
														}}>Log out</MenuItem>
													</NavDropdown>
												)
                    	}
											<NavItem>
												<FacebookLogin
													appId="1835355423370996"
													autoLoad
													callback={responseFacebook}
													icon="fa-facebook"
												/>
											</NavItem>



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
