import React,{ Component,PureComponent } from 'react';
import HomeList from './componets/HomeList';
import Sider from './componets/Sider';
import Axios from 'axios';
import Mock from '../../mock/mock';

let pageNum=1;
let pageSize=8;
let memoryList=[]; 
let pageTotal;

class HomeBody extends PureComponent{
    constructor(){
        super();
        this.state={
            list:[]
        }
    }
    componentDidMount() {
        this.refresh();
    }

    refresh=()=>{
        Axios.get('/fdm/homelist.json',{
            params: { 
                page: 1,
                size: pageSize
             }
        })
        .then((data)=>{
            memoryList=data.data.list;
            pageTotal=data.data.pageTotal;
            this.setState({list:data.data.list});
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    // more=()=>{
    //     if(pageTotal<=pageNum){
    //         console.log('我是有底线的~~');
    //         return;
    //     }
    //     Axios.get('/fdm/homelist.json',{
    //         params: { 
    //             page: ++pageNum,
    //             size: pageSize
    //          }
    //     })
    //     .then((data)=>{
    //         this.setState({list:memoryList.concat(data.data.list)});
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    // }

    handleGood=(listItem,list,e)=>{
        if(listItem.isGood===false){
            listItem.isGood=true;
            listItem.goodSum++;
            this.setState({list});
        }else{
            listItem.isGood=false;
            listItem.goodSum--;
            this.setState({list});
        }
        e.preventDefault();
    }

    render(){
        const homeListProp ={
            list:[...this.state.list],
            pageSize:10,
            handleGood:this.handleGood,
            more:this.more
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