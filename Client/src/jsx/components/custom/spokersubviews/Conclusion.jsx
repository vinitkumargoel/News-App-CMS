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
                    <h3>Summary</h3>
                    <h4>Aggregate</h4>
                    <input type="text" defaultValue="1.61803398875"/>
                    <input type="checkbox" /><label>edit</label>
                    <h4>Stats</h4>
                    <table>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>0</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>0</td>
                          <td>1</td>
                          <td>0</td>
                        </tr>
                        <tr>
                          <td>0</td>
                          <td>1</td>
                          <td>0</td>
                        </tr>
                      </tbody>
                    </table>
            </div>
    );
  }
}

export default Conclusion;
