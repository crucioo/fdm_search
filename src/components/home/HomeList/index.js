import React,{ Component } from 'react';

class HomeList extends Component{
    constructor(){
        super();
        
    }
    componentWillMount(){

    }
    render(){
        return(
            <main>
                <div className="list-container">
                    <header>
                        <nav>
                            <ul>
                                <li><a>热门</a></li>
                                <li><a>最新</a></li>
                                <li><a>评论</a></li>
                            </ul>
                        </nav>
                    </header>
                    <ul className="homelist">

                        <li className="homelist-item">
                            <a>
                                <div className="item-container">
                                    <div className="list-item-left">
                                        <div className="item-meta">
                                            <ul>
                                                <li className="meta-hot">热</li>
                                                <li className="meta-type">知识</li>
                                                <li>35分钟前</li>
                                                <li>信贷/贷款五级分类</li>
                                            </ul>
                                        </div>
                                        <div className="item-title">
                                            <div><strong>关于贷款的五级分类</strong></div>
                                        </div>
                                        <div className="item-action">
                                            <ul>
                                                <li>
                                                    <div>
                                                        <img src={require("../../../assets/img/good.svg")}/>
                                                        <span>62</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div>
                                                        <img src={require("../../../assets/img/comment.svg")}/>
                                                        <span>23</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="list-item-right">
                                        <img />
                                    </div>
                                </div>
                            </a>
                        </li>

                        <li className="homelist-item">
                            <a>
                                <div className="item-container">
                                    <div className="list-item-left">
                                        <div className="item-meta">
                                            <ul>
                                                <li className="meta-hot">热</li>
                                                <li className="meta-type">知识</li>
                                                <li>35分钟前</li>
                                                <li>信贷/贷款五级分类</li>
                                            </ul>
                                        </div>
                                        <div className="item-title">
                                            <div><strong>关于贷款的五级分类</strong></div>
                                        </div>
                                        <div className="item-action">
                                            <ul>
                                                <li>
                                                    <div>
                                                        <img src={require("../../../assets/img/good.svg")}/>
                                                        <span>62</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div>
                                                        <img src={require("../../../assets/img/comment.svg")}/>
                                                        <span>23</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <div className="list-item-right">
                                        <img />
                                    </div> */}
                                </div>
                            </a>
                        </li>

                        <li className="homelist-item">
                            <a>
                                <div className="item-container">
                                    <div className="list-item-left">
                                        <div className="item-meta">
                                            <ul>
                                                <li className="meta-type">问题</li>
                                                <li>35分钟前</li>
                                                <li>信贷/贷款五级分类</li>
                                            </ul>
                                        </div>
                                        <div className="item-title">
                                            <div><strong>什么是应降为降？</strong></div>
                                        </div>
                                        <div className="item-action">
                                            <ul>
                                                <li>
                                                    <div>
                                                        <img src={require("../../../assets/img/good.svg")}/>
                                                        <span>62</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div>
                                                        <img src={require("../../../assets/img/comment.svg")}/>
                                                        <span>23</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <div className="list-item-right">
                                        <img />
                                    </div> */}
                                </div>
                            </a>
                        </li>

                        <li className="homelist-item">
                            <a>
                                <div className="item-container">
                                    <div className="list-item-left">
                                        <div className="item-meta">
                                            <ul>
                                                <li className="meta-type">问题</li>
                                                <li>35分钟前</li>
                                                <li>信贷/贷款五级分类</li>
                                            </ul>
                                        </div>
                                        <div className="item-title">
                                            <div><strong>什么是展期？</strong></div>
                                        </div>
                                        <div className="item-action">
                                            <ul>
                                                <li>
                                                    <div>
                                                        <img src={require("../../../assets/img/good.svg")}/>
                                                        <span>62</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div>
                                                        <img src={require("../../../assets/img/comment.svg")}/>
                                                        <span>23</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="list-item-right">
                                        <img />
                                    </div>
                                </div>
                            </a>
                        </li>

                        <li className="homelist-item">
                            <a>
                                <div className="item-container">
                                    <div className="list-item-left">
                                        <div className="item-meta">
                                            <ul>
                                                <li className="meta-type">问题</li>
                                                <li>35分钟前</li>
                                                <li>信贷/贷款五级分类</li>
                                            </ul>
                                        </div>
                                        <div className="item-title">
                                            <div><strong>什么是应降为降？</strong></div>
                                        </div>
                                        <div className="item-action">
                                            <ul>
                                                <li>
                                                    <div>
                                                        <img src={require("../../../assets/img/good.svg")}/>
                                                        <span>62</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div>
                                                        <img src={require("../../../assets/img/comment.svg")}/>
                                                        <span>23</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="list-item-right">
                                        <img />
                                    </div>
                                </div>
                            </a>
                        </li>

