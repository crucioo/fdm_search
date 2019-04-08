import React,{Component} from 'react';
import 'braft-editor/dist/index.css';
import BraftEditor from 'braft-editor';
import { Route } from 'react-router-dom';

class Editor extends Component{
    constructor(){
        super();
        this.state={
            editorState: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>'), // 设置编辑器初始内容
            outputHTML: '<p></p>'
        }
    }

    componentDidMount () {
        this.isLivinig = true
        // 3秒后更改编辑器内容
        setTimeout(this.setEditorContentAsync, 3000)
    }

    componentWillUnmount () {
        this.isLivinig = false
    }

    handleChange = (editorState) => {
        this.setState({
            editorState: editorState,
            outputHTML: editorState.toHTML()
        })
    }

    setEditorContentAsync = () => {
        this.isLivinig && this.setState({
            editorState: BraftEditor.createEditorState('<p>你好，<b>世界!</b><p>')
        })
    }
    render(){
        return(
            <div>
                <div className="editor-wrapper">
                <BraftEditor
                    value={this.state.editorState}
                    onChange={this.handleChange}
                />
                </div>
                <h5>输出内容</h5>
                <div className="output-content">{this.state.outputHTML}</div>
            </div>
        )
    }
}

export default Editor;



