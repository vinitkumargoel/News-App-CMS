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

//component imports

//semantic-ui imports
import { Button, Image, List, Segment, Header, Icon } from 'semantic-ui-react';

//component
class PlayerList extends Component {

  render() {
    return (
      <Segment>
        <Header textAlign='center' padded="true" as='h2'>Team</Header>
        {/* {
          this.props.playerList.map((p, i) => {
            return <p key={i}>{p}</p>;
          })
        } */}
        <List divided verticalAlign='middle'>
          {this.props.playerList.map((user,i) =>
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
      </Segment>
    );
  }
}

export default PlayerList;
