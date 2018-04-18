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

  render() {   
    return (
            <div className={styles.spoker}>
                <h3>Configure Room</h3>
                <ol>
                  <li>
                      <ul>
                          <li>0</li>
                          <li>1</li>
                          <li>2</li>
                      </ul>
                  </li>
                </ol>
            </div>
    );
  }
}

export default RoomConfig;
