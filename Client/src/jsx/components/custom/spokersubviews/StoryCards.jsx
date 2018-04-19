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
class StoryCards extends Component {

  render() {
    return (
            <div className={styles.smaster}>
                    <h3>Stories Estimated</h3>
                    <button>Export</button>
                    <hr/>
            </div>
    );
  }
}

export default StoryCards;
