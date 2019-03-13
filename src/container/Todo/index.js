import React, { Component } from 'react';
require('./Todo.css');


export default class Todo extends Component {
    handleClick(event){
        alert(event.target.innerHTML);
    }
    render(){
        return(
            <div>
                <ul className='test' onClick={ (event)=>{this.handleClick(event)} }>
                    <li>bwm</li>
                    <li>benz</li>
                    <li>audi</li>
                    <li>volov</li>
                </ul>
            </div>
        )
    }
}