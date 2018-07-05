import { wsActions } from '../actions/actionTypes';

export function wsPokerReducer(state = {}, action){
    let newState = {};
    let tempState = {};
    let from = '';
    switch (action.type) {
        case wsActions.PLAYER_LIST:
            return Object.assign(newState, state, { playerList: action.payload.cls }, { from: action.payload.from });
        case wsActions.POINT_LIST:
                        tempState = Object.assign({},state.playerInfo,{score:""});
                        return Object.assign(newState,state,{pointList:action.payload.ps},{from:action.payload.from},{playerInfo:tempState});
        case wsActions.STORY_DETAILS:
            return Object.assign(newState, state, { storyInfo: action.payload.sd }, { from: action.payload.from });
        case wsActions.ROOM_NUM:
            tempState = Object.assign({}, state.roomInfo, { roomnum: action.payload.roomnum });
            console.log("inside the ws reducer");
            return Object.assign(newState, state, { roomInfo: tempState }, { from: action.payload.from });
        case wsActions.P_M:
            tempState = Object.assign({}, state.roomInfo, action.payload.ri);
            return Object.assign(newState, state, { roomInfo: tempState }, { from: action.payload.from });
        case wsActions.JOINED_AS_ADMIN:
                        return Object.assign(newState,state,action.payload); 
        case wsActions.CLEAR_POINTS:
                        return Object.assign(newState,state,{from:action.payload.from});
        case wsActions.RESET_ROOM:
                        tempState = Object.assign({},state.playerInfo,{score:""});
                        return Object.assign(newState,state,{pointList:action.payload.rd.pointList
                        ,storyInfo:action.payload.rd.storyInfo,playerInfo:tempState},{from:action.payload.from});
    }
}