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

//component
class ScrumPlayer extends Component {

  render() {
    return (
            <div className={styles.smaster}>
              <h1>Scrum Player Deck</h1>
              <StoryDetails isMaster={this.props.isMaster}/>
              <div id="cards" className={styles.cards}>
                <h3>Story Points<small><em>(modified Fibonacci)</em></small></h3>
                <input type="radio" /><label>1/2</label>
                <input type="radio" /><label>1</label>
                <input type="radio" /><label>2</label>
                <input type="radio" /><label>3</label>
                <input type="radio" /><label>5</label>
                <input type="radio" /><label>8</label>
                <input type="radio" /><label>13</label>
                <input type="radio" /><label>20</label>
              </div>
              <label htmlFor="explanation">Explanation : </label>
              <textarea id="explanation" placeholder="justify your score..."/>
              <button>Submit</button>
            </div>
    );
  }
}

export default ScrumPlayer;
