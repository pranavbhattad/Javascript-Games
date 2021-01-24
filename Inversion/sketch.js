// Declaring Variables

var center
var b1
var b2
var b3
var b4

function setup(){

// Creating Sprites
center = createSprite(200,200,10,10);
b1 = createSprite(200,200,10,10);
b2 = createSprite(200,200,10,10);
b3 = createSprite(200,200,10,10);
b4 = createSprite(200,200,10,10);


// Giving Velocity or Movement to the object
b1.velocityX = -2;
b1.velocityY = -2;

b2.velocityX = 2;
b2.velocityY = -2;

b3.velocityX = -2;
b3.velocityY = 2;

b4.velocityX = 2;
b4.velocityY = 2;

}


function draw() {
  
  background(50);

  // Changing the color of center
  center.shapeColor = "white"
  b1.shapeColor = "#E74C3C"
  b2.shapeColor = "#48C9B0"
  b3.shapeColor = "#48C9B0"
  b4.shapeColor = "#E74C3C"

  edges = createEdgeSprites();
  
  b1.bounceOff(edges);
  b2.bounceOff(edges);
  b3.bounceOff(edges);
  b4.bounceOff(edges);
  
  
  drawSprites();
}
