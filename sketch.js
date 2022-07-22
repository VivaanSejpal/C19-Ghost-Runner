var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(300, 100);
  ghost.addImage("ghost", ghostImg);
  ghost.scale = 0.5;

  doorsGroup = new Group();
  climbersGroup = new Group();

  
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }

    if (keyDown("space")){
      ghost.velocityY = -5;
    }
    ghost.velocityY = ghost.velocityY + 0.5;
    
    if(keyDown("left_arrow")){
      ghost.x = ghost.x - 2

    }

    if(keyDown("right_arrow")){
      ghost.x = ghost.x + 2

    }
    spawnDoors();
    spawnClimbers();
    drawSprites();
}

function spawnDoors(){
  if(frameCount%240 === 0){
    door = createSprite(300, -50);
    door.addImage("doorImg", doorImg);
    door.x = Math.round(random(120, 400));
    door.velocityY = 1
    door.lifeTime = 700
    doorsGroup.add(door);
  }
}
  function spawnClimbers(){
   if(frameCount%240 === 0){
    climber.createSprite(300, 10);
    climber.addImage("ClimberImg", climberImg);
    climber.x = Math.round(random(120, 400));
    climber.velocityY = 1
    climber.lifeTime = 700
    climbersGroup.add(climber);

   }

   
  }

