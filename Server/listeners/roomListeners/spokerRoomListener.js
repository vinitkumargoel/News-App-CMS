var sessions = {};

module.exports = function(ns,socket,session){

    socket.on('createroom',(room)=>{
        console.log(room);
        socket.join(room,()=>{
            ns.to(room).emit('roomid',room);
            session.id = room;
            sessions[room] = session;
        });
    });

    socket.on('playerinfo',(pi)=>{   
        console.log(pi);
        if(sessions[pi.roomid] === undefined){
            console.log("no such room");
        }
        else{
            socket.join(pi.roomid,()=>{
                session = sessions[pi.roomid];
                session.playerList.set(socket.id,pi.usrid);
                ns.to(session.id).emit('players',Array.from(session.playerList.values()));
                socket.emit('pm',session.roomInfo.pointingMethod);
                socket.emit('story',session.storyInfo);
            });
        }
    });

    socket.on('roominfo',(ri)=>{
        console.log(ri);
        if(!ri.isMaster){
            session.roomInfo = ri;
            session.playerList.set(socket.id,ri.adminName);
            ns.to(session.id).emit('players',Array.from(session.playerList.values()));
        } else {
            socket.join(ri.roomid,()=>{
                session = sessions[ri.roomid];
                ns.to(socket.id).emit('store',session);
                ns.to(session.id).emit('players',Array.from(session.playerList.values()));
                ns.emit('points',session.pointList);
            });
        }
        
    });

    socket.on('storyinfo',(si)=>{
        console.log(si);
        session.storyInfo = si;
        ns.to(session.id).emit('story',si);
    });

    socket.on('point',(p)=>{
        console.log(p);
        let points = [];
        session.pointList.set(socket.id,p);
        session.pointList.forEach((value, key, map)=>{
            points.push(value);
        });
        ns.to(session.id).emit('points',points);
    });

    socket.on('clear',(ri)=>{
        session.pointList = new Map();
    });

    socket.on('disconnect',()=>{
        session.pointList.delete(socket.id);
        session.playerList.delete(socket.id);
        ns.emit('players',Array.from(session.playerList.values()));
        ns.emit('points',session.pointList);
    });
    
}