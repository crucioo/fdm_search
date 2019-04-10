import Header from '../components/utils/Header';
import Footer from '../components/utils/Footer';
import HomeBody from '../components/home';
import QuestionNew from '../components/modal/QuestionNew';
import React, { Component } from 'react';
import { Route  } from 'react-router-dom';
require('../assets/font.css');
require('../assets/style.css');

class Home extends Component {
    constructor(){
        super();
        this.state={
            isShow:false //是否显示模态窗
        };
    }
    openModal = () =>{
        this.setState({isShow:true});
        document.getElementsByTagName('html')[0].style.overflow="hidden";
    }
    closeModal = () =>{
        this.setState({isShow:false});
        document.getElementsByTagName('html')[0].style.overflow="auto";
    }
    render() {
        const show = this.state.isShow?"block":"none";

        const questionNewProps={
            modalStyle:{display:show},
            closeModal:this.closeModal
        }

        const headerProps = {
            openModal:this.openModal
        }

        return (
        <div className="flexBody">
            <Header {...headerProps} />
            <HomeBody />
            <Footer />
            <QuestionNew {...questionNewProps} />
        </div>
        );
    }
}

export default Home;
