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
  constructor(props){
    super(props);
    this.state = this.props.initState;
  }

  render() { 
    let isMaster = this.props.initState.isMaster; 
    console.log(this.props.initState); 
    return (
            <div className={styles.spoker}>
              <h1>LBG Scrum poker <small>an agile tool</small></h1>
               {(this.props.initState.joined)? null :
                    <SPLauncher 
                        initLaunch={this.state} 
                        actions={
                                  {
                                    joinRoom : this.props.actions.joinRoom,
                                    createRoom : this.props.actions.createRoom
                                  }
                                }
                    />
                } 
              <Route path="/dashboard/spoker/create" render={()=>(<RoomConfig />)}/>
              <Route path="/dashboard/spoker/join" render={(isMaster)?()=>(<ScrumMaster isMaster={isMaster}/>)
                                                                     :()=>(<ScrumPlayer isMaster={isMaster}/>)} />
            </div>
    );
  }
}

export default ScrumPoker;
