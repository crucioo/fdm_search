import React,{ Component } from 'react';
import Header from '../components/utils/Header';
import Footer from '../components/utils/Footer';
import ArticleBody from '../components/article';
import QuestionNew from '../components/modal/QuestionNew';
import { Route } from 'react-router-dom';

const textAreaSize=120;//输入框size
let articleId;

class Article extends Component{
    constructor(){
        super();
        this.state={
            isShow:false, //是否显示模态窗
            questionValue:'',
            textSum:textAreaSize
        };
    }
    componentWillMount(){
        articleId = this.props.match.params.id;
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
    render(){
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
        return(
            <div className="flexBody">
                <Header {...headerProps}/>
                <ArticleBody articleId={articleId}/>
                <Footer />
                <QuestionNew {...questionNewProps} />
            </div>
        )
    }
}
export default Article;