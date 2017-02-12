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
          <label htmlFor="" style={{display: 'block'}}>{listing.hostName}</label>
          <img style={{maxWidth: '100%'}} src={listing.hostPicture} alt=""/>
        </Col>
        <Col md={10}>
          <h2>{listing.name}</h2>
          <span style={{marginRight: 15}}>{listing.address}</span>
          <Ratings />
          <div>

          </div>
        </Col>
      </Row>
    );
  }
}

export default HostBio;
