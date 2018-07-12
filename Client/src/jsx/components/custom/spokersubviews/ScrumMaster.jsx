//core imports
import React, { Component } from 'react';
import {
  BrowserRouter as Router,  
} from 'react-router-dom';
import { connect } from 'react-redux';


//container imports
import { setPublish,submitStory, setShowVotes, setVoting } from '../../../../js/actions/actionCreators/index';
import { spokerAction } from '../../../../js/actions/actionCreators';


//semantic-ui imports
import { Grid, Header } from 'semantic-ui-react';

//component imports
import StoryDetails from './StoryDetails';
import PlayerList from './PlayerList';
import PointCardList from './PointCardList';
import StoryCards from './StoryCards';
import PublishStoryCard from './PublishStoryCard.jsx';
import StatisticalView from "./StatisticalView";
//component
export class ScrumMaster extends Component {
  closePublish() {
    this.props.setPublish(false);
  }
  componentDidUpdate(prevProps) {
    if (this.props.publish && (this.props.publish !== prevProps.publish)) {
      window.setTimeout(function () {  this.props.setPublish(false) }.bind(this), 8000)
    }

  }
  render() {
    return (
      <Grid columns="equal">
        <Grid.Column width={1} />
        <Grid.Column width={14}>
            <Header textAlign='center' padded="true" as='h2'>{this.props.roomInfo.roomname+' Room'}
              <Header.Subheader>Room Number: {this.props.roomInfo.roomnum}</Header.Subheader>
            </Header>
            <Grid columns="equal">
              <Grid.Column width={12}>
                <StoryDetails
                  isMaster={this.props.isMaster}
                  setPublish={this.props.setPublish}
                  setVoting={this.props.setVoting}
                  initStoryInfo={this.props.initStoryInfo}
                  actions={{ publishStory: this.props.publishStory }}
                />
                <hr />
                {this.props.publish && (<PublishStoryCard closeAction={this.closePublish.bind(this)}
                  initStoryInfo={this.props.initStoryInfo} />)}
                <div>
                  <PointCardList pointList={this.props.pointList}
                  showVotes={this.props.showVotes} toggleShowVotes={this.props.setShowVotes} actions={{clearPoints:this.props.actions.clearPoints}}/>
                  {this.props.showVotes ? <StatisticalView initStoryInfo={this.props.initStoryInfo} 
                  pointList={this.props.pointList} roomInfo={this.props.roomInfo}
                  submitStory={this.props.submitStory} toggleShowVotes={this.props.setShowVotes} playerList={this.props.playerList }  
                  /> : null}
                </div>
              </Grid.Column>

              <Grid.Column width={4}>
                <PlayerList playerList={this.props.playerList} />
                <StoryCards sizingMethod={this.props.roomInfo.pointingMethod} storyList={this.props.storyList} />
              </Grid.Column>
            </Grid>
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid>
    );
  }
}


const mapStateToProps = state => {

  return {
    publish: state.poker.configData.ScrumMaster.showPublish,
    showVotes: state.poker.configData.ScrumMaster.showVotes,
    isMaster: state.poker.playerInfo.isMaster,
    initStoryInfo: state.poker.storyInfo,
    roomInfo: state.poker.roomInfo,
    pointList: state.poker.pointList,
    playerList: state.poker.playerList,
    storyList: state.poker.storyList
  }
}

const mapDispatchToProps = dispatch => ({
  setPublish: bool => dispatch(setPublish(bool)),
  publishStory: (pl) => {
    pl.id = 2;
    pl.from = "local2";
    dispatch(spokerAction(pl));
  },
  submitStory:storyDetails => dispatch(submitStory(storyDetails)),
  setShowVotes:bool => dispatch(setShowVotes(bool)),
  setVoting:bool => dispatch(setVoting(bool))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScrumMaster)

