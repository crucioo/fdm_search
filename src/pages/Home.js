import Header from '../components/utils/Header';
import Footer from '../components/utils/Footer';
import HomeBody from '../components/home';
import React, { Component } from 'react';
require('../assets/font.css');
require('../assets/style.css');

class Home extends Component {
    render() {
    return (
    <div className="flexBody">
        <Header />
        <HomeBody />
        <Footer /> 
    </div>
    );
    }
   
}

export default Home;
