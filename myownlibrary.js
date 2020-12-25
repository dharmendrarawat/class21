function bounceoff(movingRect,obj1){
if (movingRect.x - obj1.x < obj1.width/2 + movingRect.width/2
    && obj1.x - movingRect.x < obj1.width/2 + movingRect.width/2) {
  movingRect.velocityX = movingRect.velocityX * (-1);
  obj1.velocityX = obj1.velocityX * (-1);
}
if (movingRect.y - obj1.y < obj1.height/2 + movingRect.height/2
  && obj1.y - movingRect.y < obj1.height/2 + movingRect.height/2){
  movingRect.velocityY = movingRect.velocityY * (-1);
  obj1.velocityY = obj1.velocityY * (-1);
}
}