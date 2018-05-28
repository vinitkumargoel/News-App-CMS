import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom';
import PropTypes from 'prop-types';

//custom imports
import { testAction } from '../../js/actions/actionCreators';

//style imports
import styles from '../../css/DashBoardStyle.css';

//component imports
import ScrumPokerController from './controllers/ScrumPokerController';

class DashBoard extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className={styles.dashboard}>
        <h3>Apps</h3>
        <ul>
          <li><Link to="/dashboard/spoker">Scrum Poker</Link></li>
        </ul>
        <hr/>
        <Route path="/dashboard/spoker" render={props => (<ScrumPokerController />)} />
      </div>
    );
  }
}

const mapStoreToProps = (context,ownProps)=>{
    return {
        store : context.welcome
    }
}

const mapActionsToProps = (dispatch,ownProps)=>{
    return {
    };
}

const DashBoardContainer = withRouter(connect(mapStoreToProps, mapActionsToProps)(DashBoard));

export default DashBoardContainer;
