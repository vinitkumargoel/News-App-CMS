import { NAV_ACTION, pokerActions, configDataActions } from '../actionTypes';

export function navAction(payload) {
        return { type: NAV_ACTION, payload };
}

export function spokerAction(payload) {
        switch (payload.id) {
                case 0:
                        return function (dispatch, getState) {
                                return dispatch({ type: pokerActions.JOIN_ROOM, payload });
                        };
                case 1:
                        return function (dispatch, getState) {
                                return dispatch({ type: pokerActions.CREATE_ROOM, payload });
                        };
                case 2:
                        return function (dispatch, getState) {
                                return dispatch({ type: pokerActions.PUBLISH_STORY, payload });
                        };
                case 3:
                        return function (dispatch, getState) {
                                return dispatch({ type: pokerActions.SELECT_POINT, payload });
                        };
                case 4:
                        return function(dispatch,getState){
                                return dispatch({type:pokerActions.CLEAR_POINTS,payload});
                        };
                default :
        }
}
export const setPublish = (bool) => ({ type: configDataActions.SET_PUBLISH, payload: {showPublish:bool,from:'local6'} });
export const submitStory = (storyDetails) => {
        storyDetails.from = 'local5';
        return { type: pokerActions.SUBMIT_STORY, payload: storyDetails }
};
export const setShowVotes = (bool) =>({type: configDataActions.SET_SHOWVOTES,payload:{showVotes:bool,from:'toLocal'}});
export const setVoting = (bool) =>({type: configDataActions.SET_VOTING,payload:{voting:bool,from:'local7'}});