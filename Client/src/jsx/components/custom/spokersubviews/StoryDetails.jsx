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
class StoryDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
                isMaster: this.props.isMaster,
                storyID : this.props.initStoryInfo.storyID,
                epic : this.props.initStoryInfo.epic,
                description : this.props.initStoryInfo.description
        };
    }

    handleInput = (e)=>{
    let srcElem = e.target;
    switch(srcElem.id){
      case "storynum":
                      this.setState({storyID:srcElem.value});
                      break;
      case "epic":
                      this.setState({epic:srcElem.value});
                      break;
      case "desc":
                      this.setState({description:srcElem.value});
                      break;
      default :

    }
  }

  handleClick = (e)=>{
    let srcElem = e.target;
    switch(srcElem.id){
      case "publish":
                      this.props.actions.publishStory(this.state);
                      break;
      default :

    }
  }

    render() {
        return (
                <div className={styles.smaster}>
                    <h3>Story Details</h3>
                    
                    <div className={styles.storynum}>            
                            <label htmlFor="storynum">Story Number : </label>
                            <input id="storynum" type="text" value={this.state.storyID} placeholder="Enter Story #" 
                            onChange={this.handleInput} disabled={!this.state.isMaster}/>
                    </div>

                    <div className={styles.epic}>            
                            <label htmlFor="epic">Epic : </label>
                            <input id="epic" type="text" value={this.state.epic} placeholder="Enter epic #" 
                            onChange={this.handleInput} disabled={!this.state.isMaster}/>
                    </div>

                    <div className={styles.desc}>            
                            <label htmlFor="desc">Story Description : </label>
                            <textarea id="desc" type="text" value={this.state.description} placeholder="Enter Story Description" 
                            onChange={this.handleInput} disabled={!this.state.isMaster}></textarea>
                    </div>
                    {(!this.state.isMaster)?null:<button id="publish" onClick={this.handleClick}>Publish Story</button>}
                    <hr />
                </div>
        );
    }
}

export default StoryDetails;
