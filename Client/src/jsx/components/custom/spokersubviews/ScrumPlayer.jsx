//core imports
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//style imports
import styles from '../../../../css/ScrumPokerStyle.css';

//container imports

//component imports
import StoryDetails from './StoryDetails';
import PlayerList from './PlayerList';
import { pmData } from './common/commonData';
import SelectPointCardList from './SelectPointCardList';
import PublishStoryCard from './PublishStoryCard.jsx';
import { spokerAction } from '../../../../js/actions/actionCreators';
import { setPublish } from '../../../../js/actions/actionCreators/index';

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
  componentDidUpdate(prevProps) {
    let publish = this.props.configData.ScrumMaster.showPublish;
    if (publish && (publish !== prevProps.configData.ScrumMaster.showPublish)) {
      window.setTimeout(function () {  this.props.setPublish(false) }.bind(this), 8000)
    }
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
  closePublish() {
    this.props.setPublish(false);
  }

  render() {
    let configData = this.props.configData;
    return (
      <Grid columns="equal">
        <Grid.Column width={1} />
        <Grid.Column width={14}>
            <Header textAlign='center' padded="true" as='h2'>Room name: {this.props.initRoomInfo.roomname}</Header>
            <Grid columns="equal">
              <Grid.Column width={12}>
                <StoryDetails isMaster={this.props.isMaster} initStoryInfo={this.props.initStoryInfo} />
                <hr />
                {configData.ScrumMaster.showPublish && (<PublishStoryCard closeAction={this.closePublish.bind(this)}
                  initStoryInfo={this.props.initStoryInfo} />)}
                <Header textAlign='center' padded="true" as='h3'>Story pointing</Header>
                <SelectPointCardList votesOpen={this.props.initStoryInfo.storyID} playerInfo={this.props.playerInfo} pointingMethod={pmData[this.props.initRoomInfo.pointingMethod]} actions={this.props.actions} />
              </Grid.Column>

              <Grid.Column width={4}>
                <PlayerList playerList={this.props.playerList} />
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
    configData: state.poker.configData,
    isMaster: state.poker.playerInfo.isMaster,
    initStoryInfo: state.poker.storyInfo,
    initRoomInfo: state.poker.roomInfo,
    playerList: state.poker.playerList,
    playerInfo: state.poker.playerInfo,

  }
}

const mapDispatchToProps = dispatch => ({
  setPublish: bool => dispatch(setPublish(bool)),
  actions: {
    selectPoint: (pl) => {
      pl.id = 3;
      pl.from = "local3";
      dispatch(spokerAction(pl));
    }
  }

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScrumPlayer);



