var fixedRect, movingRect;
var obj1,obj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
obj1=createSprite(400,100,50,50);
obj1.shapeColor = "pink";
obj2=createSprite = (200,100,50,50);
obj2.shapeColor = "orange";
  movingRect.velocityY = -5;
  obj1.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceoff(movingRect,obj1);
  
  drawSprites();
}

