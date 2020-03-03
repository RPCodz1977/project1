var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);

 fixedRect = createSprite(200, 200, 50, 80);
 fixedRect.shapeColor = "green";
 movingRect = createSprite(400, 200, 80, 30);
 movingRect.shapeColor = "green";

 gameObject1 = createSprite(50, 360, 50, 50);
 gameObject1.shapeColor = "purple";
 gameObject1.velocityX = 4;
 gameObject2 = createSprite(350, 360, 50, 50);
 gameObject2.shapeColor = "orange";
 gameObject2.velocityX = -4;
 gameObject3 = createSprite(150, 250, 50, 50);
 gameObject3.shapeColor = "white";
 gameObject4 = createSprite(69, 290, 50, 50);
 gameObject4.shapeColor = "yellow";

}

function draw() {
  background(1,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  //console.log(movingRect.x - fixedRect.x);

   if (isTouching(movingRect, gameObject2) && isTouching(movingRect, gameObject1)) {
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  

   }
   else {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";

   }
   bounceOff(gameObject1, gameObject2);
  drawSprites();
}

