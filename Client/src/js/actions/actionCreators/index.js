import { NAV_ACTION, pokerActions, configDataActions,fetchActions } from '../actionTypes';

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
export const setProject = (id) =>({type: configDataActions.SET_PROJECT,payload:{id,from:'toLocal'}});
export const setProjects = (data) =>({type: fetchActions.SET_PROJECTS,payload:{data,from:'toLocal'}});
export const setJiraCreds = (creds) =>({type: configDataActions.SET_JIRACREDS,payload:{creds,from:'toLocal'}});
export const setIssue = (id) =>({type: configDataActions.SET_ISSUE,payload:{id,from:'toLocal'}});
export const setIssues = (data) =>({type: fetchActions.SET_ISSUES,payload:{data,from:'toLocal'}});