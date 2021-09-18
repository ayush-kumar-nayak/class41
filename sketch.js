var canvas, backgroundImage;
function preload(){
  backgroundImage=loadImage("images/ground.png")
  car1Image=loadImage("images/car1.png")
  car2Image=loadImage("images/car2.png")
  car3Image=loadImage("images/car3.png")
  car4Image=loadImage("images/car4.png")
trackImage=loadImage("images/track.jpg")
}
var gameState = 0;
var playerCount=0;
var allPlayers

var database;

var form, player, game;
var cars,car1,car2,car3,car4


function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount===4)
  game.update(1)
  if(gameState===1){
    clear()
    game.play()
  }
  if(gameState===2){
    game.end()
  }
}
