const spokerClients = new Map();
const pointList = new Map(); 

module.exports = function(socket,ns){
    socket.on('createroom',()=>{
        socket.join(room,()=>{

        });
    });

    socket.on('store',(store)=>{
        console.log(store);
        ns.emit('users',Array.from(spokerClients.values()));
    });

    socket.on('usrinfo',(ui)=>{
        spokerClients.set(socket.id,ui.usrid);
    });

    socket.on('roominfo',(ri)=>{
        spokerClients.set(socket.id,ri.adminName);
    });

    socket.on('point',(p)=>{
        let points = [];
        pointList.set(socket.id,p);
        pointList.forEach((value, key, map)=>{
            points.push(value);
        })
        ns.emit('points',points);
    });

    socket.on('point',(p)=>{
        let points = [];
        pointList.set(socket.id,p);
        pointList.forEach((value, key, map)=>{
            points.push(value);
        })
        ns.emit('points',points);
    });
}