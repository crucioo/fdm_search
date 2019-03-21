import React,{ Component } from 'react';

class Header extends Component{
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
                                    <input maxlength="32" placeholder="搜索更新啦" />
                                </form>
                            </li>
                            <li>
                                写文章
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
export default Header;