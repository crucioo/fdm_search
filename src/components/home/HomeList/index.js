import React,{ Component } from 'react';

class HomeList extends Component{
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
                    <ul className="list-item">

                        <li>
                            <a>
                                <div>
                                    <div className="list-item-left">
                                        <div className="item-header"></div>
                                        <div className="item-content"></div>
                                        <div className="item-footer"></div>
                                    </div>
                                    <div className="list-item-right">
                                        <img />
                                    </div>
                                </div>
                            </a>
                        </li>
                        
                    </ul>
                </div>
                <aside className="home-aside">asdkjashdjasdkj</aside>
            </main>
        )
    }
}
export default HomeList;