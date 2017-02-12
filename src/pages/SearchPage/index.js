import React, {Component} from 'react';

class SearchPage extends Component {

    render() {
        var city = this.props.location.query.city;
        var size = this.props.location.query.size;
        var date = this.props.location.query.date;
        return (
            <div>
                City: {city}
                Size: {size}
                Date: {date}
            </div>
        );
    }
}

export default SearchPage;
