import React, { Component } from 'react';
import request from 'axios'

class HostPage extends Component {
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
    return (
        <h1>HostPage</h1>
    );
  }
}

export default HostPage;
