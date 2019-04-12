import Header from '../components/utils/Header';
import Footer from '../components/utils/Footer';
import HomeBody from '../components/home';
import QuestionNew from '../components/modal/QuestionNew';
import React, { Component } from 'react';
require('../assets/font.css');
require('../assets/style.css');

const textAreaSize=120;//输入框size

class Home extends Component {
    constructor(){
        super();
        this.state={
            isShow:false, //是否显示模态窗
            questionValue:'',
            textSum:textAreaSize
        };
    }
    handleQuestionValue=(e)=>{
        this.setState({
            questionValue:e.target.value,
            textSum:textAreaSize-e.target.value.length
        });
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
        const questionNewProps={
            isShow:this.state.isShow,
            closeModal:this.closeModal,
            questionValue:this.state.questionValue,
            handleQuestionValue:this.handleQuestionValue,
            textSum:this.state.textSum,
            textAreaSize:textAreaSize
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
