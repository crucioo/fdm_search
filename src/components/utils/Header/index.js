import React,{ PureComponent } from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router-dom';
import searchImgSrc from '../../../assets/img/search.svg';
import searchImgSrcFocus from '../../../assets/img/search-focus.svg';
import userImg from '../../../assets/img/user.svg';

let history;

class Header extends PureComponent{
    constructor(){
        super();
        this.state={
            isFocus:false, //内部状态，控制搜索框样式变换
            isShow:false //内部状态，控制头像下方菜单显示隐藏
        }
    }

    componentWillMount() {
        history = this.props.history;
    }

    componentDidMount(){
        document.getElementsByTagName("html")[0].addEventListener("click",(e)=>{
            if(this.state.isShow===true){
                // e.stopPropagation(); //阻止点击头像时事件冒泡到react事件系统
                this.setState({isShow:false});
            }
        });
    }

    focus=()=>{
        this.setState({isFocus:true});
    }

    blur=()=>{
        this.setState({isFocus:false});
    }

    showMenu=(e)=>{
        this.setState({isShow:true});
    }

    writeNew() {
        history.push('/editor');
    }

    render(){
        const {openModal} = this.props;
        return(
            <header id="header-container">
                <div id="header-content">
                    <a href="#/home" className="top-logo">
                        <img src={require("../../../assets/img/fdm.png")} />    
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
                                <form className={(this.state.isFocus===false)?"top-form":"top-form form-active"}>
                                    <input onFocus={this.focus} onBlur={this.blur} maxLength="32" placeholder="搜索更新啦" />
                                    <img className="search-button" src={(this.state.isFocus===false)?searchImgSrc:searchImgSrcFocus} />
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
                            <li className="user">
                                <img onClick={this.showMenu} src={userImg} />
                                <ul style={(this.state.isShow===true)?{display:"block"}:{display:"none"}} className="menu">
                                    <div className="item-group">
                                        <li className="item">
                                            <a>
                                                <i className="icon-user"></i>
                                                <span>个人资料</span>
                                            </a>
                                        </li>
                                        <li className="item">
                                            <a>
                                                <i className="icon-good"></i>
                                                <span>我赞过的</span>
                                            </a>
                                        </li>
                                    </div>
                                    <div className="item-group">
                                        <li className="item">
                                            <a>
                                                <i className="icon-outgoing"></i>
                                                <span>登出</span>
                                            </a>
                                        </li>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
export default withRouter(Header);