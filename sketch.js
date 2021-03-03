var fixedRect, movingRect;
var distance;
var distanceBWCenter;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "red";
  fixedRect.debug = true;
  movingRect = createSprite(200, 400, 50, 50);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;
}

function draw() {
  background(255,255,255);  
 //movingRect.x = mouseX;
 // movingRect.y = mouseY;
 if(keyDown("left"))
 {
   movingRect.velocityX =  - 3;
 }
 if(keyDown("right"))
 {
   movingRect.velocityX =  + 3;
 }
 if(keyDown("up"))
 {
   movingRect.velocityY =  - 3;
 }
 if(keyDown("down"))
 {
   movingRect.velocityY =  + 3;
 }
  //movingRect.collide(fixedRect);
  distance = movingRect.x - fixedRect.x;
  distanceBWCenter = movingRect.width/2 + fixedRect.width/2;
  text("distanceBWCenter" + distanceBWCenter, 500, 200);
  text("distance" + distance, 300, 200);
  if(movingRect.x - fixedRect.x < distanceBWCenter
     && fixedRect.x - movingRect.x < distanceBWCenter)
  {
    movingRect.velocityX = (-1) * movingRect.velocityX;
    fixedRect.velocityX = movingRect.velocityX;
  }
  else if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2)
  {
    movingRect.velocityY = (-1)*movingRect.velocityY;
    fixedRect.velocityY = movingRect.velocityY;
  }
  else{
    movingRect.velocityX = (-1)*movingRect.velocityX;
    movingRect.velocityY = (-1)*movingRect.velocityY;
    fixedRect.velocityX = 0;
    fixedRect.velocityY = 0;
  }
  drawSprites();
}