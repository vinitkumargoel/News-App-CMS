import { combineReducers } from 'redux';
import { NAV_ACTION,pokerActions } from '../actions/actionTypes';
import { merge } from 'immutable';
import update from 'immutability-helper';

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
    let from='';
    switch(action.type){
        case pokerActions.JOIN_ROOM:
                        action.payload.joined = true;
                        tempState = Object.assign({},state.playerInfo,action.payload);
                        return Object.assign(newState,state,{playerInfo:tempState},{from:action.payload.from});
        case pokerActions.CREATE_ROOM:
                        tempState = Object.assign({},state.playerInfo);
                        tempState.joined = true;
                        tempState.isMaster = true;
                        return Object.assign(newState,state,{playerInfo:tempState},{from:action.payload.from});  
        case pokerActions.PUBLISH_STORY:
                        from = action.payload.from;
                        tempState = update(state,{
                            storyInfo:{$set:action.payload},
                            from:{$set:from}
                        })
                        // tempState = Object.assign({},state.storyInfo,action.payload);
                        // return Object.assign(newState,state,{storyInfo:tempState},{from:action.payload.from});  
                        return tempState;
        case pokerActions.SELECT_POINT:
                        tempState = Object.assign({},state.playerInfo,action.payload);
                        return Object.assign(newState,state,{playerInfo:tempState},{from:action.payload.from});  
        case pokerActions.USER_LIST:
                        return Object.assign(newState,state,{playerList:action.payload.cls},{from:action.payload.from});
        case pokerActions.POINT_LIST:
                        return Object.assign(newState,state,{pointList:action.payload.ps},{from:action.payload.from});
        case pokerActions.STORY_DETAILS:
                        return Object.assign(newState,state,{pointList:action.payload.sd},{from:action.payload.from});
         
        default:
                        return state;
    }
}

//write your own root reducer
export default combineReducers({
    welcome:welcomeReducer,
    poker:pokerReducer
});