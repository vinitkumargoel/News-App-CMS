import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'
// import CardImg from '../../../../img/jpg/Penguins.jpg';
class PointScoreCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card id={this.props.point} style={{cursor: 'pointer' }} >
                <Image size="small" src={this.props.image} />
                <Card.Content style={{position:"absolute", left: '45%', top:'52%',
                transform: 'translate(-50%, -50%)', border: 'none', fontSize: '250%' , color: 'black', }}>
                {this.props.point}
                </Card.Content>
                <Card.Content>
                    <Card.Description>
                        <b>{this.props.displayData}</b>
                    </Card.Description>
                </Card.Content>
            </Card>);
    }   
}

export default PointScoreCard;