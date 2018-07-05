import { pokerActions } from '../actions/actionTypes';
import update from 'immutability-helper';

export function reactPokerReducer(state = {}, action) {
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
    }
}
