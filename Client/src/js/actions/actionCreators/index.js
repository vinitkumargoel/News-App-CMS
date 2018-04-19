import { NAV_ACTION,pokerActions } from '../actionTypes';

export function navAction(payload){
        return {type:NAV_ACTION,payload};
}
    
export function spokerAction(payload){
        switch(payload.id){
                case 0:
                        return {type:pokerActions.JOIN_ROOM,payload};
                case 1:
                        return {type:pokerActions.CREATE_ROOM,payload};
                case 2:
                        return {type:pokerActions.PUBLISH_STORY,payload};
                default :
        }
}