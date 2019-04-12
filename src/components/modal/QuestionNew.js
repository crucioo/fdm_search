import React,{PureComponent} from 'react';

class QuestionNew extends PureComponent{
    render(){
        const {isShow,closeModal,questionValue,handleQuestionValue,textSum,textAreaSize} = this.props;
        return(
            <div className="modal-mask" style={{display:isShow?"block":"none"}}>
                <div className="modal-container">
                    <div className="modal-header">
                        <div>提问题</div>
                        <span className="close" onClick={closeModal}></span>
                    </div>
                    <div className="modal-body">
                        <textarea maxLength={textAreaSize} value={questionValue} onChange={handleQuestionValue} className="modal-editor" placeholder={"输入问题..."}>
                        </textarea>
                        <span className="modal-sum-count">
                            {textSum}
                        </span>
                    </div>
                    <div className="modal-bottom">
                        <button className={`modal-button ${(textAreaSize===textSum)?"not-allowed":""}`}>提交</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionNew;