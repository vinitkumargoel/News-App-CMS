import { combineReducers } from 'redux';
import { NAV_ACTION,pokerActions } from '../actions/actionTypes';
import { merge } from 'immutable';

function welcomeReducer(state={},action){
    let newState = {};
    switch(action.type){
        case NAV_ACTION:
            return Object.assign(newState,state,{status:"updated",isFirstVisit:action.payload.isFirstVisit});
        default:
            return state;
    }
}

function pokerReducer(state={},action){
    let newState = {};
    let tempState = {};
    switch(action.type){
        case pokerActions.JOIN_ROOM:
                        action.payload.joined = true;
                        tempState = Object.assign({},state.playerInfo,action.payload);
                        return Object.assign(newState,state,{playerInfo:tempState});
        case pokerActions.CREATE_ROOM:
                        tempState = Object.assign({},state.playerInfo);
                        tempState.joined = true;
                        tempState.isMaster = true;
                        return Object.assign(newState,state,{playerInfo:tempState});  
        case pokerActions.PUBLISH_STORY:
                        tempState = Object.assign({},state.storyInfo,action.payload);
                        return Object.assign(newState,state,{storyInfo:tempState});  
        default:
                        return state;
    }
}

//write your own root reducer
export default combineReducers({
    welcome:welcomeReducer,
    poker:pokerReducer
});