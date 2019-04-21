import React,{Component} from 'react';
const htmlStr = '<h2 style="text-align:center;">贷款五级分类</h2><ol><li><span style="font-size:16px">正常</span>。借款人能够履行合同，一直能正常还本付息，不存在任何影响贷款本息及时全额偿还的消极因素，贷款损失的概率为0。</li><li>关注。尽管借款人有能力偿还贷款本息，但存在一些可能对偿还产生不利影响的因素，贷款损失的概率不会超过5%。</li><li>次级。借款人的还款能力出现明显问题，需要通过处分资产或对外融资乃至执行抵押担保来还款付息。贷款损失的概率在30%-50%。</li><li>可疑。借款人无法足额偿还贷款本息，即使执行抵押或担保，也肯定要造成一部分损失，贷款损失的概率在50%-75%之间。</li><li>损失。指借款人已无偿还本息的可能，无论采取什么措施和履行什么程序，贷款都注定要损失了，其贷款损失的概率在75%-100%。</li></ol><p style="text-align:start;text-indent:2em;"> </p><div class="media-wrap image-wrap"><img src="https://user-gold-cdn.xitu.io/2019/4/4/169e79a12fea1c0e?w=600&amp;h=354&amp;f=png&amp;s=257558" width="auto" height="auto" style="width:auto;height:auto"/></div><p><br/></p><p style="text-align:start;text-indent:2em;"><strong>扩展资料</strong></p><p style="text-align:start;text-indent:2em;"><span style="color:#c0392b">获贷技巧</span></p><p style="text-indent:2em;">1、借款理由：贷款人在申请贷款的过程中，贷款理由应该坦诚并且清晰，详细的写出贷款的用途以及个人还贷方面的优势。例如：良好的个人信用记录。</p><p style="text-align:start;text-indent:2em;">2、借款金额：贷款人在银行申请贷款的金额不宜太高，因为金额越大，失败的可能性也就越高，然而这并不是贷款人所希望的，他们肯定不希望自己的贷款资金在半个月内还看不到放款的动静。倘若贷款人所申请的贷款较大的话，建议你适当降低贷款数额，这样通过银行审核的希望也就大大增加了。</p><p style="text-align:start;text-indent:2em;">3、借款说明：详细的填写申请资料，借款的用途、个人信用记录、收入来源、还款能力以及家庭收入情况等等。以保证你的借款不管何时何地何情况，都能够准时的偿还贷款。</p><p style="text-align:start;text-indent:2em;">4、贷款偿还：借款人成功申请贷款之后，就必须要按照规定的时间还款，切勿出现侥幸心理，耽误还款时间，从而造成不良的个人信用记录。另外，对于拖欠的贷款，相关部门也会尽全力追回。</p><p style="text-align:start;text-indent:2em;">参考资料：<a href="https://baike.baidu.com/item/%E8%B4%B7%E6%AC%BE" target="">百度百科-贷款</a> </p><p style="text-align:start;text-indent:2em;"></p><p style="text-align:start;text-indent:2em;"></p><p style="text-align:start;text-indent:2em;"></p><p style="text-align:start;text-indent:2em;"></p><p></p>';
class ArticleBody extends Component{
    constructor(){
        super();
        this.state={
            isGood:false,
            isCollect:false
        }
    }
    handleGood=()=>{
        if(this.state.isGood===false){
            this.setState({isGood:true});
        }else{
            this.setState({isGood:false});
        }
    }
    handleCollect=()=>{
        if(this.state.isCollect===false){
            this.setState({isCollect:true});
        }else{
            this.setState({isCollect:false});
        }
    }
    render(){
        return(
            <main>
                <div className="article-left">
                    <a href="#/home"><div className="panel-btn back"></div></a>
                    <div onClick={this.handleGood} className={(this.state.isGood===true)?"panel-btn gooded":"panel-btn good"}></div>
                    <div onClick={this.handleCollect} className={(this.state.isCollect===true)?"panel-btn collected":"panel-btn collect"}></div>
                </div>
                <div className="list-container">
                    <div className="inner-html" dangerouslySetInnerHTML={{__html: htmlStr}}/>
                </div>
                <aside className="article-aside">
                    <div>
                        <div className="article-aside-header">相关文章</div>
                        <div className="article-aside-list">
                            <a>
                                <div className="meta-title">拜托！面试请不要再问我Spring Cloud底层原理</div>
                                <div className="meta-box">
                                    <div className="meta">
                                        <img src={require("../../assets/img/good.svg")}/>
                                        <span>12</span>
                                    </div>
                                    <div className="meta">
                                        <img src={require("../../assets/img/comment.svg")}/>
                                        <span>12</span>
                                    </div>
                                </div>
                            </a>
                            <a>
                                <div className="meta-title">面试最让你手足无措的一个问题：你的系统如何支撑高并发？【石杉的架构笔记】</div>
                                <div className="meta-box">
                                    <div className="meta">
                                        <img src={require("../../assets/img/good.svg")}/>
                                        <span>3</span>
                                    </div>
                                    <div className="meta">
                                        <img src={require("../../assets/img/comment.svg")}/>
                                        <span>23</span>
                                    </div>
                                </div>
                            </a>
                            <a>
                                <div className="meta-title">阿里一面：关于【缓存穿透、缓存击穿、缓存雪崩、热点数据失效】问题的解决方案</div>
                                <div className="meta-box">
                                    <div className="meta">
                                        <img src={require("../../assets/img/good.svg")}/>
                                        <span>15</span>
                                    </div>
                                    <div className="meta">
                                        <img src={require("../../assets/img/comment.svg")}/>
                                        <span>66</span>
                                    </div>
                                </div>
                            </a>
                            <a>
                                <div className="meta-title">拜托，面试请不要再问我Redis分布式锁的实现原理！【石杉的架构笔记】</div>
                                <div className="meta-box">
                                    <div className="meta">
                                        <img src={require("../../assets/img/good.svg")}/>
                                        <span>123</span>
                                    </div>
                                    <div className="meta">
                                        <img src={require("../../assets/img/comment.svg")}/>
                                        <span>41</span>
                                    </div>
                                </div>
                            </a>
                            <a>
                                <div className="meta-title">【纯干货分享】小公司出身的我，是如何拿下知名独角兽公司offer的？【石杉的架构笔记】</div>
                                <div className="meta-box">
                                    <div className="meta">
                                        <img src={require("../../assets/img/good.svg")}/>
                                        <span>55</span>
                                    </div>
                                    <div className="meta">
                                        <img src={require("../../assets/img/comment.svg")}/>
                                        <span>1</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </aside>
            </main>
        )
    }
}

export default ArticleBody;