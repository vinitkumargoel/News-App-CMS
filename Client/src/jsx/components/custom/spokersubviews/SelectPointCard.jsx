import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react';

// import CardImg from '../../../../img/jpg/Penguins.jpg';
class SelectPointCard extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = (e)=>{
        this.props.actions.selectPoint({score:e.target.parentNode.id});
    }

    render() {
        return (
            
            <Card fluid id={this.props.point} style={{maxHeight:'100%'}}   onClick={this.handleClick}>
                <Image fluid src={this.props.image} />
                <Card.Content style={{position:"absolute", left: '50%', top:'70%',
                transform: 'translate(-50%, -50%)', border: 'none', fontSize: '3vm' , color: 'black', }}>
                {this.props.point}
                </Card.Content>
            </Card>);
    }   
}

export default SelectPointCard;