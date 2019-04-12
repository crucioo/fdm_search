import React,{ PureComponent } from 'react';
import {withRouter} from 'react-router-dom'

let history;

class Header extends PureComponent{
    componentWillMount() {
        history = this.props.history;
    }
    writeNew() {
        history.push('/editor');
    }
    render(){
        const {openModal} = this.props;
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
                                </ul>
                            </li>
                            <li className="top-search">
                                <form>
                                    <input maxLength="32" placeholder="搜索更新啦" />
                                    <img className="search-button" src={require("../../../assets/img/search.svg")} />
                                </form>
                            </li>
                            <li className="write">
                                <button onClick={openModal}>提问题</button>
                            </li>
                            <li className="write">
                                <button onClick={this.writeNew}>写文章</button>
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
export default withRouter(Header);