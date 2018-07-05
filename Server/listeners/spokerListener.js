const { spokerRoomListener } = require('./roomListeners');
const { Session } = require('../utils').sessionUtil;
const sessions = {};

const spokerListener = function(spokerNS,socket){ 
    socket.on('createroom',(room)=>{
        console.log(room);
        socket.join(room,()=>{
            spokerNS.to(room).emit('roomid',room);
            let session = new Session();
            session.id = room;
            sessions[room] = session;
        });
    });
    
    socket.on('joinroom',(pi)=>{
        console.log(pi);
        if(pi.room){
            let session = sessions[pi.room];
            if(session.roomInfo.pwd === pi.password && session.roomInfo.adminName === pi.usrname){
                session.playerList.set(socket.id,pi.usrname);
                let sessionCopy = Object.assign({},session);
                sessionCopy.playerList = Array.from(session.playerList.values());
                sessionCopy.pointList = Array.from(session.pointList.values());
                socket.join(pi.room,()=>{
                    session.master = socket.id;
                    socket.emit('store',sessionCopy);
                    spokerRoomListener(spokerNS,socket,session);
                });
            }
            else {
                socket.emit('err',"You are not the admin!");
            }
        } 
        else if(sessions[pi.roomid]){
            socket.join(pi.roomid,()=>{
                let session = sessions[pi.roomid];
                session.playerList.set(socket.id,pi.usrid);
                spokerNS.to(session.id).emit('players',Array.from(session.playerList.values()));
                socket.emit('roominfo',Object.assign({},session.roomInfo,{adminName:"",pwd:""}));
                socket.emit('story',session.storyInfo);
                spokerRoomListener(spokerNS,socket,session);
            });
        }
        else if(sessions[pi.roomnum]){
            socket.join(pi.roomnum,()=>{
                let session = sessions[pi.roomnum];
                session.master = socket.id;
                session.roomInfo = pi;
                session.playerList.set(socket.id,pi.adminName);
                spokerNS.to(session.id).emit('players',Array.from(session.playerList.values()));
                spokerRoomListener(spokerNS,socket,session);
            });
        }
        else {
            spokerNS.to(socket.id).emit('error',"there is no room with that id.");
        }
    });
}

module.exports = spokerListener;