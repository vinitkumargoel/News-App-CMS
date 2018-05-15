const express=require('express');
const app = express();
const httpServer = require('http').Server(app);
const PORT = process.env.PORT || 3003;
const HTTP_PORT = process.env.PORT || 3004;
const sockServer =  require('socket.io');
const io = sockServer({
	path: '/',
	serveClient : false,
	pingInterval : 5000,
	pingTimeout : 5000,
	cookie : false,
	transports : ['websocket'],
});

app.listen(HTTP_PORT, function () {
	console.log(`server listening on port ${HTTP_PORT}`);	
})

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

