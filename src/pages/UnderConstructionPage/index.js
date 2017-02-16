import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap'
import {Grid} from 'react-bootstrap';
import logo from '../../logo.png'

class UnderConstructionPage extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="wrapper">
      	<div className="abovebanner">
      			<div className="header">
              <img src={logo} alt=""/>
      				<h1 id="logo">StowPlex</h1>
      				<p className="line1">Site under construction!</p>
      			</div>

      			<div className="content">
      					<p style={{maxWidth: 700, margin: '0 auto'}}>Thanks for your interest in Stowplex! We are hard at work making this site amazing for you. Please add your email for launch updates. Check the box below if you're interested in being a host or a guest on our platform.</p>

      					<div className="form">
      						<div className="mainform">
      							<div className="field"><input type="text" placeholder='enter your email address'/></div>
      							<div className="submit"><input type="button" value="subscribe here" /></div>
      						</div>
      					</div>

      			</div>
            <div>
              I'm interested in be a:
            </div>
            <div>
              <label htmlFor="">
                <input type="checkbox" value=""/>&nbsp;
                host
              </label>
            </div>
            <div>
              <label htmlFor="">
                <input type="checkbox" value=""/>&nbsp;
                guest
              </label>
            </div>
      	</div>

      		<div className="belowbanner">
      			<div className="email">
      				<h2>email us</h2>
      				<p><a href="mailto:stowplex@gmail.com">stowplex@gmail.com</a></p>
      			</div>
      			<div className="social">
      				<h2>social</h2>
      					{/* <a href="#" className="socicon-facebook"></a> */}
                <a href="">Facebook</a>
      			</div>
      			<div className="call">
      				<h2>call us</h2>
      				<p>206-669-6902</p>
      			</div>
      		</div>
      </div>
    );
  }
}

export default UnderConstructionPage;
