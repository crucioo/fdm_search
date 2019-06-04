import React, { Component,PureComponent } from 'react';
import Good from '../../../assets/img/good.svg'; 
import Gooded from '../../../assets/img/gooded.svg';
import Comment from '../../../assets/img/comment.svg';

let clientHeight,contentHeight;

// function throttleScroll(more){ //加载更多数据
//     var canRun=true;
//     return function(){
//       if(!canRun){
//         return;
//       }
//       canRun=false;
//       setTimeout(function(){
//         contentHeight = document.getElementsByClassName('homelist')[0].lastChild.getBoundingClientRect().bottom;
//         if(contentHeight<=clientHeight){ //列表最后一个元素底端到屏幕顶端的距离<=可视区域高度
//             /*异步请求，加载更多 */
            
//             more()
//         }
//         canRun=true;
//       },250);
//     }
//   }

//   function throttleResize(){
//     var canRun=true;
//     return function(){
//       if(!canRun){
//         return;
//       }
//       canRun=false;
//       setTimeout(function(){
//         clientHeight = document.documentElement.clientHeight;
//         canRun=true;
//       },250);
//     }
//   }

class HomeList extends PureComponent {
    constructor(){
        super();
    }
    componentDidMount(){
        const {more} =this.props
        clientHeight = document.documentElement.clientHeight;
        // window.onscroll = throttleScroll(more);
    }

    render(){
        const{list,handleGood} = this.props;
        return(
            <ul className="homelist">
                {list.map((listItem)=>{
                    return(
                        <li key={listItem.id} className="homelist-item">
                            <a href={`#/article/${listItem.id}`}>
                                <div className="item-container">
                                    <div className="list-item-left">
                                        <div className="item-meta">
                                            <ul>
                                                {listItem.isHot?<li className="meta-hot">热</li>:''}
                                                <li className="meta-type">{listItem.type}</li>
                                                <li>{listItem.time}</li>
                                                <li>{listItem.label}</li>
                                            </ul>
                                        </div>
                                        <div className="item-title">
                                            <div><strong>{listItem.title}</strong></div>
                                        </div>
                                        <div className="item-action">
                                            <ul>
                                                <li>
                                                    <div onClick={handleGood.bind(null,listItem,list)}>
                                                        <img src={(listItem.isGood)?Gooded:Good}/>
                                                        <span className={(listItem.isGood)?"goodSum active":"goodSum"}>{listItem.goodSum}</span>
                                                    </div>
                                                </li>
                                                {/* <li>
                                                    <div>
                                                        <img src={Comment}/>
                                                        <span>{listItem.commentSum}</span>
                                                    </div>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="list-item-right" style={{backgroundImage:"url("+listItem.pic+")"}}>
                                    </div>
                                </div>
                            </a>
                        </li>
                    )
                })}
            </ul>
            
        )
    }
}

export default HomeList;