import React,{ Component,PureComponent } from 'react';
import HomeList from './componets/HomeList';
import Sider from './componets/Sider';
import Axios from 'axios';
import Mock from '../../mock/mock';

class HomeBody extends PureComponent{
    constructor(){
        super();
        this.state={
            list:[]
        }
    }

    componentDidMount() {
        var _this = this;
        Axios.get('/fdm/homelist.json',{
            params: { 
                page: 1,
                size: 10
             }
        })
        .then(function(data){
            _this.setState({list:data.data});
        })
        .catch(function(err){
            console.log(err);
        })
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
            handleGood:this.handleGood,

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