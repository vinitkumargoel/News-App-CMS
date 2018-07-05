//core imports
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//custom imports
import { testAction } from '../js/actions/actionCreators';

//style imports
import styles from '../css/AppStyle.css';
import 'semantic-ui-css/semantic.min.css';

//container imports
import HeaderContainer from './containers/HeaderContainer';
import NavigationContainer from './containers/NavigationContainer';
import DashBoardContainer from './containers/DashBoardContainer';
import FooterContainer from './containers/FooterContainer';
import ScrumPokerController from './containers/controllers/ScrumPokerController';

//component imports
import Welcome from './components/custom/Welcome';

//component
class AppView extends Component {
  render() {
    return (
          <div className={styles.app}>
             <ScrumPokerController />
          </div>
    );
  }
}

const mapStoreToProps = (context,ownProps)=>{
    return {
    }
}

const mapActionsToProps = (dispatch,ownProps)=>{
    return {
        onClick : (e)=>{
            
        }
    }
}

const App = withRouter(connect(mapStoreToProps, mapActionsToProps)(AppView));

export default App;
