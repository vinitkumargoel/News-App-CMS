//core imports
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';

//style imports
import styles from '../../../css/ScrumPokerStyle.css';

//container imports

//component imports
import ScrumMaster from './spokersubviews/ScrumMaster';
import ScrumPlayer from './spokersubviews/ScrumPlayer';
import SPLauncher from './spokersubviews/SPLauncher';
import RoomConfig from './spokersubviews/RoomConfig';

//semantic-ui components
import { Container, Header } from 'semantic-ui-react';

//component
class ScrumPoker extends Component {

  render() {
    let isMaster = this.props.store.playerInfo.isMaster;

    return (
      <Container fluid>
        <br />
        <Header textAlign='center' padded="true" as='h1'>Lloyds Scrum Poker</Header>
        {(this.props.store.playerInfo.joined) 
        ?   <div>
                  <Route path="/dashboard/spoker/create" 
                          render={() => (<RoomConfig 
                                              initRoomInfo={this.props.store.roomInfo} 
                                              actions={{
                                                  joinRoom: this.props.actions.joinRoom,
                                                  setJiraCreds: this.props.actions.setJiraCreds
                                              }} 
                                          />)}
                  />
                  <Route path="/dashboard/spoker/join" 
                          render={(isMaster) ? () => (<ScrumMaster 
                                                          actions={{
                                                                clearPoints : this.props.actions.clearPoints
                                                          }} 
                                                      />)
                                             : () => (<ScrumPlayer/>)}
                  />
            </div>
        :   <SPLauncher
                initLaunch={this.props.store.playerInfo}
                actions={
                      {
                        joinRoom: this.props.actions.joinRoom,
                        createRoom: this.props.actions.createRoom
                      }
                    }
              />
        }
      </Container>
    );
  }
}

export default ScrumPoker;
