import React, { Component } from 'react';
import request from 'axios'
import HostBio from './components/HostBio'
import { Col, Row } from 'react-bootstrap'
import GoogleMap from 'google-map-react';

class ListingPage extends Component {
  constructor(props){
    super(props)

    this.listing = {
      hostName: 'Joey Hawkins',
      hostPicture: 'https://httpbin.org/image/png',
      name: 'Available house basement close to Ravenna Park',
      details: '',
      address: 'Ravenna Bullevard, U-District, Seattle',
      description: 'Abundant free space in my house basement really close to Ravenna Park, no exceptions for what you can store. Kajaks, tools, equipement, you got it! Feel free to contact me if you have any questions, you can find my contact information in the listing description',
      type: 'House',
      location: {
        lat: 47.6738346,
        lng: -122.3075649
      }
    }
  }
  componentWillMount(){
    request
      .get('https://httpbin.org/get')
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    const styles = {
      heroImage: {
        backgroundImage: 'url(http://betterhouseinc.com/wp-content/uploads/2013/03/Finished-Basements1.jpg)',
        backgroundRepaet: 'no-repeat',
        backgroundPosition: 'center',
        height: 400,
        marginTop: -18
      }
    }
    return (
      <div>
        <div style={styles.heroImage} alt="" ></div>
        <div className="container" style={{backgroundColor: 'white'}}>
          <HostBio listing={this.listing}/>
          <Row style={{marginTop: 30}}>
            <Col md={8}>
              <h3>About the space</h3>
              <Row>
                <Col md={1}>
                  <h4>{this.listing.type}</h4>
                </Col>
                <Col md={9} style={{marginTop: 9, fontSize: 16}}>
                  <span>12ft</span> x
                  <span>12ft</span> x
                  <span>12ft</span>
                </Col>
              </Row>
              <p className='display-linebreak'>{this.listing.description}</p>
            </Col>
          </Row>
          <div style={{paddingTop: 0, height: 400}}>
            <h3>Location</h3>
            <p>{this.listing.hostName}'s space is located at {this.listing.address}</p>
            <GoogleMap
              bootstrapURLKeys={{
                key: 'AIzaSyAxDKJ3r8J6Fnal3vSFuWyXEvv-nydofx0',
              }}
              defaultCenter={{...this.listing.location}}
              defaultZoom={16} >
              <span {...this.listing.location}
                className="glyphicon glyphicon-map-marker"
                style={{fontSize: 40, color: '#d9230f', textShadow: '1px 2px 0 #eee'}}>
              </span>
            </GoogleMap>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingPage;
