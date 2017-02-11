import React, {Component} from 'react';

import {Grid, Row, Col} from 'react-bootstrap';

class HomePage extends Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col pullRight xs={10} xsOffset={1} smOffset={2} mdOffset={2} lgOffset={2} sm={4} lg={4}
                         md={4}><input style={{ width: "100%" }} type="text" placeholder="City"/></Col>
                    <Col xsHidden={true} sm={2} lg={2} md={2}><input style={{ width: "100%" }} type="text"
                                                                     placeholder="Check In"/></Col>
                    <Col xsHidden={true} sm={2} lg={2} md={2}><input style={{ width: "100%" }} type="text"
                                                                     placeholder="Space"/></Col>
                </Row>
            </Grid>
        );
    }
}

export default HomePage;
