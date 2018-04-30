const spokerClients = new Map();
const pointList = new Map(); 
var roominfo = {};

module.exports = function(socket,ns){
    socket.on('createroom',(room)=>{
        socket.join(room,()=>{
            ns.emit('roomid',room);
        });
    });

    socket.on('playerinfo',(pi)=>{
        console.log(pi);
        spokerClients.set(socket.id,pi.usrid);
        socket.join(pi.roomid,()=>{
            socket.emit('players',Array.from(spokerClients.values()));
            socket.emit('pm',roominfo.pointingMethod);
        });
    });

    socket.on('roominfo',(ri)=>{
        console.log(ri);
        roominfo = ri;
        spokerClients.set(socket.id,ri.adminName);
        socket.emit('players',Array.from(spokerClients.values()));
    });

    socket.on('storyinfo',(si)=>{
        console.log(si);
    });

    socket.on('point',(p)=>{
        console.log(p);
        let points = [];
        pointList.set(socket.id,p);
        pointList.forEach((value, key, map)=>{
            points.push(value);
        })
        ns.emit('points',points);
    });

    socket.on('clear',(ri)=>{
        pointList = new Map();
    });
}