import React,{ Component } from 'react';
import Header from '../components/utils/Header';
import Footer from '../components/utils/Footer';
import ArticleBody from '../components/article';
import { Route } from 'react-router-dom';
class Article extends Component{
    render(){
        return(
            <div className="flexBody">
                <Header />
                <ArticleBody />
                <Footer />
            </div>
        )
    }
}
export default Article;