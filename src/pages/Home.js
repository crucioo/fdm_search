import Header from '../components/utils/Header';
import Footer from '../components/utils/Footer';
import HomeList from '../components/home/HomeList';
import React, { Component } from 'react';
require('../assets/style.css');

class Home extends Component {
    render() {
    return (
    <div className="flexBody">
        <Header />
        <HomeList />
        <Footer /> 
    </div>
    );
    }
   
}

export default Home;
