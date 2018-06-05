const express = require('express');
const path = require('path');
const app = express();
const httpServer = require('http').Server(app);
const sockServer =  require('socket.io');
var socketRedis = require('socket.io-redis');
const { config } = require('../utils');

/* --------- WEBSOCKET API --------- */
//socket server config
// const redisAdapter = socketRedis({
// 									key : 'spoker',
// 									host : config.globalConfig.hosts.REDIS,
// 									port : config.globalConfig.ports.REDIS
// 								});

const io = sockServer(httpServer,{
	serveClient : true,
	pingInterval : 5000,
	pingTimeout : 5000,
	cookie : false,
	transports : ['websocket'],
	// adapter : redisAdapter
});

//listener imports
const { spokerListener } = require('../listeners');

//generate custom socketids
let sid = 0;
io.engine.generateId = (req) => {
	return (sid++).toString();
}

//chat namespace
const spokerNS = io.of('/spoker');

//initiate connection
spokerNS.on('connection', (socket)=>{
	spokerListener(spokerNS,socket);
});

/* --------- WEBSOCKET API --------- */


/* --------- HTTP API --------- */

//api middlewares
app.use(express.static(path.join(config.CLIENT_ROOTPATH,'/build/'),{index:['index.html']}));

//api server config
httpServer.listen(config.globalConfig.ports.HTTP,()=>{
	console.log("http server is listening on port ",config.globalConfig.ports.HTTP);
});

/* --------- HTTP API --------- */

