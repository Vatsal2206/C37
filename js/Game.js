class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form();
      form.display();
    }
  }

  play(){
    form.hide();
    textSize(30)
    text("GAME START",120,100)
    Player.getPlayerInfo();
    if(allPlayers !== undefined){
       var yPos = 130;

       for(var p in allPlayers){
         
        if(p === "player" + player.index){
          fill("red")

        }else{
          fill("black")

        }

         yPos = yPos + 30;
         textSize(15)
         text(allPlayers[p].name + " - " + allPlayers[p].distance,120,yPos)

       }




    }
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance = player.distance + 50;
      player.update();
    }
  }
}
