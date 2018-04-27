const roomListener = require('./roomListeners');
const spokerListener = function(spokerNS,socket){
    spokerNS.clients((err,clients)=>{
        if(err) throw err;
        console.log(clients);
    });

    roomListener(socket,spokerNS);

    socket.on('joinroom',(room)=>{
        roomListener(socket,spokerNS);
    });

    socket.on('disconnect',()=>{
        
    });
}

module.exports = spokerListener;