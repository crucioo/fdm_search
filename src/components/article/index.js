import React,{Component} from 'react';
import zq from '../../assets/img/zhanqi.jpg'
import tl from '../../assets/img/taoli.jpg'
const htmlStr1 = '<h2 style="text-align:center;">贷款五级分类</h2><ol><li><span style="font-size:16px">正常</span>。借款人能够履行合同，一直能正常还本付息，不存在任何影响贷款本息及时全额偿还的消极因素，贷款损失的概率为0。</li><li>关注。尽管借款人有能力偿还贷款本息，但存在一些可能对偿还产生不利影响的因素，贷款损失的概率不会超过5%。</li><li>次级。借款人的还款能力出现明显问题，需要通过处分资产或对外融资乃至执行抵押担保来还款付息。贷款损失的概率在30%-50%。</li><li>可疑。借款人无法足额偿还贷款本息，即使执行抵押或担保，也肯定要造成一部分损失，贷款损失的概率在50%-75%之间。</li><li>损失。指借款人已无偿还本息的可能，无论采取什么措施和履行什么程序，贷款都注定要损失了，其贷款损失的概率在75%-100%。</li></ol><p style="text-align:start;text-indent:2em;"> </p><div class="media-wrap image-wrap"><img src="https://user-gold-cdn.xitu.io/2019/4/4/169e79a12fea1c0e?w=600&amp;h=354&amp;f=png&amp;s=257558" width="auto" height="auto" style="width:auto;height:auto"/></div><p><br/></p><p style="text-align:start;text-indent:2em;"><strong>扩展资料</strong></p><p style="text-align:start;text-indent:2em;"><span style="color:#c0392b">获贷技巧</span></p><p style="text-indent:2em;">1、借款理由：贷款人在申请贷款的过程中，贷款理由应该坦诚并且清晰，详细的写出贷款的用途以及个人还贷方面的优势。例如：良好的个人信用记录。</p><p style="text-align:start;text-indent:2em;">2、借款金额：贷款人在银行申请贷款的金额不宜太高，因为金额越大，失败的可能性也就越高，然而这并不是贷款人所希望的，他们肯定不希望自己的贷款资金在半个月内还看不到放款的动静。倘若贷款人所申请的贷款较大的话，建议你适当降低贷款数额，这样通过银行审核的希望也就大大增加了。</p><p style="text-align:start;text-indent:2em;">3、借款说明：详细的填写申请资料，借款的用途、个人信用记录、收入来源、还款能力以及家庭收入情况等等。以保证你的借款不管何时何地何情况，都能够准时的偿还贷款。</p><p style="text-align:start;text-indent:2em;">4、贷款偿还：借款人成功申请贷款之后，就必须要按照规定的时间还款，切勿出现侥幸心理，耽误还款时间，从而造成不良的个人信用记录。另外，对于拖欠的贷款，相关部门也会尽全力追回。</p><p style="text-align:start;text-indent:2em;">参考资料：<a href="https://baike.baidu.com/item/%E8%B4%B7%E6%AC%BE" target="">百度百科-贷款</a> </p><p style="text-align:start;text-indent:2em;"></p><p style="text-align:start;text-indent:2em;"></p><p style="text-align:start;text-indent:2em;"></p><p style="text-align:start;text-indent:2em;"></p><p></p>';
const htmlStr2 = '<h2 style="text-align:center;">质押和抵押的区别</h2><p>质押和抵押的根本区别在于是否转移担保财产的占有。</p><p>抵押不转移对抵押物的占管形态，仍由抵押人负责抵押物的保管；质押改变了质押物的占管形态，由质押权人负责对质押物进行保管。</p><p>一般来说，抵押物毁损或价值减少，由抵押人承担责任，质押物毁损或价值减少由质押权人承担责任。</p><p>债权人对抵押物不具有直接处置权，需要与抵押人协商或通过起诉由法院判决后完成抵押物的处置；对质押物的处置不需要经过协商或法院判决，超过合同规定的时间质权人就可以处置。质押贷款与抵押贷款，道理是一样的。</p>'
const htmlStr3 = '<h2 style="text-align:center;">应降未降</h2><p>年报披露上，应降未降实际上叫做逾期90天以上非不良，包括了正常和关注中的逾期超过90天的贷款。因为根据监管要求，逾期90天成为非应计贷款，原则上应该进入不良，所以行里叫应降未降。<p>'
const htmlStr4 = '<h1 style="text-align:center;">贷款展期</h1><p>贷款展期（Loan extension）是贷款到期不能归还，经批准办理延长归还时间的手续。贷款到期就要归还，是企业必须遵守的信用原则，也是银行加速信贷资金周转的前提条件。如企业遇有特殊情况，确实无法按期还款时，应提出申请，说明情况，经银行审查同意后，可延长还款时间，但需办理转期手续，否则按逾期贷款处理。</p><p></p><h4>条件</h4><p>借款人在贷款期间发生暂时的资金周转困难，致使不能按期偿还贷款本金，且符合展期规定的条件，一般情况下，提前30个工作日向贷款银行申请展期。</p><p>贷款展期不得低于原贷款条件：短期贷款展期不得超过原贷款期限；中期贷款展期不得超过原贷款期限的一半；长期贷款展期最长不得超过3年。</p><div class="media-wrap image-wrap align-center" style="text-align:center"><img alt="贷款展期" src='+zq+' width="220px" height="199px" style="width:220px;height:199px"/></div><p></p><p></p><h4>时间</h4><p>保证贷款的申请展期，还应出具贷款保证人同意展期并继续担保的书面证明。贷款展期不得低于原贷款条件。<a href="https://baike.baidu.com/item/%E7%9F%AD%E6%9C%9F%E8%B4%B7%E6%AC%BE" target="_blank">短期贷款</a>展期不得超过原<a href="https://baike.baidu.com/item/%E8%B4%B7%E6%AC%BE%E6%9C%9F%E9%99%90" target="_blank">贷款期限</a>；<a href="https://baike.baidu.com/item/%E4%B8%AD%E6%9C%9F%E8%B4%B7%E6%AC%BE" target="_blank">中期贷款</a>展期不得超过原贷款期限的一半；长期贷款展期最长不得超过3年。客户未申请展期或申请展期未得到批准，其贷款从到期日次日起，转入<a href="https://baike.baidu.com/item/%E9%80%BE%E6%9C%9F%E8%B4%B7%E6%AC%BE" target="_blank">逾期贷款</a>账户。个人贷款的展期时间银监会在2010年2月发布的《个人贷款管理暂行办法》中规定：一年以内（含）的个人贷款，展期期限累计不得超过原贷款期限；一年以上的个人贷款，展期期限累计与原贷款期限相加，不得超过该贷款品种规定的最长贷款期限。</p><p></p><h4>规定及处理</h4><p><a href="https://baike.baidu.com/item/%E8%B4%B7%E6%AC%BE" target="_blank">贷款</a>是否展期由贷款人决定。申请<a href="https://baike.baidu.com/item/%E4%BF%9D%E8%AF%81%E8%B4%B7%E6%AC%BE" target="_blank">保证贷款</a>有<a href="https://baike.baidu.com/item/%E6%8A%B5%E6%8A%BC%E8%B4%B7%E6%AC%BE" target="_blank">抵押贷款</a>、<a href="https://baike.baidu.com/item/%E8%B4%A8%E6%8A%BC%E8%B4%B7%E6%AC%BE" target="_blank">质押贷款</a>展期的，还应当由保证人、抵押人、出质人出具同意书面证明。已有约定的，按照约定执行。</p><p><a href="https://baike.baidu.com/item/%E7%9F%AD%E6%9C%9F%E8%B4%B7%E6%AC%BE" target="_blank">短期贷款</a>（期限在一年以内，含一年）展期期限累计不得超过原贷款期限；<a href="https://baike.baidu.com/item/%E4%B8%AD%E6%9C%9F%E8%B4%B7%E6%AC%BE" target="_blank">中期贷款</a>（一年以上，五年以下，含五年）展期期限累计不得超过原贷款期限的一半；长期贷款（五年以上）展期期限累计不得超过三年。国家另有规定者除外。借款人未申请展期或申请未获批准的，其贷款从到期日次日起，转入逾期贷款账户。</p>'
const htmlStr5 = '<p><strong>阿尔法套利的简介</strong></p><p style="text-align:left;text-indent:2em;">　　在<a href="https://wiki.mbalib.com/wiki/%E6%9C%9F%E6%8C%87" target="">期指</a><a href="https://wiki.mbalib.com/wiki/%E5%B8%82%E5%9C%BA" target="">市场</a>上做空，在股票市场上构建拟合300指数的成份股，赚取其中的价差，这种被动型的套利就是贝塔套利。那么在如今贝塔套利空间越来越小的状况下，我们还有什么好方法吗？这就是更主动的、也更考验操作者判断能力的阿尔法套利。</p><p style="text-align:left;text-indent:2em;"> <strong>阿尔法套利</strong>也称<strong>阿尔法策略</strong>，是指指数期货与具有阿尔法值的<a href="https://wiki.mbalib.com/wiki/%E8%AF%81%E5%88%B8" target="">证券</a><a href="https://wiki.mbalib.com/wiki/%E4%BA%A7%E5%93%81" target="">产品</a>之间进行反向对冲套利，也就是做多具有阿尔法值的证券产品，做空指数期货，实现回避系统性风险下的超越市场指数的阿尔法收益。为实现阿尔法套利，选择或构建证券产品是关键。</p><p style="text-align:left;text-indent:2em;">　　首先，兼具折价率与超额收益阿尔法的证券产品是进行阿尔法套利交易的首选，包括具有折价率，并能超越市场指数的认购权证，封闭式基金等。其次，具有超额收益阿尔法的证券产品是进行阿尔法套利交易的次选，主要包括开放式股票基金、股票、行业指数产品。</p><p style="text-align:left;text-indent:2em;">　　它在套利中属于典型的高收益、高风险套利方式。此种套利仅适合有能力挑选出具有稳定阿尔法证券产品的投资者，投资者在做阿尔法套利的时候应该与市场驱动因子监测体系结合起来分析。</p><p></p><p><strong>阿尔法套利的基本定义</strong></p><p style="text-align:left;text-indent:2em;">　　阿尔法套利就是高于经β调整后的预期收益率的超额收益率，其最初是由William Sharpe在1964年其著作《投资组合理论与资本市场》中首次提出，并指出投资者在市场中交易面临系统性风险和非系统性风险，公式表达如下：</p><p style="text-align:left;text-indent:2em;">　　E（Rp）=Rf＋β×（Rm-Rf）</p><p style="text-align:left;text-indent:2em;">　　其中β=Cov（Ri，Rm）/Var（Rm），E（Rp）表示投资组合的期望收益率，Rf为无风险报酬率，E（Rm）表示市场组合期望收益率，β为某一组合的系统风险系数。CAPM模型主要表示单个证券或投资组合同系统风险收益率之间的关系，也即是单个投资组合的收益率等于无风险收益率与风险溢价之和。</p><p style="text-align:left;text-indent:2em;"> 资本资产定价模型（CAMP）认为，在有效的市场里，只有承担系统风险才可以得到一定的收益补偿，非系统风险无法获得补偿，所以一种证券的预期收益主要由其β值决定。β值越高的证券，预期收益就越高，β值越低的证券，预期收益就越低。</p><p style="text-align:left;text-indent:2em;">　　经验表明，由于新兴市场的有效性较弱，专业投资者容易在这种市场利用专业管理、积极操作、资金规模等优势获得较高的阿尔法收益，从而跑赢大市。</p><p></p><p><strong>构建阿尔法套利交易方法</strong></p><p style="text-align:left;text-indent:2em;">　　阿尔法套利中的阿尔法<strong>α</strong>是指股票相对指数的超额收益，当<strong>α</strong>为正时，表明股票走势能够强于指数。而所谓<strong>α</strong>套利，是指寻找到获得较高а正值的股票构建一个组合，买入该组合的股票，同时卖出等值的股指期货合约，在建立套利头寸后，股票组合如果表现强于指数，若价格是下跌，则指数下跌幅度高于<strong>α</strong>股票组合，指数期货空头收益高于<strong>α</strong>股票组合损失，套利组合获得收益；若价格上涨，则<strong>α</strong>股票组合上涨收益多于期货空头损失，套利亦获得收益。</p><p style="text-align:left;text-indent:2em;">　　比如在股指期货上市时,因市场不确定因素较多,而且地产调控政策出台,可预计一些防御性板块会获得相对指数的强势表现,因此可以买入如下三只股票构建一个а组合:云南白药,伊利股份和北大荒.股指期货上市以来,该组合价值出现下跌,但下跌幅度远小于指数,取得正向<strong>α</strong>值。</p><p style="text-align:left;text-indent:2em;">　　在股指期货刚上市时,可以买入该组合,同时卖空等值的股指期货合约,经过一轮暴跌以后,期货空头取得收益,并且该收益超过<strong>α</strong>组合价值的缩水,套利头寸取得正向收益,如下图所示.</p><p style="text-align:left;text-indent:2em;"></p><div class="media-wrap image-wrap"><a style="display:inline-block" href='+tl+' target=""></a></div><div class="media-wrap image-wrap"><a style="display:inline-block" href="https://wiki.mbalib.com/wiki/Image:%E9%98%BF%E5%B0%94%E6%B3%95%E5%A5%97-1.jpg" target=""><img src="https://wiki.mbalib.com/w/images/thumb/8/84/%E9%98%BF%E5%B0%94%E6%B3%95%E5%A5%97-1.jpg/400px-%E9%98%BF%E5%B0%94%E6%B3%95%E5%A5%97-1.jpg"/></a></div><p></p><p style="text-align:left;text-indent:2em;"> <strong>α</strong>套利在实际操作中主要面临的难点包括:选取能够获得阶段性超额收益的股票;其次判断价差点位,选择在组合与指数价差较窄时建立套利头寸;当价差扩大获得套利收益后,根据市场状况则机平掉套利头寸获取收益。</p>'
const htmlStr6 = '<h2 style="text-align:center;"><strong>金融期货概述</strong></h2><p style="text-align:left;text-indent:2em;"> 金融即货币流通和信用活动的总称。金融活动对整个国民经济的运行发挥着提供支付手段、媒介商品交换、积累储蓄并引导投资的重要作用。金融期货是交易所按照一定规则反复交易的标准化金融商品合约。这种合约在成交时双方对规定品种、数量的金融商品协定交易的价格，在一个约定的未来时间按协定的价格进行实际交割，承担着在若干日后买进或卖出该金融商品的义务和责任。</p><p style="text-align:left;text-indent:2em;">　　所谓金融期货，是指以金融工具作为标的物的期货合约。金融期货交易是指交易者在特定的交易所通过公开竞价方式成交，承诺在未来特定日期或期间内，以事先约定的价格买入或卖出特定数量的某种金融商品的交易方式。金融期货交易具有期货交易的一般特征，但与商品期货相比，其合约标的物不是实物商品，而是金融商品，如外汇、债券、股票指数等。</p>'
const htmlStr7 = '<h2 style="text-align:center;"><strong>金融期货主要种类</strong></h2><p style="text-align:left;text-indent:2em;">　　金融期货主要种类有:</p><p style="text-align:left;text-indent:2em;">　　金融期货基本上可分为三大类：外汇（汇率）期货、利率期货和股票指数期货。</p><p style="text-align:left;text-indent:2em;">　　1）外汇期货是指协约双方同意在未来某一时期，根据约定价格---汇率，买卖一定标准数量的某种外汇的可转让的标准化协议。外汇期货包括以下币种：日元、英镑、德国马克、瑞士法郎、荷兰盾、法国法郎、加拿大元、美元等；</p><p style="text-align:left;text-indent:2em;">　　2）利率期货是指协议双方同意在约定的将来某个日期按约定条件买卖一定数量的某种长短期信用工具的可转让的标准化协议。利率期货交易的对象有长期国库券、政府住宅抵押证券、中期国债、短期国债等；</p><p style="text-align:left;text-indent:2em;">　　3）股票指数期货是指协议双方同意在将来某一时期按约定的价格买卖股票指数的可转让的标准化合约。最具代表性的股票指数有美国的道·琼斯股票指数和标准·普尔500种股票指数、英国的金融时报工业普通股票指效、香港的恒生指数、日本的日经指数等。</p>'
const htmlStr8 = '<p><strong>金融期货交易与金融现货交易的区别</strong></p><p style="text-align:left;text-indent:2em;">　　金融期货交易与金融现货交易的区别主要有：</p><p style="text-align:left;text-indent:2em;">　　金融现货如债券、<a href="https://wiki.mbalib.com/wiki/%E8%82%A1%E7%A5%A8" target="">股票</a>是对某些特别标的物具有产权，而金融期货是金融现货的衍生品。<a href="https://wiki.mbalib.com/wiki/%E7%8E%B0%E8%B4%A7%E4%BA%A4%E6%98%93" target="">现货交易</a>的发展和完善为金融期货交易打下了基础。同时，金融期货交易也是现货交易的延伸和补充。二者的差异主要有以下几点：</p><p style="text-align:left;text-indent:2em;">　　1）交易目的不同。金融现货买卖属于产权转移，而<a href="https://wiki.mbalib.com/wiki/%E6%9C%9F%E8%B4%A7%E4%BA%A4%E6%98%93" target="">期货交易</a>则着眼于<a href="https://wiki.mbalib.com/wiki/%E9%A3%8E%E9%99%A9%E8%BD%AC%E7%A7%BB" target="">风险转移</a>和获取合理或<a href="https://wiki.mbalib.com/wiki/%E8%B6%85%E9%A2%9D%E5%88%A9%E6%B6%A6" target="">超额利润</a>，大部分金融期货交易的目的不在于实际获取现货；</p><p style="text-align:left;text-indent:2em;">　　2）价格决定不同。现货交易一般采用<a href="https://wiki.mbalib.com/wiki/%E4%B8%80%E5%AF%B9%E4%B8%80%E8%B0%88%E5%88%A4" target="">一对一谈判</a>决定成交价格，而期货交易必须集中在交易所里以公开<a href="https://wiki.mbalib.com/wiki/%E6%8B%8D%E5%8D%96%E7%AB%9E%E4%BB%B7" target="">拍卖竞价</a>的方式决定成交价格；</p><p style="text-align:left;text-indent:2em;">　　3）交易制度不同。主要有：现货可以长期持有，而期货则有期限的限制；期货交易可以买空卖空，而现货只能先买后卖；现货交易是足额交易，而期货交易是<a href="https://wiki.mbalib.com/wiki/%E4%BF%9D%E8%AF%81%E9%87%91%E4%BA%A4%E6%98%93" target="">保证金交易</a>，因而风险较高，另外，期货交易价格波动受每日最大涨跌幅的限制；</p><p style="text-align:left;text-indent:2em;">　　4）交易的组织化程度不同。<a href="https://wiki.mbalib.com/wiki/%E7%8E%B0%E8%B4%A7%E4%BA%A4%E6%98%93" target="">现货交易</a>的地点和时间没有严格规定，期货交易严格限制在交易大厅内进行，现货交易信息分散，透明度低。而期货交易比较集中，信息公开，透明度高；期货交易有严格的交易程序和规则，具有比<a href="https://wiki.mbalib.com/wiki/%E7%8E%B0%E8%B4%A7%E5%B8%82%E5%9C%BA" target="">现货市场</a>更强的<a href="https://wiki.mbalib.com/wiki/%E6%8A%97%E9%A3%8E%E9%99%A9%E8%83%BD%E5%8A%9B" target="">抗风险能力</a>；</p>'

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
                </div>
                <div className="list-container">
                    <div className="inner-html" dangerouslySetInnerHTML={(this.props.articleId==1)?{__html: htmlStr1}:(this.props.articleId==2)?{__html: htmlStr2}:(this.props.articleId==3)?{__html: htmlStr3}:(this.props.articleId==4)?{__html: htmlStr4}:(this.props.articleId==5)?{__html: htmlStr5}:(this.props.articleId==6)?{__html: htmlStr6}:(this.props.articleId==7)?{__html: htmlStr7}:(this.props.articleId==8)?{__html: htmlStr8}:{__html:''}}/>
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
                                    {/* <div className="meta">
                                        <img src={require("../../assets/img/comment.svg")}/>
                                        <span>12</span>
                                    </div> */}
                                </div>
                            </a>
                            <a>
                                <div className="meta-title">面试最让你手足无措的一个问题：你的系统如何支撑高并发？【石杉的架构笔记】</div>
                                <div className="meta-box">
                                    <div className="meta">
                                        <img src={require("../../assets/img/good.svg")}/>
                                        <span>3</span>
                                    </div>
                                    {/* <div className="meta">
                                        <img src={require("../../assets/img/comment.svg")}/>
                                        <span>23</span>
                                    </div> */}
                                </div>
                            </a>
                            <a>
                                <div className="meta-title">阿里一面：关于【缓存穿透、缓存击穿、缓存雪崩、热点数据失效】问题的解决方案</div>
                                <div className="meta-box">
                                    <div className="meta">
                                        <img src={require("../../assets/img/good.svg")}/>
                                        <span>15</span>
                                    </div>
                                    {/* <div className="meta">
                                        <img src={require("../../assets/img/comment.svg")}/>
                                        <span>66</span>
                                    </div> */}
                                </div>
                            </a>
                            <a>
                                <div className="meta-title">拜托，面试请不要再问我Redis分布式锁的实现原理！【石杉的架构笔记】</div>
                                <div className="meta-box">
                                    <div className="meta">
                                        <img src={require("../../assets/img/good.svg")}/>
                                        <span>123</span>
                                    </div>
                                    {/* <div className="meta">
                                        <img src={require("../../assets/img/comment.svg")}/>
                                        <span>41</span>
                                    </div> */}
                                </div>
                            </a>
                            <a>
                                <div className="meta-title">【纯干货分享】小公司出身的我，是如何拿下知名独角兽公司offer的？【石杉的架构笔记】</div>
                                <div className="meta-box">
                                    <div className="meta">
                                        <img src={require("../../assets/img/good.svg")}/>
                                        <span>55</span>
                                    </div>
                                    {/* <div className="meta">
                                        <img src={require("../../assets/img/comment.svg")}/>
                                        <span>1</span>
                                    </div> */}
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