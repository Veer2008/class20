var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(1010,400,50,80);
  movingRect = createSprite(100,400,80,50);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  movingRect.velocityX = 2;
  fixedRect.velocityX = -2;
}

function draw() {
  background(0);
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
    movingRect.velocityX = (-1) * movingRect.velocityX;
    fixedRect.velocityX = (-1) * fixedRect.velocityX;
  }
  /*else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }*/
  drawSprites();
}