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
class Observer extends Component {

  render() {
    return (
            <div className={styles.observer}>
                 <hr/>
                    <h3>Observer View</h3>
                <hr/>
            </div>
    );
  }
}

export default Observer;
