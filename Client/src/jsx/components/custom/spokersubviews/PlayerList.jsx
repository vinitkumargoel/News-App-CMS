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

    const users = [
      'Lena', 'Paul', 'Amit', 'Anne', 'Silpa', 'Smith', 'Lisa', 'Meenu', 'Sachin'
    ]
    return (
      <Segment>
        <Header textAlign='center' padded as='h2'>Player list</Header>
        {/* {
          this.props.playerList.map((p, i) => {
            return <p key={i}>{p}</p>;
          })
        } */}
        <List divided verticalAlign='middle'>
          {users.map(user=>
          <List.Item>
            <List.Content key={user} floated='right'>
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
