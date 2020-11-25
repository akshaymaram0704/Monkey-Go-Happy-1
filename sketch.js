
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var ground
var PLAY = 1
var END = 2
var gameState = PLAY
var score = 0
function preload(){
  
  
              
 monkey_running=loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
    
}



function setup() {
  createCanvas(600, 600)
  //animating the monkey
  monkey = createSprite(50,500,25,25);
  monkey.addAnimation("monkey is running", monkey_running);
  monkey.scale = 0.2
  //creating a ground
  ground = createSprite(300,580,600,20)
  ground.visible = false;
  bananaGroup = createGroup();
  obstaclesGroup = createGroup();
  
  
}
function draw(){
  background("lightblue")
  text("Score: "+ score, 500,50);
  monkey.velocityY = monkey.velocityY + 0.5
  monkey.collide(ground)
  
  if(gameState===PLAY){
    if(keyDown("space")&&monkey.y>=508.6){
    monkey.velocityY = -19
  }
    
    //console.log(monkey.y)
    spawn_bananas();
    spawn_obstacles();
    
  if(bananaGroup.isTouching(monkey)){
    score = score + 5
  }
    
  if(obstaclesGroup.isTouching(monkey)){
    gameState = 2
  }
  
    if(gameState === END){
      score = 0
      bananaGroup.destroyEach();
      obstaclesGroup.destroyEach();
      ground.velocityX = 0
      monkey.velocityY = 0
    }
    
    
    
    
    
    
    
    
    
  
    
  }
     
  
  
  
  
  
  
  drawSprites();
    
  }
  
  


function spawn_bananas(){
  if(frameCount%80 === 0){
    banana = createSprite(600,100,50,50);
    banana.addImage(bananaImage);
    banana.scale = 0.1
    banana.velocityX = -5
    bananaGroup.add(banana);
    banana.y = Math.round(random(120,200));
    banana.lifetime = 150
}
  
}

function spawn_obstacles(){
  if(frameCount%80 === 0){
    obstacle = createSprite(600,550,50,50);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2
    obstacle.velocityX = -5
    obstaclesGroup.add(obstacle);
    obstacle.y = Math.round(random(520,550));
    obstacle.lifetime = 150
}
  
}









