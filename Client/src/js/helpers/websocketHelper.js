import io from 'socket.io-client';
import { wsActions } from '../actions/actionTypes';
import { getRandomNumber } from '../utils';
import { from,Observable } from 'rxjs-compat';
import { WebSocketSubject,fromWebSocket, webSocket } from 'rxjs/websocket';

const wsHelper = {
    currentState: {},
    init: function () {
        this.socket = io(process.env.NODE_ENV === 'development' ?'localhost:3003/spoker'
        : window.location.host + '/spoker', {
            transports: ['websocket'],
        });
        let sock =  Observable.fromEvent(this.socket,'connect');

        sock.subscribe(()=>{
            console.log("connected");
        },(err)=>{
            console.log(err);
        },()=>{
            console.log("Completed");
        });
    },
    startListenToStore:function(store){
        this.stopListeningToStore = store.subscribe(this.storeListener.bind(this, store));
    },
    stopListeningToStore: new Function(),
    socket: {},
    storeListener: function(store){
        this.currentState = store.getState();
        console.log(this.currentState);
        switch (this.currentState.poker.from) {
            case 'local0':
                            if(this.currentState.poker.playerInfo.isMaster){
                                if(this.currentState.poker.roomInfo.roomnum.length === 0){
                                    let pl = {room : this.currentState.poker.playerInfo.roomid,
                                              password : this.currentState.poker.playerInfo.pwd,
                                              usrname : this.currentState.poker.playerInfo.usrid
                                            };
                                    this.socket.emit('joinroom',pl);
                                }else{
                                    this.socket.emit('joinroom',this.currentState.poker.roomInfo);
                                }
                            }else{
                                this.socket.emit('joinroom',this.currentState.poker.playerInfo);
                            }
                            break;
            case 'local1':
                this.socket.emit('createroom', getRandomNumber());
                break;
            case 'local2':
                this.socket.emit('storyinfo', this.currentState.poker.storyInfo);
                break;
            case 'local3':
                            this.socket.emit('point',{userName:this.currentState.poker.playerInfo.usrid,score:this.currentState.poker.playerInfo.score});
                            break;
            case 'local4':
                            this.socket.emit('clear',"clear point list");
                            break;
            case 'local5':
                            this.socket.emit('stories',this.currentState.poker.storyList);
                            break;
        } 
    },
    serverListener: function (store) {
        this.socket.on('players', (cls) => {
            let payload = { cls, from: 'server' };
            store.dispatch({ type: wsActions.PLAYER_LIST, payload });
        });
        this.socket.on('points', (ps) => {
            let payload={ps,from:'server'};
            payload.clearVotes = true;
            store.dispatch({type:wsActions.POINT_LIST,payload});
        });
        this.socket.on('story', (sd) => {
            let payload = { sd, from: 'server' };
            store.dispatch({ type: wsActions.STORY_DETAILS, payload });
        });
        this.socket.on('roomid', (roomid) => {
            let payload = { roomnum: roomid, from: 'server' };
            store.dispatch({ type: wsActions.ROOM_NUM, payload });
        });
        this.socket.on('roominfo', (ri) => {
            let payload = { ri, from: 'server' };
            store.dispatch({ type: wsActions.P_M, payload });
        });
        this.socket.on('store',(ns)=>{
            ns.from = 'server';
            store.dispatch({ type: wsActions.JOINED_AS_ADMIN, payload: ns });
        });
        this.socket.on('reset',(rd)=>{
            let payload = {rd,from:'server'};
            store.dispatch({type:wsActions.RESET_ROOM,payload});
        });
        this.socket.on('err',(err)=>{
            alert(err);
        });
    }
};


  


export default wsHelper;

