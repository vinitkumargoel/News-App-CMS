import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'
// import CardImg from '../../../../img/jpg/Penguins.jpg';
class SelectPointCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card style={{ margin: 10 }}>
                <Image size="small" src={this.props.image} />
                <Card.Content style={{position:"absolute", left: '50%', top:'75%',
                transform: 'translate(-50%, -50%)', border: 'none', fontSize: '400%' , color: 'black'}}>
                {this.props.point}
                </Card.Content>
            </Card>);
    }
}

export default SelectPointCard;