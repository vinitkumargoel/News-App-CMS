import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './background.css';
export default class BackgroundEffect extends Component{
    constructor(props){
        super(props);
    }
    handleClick = (parentRef,e)=>{
        this.props.action(e);
        let parentElem = ReactDOM.findDOMNode(parentRef);
        this.props.action(parentElem.getBoundingClientRect);
    }
    render() {
        return (<div onClick={this.handleClick.bind(this,this.parentRef)} ref={(ref)=>{this.parentRef=ref}} className={''}style={{height:'100%',width:'100%',backgroundColor:'bisque'}}>
        </div>);
    }
}