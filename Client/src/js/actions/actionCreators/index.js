import { NAV_ACTION,pokerActions } from '../actionTypes';
import wsHelper from '../../helpers/websocketHelper';

export function navAction(payload){
        return {type:NAV_ACTION,payload};
}

export function spokerAction(payload){
        switch(payload.id){
                case 0:
                        return function(dispatch,getState){
                                return dispatch({type:pokerActions.JOIN_ROOM,payload});
                        };
                case 1:
                        return function(dispatch,getState){
                                return dispatch({type:pokerActions.CREATE_ROOM,payload});
                        };
                case 2:
                        return function(dispatch,getState){
                                return dispatch({type:pokerActions.PUBLISH_STORY,payload});
                        };
                case 3:
                        return function(dispatch,getState){
                                return dispatch({type:pokerActions.SELECT_POINT,payload});
                        };
                default :
        }
}