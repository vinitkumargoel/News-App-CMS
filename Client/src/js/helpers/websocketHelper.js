import io from 'socket.io-client';
import { NAV_ACTION,pokerActions } from '../actions/actionTypes';

const wsHelper = {
    init: function(store){
        this.quit = store.subscribe(this.storeListener.bind(this,store));
        this.socket = io('http://10.17.14.226:3002/spoker',{
                transports: ['websocket']
        });
        this.serverListener.bind(this);
    },
    quit: new Function(),
    socket:{},
    storeListener : function(store){
        let state = store.getState();
        console.log(state);
        state.poker.from !== 'server' && this.socket.emit('store',state.poker);
    },
    serverListener : function(store){
        this.socket.on('users', (cls) => {
            let payload={cls,from:'server'};
            console.log(cls);
            store.dispatch({type:pokerActions.USER_LIST,payload});
        });
        this.socket.on('points', (ps) => {
            let payload={ps,from:'server'};
            store.dispatch({type:pokerActions.POINT_LIST,payload});
        });
        this.socket.on('story', (sd) => {
            let payload={sd,from:'server'};
            store.dispatch({type:pokerActions.STORY_DETAILS,payload});
        });
    }
}
   

export default wsHelper;

