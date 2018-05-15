const express=require('express');
const app = express();
const httpServer = require('http').Server(app);
const PORT = process.env.PORT || 3003;
const WS_PORT = process.env.PORT || 3004;
const sockServer =  require('socket.io');
const io = sockServer(WS_PORT,{
	serveClient : true,
	pingInterval : 5000,
	pingTimeout : 5000,
	cookie : false,
	transports : ['websocket'],
});


//listener imports
const spokerListener = require('../listeners/spokerListener');

//server bindings
io.attach(httpServer);

//generate custom socketids
let sid = 0;
io.engine.generateId = (req) => {
	return (sid++).toString();
}

//spoker namespace
const spokerNS = io.of('/spoker');

//initiate connection
spokerNS.on('connection', spokerListener.bind(this,spokerNS));

//serving the static files
app.use(express.static(`./Client-ui/build`));

app.listen(PORT, function () {
	console.log(`server listening on port ${PORT}`);	
})