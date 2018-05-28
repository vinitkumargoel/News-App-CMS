import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import { Card, Image } from 'semantic-ui-react';

// import CardImg from '../../../../img/jpg/Penguins.jpg';
class SelectPointCard extends Component {
    constructor(props) {
        super(props);
        this.state={hover:false}
        this.userRefs = {};
    }
    onHover=()=>{
        this.setState((prevState)=>({hover:!prevState.hover}));
    }
    handleClick = (e)=>{
        if(this.props.selected===null)
        this.props.actions.selectPoint({score:e.target.parentNode.id});
    }
    setRef=(refName,ref,objName='userRefs')=>{
        this[objName]=this[objName] === null?{}:this[objName];
        this[objName][refName] = ref;
    }


    render() {
        
        return (
            
            <Card fluid
            onMouseEnter={this.onHover} onMouseLeave={this.onHover} id={this.props.point} ref={this.setRef.bind(null,'parent')} style = {{height:'100%',margin:'0px',
            cursor:`${this.props.selected===null?'pointer':'default'}`,boxShadow: `${this.props.selected===true?'0 18px 16px -6px #4f4f4f':''}`
            ,transform:`${this.props.selected===null?this.state.hover?'translateY(-5px)':'':'translateY(3px)'}`}}  onClick={this.handleClick}>
                <Image disabled = {this.props.selected===null?false:!this.props.selected} fluid src={this.props.image} style={{height:'100%'}}/>
                <Card.Content style={{position:"absolute", left: '50%', top:'70%',
                transform: 'translate(-50%, -50%)', border: 'none', fontSize: '20px' , color: 'black', }}>
                {this.props.point}
                </Card.Content>
            </Card>);
    }   
}

export default SelectPointCard;