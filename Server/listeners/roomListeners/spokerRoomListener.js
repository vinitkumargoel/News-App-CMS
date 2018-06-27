module.exports = function(ns,socket,session){
    socket.on('storyinfo',(si)=>{
        console.log(si);
        session.storyInfo = si;
        ns.to(session.id).emit('story',si);
    });

    socket.on('stories',(ss)=>{
        console.log(ss);
        session.storyList = ss;
        ns.to(session.id).emit('reset',{pointList:[],storyInfo : {
            storyID: "",
            epic: "",
            desc: "",
            storyflag: ""
        }});
    });

    socket.on('point',(p)=>{
        console.log(p);
        let points = [];
        session.pointList.set(socket.id,p);
        session.pointList.forEach((value, key, map)=>{
            points.push(value);
        });
        ns.to(session.master).emit('points',points);
    });

    socket.on('clear',(ri)=>{
        session.pointList = new Map();
        ns.to(session.id).emit('points',Array.from(session.pointList.values()));
    });

    socket.on('disconnect',()=>{
        session.pointList.delete(socket.id);
        session.playerList.delete(socket.id);
        ns.emit('players',Array.from(session.playerList.values()));
        ns.emit('points',Array.from(session.pointList.values()));
    });
    socket.on('published',(obj)=>{
        ns.to(session.id).broadcast('published',obj);
    });

}
    