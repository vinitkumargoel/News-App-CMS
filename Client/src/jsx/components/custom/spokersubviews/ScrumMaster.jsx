//core imports
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { connect } from 'react-redux';


//container imports
import { setPublish, submitStory, setShowVotes, setVoting, setProject, setProjects, setIssue, setIssues } from '../../../../js/actions/actionCreators/index';
import { spokerAction } from '../../../../js/actions/actionCreators';


//semantic-ui imports
import { Grid, Header, Modal, Button, Icon } from 'semantic-ui-react';

//component imports
import SearchProjects from './SearchProjects.jsx';
import SearchIssues from './SearchIssues.jsx';
import StoryDetails from './StoryDetails';
import PlayerList from './PlayerList';
import PointCardList from './PointCardList';
import StoryCards from './StoryCards';
import PublishStoryCard from './PublishStoryCard.jsx';
import StatisticalView from "./StatisticalView";
import urls from './../../../../js/resources/url.js';
import { getStatusText } from '../../../../js/resources/content.js';
import { TempModal } from './common/customComponents';
import { CONSTANTS } from './common/commonData.js';
import { fetchIssues } from './common/utils.js';



//component
export class ScrumMaster extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      message: '',
      fetchIssues: false
    }
    this.setFetchIssues = this.setFetchIssues.bind(this);
  }
  closePublish() {
    this.props.setPublish(false);
  }
  handleModalClick = (e) => {
    if (e.target.innerText.trim() === 'Okay') {
      this.setState({ open: false });
    }
  }
  setFetchIssues(bool) {
    this.setState({ fetchIssues: bool });
  }
  componentDidUpdate(prevProps) {
    if (this.props.publish && (this.props.publish !== prevProps.publish)) {
      window.setTimeout(function () { this.props.setPublish(false) }.bind(this), 8000)
    }
    if (this.props.project) {
      if ((this.props.project !== prevProps.project) || (!Array.isArray(this.props.issues) || !this.props.issues.length))
        fetchIssues.call(this, CONSTANTS.defaultJql.replace('<projectID>', this.props.project), 0);
      else if (this.state.fetchIssues) {

        const lastPage = this.props.issues[this.props.issues.length - 1];
        const startAt = lastPage.startAt + lastPage.issues.length;
        if (startAt < lastPage.total)
          fetchIssues.call(this, CONSTANTS.defaultJql.replace('<projectID>', this.props.project),
            startAt);
        this.setFetchIssues(false);
      }
    }

  }
  componentDidMount() {
    const creds = this.props.jiraCreds;
    const url = `${urls.nodeServer}${urls.jiraApi.projects}`;
    window.fetch(url, {
      method: "GET",
      headers: {
        "Authorization": creds,
      }
    })
      .then((response) => {
        if (response.ok)
          return response.json();
        else if (getStatusText(response.status)) {

          this.setState({ open: true, message: getStatusText(response.status) });

        }
        else {
          this.setState({ open: true, message: "An Error occured. Please try again later." });
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        this.props.setProjects(data);

      })
      .catch(error => {
        if (error.message !== 'Network response was not ok.')
          this.setState({ open: true, message: 'An Error occured. Please try again later.' });
        console.log(error);
      })
  }

  render() {
    return (
      <Grid columns="equal">
        <Grid.Column width={1} />
        <Grid.Column width={14}>
          <Header textAlign='center' padded="true" as='h2'>{this.props.roomInfo.roomname + ' Room'}
            <Header.Subheader>Room Number: {this.props.roomInfo.roomnum}</Header.Subheader>
          </Header>
          <Grid columns="equal">
            <Grid.Column width={12}>
              <Header textAlign='left' padded="true" as='h3'>Project details</Header>
              <SearchProjects project={this.props.project} projectsList={this.props.projects} actions={{ setProject: this.props.setProject }} />
              <hr />
              <SearchIssues issue={this.props.issue} issuesList={this.props.issues} actions={{ setIssue: this.props.setIssue, setFetchIssues: this.setFetchIssues }} />
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
                  showVotes={this.props.showVotes} toggleShowVotes={this.props.setShowVotes} actions={{ clearPoints: this.props.actions.clearPoints }} />
                {this.props.showVotes ? <StatisticalView initStoryInfo={this.props.initStoryInfo}
                  pointList={this.props.pointList} roomInfo={this.props.roomInfo}
                  submitStory={this.props.submitStory} toggleShowVotes={this.props.setShowVotes} playerList={this.props.playerList}
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
        <TempModal open={this.state.open} >
          <Header icon='exclamation' content='Oh!' />
          <Modal.Content>
            <p>{this.state.message}</p>
          </Modal.Content>
          <Modal.Actions floated='right'>
            <Button color='green' inverted onClick={this.handleModalClick}>
              <Icon name='checkmark' /> Okay
                        </Button>

          </Modal.Actions>
        </TempModal>
      </Grid>
    );
  }
}


const mapStateToProps = state => {

  return {
    publish: state.poker.configData.ScrumMaster.showPublish,
    project: state.poker.configData.ScrumMaster.project,
    issue: state.poker.configData.ScrumMaster.issue,
    showVotes: state.poker.configData.ScrumMaster.showVotes,
    isMaster: state.poker.playerInfo.isMaster,
    initStoryInfo: state.poker.storyInfo,
    roomInfo: state.poker.roomInfo,
    pointList: state.poker.pointList,
    playerList: state.poker.playerList,
    storyList: state.poker.storyList,
    issues: state.poker.issues,
    projects: state.poker.projects,
    jiraCreds: state.poker.creds
  }
}

const mapDispatchToProps = dispatch => ({
  setPublish: bool => dispatch(setPublish(bool)),
  publishStory: (pl) => {
    pl.id = 2;
    pl.from = "local2";
    dispatch(spokerAction(pl));
  },
  submitStory: storyDetails => dispatch(submitStory(storyDetails)),
  setShowVotes: bool => dispatch(setShowVotes(bool)),
  setVoting: bool => dispatch(setVoting(bool)),
  setProject: id => dispatch(setProject(id)),
  setProjects: data => dispatch(setProjects(data)),
  setIssue: id => dispatch(setIssue(id)),
  setIssues: data => dispatch(setIssues(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScrumMaster)

