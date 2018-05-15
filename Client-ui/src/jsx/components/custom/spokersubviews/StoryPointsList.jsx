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
class StoryPointsList extends Component {

  render() {
    return (
            <div className={styles.smaster}>
              <h3>Point List</h3>
              {
                this.props.spointList.map((s,i)=>{
                  return <p key={i}>{s}</p>
                })
              }
              <button>Show</button>
              <button>Clear</button>
              <hr />
            </div>
    );
  }
}

export default StoryPointsList;
