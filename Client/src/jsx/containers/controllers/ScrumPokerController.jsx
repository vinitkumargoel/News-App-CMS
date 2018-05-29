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
import { spokerAction } from '../../../js/actions/actionCreators';

//component imports
import ScrumPoker from '../../components/custom/ScrumPoker';

class SPView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentDidMount(){
  }

  mapViewActionsToProps = ()=>{
    return {
      joinRoom : this.props.joinRoom,
      createRoom : this.props.createRoom,
      publishStory : this.props.publishStory,
      selectPoint : this.props.selectPoint,
      clearPoints : this.props.clearPoints
    };
  }

  render(){
    return (
        <ScrumPoker actions={this.mapViewActionsToProps()} 
                    store={this.props.store} 
        />
    );
  }
}

const mapStoreToProps = (context,ownProps)=>{
    return {
        store : context.poker
    }
}

const mapActionsToProps = (dispatch,ownProps)=>{
    return {
        joinRoom : (pl)=>{  
            pl.id = 0;
            pl.from = "local0";  
            dispatch(spokerAction(pl));         
        },
        createRoom : (pl) => {
          pl.id = 1;
          pl.from = "local1";
          dispatch(spokerAction(pl));
        },
        selectPoint : (pl) => {
          pl.id = 3;
          pl.from = "local3";
          dispatch(spokerAction(pl));
        },
        clearPoints : (pl)=>{
          pl.id = 4;
          pl.from = "local4";
          dispatch(spokerAction(pl));
        }
    };
}

const ScrumPokerController = withRouter(connect(mapStoreToProps, mapActionsToProps)(SPView));

export default ScrumPokerController;
