import React,{Component} from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';

//custom imports
import { testAction } from '../../js/actions/actionCreators';

//style imports
import styles from '../../css/HeaderStyle.css';

class Header extends Component{
    render(){
        return (
            <div className={styles.header}>
                <h3 onClick={this.props.onClick}>The Header</h3>
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
            //dispatch();
        }
    }
}

const HeaderContainer = connect(mapStoreToProps, mapActionsToProps)(Header);

export default HeaderContainer;