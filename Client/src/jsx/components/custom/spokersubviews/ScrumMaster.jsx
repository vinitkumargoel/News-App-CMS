//core imports
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import io from 'socket.io-client';

//style imports
import styles from '../../../../css/ScrumPokerStyle.css';

//container imports

//semantic-ui imports
import { Grid, Segment, Header, GridColumn, Divider, Button } from 'semantic-ui-react';

//component imports
import StoryDetails from './StoryDetails';
import PlayerList from './PlayerList';
import StoryPointsList from './StoryPointsList';
import PointCardList from './PointCardList';
import StoryCards from './StoryCards';
// import Conclusion from './Conclusion';
import StatisticalView from "./StatisticalView"
//component
class ScrumMaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerList: [],
      pointList: [],
      socket: io('http://10.17.14.226:3002/spoker', {
        transports: ['websocket']
      }),
    }
  }

  componentDidMount() {
    this.state.socket.on('users', (cls) => {
      this.setState({ playerList: cls });
    });
    this.state.socket.on('points', (pls) => {
      this.setState({ pointList: pls });
    });
  }

  render() {
    return (
      <Grid columns="equals">
        <Grid.Column width={1} />
        <Grid.Column width={14}>
          <Segment>
            <Header textAlign='center' padded as='h2'>Room name: Security & Fraud</Header>
            <Grid columns="equals">
              <Grid.Column width={12}>
                <StoryDetails isMaster={this.props.isMaster} initStoryInfo={this.props.initStoryInfo} actions={{ publishStory: this.props.actions.publishStory }} />
                <hr />
                <PointCardList spointList={this.state.pointList} />
                <StatisticalView/>
              </Grid.Column>

              <Grid.Column width={4}>
                <PlayerList playerList={this.state.playerList} />
                <StoryCards />
              </Grid.Column>
            </Grid>
          </Segment>
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid>
    );
  }
}

export default ScrumMaster;
