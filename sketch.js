//prof eu estou com uma duvida porque tudo some dpois de um tempo?



var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var chao


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost.png");
  
}

function setup() {
  createCanvas(1300,600);
  
  tower = createSprite(600,600);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  tower.scale=2
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  

  ghost = createSprite(200,200,50,50);
  ghost.scale = 5;
  ghost.addImage("ghost", ghostImg);
}


function draw() {
  background(255);
 if(tower.y >400 ){
      tower.y = height/2
    } 
   
  if (gameState === "play") {
    
    if(keyDown("left_arrow")){
        ghost.x = ghost.x - 3;

      // escreva o código para mover para a esquerda quando a tecla para a esquerda for 
      
    }
    if(keyDown("right_arrow")){
  
          ghost.x = ghost.x + 3;

      // escreva o código para mover para a direita quando a tecla para a direita for pressionada
      
    }
    if(keyDown("space")){
  
         ghost.velocityY = -10;

      // escreva o código para mover para cima quando a tecla espaço for pressionada
    }
    if(keyDown("right_arrow")){
  
          ghost.x = ghost.x + 3;

      // escreva o código para mover para a direita quando a tecla para a direita for pressionada
      
    }
    if(keyDown("space")){
  
         ghost.velocityY = -10;

      // escreva o código para mover para cima quando a tecla espaço for pressionada
      
    }
  
  ghost.velocityY = ghost.velocityY + 0.8;
  
   
      //escreva uma condição para a torre de rolagem infinita
      
      spawnDoors();

  
//escreva um código para fazer invisibleBlockGroup (grupo de bloco invisível) colidir com o fantasma, destruir o fantasma e mudar o estado do jogo para end.]

     if(climbersGroup.isTouching(ghost)){
      ghost.velocityY = 0;
    }
    if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
      ghost.collide(invisibleBlock)
      gameState = "end"
    }
    
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawnDoors()
 {
 
  if (frameCount % 240 === 0) {
    var door = createSprite(Math.round(random(200,1300)), -50);
    var climber = createSprite(door.x,10);
    var invisibleBlock = createSprite(door.x,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    //adicione a função aleatória
    

    //
    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;

    //mude a profundidade do fantasma e da porta
    
     
ghost.depth = door.depth;
door.depth = ghost.depth
    ghost.depth =1;
    
    //atribuir tempo de vida para a porta, escalador e bloco invisível

 invisibleBlock.lifetime = 800;
    climber.lifetime = 800;
    door.lifetime = 800;
    //adicione cada obstáculo ao grupo obstaclesGroup.add(obstacle); aqui os obstáculos são as portas, o escalador e o bloco invisível
    invisibleBlock.debug = true;

     doorsGroup.add(door);
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
  }
 





  }
  


