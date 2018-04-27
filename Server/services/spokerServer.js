const app = require('express')();
const httpServer = require('http').Server(app);
const PORT = 3002;
const sockServer =  require('socket.io');
const io = sockServer({
	serveClient : false,
	pingInterval : 5000,
	pingTimeout : 5000,
	cookie : false,
	transports : ['websocket'],
});

//listener imports
const spokerListener = require('../listeners/spokerListener');

//server bindings
io.attach(httpServer);
io.attach(PORT);

//generate custom socketids
let sid = 0;
io.engine.generateId = (req) => {
	return (sid++).toString();
}

//chat namespace
const spokerNS = io.of('/spoker');

//initiate connection
spokerNS.on('connection', spokerListener.bind(this,spokerNS));



