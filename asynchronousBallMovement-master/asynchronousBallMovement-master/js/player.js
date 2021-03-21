class Player{
    constructor(){}
    getCount(){
    var playerCountref =database.ref('playercount')
    playerCountref.on("value",function(data){
    playerCount=data.val();
    })
    }
    updateCount(count){
    database.ref('/').update({
        playerCount:count
    })
    }
    update(name){
   var playerIndex="player"+playerCount;
   database.ref(playerIndex).set({
       name:name
   })
    }
    }