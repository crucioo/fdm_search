import React,{ Component } from 'react';
import HomeList from './componets/HomeList'

const list=[{
    id:1,
    title:"关于贷款的五级分类",
    isHot:true,
    type:"知识",
    label:"信贷/贷款五级分类",
    goodSum:64,
    commentSum:23,
    time:"23分钟前"
},{
    id:2,
    title:"关于贷款的五级分类",
    isHot:true,
    type:"知识",
    label:"信贷/贷款五级分类",
    goodSum:64,
    commentSum:23,
    time:"3分钟前"
},{
    id:3,
    title:"什么是应降为降？",
    isHot:false,
    type:"问题",
    label:"信贷/贷款五级分类",
    goodSum:64,
    commentSum:23,
    time:"1小时前"
}];

class HomeBody extends Component{
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
                    <HomeList list={list} />
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
export default HomeBody;