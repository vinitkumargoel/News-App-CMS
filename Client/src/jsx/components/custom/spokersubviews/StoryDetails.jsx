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
                isMaster: this.props.isMaster
        };
    }

    handleInput = (e) => {

    }

    render() {
        return (
                <div className={styles.smaster}>
                    <hr/>
                    <h3>Story Details</h3>
                    
                    <div className={styles.storynum}>            
                            <label htmlFor="storynum">Story Number : </label>
                            <input id="storynum" type="text" value={this.state.storynum} placeholder="Enter Story #" 
                            onChange={this.handleInput} disabled={!this.state.isMaster}/>
                    </div>

                    <div className={styles.epic}>            
                            <label htmlFor="epic">Epic : </label>
                            <input id="epic" type="text" value={this.state.epic} placeholder="Enter epic #" 
                            onChange={this.handleInput} disabled={!this.state.isMaster}/>
                    </div>

                    <div className={styles.desc}>            
                            <label htmlFor="desc">Story Description : </label>
                            <textarea id="desc" type="text" value={this.state.desc} placeholder="Enter Story Description" 
                            onChange={this.handleInput} disabled={!this.state.isMaster}></textarea>
                    </div>
                    <hr/>
                </div>
        );
    }
}

export default StoryDetails;
