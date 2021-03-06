import React, { Component } from 'react';
import request from 'axios'
import { Col, Row } from 'react-bootstrap'
import Ratings from './Ratings'

class HostBio extends Component {
  render() {
    const listing = this.props.listing
    return (
      <Row>
        <Col md={2} style={{textAlign: 'center', marginTop: 18}}>
          <label htmlFor="" style={{fontSize: 18, display: 'block'}}>{listing.hostName}</label>
          <img style={{maxWidth: '100%'}} src={listing.hostPicture} alt=""/>
        </Col>
        <Col md={10}>
          <Col md={10}>
            <h2>{listing.name}</h2>
            <span style={{marginRight: 15}}>{listing.address}</span>
            <Ratings />
            <Row>
              <Col md={12} style={{marginTop: 20, fontSize: 18}}>
                <label style={{display: 'block'}} htmlFor="" className="text-success"><span className='glyphicon glyphicon-ok-circle'></span> Government ID verified</label>
                <label style={{display: 'block'}} htmlFor="" className="text-success"><span className='glyphicon glyphicon-ok-circle'></span> Email verified</label>
                <label style={{display: 'block'}} htmlFor="" className="text-success"><span className='glyphicon glyphicon-ok-circle'></span> Telephone verified</label>
                <label style={{display: 'block'}} htmlFor="" className="text-success"><span className='glyphicon glyphicon-ok-circle'></span> Address verified</label>
              </Col>
            </Row>
          </Col>
          {
            localStorage.getItem( 'localLoggedIn' ) && listing.id !== 1 ?
            <Col md={2} style={{textAlign: 'right', padding: 0}}>
              <button style={{marginTop: 15}} className='btn btn-large btn-danger'>
                <span className="glyphicon glyphicon-pencil"></span> Edit listing
              </button>
            </Col> : ''
          }
        </Col>
      </Row>
    );
  }
}

export default HostBio;
