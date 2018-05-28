//core imports
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';

//style imports
import styles from '../../../../css/ScrumPokerStyle.css';

//container imports

//semantic-ui imports
import { Grid,Button, Image, List, Segment, Header, Icon } from 'semantic-ui-react';

//component
class StoryCards extends Component {

  render() {
    return (
      <Segment >
      <Grid textAlign='center'>
        <Grid.Row >
          <Header  padded="true" as='h3'>Stories Estimated</Header>
        </Grid.Row>
        <Grid.Row style={{ minWidth: '200px', minHeight: '362px', maxHeight: '362px', overflowY: 'auto' }}>
          <List divided verticalAlign='middle'>
            {this.props.playerList&&this.props.playerList.map((user, i) =>
              <List.Item key={i}>
                <List.Content floated='right'>
                  <Button>Chat</Button>
                </List.Content>
                <Icon name='user' />
                <List.Content>
                  {user}
                </List.Content>
              </List.Item>)}
          </List>
        </Grid.Row>
      </Grid>
    </Segment>
    );
  }
}

export default StoryCards;
