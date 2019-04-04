import Header from '../components/utils/Header';
import Footer from '../components/utils/Footer';
import HomeBody from '../components/home';
import React, { Component } from 'react';
import { Route  } from 'react-router-dom';
require('../assets/font.css');
require('../assets/style.css');

class Home extends Component {
    render() {
        return (
        <div className="flexBody">
            <Route component={Header}  />
            <Route component={HomeBody} />
            <Route component={Footer} />
        </div>
        );
    }
}

export default Home;
