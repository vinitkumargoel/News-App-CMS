module.exports = {
    Session : class {
        constructor(){
            this.id = 0;
            this.playerList = new Map();
            this.pointList = new Map();
            this.roomInfo = {};
            this.storyInfo = {};
            this.storyList = [];
        }
    }

}