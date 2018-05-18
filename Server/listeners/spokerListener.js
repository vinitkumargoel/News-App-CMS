const { spokerRoomListener } = require('./roomListeners');
const { Session } = require('../utils').sessionUtil;

const spokerListener = function(spokerNS,socket){
    let session = new Session();
    spokerRoomListener(spokerNS,socket,session);
}

module.exports = spokerListener;