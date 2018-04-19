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


//component
class RoomConfig extends Component {
    constructor(props){
        super(props);
        this.state = this.props.initRoomInfo;
        this.state.hideList = false;
    }

    handleInput = (e)=>{
    let srcElem = e.target;
    switch(srcElem.id){
      case "roomnum":
                      this.setState({roomnum:srcElem.value});
                      break;
      case "password":
                      this.setState({password:srcElem.value});
                      break;
      case "isDefault":
                      this.setState({isDefault:srcElem.checked,hideList:!this.state.isDefault});
                      break;
      default :

    }
  }

  handleClick = (e)=>{
    let srcElem = e.target;
    switch(srcElem.id){
      case "join":
                      this.props.actions.joinRoom(this.state);
                      break;
      default :

    }
  }


    render() {   
        return (
                <div className={styles.spoker}>
                    <h3>Configure Room</h3>

                    <div className={styles.roomnum}>            
                                <label htmlFor="roomnum">Room Number : </label>
                                <input id="roomnum" type="text" value={this.state.roomnum} placeholder="Enter Room #" 
                                onChange={this.handleInput} />
                    </div>

                    <div className={styles.password}>            
                                <label htmlFor="password">Password : </label>
                                <input id="password" type="password" value={this.state.password} placeholder="Enter password #" 
                                onChange={this.handleInput} />
                    </div>

                    <h4>Select a Pointing Method</h4>
                    <div className={styles.pointing}>
                            <input id="isDefault" type="checkbox" checked={this.state.isDefault}
                            onChange={this.handleInput}/>
                            <label htmlFor="isDefault"><small>default method</small></label>
                    </div>

                    {(this.state.hideList)?null:<div>
                        <ol>
                        <li>
                            <ul>
                                <li>0</li>
                                <li>1</li>
                                <li>2</li>
                            </ul>
                        </li>
                        </ol>
                    </div>}

                    <Link id="join" className={styles.join} to="/dashboard/spoker/join" 
                            onClick={this.handleClick}>Start Session</Link>
                </div>
        );
    }
}

export default RoomConfig;
