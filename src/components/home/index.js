import React,{ Component,PureComponent } from 'react';
import HomeList from './componets/HomeList';
import Sider from './componets/Sider';

const list=[{
    id:1,
    title:"关于贷款的五级分类",
    isHot:true,
    isGood:false,
    type:"知识",
    label:"信贷/贷款五级分类",
    goodSum:69,
    commentSum:23,
    time:"3分钟前",
    pic:"https://user-gold-cdn.xitu.io/2019/3/27/169bb255233ce443?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1"
},{
    id:2,
    title:"质押和抵押的区别",
    isHot:true,
    isGood:false,
    type:"知识",
    label:"信贷/质押/抵押",
    goodSum:11,
    commentSum:23,
    time:"23分钟前",
    pic:""
},{
    id:3,
    title:"什么是应降为降？",
    isHot:false,
    isGood:false,
    type:"问题",
    label:"贷款",
    goodSum:23,
    commentSum:23,
    time:"1小时前",
    pic:"https://user-gold-cdn.xitu.io/2019/3/27/169bb255233ce443?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1"
},{
    id:4,
    title:"什么是展期？",
    isHot:false,
    isGood:false,
    type:"问题",
    label:"信贷",
    goodSum:64,
    commentSum:23,
    time:"1天前",
    pic:""
},{
    id:5,
    title:"什么是阿尔法套利？",
    isHot:false,
    isGood:false,
    type:"问题",
    label:"证券/股票",
    goodSum:64,
    commentSum:23,
    time:"2天前",
    pic:""
},{
    id:6,
    title:"什么是金融期货？",
    isHot:false,
    isGood:false,
    type:"问题",
    label:"证券/期货",
    goodSum:64,
    commentSum:23,
    time:"1天前",
    pic:"https://user-gold-cdn.xitu.io/2019/3/27/169bb255233ce443?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1"
},{
    id:7,
    title:"金融期货的主要种类有哪些金融期货的主要种类有哪些金融期货的主要种类有哪些金融期货的主要种类有哪些金融期货的主要种类有哪些金融期货的主要种类有哪些金融期货的主要种类有哪些？",
    isHot:false,
    isGood:false,
    type:"问题",
    label:"证券/期货",
    goodSum:64,
    commentSum:23,
    time:"1小时前",
    pic:"https://user-gold-cdn.xitu.io/2019/3/27/169bb255233ce443?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1"
},{
    id:8,
    title:"金融期货交易与金融现货交易的区别是什么？",
    isHot:false,
    isGood:false,
    type:"问题",
    label:"证券/期货",
    goodSum:64,
    commentSum:23,
    time:"1天前",
    pic:"https://user-gold-cdn.xitu.io/2019/3/27/169bb255233ce443?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1"
}];

class HomeBody extends PureComponent{
    constructor(){
        super();
        this.state={
            list:list
        }
    }
    
    handleGood=(listItem,e)=>{
        if(listItem.isGood===false){
            listItem.isGood=true;
            listItem.goodSum++;
            listItem = {...listItem}
            this.setState({listItem});
        }else{
            listItem.isGood=false;
            listItem.goodSum--;
            listItem = {...listItem}
            this.setState({listItem});
        }
        e.preventDefault();
    }

    render(){
        const homeListProp ={
            list:this.state.list,
            handleGood:this.handleGood
        }
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
                    <HomeList {...homeListProp} />
                </div>
                <Sider />
            </main>
        )
    }
}
export default HomeBody;