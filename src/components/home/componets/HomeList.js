import React from 'react';

const HomeList = ({list})=> {
    return(
        <ul className="homelist">
            {list.map(function(listItem){
                return(
                    <li key={listItem.id} className="homelist-item">
                        <a href="/article" target="_blank">
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
                                                <div>
                                                    <img src={require("../../../assets/img/good.svg")}/>
                                                    <span>{listItem.goodSum}</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <img src={require("../../../assets/img/comment.svg")}/>
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