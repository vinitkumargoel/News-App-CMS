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

//container imports
import HeaderContainer from './containers/HeaderContainer';
import NavigationContainer from './containers/NavigationContainer';
import DashBoardContainer from './containers/DashBoardContainer';
import FooterContainer from './containers/FooterContainer';

//component imports
import Welcome from './components/custom/Welcome';

//component
class AppView extends Component {
  render() {
    return (
          <div className={styles.app}>
            <HeaderContainer />
            <hr/>
            <NavigationContainer />
            <hr/>
            {(this.props.isFirstVisit)?<Welcome />:null}
            <Route path="/dashboard" component={DashBoardContainer} >
            </Route>
            <hr/>
            <FooterContainer />   
          </div>
    );
  }
}

const mapStoreToProps = (context,ownProps)=>{
    return {
        isFirstVisit : context.welcome.isFirstVisit
    }
}

const mapActionsToProps = (dispatch,ownProps)=>{
    return {
        onClick : (e)=>{
            //dispatch(testAction({}));
        }
    }
}

const App = withRouter(connect(mapStoreToProps, mapActionsToProps)(AppView));

export default App;
