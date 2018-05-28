import io from 'socket.io-client';
import { NAV_ACTION,pokerActions } from '../actions/actionTypes';

const getRandomNumber = function() {
	let x = Date.now().toString();
	let result = '';
	for (let i = 0; i < x.length; i++) {
		i % 2 === 0 && (result += x.charAt(i));
	}
	result = +result + Math.floor(Math.random() * 10000);
	return result;
}
const wsHelper = {
    currentState : {},
    init: function(store){
        this.quit = store.subscribe(this.storeListener.bind(this,store));
        this.socket = io(window.location.host+'/spoker',{
                transports: ['websocket'],

        });
        this.serverListener.bind(this);
    },
    quit: new Function(),
    socket:{},
    storeListener : function(store){ 
        this.currentState = store.getState();
        switch(this.currentState.poker.from){
            case 'local0':
                            if(this.currentState.poker.playerInfo.isMaster){
                                if(this.currentState.poker.playerInfo.pwd === ""){
                                    this.socket.emit('roominfo',this.currentState.poker.roomInfo);
                                } else {
                                    this.socket.emit('roominfo',this.currentState.poker.playerInfo);
                                }
                            } else {
                                this.socket.emit('playerinfo',this.currentState.poker.playerInfo);
                            }
                            break;
            case 'local1':
                            this.socket.emit('createroom',getRandomNumber());
                            break;
            case 'local2':
                            this.socket.emit('storyinfo',this.currentState.poker.storyInfo);
                            break;
            case 'local3':
                            this.socket.emit('point',{userName:this.currentState.poker.playerInfo.usrid,score:this.currentState.poker.playerInfo.score});
                            break;
        } 
    },
    serverListener : function(store){
        this.socket.on('players', (cls) => {
            let payload={cls,from:'server'};
            store.dispatch({type:pokerActions.PLAYER_LIST,payload});
        });
        this.socket.on('points', (ps) => {
            let payload={ps,from:'server'};
            store.dispatch({type:pokerActions.POINT_LIST,payload});
        });
        this.socket.on('story', (sd) => {
            let payload={sd,from:'server'};
            store.dispatch({type:pokerActions.STORY_DETAILS,payload});
        });
        this.socket.on('roomid', (roomid) => {
            let payload={roomnum:roomid,from:'server'};
            store.dispatch({type:pokerActions.ROOM_NUM,payload});
        });
        this.socket.on('pm', (pm) => {
            let payload={pointingMethod:pm,from:'server'};
            store.dispatch({type:pokerActions.P_M,payload});
        });

        this.socket.on('store',(ns)=>{
            console.log("admin store ===> ",ns);
            ns.from = 'server';
            store.dispatch({type:pokerActions.JOINED_AS_ADMIN,payload:ns});
        });
    }
}
   

export default wsHelper;

