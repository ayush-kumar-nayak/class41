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
      form = new Form()
      form.display();
    }

    car1=createSprite(100,200)
    car1.addImage(car1Image)
    car2=createSprite(300,200)
car2.addImage(car2Image)
    car3=createSprite(500,200)
    car3.addImage(car3Image)
    car4=createSprite(700,200)
    car4.addImage(car4Image)
    cars=[car1,car2,car3,car4]
  }
  play(){
    form.hide()
    textSize(30)
    text("GAME START",120,100)
    Player.getPlayerInfo()
    player.getCarsAtEnd()

    if(allPlayers!==undefined){
       background(backgroundImage)
       image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5)
      var y=0,x=175,index=0
      for(var plr in allPlayers){
        index=index+1

        x=x+200

        y=displayHeight-allPlayers[plr].distance

        cars[index-1].x=x
        cars[index-1].y=y

        if(index===player.index){
          stroke(10)
          fill("red")
          ellipse(x,y,70,70)
          camera.position.x=displayWidth/2
          camera.position.y=cars[index-1].y
        }
      }
      
    }
    if(keyIsDown(UP_ARROW)&&player.index!==null){
      player.distance+=50
      player.update()
    }
    if(player.distance>3850){
      gameState=2
      player.rank+=1
      Player.updateCarsAtEnd(player.rank)
    }
    drawSprites()
  }
  end(){
    console.log("rank "+player.rank)
    console.log("gameEnded")
  }
    
  }

