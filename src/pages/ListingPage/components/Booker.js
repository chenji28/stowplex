import React, {Component} from 'react';
import DatePicker from 'react-bootstrap-date-picker'
class Booker extends Component {
    constructor(props) {
      super(props)
      this.state = {
        hideCheckout: false
      }
    }
    render() {
        return (
          <div>
            <div style={{backgroundColor: 'black', color: 'white', padding: 10, fontSize: 18}}>
              ${this.props.listing.price}/month
            </div>
              <div style={{ border: '1px solid #ddd', padding: 15}}>
                <p>
                  <label htmlFor="">Check-in</label>
                  <DatePicker bsSize="medium"/>
                </p>
                {
                  !this.state.hideCheckout &&
                  <p>
                    <label htmlFor="">Check-out</label>
                    <DatePicker bsSize="medium"/>
                  </p>
                }

                <p>
                  <label htmlFor="ongoing">
                    <input type="checkbox" name='ongoing' onChange={(e) => {this.setState({hideCheckout: !this.state.hideCheckout}) }}/>&nbsp;
                    On going
                  </label>
                </p>
                <button style={{width: '100%'}} className="btn btn-large btn-danger">Request space</button>
              </div>
            </div>
        );
    }
}

export default Booker;
