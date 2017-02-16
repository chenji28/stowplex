import React, {Component} from 'react';

import Header from './components/Header.js'
import Footer from './components/Footer.js'

import './App.css'

class App extends Component {
    render() {
        return (
            <div>
                {/* <Header /> */}
                  {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default App;
