import React, {Component} from 'react';
import boxes from '../../boxes.jpg';
import {Grid, Row, Col, PageHeader, Button, Glyphicon, FormControl} from 'react-bootstrap';
import {Typeahead} from 'react-bootstrap-typeahead';
let DatePicker = require('react-bootstrap-date-picker');

class HomePage extends Component {
    constructor(props){
    	super(props)
    	this.state = {
    		city: '',
    		size: '',
    		date: ''
    	}
    }
    cities = ['Seattle', 'Redmond', 'Bellevue', 'New-York', 'Los Angeles'];

    search() {
        location.href = '/search?city=' + this.state.city + '&size' + this.state.size + '&checkIn=' + this.state.date;
    }

    render() {
        return (
            <Grid>
                <img src={boxes} alt="Boxes" style={{ width: "100%" }}/>
                <PageHeader>Love your junk.<br/>
                    <small>Find place to dump it safely and cheaply.</small>
                </PageHeader>
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
                                        onClick={this.search}><Glyphicon
                        glyph="search"/>&nbsp;<span className="hidden-sm">Search</span></Button></Col>
                </Row>
            </Grid>
        );
    }
}

export default HomePage;
