export default {
    playerInfo :{
        isMaster : false,
        usrid : "",
        email : "",
        fileID : "",
        joined : false,
        roomid : "",
        pwd : "",
        score: ""
    },
    roomInfo : {
        roomnum : "",
        roomname : "",
        pwd : "",
        adminName: "",
        fileID : "",
        pointingMethod : "Normal"
    },
    storyInfo : {
        storyID: "",
        epic: "",
        desc: "",
        storyflag: ""
    },
    configData: {
        ScrumMaster: {
            showPublish: false,
            showVotes:false,
            voting:false
        }
    },
    playerList : [],
    storyList : [],
    pointList : []
};