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
import {pointingMethod} from './common/commonData';


//sematic-ui imports
import { Grid, Header, Segment } from 'semantic-ui-react';

//component
class ScrumPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pointingMethod: [0, 1, 2, 3, 5, 8, 13, 20],
      selected: "",
      playerList: [],
      socket: io('http://10.17.14.226:3002/spoker', {
        transports: ['websocket']
      }),
    };
  }

  componentDidMount() {
    this.state.socket.on('users', (cls) => {
      this.setState({ playerList: cls });
    });
    this.state.socket.on('freeze', (msg) => {

    });
  }

  handleClick = (e) => {
    let srcElem = e.target;
    switch (srcElem.type) {
      case 'radio':
        this.setState({ selected: srcElem.id });
        this.state.socket.emit('point', this.state.pointingMethod[srcElem.id]);
        break;
      default:
    }
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
                <StoryDetails isMaster={this.props.isMaster} initStoryInfo={this.props.initStoryInfo} />

              </Grid.Column>

              <Grid.Column width={4}>
                <PlayerList playerList={this.state.playerList} />
              </Grid.Column>

              <Grid.Column width={16}>
                <div id="cards" className={styles.cards}>
                  <h3>Story Points<small><em>(modified Fibonacci)</em></small></h3>
                  <div className={styles.pointingMethod}>
                    {
                      this.state.pointingMethod.map((p, i) => {
                        return <div key={i}>
                          <input id={i} type="radio" onClick={this.handleClick} checked={this.state.selected === i.toString()} />
                          <label>{p}</label>
                        </div>
                      })
                    }
                  </div>
                </div>
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
