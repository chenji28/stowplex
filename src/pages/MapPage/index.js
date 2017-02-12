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

	    zoom: 9,
	    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
	};
    render() {
        return (
           <Grid>

            <div style={{height: 600}}>
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
