import React from 'react';
import Good from '../../../assets/img/good.svg';
import Gooded from '../../../assets/img/gooded.svg';
import Comment from '../../../assets/img/comment.svg';

const HomeList = ({list,handleGood})=> {
    return(
        <ul className="homelist">
            {list.map(function(listItem){
                return(
                    <li key={listItem.id} className="homelist-item">
                        <a href="#/article">
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
                                                <div onClick={handleGood.bind(null,listItem)}>
                                                    <img src={(listItem.isGood)?Gooded:Good}/>
                                                    <span className={(listItem.isGood)?"goodSum active":"goodSum"}>{listItem.goodSum}</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <img src={Comment}/>
                                                    <span>{listItem.commentSum}</span>
                                                </div>
                                            </li>
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

export default HomeList;