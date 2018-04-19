const spokerClients = new Map();
const pointList = new Map();

const spokerListener = function(spokerNS,socket){
    spokerNS.clients((err,clients)=>{
        if(err) throw err;
        spokerNS.emit('users',clients);
    });

    socket.on('point',(p)=>{
        let points = [];
        pointList.set(socket.id,p);
        pointList.forEach((value, key, map)=>{
            points.push(value);
        })
        spokerNS.emit('points',points);
    });
}

module.exports = spokerListener;