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
import StoryDetails from './StoryDetails';
import PlayerList from './PlayerList';
import {pmData} from './common/commonData';
import SelectPointCardList from './SelectPointCardList';


//sematic-ui imports
import { Grid, Header, Segment } from 'semantic-ui-react';

//component
class ScrumPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
    };
  }

  handleClick = (e) => {
    let srcElem = e.target;
    switch (srcElem.type) {
      case 'radio':
        this.setState({ selected: srcElem.id });
        break;
      default:
    }
  }

  render() {
    return (
      <Grid columns="equal">
        <Grid.Column width={1} />
        <Grid.Column width={14}>
          <Segment>
            <Header textAlign='center' padded="true" as='h2'>Room name: {this.props.initRoomInfo.roomname}</Header>
            <Grid columns="equal">
              <Grid.Column width={12}>
                <StoryDetails isMaster={this.props.isMaster} initStoryInfo={this.props.initStoryInfo} />
                <hr/>
                <Header textAlign='center' padded="true" as='h3'>Story pointing</Header>
                <SelectPointCardList pointingMethod={pmData[this.props.initRoomInfo.pointingMethod]} actions={this.props.actions}/>
              </Grid.Column>

              <Grid.Column width={4}>
                <PlayerList playerList={this.props.playerList} />
              </Grid.Column>
            </Grid>
          </Segment>
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid>
    );
  }
}

export default ScrumPlayer;
