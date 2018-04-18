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
class Conclusion extends Component {

  render() {
    return (
            <div className={styles.smaster}>
                 <hr/>
                    <h3>Summary</h3>
                <hr/>
            </div>
    );
  }
}

export default Conclusion;
