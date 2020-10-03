function setup() {
  createCanvas(800, 400);
  moving = createSprite(400, 200, 50, 50);
  fixed = createSprite(200, 200, 50, 80)

  moving.shapeColor = "green"
  fixed.shapeColor = "green"
  moving.debug = true
  fixed.debug = true

  o1=createSprite(100,100,50,50)
  o1.shapeColor="green"
  o2=createSprite(200,100,50,50)
  o2.shapeColor="green"
  o3=createSprite(300,100,50,50)
  o3.shapeColor="green"
  o4=createSprite(400,100,50,50)
  o4.shapeColor="green"

  moving.velocityY=-5
  fixed.velocityY=5
}

function draw() {
  background("blue");

moving.x=World.mouseX
moving.y=World.mouseY

if (isTouching(moving,o2)) {
   moving.shapeColor="white"
   o2.shapeColor="white"
}else{
  moving.shapeColor="green"
  o2.shapeColor="green"
}

bounceoff(moving,fixed)
  drawSprites();
}

function bounceoff(object1,object2) {
  
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
  object1.velocityX = object1.velocityX * (-1);
  object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
  }
}