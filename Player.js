class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }
    //how many players
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function(data){
            playerCount = data.val();
        })
    }
    //update number of player
    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }
    //update name of player in database
    update(){
        var playerIndex = "player/players"+this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        })
    }
    //update player info
    static getPlayerInfo(){
        var playerInfoRef= database.ref('players');
        playerInfoRef.on("value", (data)=>{
            allPlayers = data.val();
        })
    }
}