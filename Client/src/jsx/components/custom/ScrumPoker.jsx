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

//component
class ScrumPoker extends Component {

  render() { 
    let isMaster = this.props.initPlayerInfo.isMaster;
    return (
            <div className={styles.spoker}>
              <h1>LBG Scrum poker <small>an agile tool</small></h1>
               {(this.props.initPlayerInfo.joined)? 
                <div>
                  <Route path="/dashboard/spoker/create" render={()=>(<RoomConfig initRoomInfo={this.props.initRoomInfo}  actions={
                                  {
                                    joinRoom : this.props.actions.joinRoom
                                  }
                                }/>)}/>
                  <Route path="/dashboard/spoker/join" render={(isMaster)?()=>(<ScrumMaster isMaster={isMaster}/>)
                                                                     :()=>(<ScrumPlayer isMaster={isMaster}/>)} />
                </div>
                :
                    <SPLauncher 
                        initLaunch={this.props.initPlayerInfo} 
                        actions={
                                  {
                                    joinRoom : this.props.actions.joinRoom,
                                    createRoom : this.props.actions.createRoom
                                  }
                                }
                    />
                } 
            </div>
    );
  }
}

export default ScrumPoker;
