// Declaring Variables

var deaths
var ding
var dong1
var dong2
var dong3
var dong4
var wall1
var wall2
var wall3
var wall4
var wall5
var wall6
var wall7
var wall8
var wall9
var wall10
var wall11
var wall12

function setup(){

  // Creating Sprites
  wall1 = createSprite(190,120,250,3); // Upper
  wall2 = createSprite(190,260,250,3); //Down
  wall3 = createSprite(67,145,3,50); // Left Standing Up
  wall4 = createSprite(67,235,3,50); // Left Standing Down
  wall5 = createSprite(313,145,3,50); // Right Standing Up
  wall6 = createSprite(313,235,3,50); // Right Standing Down
  wall7 = createSprite(41,170,50,3); // Left Up
  wall8 = createSprite(41,210,50,3); // Left Down
  wall9 = createSprite(337,210,50,3); // Right down
  wall10 = createSprite(337,170,50,3); //Right Up
  wall11 = createSprite(18,190,3,40); // Left
  wall12 = createSprite(361,190,3,40); // Right

  // Creating the Player (Ding)
  ding = createSprite(40,190,13,13);
  ding.shapeColor = "red";

  // Creating Obstacles

  // Obstacle Property
  stroke("black");
  fill("blue");
  strokeWeight(2.5);

  // Obstacle
  dong1 = createSprite(100,130, 14, 14);
  dong1.shapeColor = "blue";

  dong2 = createSprite(215,130, 14, 14);
  dong2.shapeColor = "blue";

  dong3 = createSprite(160, 250, 14, 14);
  dong3.shapeColor = "blue";

  dong4 = createSprite(265, 250, 14, 14);
  dong4.shapeColor = "blue";

  // Obsctacle Movement/Velocity
  dong1.velocityY = 5;
  dong2.velocityY = 5;
  dong3.velocityY = -5;
  dong4.velocityY = -5;

  deaths = 0;

}


function draw() {
  
// Background
  background("lightblue");
  
// Displays the number of Deaths
  strokeWeight(0);
  fill(0);
  textSize(16);
  text("Deaths: " + deaths,161,100);

// The Side Reactangles
// Rectangles to Highlight
  strokeWeight(0);
  fill("lightgreen");
  rect(18,170,52,40);
  rect(308,170,52,40);

// Big Middle Rectangle
fill ("#FFFDD0");
rect(70, 120, 243, 140);

// Ball BounceOff Function
ding.bounceOff(wall11);
ding.bounceOff(wall12);
dong1.bounceOff(wall1);
dong1.bounceOff(wall2);
dong2.bounceOff(wall1);
dong2.bounceOff(wall2);
dong3.bounceOff(wall1);
dong3.bounceOff(wall2);
dong4.bounceOff(wall1);
dong4.bounceOff(wall2);

// Making of Controls

ding.velocityX = 0;

if(keyDown("right") || keyDown("d")){
  ding.velocityX = 2;
}
if(keyDown("left") || keyDown("a")){
  ding.velocityX = -2;
}

// Game Reset and Death Counter

if(ding.isTouching(dong1)|| 
   ding.isTouching(dong2)||
   ding.isTouching(dong3)||
   ding.isTouching(dong4)){
   
   ding.x = 40;
   ding.y = 190;
   deaths = deaths + 1;
}

// Winning the Game!

// You Win 

if (ding.x > 310){
  fill("black");
  ding.destroy()
  dong4.destroy()
  dong3.destroy()
  dong2.destroy()
  dong1.destroy()
  textSize(15);
  text("You just defeated the World's Hardest Game!", 50, 195);
  ding.setVelocity(0,0);
}

  drawSprites();
}
