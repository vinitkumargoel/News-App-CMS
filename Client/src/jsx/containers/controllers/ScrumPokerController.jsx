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
import io from 'socket.io-client';

//style imports
import styles from '../../../css/ScrumPokerStyle.css';

//component imports
import ScrumPoker from '../../components/custom/ScrumPoker';

class SPView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        // spokerSocket: io('http://10.17.14.226:3002/spoker',{
        //                 transports : ['websocket']
        //               }),
    }
  }

  componentDidMount(){
    // this.state.spokerSocket.on('connect',()=>{
    //   console.log("joined");
    // });
  }

  componentWillReceiveProps(nextProps, prevState){ 
    return nextProps;
  }

  mapViewActionsToProps = ()=>{
    return {
      joinRoom : this.props.joinRoom,
      createRoom : this.props.createRoom
    };
  }

  render(){
    return (
        <ScrumPoker actions={this.mapViewActionsToProps()} initState={this.props.store.playerInfo}/>
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
            dispatch(spokerAction(pl));         
        },
        createRoom : (pl) => {
          pl.id = 1;
          dispatch(spokerAction(pl));
        }
    };
}

const ScrumPokerController = withRouter(connect(mapStoreToProps, mapActionsToProps)(SPView));

export default ScrumPokerController;
