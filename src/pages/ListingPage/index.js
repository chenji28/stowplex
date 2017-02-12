import React, { Component } from 'react';
import request from 'axios'
import HostBio from './components/HostBio'
import Booker from './components/Booker'
import { Col, Row } from 'react-bootstrap'
import GoogleMap from 'google-map-react'
import manImage from './img/man.jpg'
import joeyImage from './img/joey.jpg'
import joeyStorage from './img/joey_storage.png'
import matStorage from './img/mat_garage.jpg'
import {Grid} from 'react-bootstrap';

class ListingPage extends Component {
  constructor(props){
    super(props)
    console.log(manImage);
    this.listings = {
      1: {
        id: 1,
        hostName: 'Max',
        hostPicture: manImage,
        name: 'Available house basement close to Pike Place Market',
        image: matStorage,
        details: '',
        address: '1510 1st Ave, Seattle, USA',
        description: 'Abundant free space in my house basement really close to Pike Place Market, no exceptions for what you can store. Kajaks, tools, equipement, you got it! Feel free to contact me if you have any questions, you can find my contact information in the listing description',
        type: 'House',
        price: '100',
        location: {
          lat: 47.6091360,
          lng: -122.3400570
        },
        locationDescription: ''
      },
      2: {
        id: 2,
        hostName: 'Joey',
        hostPicture: joeyImage,
        name: 'Bright, light filled garage in the heart of Seattle.',
        image: joeyStorage,
        details: '',
        address: 'Ravenna Bullevard, U-District, Seattle',
        description: 'Close to public transportation with new paint and security system in place. New, quiet, and clean. This garage is absolutely terrific with ample natural light. Residential desirable neighborhood of Madison Valley. 5-10 mins away is Downtown Seattle.',
        type: 'Garage',
        price: '250',
        location: {
          lat: 47.6101360,
          lng: -122.3420570
        },
        locationDescription: '5-10 mins away is Downtown Seattle (Pikes Place Market, SAM museum, Seattle Art Museum, Space Needle, Experience Music Project, Ride the Ducks), Belltown (great bars and restaurants), the International District (Thai, Vietnamese, Chinese, Japanese food central), Madrona (cute shops and local eateries), and Madison Park (beach front, view of Rainier and east side) \n Within a 20 minute drive of: Mariners and Seahawks Stadiums, Woodland Park Zoo, Museum of Flight, The University of Washington, Boeing Field, Ferries to the Olympic Peninsula, The Ballard Locks, West Seattle, Alki Beach, SeaTac International Airport, Bellevue, and Redmond.'
      }
    }
    this.listing = this.listings[`${props.params.listingId}`]
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
        backgroundImage: `url(${this.listing.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        height: 400,
        marginTop: -18
      }
    }
    return (

      <div>
      <Grid fluid={true}>
        <div style={styles.heroImage} alt="" ></div>
        {/*div style={{ width: "100%", height: 370, backgroundPosition: 'center center', backgroundImage: `url(${ladies})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div*/}

        <div className="container" style={{backgroundColor: 'white'}}>
          <HostBio listing={this.listing} />
          <Row style={{marginTop: 30}}>
            <Col md={8}>
              <h3>Description of the storage</h3>
              <p className='display-linebreak'>{this.listing.description}</p>
              <ul>
                <li>
                  Property Type: {this.listing.type}
                </li>
                <li>
                  Approximate Size: 2 car garage
                </li>
                <li>
                  Check In: 11:00am
                </li>
              </ul>
              <hr/>
              <Row>
                <Col md={3}>
                  <h5 style={{margin: 0}}>Amenities</h5>
                </Col>
                <Col md={9}>
                  <ul>
                    <li>
                      24 hours key access pad
                    </li>
                    <li>
                      Temperature Controlled
                    </li>
                    <li>
                      Dry
                    </li>
                    <li>
                      Shelving available
                    </li>
                    <li>
                      Free pick up and delivery
                    </li>
                    <li>
                      Temperature Controlled
                    </li>
                    <li>
                      Security System
                    </li>
                  </ul>
                </Col>
              </Row>
              <hr/>
              <Row>
                <Col md={3}>
                  <h5 style={{margin: 0}}>Price</h5>
                </Col>
                <Col md={9}>
                  <ul>
                    <li>
                      ${this.listing.price}/month
                    </li>
                    <li>
                      $1300/6 months
                    </li>
                    <li>
                      $2600/12 months
                    </li>
                    <br/>
                    Notice Period: Strict (one month’s notice) <br/>
                    Cleaning Fee: $25 <br/>
                    Security Deposit: $250 <br/>
                  </ul>
                </Col>
              </Row>
              <hr/>
            </Col>
            <Col md={4}>
              <Booker listing={this.listing}/>
            </Col>
          </Row>
          <div style={{paddingTop: 0, height: 400}}>
            <h3>Location</h3>
            <p>{this.listing.hostName}'s space is located at {this.listing.address}</p>
            <p>{this.listing.locationDescription}</p>
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
        </Grid>
      </div>

    );
  }
}

export default ListingPage;
