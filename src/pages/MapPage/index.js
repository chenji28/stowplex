import React, {Component} from 'react';
import GoogleMap from 'google-map-react'

import {Grid, Row, Col, PageHeader, Button, Glyphicon, FormControl} from 'react-bootstrap';
import {Typeahead} from 'react-bootstrap-typeahead';
let DatePicker = require('react-bootstrap-date-picker');

class MapPage extends Component {
	static defaultProps = {
	    center: {lat: 47.6101360, lng: -122.3420570},
	    neigh1: {lat: 47.6091360, lng: -122.3400570},
	    neigh2: {lat: 47.6141360, lng: -122.3390570},
	    neigh3: {lat: 47.6121360, lng: -122.3440870},
	    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
	};
  constructor(props){
    super(props)
    this.state = {
      city: '',
      size: '',
      date: ''
    }
  }
  cities = ['Seattle', 'Redmond', 'Bellevue', 'New-York', 'Los Angeles'];
    render() {
        return (
           <Grid>

             <Row>
                 <Col className="nopadding-right" xs={9} smOffset={1} lgOffset={1} mdOffset={1} sm={4} lg={4}
                      md={4}>
                     <Typeahead options={this.cities} bsSize="large" placeholder="City" style={{ width: "100%" }}
                                onChange={(e) => {
                                    this.setState({ city: e.target.value })
                                }} value={this.state.city}/>
                 </Col>
                 <Col className="nopadding" xsHidden={true} sm={2} lg={2} md={2}>
                     <DatePicker bsSize="large" style={{ width: "100%" }}
                                 className="input-lg" onChange={(e) => {
                         this.setState({ date: e.target.value })
                     }} value={this.state.date}/>
                 </Col>
                 <Col className="nopadding" xsHidden={true} sm={2} lg={2} md={2}>
                     <FormControl componentClass="select" placeholder="select" bsSize="large" className="input-lg"
                                  style={{ width: "100%" }} onChange={(e) => {
                         this.setState({ size: e.target.value })
                     }} value={this.state.size}>
                         <option value="sm">Size</option>
                         <option value="sm">0-100 sqft.</option>
                         <option value="md">100-300 sqft.</option>
                         <option value="lg">300-1000 sqft.</option>
                     </FormControl>
                 </Col>
                 <Col xs={3} sm={2} lg={2}
                      md={2}><Button bsStyle="primary" bsSize="large" style={{ width: "100%" }}
                                     ><Glyphicon
                     glyph="search"/>&nbsp;<span className="hidden-sm">Search</span></Button>
                 </Col>
             </Row>

            <div style={{marginTop: 18, height: 600}}>
                  <GoogleMap
                    bootstrapURLKeys={{
                      key: 'AIzaSyAxDKJ3r8J6Fnal3vSFuWyXEvv-nydofx0',
                    }}
                    defaultCenter={this.props.center}
                    defaultZoom={16} >
                    <span {...this.props.center}
      								onClick={(e)=>{location.href = '/listing/2'}}
                      className="glyphicon glyphicon-map-marker"
                      style={{cursor: 'pointer', fontSize: 40, color: '#d9230f', textShadow: '1px 2px 0 #eee'}}>
                    </span>
                    <span {...this.props.neigh1}
                      onClick={(e)=>{location.href = '/listing/1'}}
                      className="glyphicon glyphicon-map-marker"
                      style={{cursor: 'pointer', fontSize: 40, color: '#33AFFF', textShadow: '1px 2px 0 #eee'}}>
                    </span>
                    <span {...this.props.neigh2}
                      onClick={(e)=>{location.href = '/listing/1'}}
                      className="glyphicon glyphicon-map-marker"
                      style={{cursor: 'pointer', fontSize: 40, color: '#33AFFF', textShadow: '1px 2px 0 #eee'}}>
                    </span>
                    <span {...this.props.neigh3}
                      onClick={(e)=>{location.href = '/listing/1'}}
                      className="glyphicon glyphicon-map-marker"
                      style={{cursor: 'pointer', fontSize: 40, color: '#33AFFF', textShadow: '1px 2px 0 #eee'}}>
                    </span>
                  </GoogleMap>
              </div>
            </Grid>
        );
    }
}

export default MapPage;
