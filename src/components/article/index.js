import React,{Component} from 'react';
const htmlStr = '<ol><li>正常。借款人能够履行合同，一直能正常还本付息，不存在任何影响贷款本息及时全额偿还的消极因素，贷款损失的概率为0。</li><li>关注。尽管借款人有能力偿还贷款本息，但存在一些可能对偿还产生不利影响的因素，贷款损失的概率不会超过5%。</li><li>次级。借款人的还款能力出现明显问题，需要通过处分资产或对外融资乃至执行抵押担保来还款付息。贷款损失的概率在30%-50%。</li><li>可疑。借款人无法足额偿还贷款本息，即使执行抵押或担保，也肯定要造成一部分损失，贷款损失的概率在50%-75%之间。</li><li>损失。指借款人已无偿还本息的可能，无论采取什么措施和履行什么程序，贷款都注定要损失了，其贷款损失的概率在75%-100%。</li></ol><p>&nbsp; &nbsp; &nbsp;<img src="https://user-gold-cdn.xitu.io/2019/4/4/169e79a12fea1c0e?w=600&amp;h=354&amp;f=png&amp;s=257558"><br></p><p><b>扩展资料</b></p><p>获贷技巧</p><p>1、借款理由：贷款人在申请贷款的过程中，贷款理由应该坦诚并且清晰，详细的写出贷款的用途以及个人还贷方面的优势。例如：良好的个人信用记录。</p><p>2、借款金额：贷款人在银行申请贷款的金额不宜太高，因为金额越大，失败的可能性也就越高，然而这并不是贷款人所希望的，他们肯定不希望自己的贷款资金在半个月内还看不到放款的动静。倘若贷款人所申请的贷款较大的话，建议你适当降低贷款数额，这样通过银行审核的希望也就大大增加了。</p><p>3、借款说明：详细的填写申请资料，借款的用途、个人信用记录、收入来源、还款能力以及家庭收入情况等等。以保证你的借款不管何时何地何情况，都能够准时的偿还贷款。</p><p>4、贷款偿还：借款人成功申请贷款之后，就必须要按照规定的时间还款，切勿出现侥幸心理，耽误还款时间，从而造成不良的个人信用记录。另外，对于拖欠的贷款，相关部门也会尽全力追回。</p><p>参考资料：<a title="百度百科-贷款" href="https://baike.baidu.com/item/%E8%B4%B7%E6%AC%BE">百度百科-贷款</a></p><p></p><p></p><p></p><p></p><p><br></p>';
class ArticleBody extends Component{
    render(){
        return(
            <main>
                <div className="list-container">
                    <div dangerouslySetInnerHTML={{__html: htmlStr}}/>
                </div>
            </main>
        )
    }
}

export default ArticleBody;