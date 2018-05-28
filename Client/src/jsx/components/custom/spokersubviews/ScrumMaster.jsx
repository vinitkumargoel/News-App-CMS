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
      showVotes:'false'
    }
    this.toggleShowVotes=this.toggleShowVotes.bind(this);
  }
  toggleShowVotes(value){
        this.setState({showVotes:value})
  }
  render() {
    return (
      <Grid columns="equal">
        <Grid.Column width={1} />
        <Grid.Column width={14}>
          <Segment>
            <Header textAlign='center' padded="true" as='h2'>{this.props.roomInfo.roomname+' Room '}</Header>
            <Header textAlign='left' padded="true" as='h2'>{'Room Id '+this.props.roomInfo.roomnum}</Header>
            
            <Grid columns="equal">
              <Grid.Column width={12}>
                <StoryDetails  isMaster={this.props.isMaster} initStoryInfo={this.props.initStoryInfo} actions={{ publishStory: this.props.actions.publishStory }} />
                <hr/>
                <div>
                  <PointCardList pointList={this.props.pointList} toggleShowVotes={this.toggleShowVotes} />
                  {this.state.showVotes=='true'?<StatisticalView pointList={this.props.pointList} roomInfo={this.props.roomInfo} playerList={this.props.playerList} />:null}
                </div>
              </Grid.Column>

              <Grid.Column width={4}>
                <PlayerList playerList={this.props.playerList} />
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
