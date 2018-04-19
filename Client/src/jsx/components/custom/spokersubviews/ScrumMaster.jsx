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

//component imports
import StoryDetails from './StoryDetails';
import PlayerList from './PlayerList';
import StoryPointsList from './StoryPointsList';
import StoryCards from './StoryCards';
import Conclusion from './Conclusion';

//component
class ScrumMaster extends Component {
  constructor(props){
    super(props);
    this.state = {
      playerList:[],
      pointList:[],
      socket: io('http://10.17.14.226:3002/spoker',{
                        transports : ['websocket']
                       }),
    }
  }

  componentDidMount(){
     this.state.socket.on('users',(cls)=>{
       this.setState({playerList:cls});
     });
      this.state.socket.on('points',(pls)=>{
        this.setState({pointList:pls});
      });
  }

  render() {
    return (
            <div className={styles.smaster}>
              <h1>Scrum Master Deck</h1>
              <StoryDetails isMaster={this.props.isMaster} initStoryInfo={this.props.initStoryInfo} actions={{publishStory : this.props.actions.publishStory}}/>
              <PlayerList playerList={this.state.playerList}/>
              <StoryPointsList spointList={this.state.pointList}/>
              <StoryCards />
              <Conclusion />
            </div>
    );
  }
}

export default ScrumMaster;
