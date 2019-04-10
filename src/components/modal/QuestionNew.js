import React,{Component} from 'react';

class QuestionNew extends Component{
    render(){
        const {modalStyle,closeModal} = this.props;
        return(
            <div className="modal-mask" style={modalStyle}>
                <div className="modal-container">
                    <div className="modal-header">
                        <div>提问题</div>
                        <span className="close" onClick={closeModal}></span>
                    </div>
                    <div className="modal-body">
                        <textarea className="modal-editor" placeholder={"输入问题..."}></textarea>
                    </div>
                    <div className="modal-bottom">
                        <button>提交</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionNew;