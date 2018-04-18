//core imports
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom';
import PropTypes from 'prop-types';

//style imports
import styles from '../../../../css/ScrumPokerStyle.css';

//container imports

//component imports


//component
class SPLauncher extends Component {
  constructor(props){
    super(props);
    this.state = this.props.initLaunch;
  }

  handleInput = (e)=>{
    let srcElem = e.target;
    switch(srcElem.id){
      case "isMaster":
                      this.setState({isMaster:srcElem.checked,createLink:false});
                      break;
      case "roomid":
                      this.setState({roomid:srcElem.value,createLink:false});
                      break;
      case "email":
                      this.setState({email:srcElem.value,createLink:false});
                      break;
      case "usrid":
                      this.setState({usrid:srcElem.value,createLink:false});
                      break;
      case "pwd":
                      this.setState({pwd:srcElem.value,createLink:false});
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
      case "create":
                      this.props.actions.createRoom(this.state);
                      break;
      default :

    }
  }

  render() {
    console.log(this.state);
    return (
            <div className={styles.splauncher}>
                <form>  
                    <div className={styles.roomid}>            
                        <label htmlFor="roomid">Room Number : </label>
                        <input id="roomid" type="text" value={this.state.roomid} placeholder="Enter room #" 
                        onChange={this.handleInput}/>
                    </div>
                    <div className={styles.usrid}>
                        <label htmlFor="usrid">User Name : </label>
                        <input id="usrid" type="text" value={this.state.usrid} placeholder="Enter Username" 
                        onChange={this.handleInput}/>
                    </div>

                    <div className={styles.email}>
                        <label htmlFor="email">Email ID : </label>
                        <input id="email" type="email" value={this.state.email} placeholder="Enter EmailId" 
                        onChange={this.handleInput}/>
                    </div>

                    {(!this.state.isMaster)? null :
                        <div className={styles.pwd}>
                            <label htmlFor="pwd">Password : </label>
                            <input id="pwd" type="password" value={this.state.pwd} placeholder="Enter Password" 
                            onChange={this.handleInput}/>
                        </div>
                    }

                    <div className={styles.isMaster}>
                        <input id="isMaster" type="checkbox" checked={this.state.isMaster}
                        onChange={this.handleInput}/>
                        <label htmlFor="isMaster"><small>join as admin</small></label>
                    </div>

                    <Link id="join" className={styles.join} to="/dashboard/spoker/join" 
                            onClick={this.handleClick}>Join</Link>

                    <h6>----OR-----</h6>

                    <Link id="create" className={styles.create} to="/dashboard/spoker/create" 
                            onClick={this.handleClick}>Create</Link>
              </form>
            </div>
    );
  }
}

export default SPLauncher;
