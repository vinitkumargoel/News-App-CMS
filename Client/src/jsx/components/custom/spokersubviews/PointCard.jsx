import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
class PointCard extends Component {
    render() {
        return (
            <Card style={{ margin: 10 }}>
                <Image size="small" src={this.props.image} />
                <Card.Content>
                    <Card.Description>
                        <b>{this.props.displayData}</b>
                    </Card.Description>
                </Card.Content>
            </Card>);
    }
}

export default PointCard;