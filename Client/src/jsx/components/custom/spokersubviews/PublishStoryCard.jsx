import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react';

class SelectPointCard extends Component {
  render() {
    return (

      <Card fluid style={{ maxHeight: '100%' }}>
        <Card.Content>
          <Card.Header>
            Story {this.props.initStoryInfo.storyID} is published
        </Card.Header>
          <Card.Meta>
            Ask Team mates to vote
          </Card.Meta>
          <Card.Description>
            The story <strong>{` ${this.props.initStoryInfo.storyID} `}</strong> , of epic 
            <strong>{` ${this.props.initStoryInfo.epic} `}</strong> of 
            <strong>{` ${this.props.initStoryInfo.storyflag} `}</strong> priority 
            <strong>{` - ${this.props.initStoryInfo.desc} `}</strong> has been published for voting.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui one buttons'>
            <Button basic onClick={this.props.closeAction} color='red'>Close</Button>
          </div>
        </Card.Content>
      </Card>);
  }
}

export default SelectPointCard;