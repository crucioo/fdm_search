import React,{ Component } from 'react';
// import {withRouter} from "react-router-dom";

class Header extends Component{
    submit(){
        // console.log(history);
    }
    render(){
        return(
            <header id="header-container">
                <div id="header-content">
                    <a className="top-logo">
                        <img src={require("../../../assets/img/logo.svg")} />    
                    </a>
                    <nav className="top-nav">
                        <ul className="top-nav-content">
                            <li className="top-menu">
                                <ul>
                                    <li>
                                        <a>首页</a>
                                    </li>
                                    <li>
                                        <a>知识</a>
                                    </li>
                                    <li>
                                        <a>问题</a>
                                    </li>
                                    <li>
                                        <a>我的</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="top-search">
                                <form>
                                    <input maxLength="32" placeholder="搜索更新啦" />
                                    <img className="search-button" src={require("../../../assets/img/search.svg")} />
                                </form>
                            </li>
                            <li className="write">
                                <button>提问题</button>
                            </li>
                            <li className="write">
                                <button onClick={this.submit}>写文章</button>
                            </li>
                            <li className="message">
                                <a><i className="icon-bell"></i></a>
                            </li>
                            <li className="user"></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
export default Header;