                        <li className="homelist-item">
                            <a>
                                <div className="item-container">
                                    <div className="list-item-left">
                                        <div className="item-meta">
                                            <ul>
                                                <li className="meta-type">问题</li>
                                                <li>35分钟前</li>
                                                <li>信贷/贷款五级分类</li>
                                            </ul>
                                        </div>
                                        <div className="item-title">
                                            <div><strong>什么是展期？</strong></div>
                                        </div>
                                        <div className="item-action">
                                            <ul>
                                                <li>
                                                    <div>
                                                        <img src={require("../../../assets/img/good.svg")}/>
                                                        <span>62</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div>
                                                        <img src={require("../../../assets/img/comment.svg")}/>
                                                        <span>23</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="list-item-right">
                                        <img />
                                    </div>
                                </div>
                            </a>
                        </li>

                        <li className="homelist-item">
                            <a>
                                <div className="item-container">
                                    <div className="list-item-left">
                                        <div className="item-meta">
                                            <ul>
                                                <li className="meta-type">问题</li>
                                                <li>35分钟前</li>
                                                <li>信贷/贷款五级分类</li>
                                            </ul>
                                        </div>
                                        <div className="item-title">
                                            <div><strong>什么是应降为降？</strong></div>
                                        </div>
                                        <div className="item-action">
                                            <ul>
                                                <li>
                                                    <div>
                                                        <img src={require("../../../assets/img/good.svg")}/>
                                                        <span>62</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div>
                                                        <img src={require("../../../assets/img/comment.svg")}/>
                                                        <span>23</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="list-item-right">
                                        <img />
                                    </div>
                                </div>
                            </a>
                        </li>

                        <li className="homelist-item">
                            <a>
                                <div className="item-container">
                                    <div className="list-item-left">
                                        <div className="item-meta">
                                            <ul>
                                                <li className="meta-type">问题</li>
                                                <li>35分钟前</li>
                                                <li>信贷/贷款五级分类</li>
                                            </ul>
                                        </div>
                                        <div className="item-title">
                                            <div><strong>什么是展期？</strong></div>
                                        </div>
                                        <div className="item-action">
                                            <ul>
                                                <li>
                                                    <div>
                                                        <img src={require("../../../assets/img/good.svg")}/>
                                                        <span>62</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div>
                                                        <img src={require("../../../assets/img/comment.svg")}/>
                                                        <span>23</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="list-item-right">
                                        <img />
                                    </div>
                                </div>
                            </a>
                        </li>

                        <li className="homelist-item">
                            <a>
                                <div className="item-container">
                                    <div className="list-item-left">
                                        <div className="item-meta">
                                            <ul>
                                                <li className="meta-type">问题</li>
                                                <li>35分钟前</li>
                                                <li>信贷/贷款五级分类</li>
                                            </ul>
                                        </div>
                                        <div className="item-title">
                                            <div><strong>什么是应降为降？</strong></div>
                                        </div>
                                        <div className="item-action">
                                            <ul>
                                                <li>
                                                    <div>
                                                        <img src={require("../../../assets/img/good.svg")}/>
                                                        <span>62</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div>
                                                        <img src={require("../../../assets/img/comment.svg")}/>
                                                        <span>23</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="list-item-right">
                                        <img />
                                    </div>
                                </div>
                            </a>
                        </li>

                        <li className="homelist-item">
                            <a>
                                <div className="item-container">
                                    <div className="list-item-left">
                                        <div className="item-meta">
                                            <ul>
                                                <li className="meta-type">问题</li>
                                                <li>35分钟前</li>
                                                <li>信贷/贷款五级分类</li>
                                            </ul>
                                        </div>
                                        <div className="item-title">
                                            <div><strong>什么是展期？</strong></div>
                                        </div>
                                        <div className="item-action">
                                            <ul>
                                                <li>
                                                    <div>
                                                        <img src={require("../../../assets/img/good.svg")}/>
                                                        <span>62</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div>
                                                        <img src={require("../../../assets/img/comment.svg")}/>
                                                        <span>23</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="list-item-right">
                                        <img />
                                    </div>
                                </div>
                            </a>
                        </li>
                        
                    </ul>
                </div>
                <aside className="homeaside">
                    <div>
                        <div className="homeaside-header">热门标签</div>
                        <div>
                            <div className="homeaside-list">
                                <a>资产负债表</a>
                                <a>凭证</a>
                                <a>五级分类</a>
                                <a>展期</a>
                                <a>应降未降</a>
                                <a>利润表</a>
                                <a>五级分类</a>
                                <a>展期</a>
                                <a>应降未降</a>
                                <a>利润表</a>
                            </div>
                        </div>
                    </div>
                </aside>
            </main>
        )
    }
}
export default HomeList;