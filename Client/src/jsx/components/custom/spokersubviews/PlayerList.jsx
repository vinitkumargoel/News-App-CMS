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
import { Grid, Button, Image, List, Segment, Header, Icon } from 'semantic-ui-react';

//component
class PlayerList extends Component {

  render() {
    return (

      <Segment >
        <Grid textAlign='center'>
          <Grid.Row >
            <Header padded="true" as='h2'>Team</Header>
          </Grid.Row>
          <Grid.Row style={{ minWidth: '200px', minHeight: '350px', maxHeight: '350px', overflowY: 'auto' }}>
            <List divided verticalAlign='middle'>
              {this.props.playerList.map((user, i) =>
                <List.Item key={i}>
                  <List.Content >
                    <Grid>
                      <Grid.Column width={8} verticalAlign='middle'>
                        <Icon name={user.isMaster?'user circle':'user'} size={user.isMaster?'big':'large'}/>
                        
                      </Grid.Column>
                      <Grid.Column width={8}>
                      {user.usrid}
                      </Grid.Column>
                    </Grid>
                  </List.Content>



                </List.Item>)}
            </List>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default PlayerList;
