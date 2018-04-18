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
    switch(action.type){
        case pokerActions.JOIN_ROOM:
                        action.payload.joined = true;
                        return Object.assign(newState,state,{playerInfo:action.payload});
        case pokerActions.CREATE_ROOM:
                        state.playerInfo.joined = true;
                        state.playerInfo.isMaster = true;
                        return Object.assign(newState,state);  
        default:
                        return state;
    }
}

//write your own root reducer
export default combineReducers({
    welcome:welcomeReducer,
    poker:pokerReducer
});