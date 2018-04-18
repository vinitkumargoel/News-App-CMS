import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';

//custom imports
import { navAction } from '../../js/actions/actionCreators';

//style imports
import styles from '../../css/NavigationStyle.css';

class Navigation extends React.Component {
    render(){ 
      return (
            <div className={styles.nav}>
                <h3>Navigation</h3>
                <ul>
                    <li><Link to="/" onClick={this.props.onClick}>Home</Link></li>
                    <li><Link to="/dashboard" onClick={this.props.onClick}>DashBoard</Link></li>
                </ul>
            </div>
            );
    }
}

const mapStoreToProps = (context,ownProps)=>{
    return {
        store : context
    }
}

const mapActionsToProps = (dispatch,ownProps)=>{
    return {
        onClick : (e)=>{
            dispatch(navAction({isFirstVisit:false}));
        }
    }
}

const NavigationContainer = connect(mapStoreToProps, mapActionsToProps)(Navigation);

export default NavigationContainer;
