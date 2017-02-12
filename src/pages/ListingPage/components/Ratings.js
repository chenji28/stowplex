import React, { Component } from 'react';
import './Ratings.css'

class Raitings extends Component {
  render() {
    return (
      <span style={{fontSize: '16px'}}>
        <span className="glyphicon glyphicon-star Ratings-star"></span>
        <span className="glyphicon glyphicon-star Ratings-star"></span>
        <span className="glyphicon glyphicon-star Ratings-star"></span>
        <span className="glyphicon glyphicon-star Ratings-star"></span>
        <span className="glyphicon glyphicon-star-empty Ratings-star"></span>
      </span>
    );
  }
}

export default Raitings;
