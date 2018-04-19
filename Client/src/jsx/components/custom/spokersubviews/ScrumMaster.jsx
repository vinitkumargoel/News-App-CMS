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
import StoryPointsList from './StoryPointsList';
import StoryCards from './StoryCards';
import Conclusion from './Conclusion';

//component
class ScrumMaster extends Component {

  render() {
    return (
            <div className={styles.smaster}>
              <h1>Scrum Master Deck</h1>
              <StoryDetails isMaster={this.props.isMaster} initStoryInfo={this.props.initStoryInfo} actions={{publishStory : this.props.actions.publishStory}}/>
              <PlayerList />
              <StoryPointsList />
              <StoryCards />
              <Conclusion />
            </div>
    );
  }
}

export default ScrumMaster;
