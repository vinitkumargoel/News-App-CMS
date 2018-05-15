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
import styles from '../../css/FooterStyle.css';

class Footer extends Component{
    render(){
        return (
            <div className={styles.footer}>
                <h2 onClick={this.props.onClick}>The Footer</h2>
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

const FooterContainer = connect(mapStoreToProps, mapActionsToProps)(Footer);

export default FooterContainer;