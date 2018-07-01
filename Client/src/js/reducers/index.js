import { combineReducers } from 'redux';
import { NAV_ACTION, pokerActions, configDataActions } from '../actions/actionTypes';
import update from 'immutability-helper';

function welcomeReducer(state = {}, action) {
    let newState = {};
    switch (action.type) {
        case NAV_ACTION:
            return Object.assign(newState, state, { status: "updated", isFirstVisit: action.payload.isFirstVisit });
        default:
            return state;
    }
}

function pokerReducer(state = {}, action) {
    let newState = {};
    let tempState = {};
    let from = '';
    switch (action.type) {
        case pokerActions.JOIN_ROOM:
            if (state.playerInfo.isMaster) {
                action.payload.joined = true;
                tempState = Object.assign({}, state.playerInfo, { roomid: action.payload.roomid });
                return Object.assign(newState, state, { playerInfo: tempState }, { from: action.payload.from });
            }
            else {
                action.payload.joined = true;
                tempState = Object.assign({}, state.playerInfo, action.payload);
                return Object.assign(newState, state, { playerInfo: tempState }, { from: action.payload.from });
            }
        case pokerActions.CREATE_ROOM:
            tempState = Object.assign({}, state.playerInfo);
            tempState.joined = true;
            tempState.isMaster = true;
            return Object.assign(newState, state, { playerInfo: tempState }, { from: action.payload.from });
        case pokerActions.PUBLISH_STORY:
            from = action.payload.from;
            tempState = update(state, {
                storyInfo: { $set: action.payload },
                from: { $set: from }
            })
            // tempState = Object.assign({},state.storyInfo,action.payload);
            // return Object.assign(newState,state,{storyInfo:tempState},{from:action.payload.from});  
            return tempState;
        case pokerActions.SUBMIT_STORY:
            return update(state, {
                storyList: { $push: [action.payload] },
                from: { $set: action.payload.from }
            })
        case pokerActions.SELECT_POINT:
            tempState = Object.assign({}, state.playerInfo, action.payload);
            return Object.assign(newState, state, { playerInfo: tempState }, { from: action.payload.from });
        case pokerActions.PLAYER_LIST:

            return Object.assign(newState, state, { playerList: action.payload.cls }, { from: action.payload.from });
        case pokerActions.POINT_LIST:
            tempState = Object.assign({}, state.playerInfo, { score: "" });
            return Object.assign(newState, state, { pointList: action.payload.ps }, { from: action.payload.from }, { playerInfo: tempState });
        case pokerActions.STORY_DETAILS:
            return Object.assign(newState, state, { storyInfo: action.payload.sd }, { from: action.payload.from });
        case pokerActions.ROOM_NUM:
            tempState = Object.assign({}, state.roomInfo, { roomnum: action.payload.roomnum });
            return Object.assign(newState, state, { roomInfo: tempState }, { from: action.payload.from });
        case pokerActions.P_M:
            tempState = Object.assign({}, state.roomInfo, action.payload.ri);
            return Object.assign(newState, state, { roomInfo: tempState }, { from: action.payload.from });
        case pokerActions.JOINED_AS_ADMIN:
            return Object.assign(newState, state, action.payload);
        case pokerActions.CLEAR_POINTS:
            return Object.assign(newState, state, { from: action.payload.from });
        case pokerActions.RESET_ROOM:
            tempState = Object.assign({}, state.playerInfo, { score: "" });
            return Object.assign(newState, state, {
                pointList: action.payload.rd.pointList
                , storyInfo: action.payload.rd.storyInfo, playerInfo: tempState
            }, { from: action.payload.from });
        case configDataActions.SET_PUBLISH:
            return update(state, {
                configData: {
                    ScrumMaster: {
                        showPublish: { $set: action.payload.showPublish }
                    }
                },
                from: { $set: action.payload.from }
            });
        default:
            return state;
    }
}

//write your own root reducer
export default combineReducers({
    welcome: welcomeReducer,
    poker: pokerReducer,
});