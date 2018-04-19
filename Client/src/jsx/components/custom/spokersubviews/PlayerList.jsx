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
class PlayerList extends Component {

  render() {
    return (
            <div className={styles.smaster}>
              <h3>Player List</h3>
              {
                this.props.playerList.map((p,i)=>{
                  return <p key={i}>{p}</p>;
                })
              }
              <hr/>
            </div>
    );
  }
}

export default PlayerList;
