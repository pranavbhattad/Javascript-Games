// All Variables 

var ball
var playerPaddle
var computerPaddle
var compScore
var playerScore

// GameState Variable
var gameState = "serve";

// Setup Function

function setup() {

  let cnv = createCanvas(400,400)
  cnv.position(450, 100)
  ball = createSprite(200,200,10,10);
  playerPaddle = createSprite(390,200,10,70)
  computerPaddle = createSprite(10,200,10,70)
  compScore = 0;
  playerScore = 0;
}

// Main Function

function draw() {
  background(0);
  
  edges = createEdgeSprites()

  //place info text in the center
  if (gameState === "serve") {
    fill(255, 255, 255);
    text("Press Space to Serve",150,180);
  }
   
  
  playerPaddle.y =  mouseY;
  
  //AI for the computer paddle
  //make it move with the ball's y position
  computerPaddle.y = ball.y;
  
  //draw line at the centre
  for (var i = 0; i < 400; i=i+20) {
    stroke(255, 255, 255)
    fill(255, 255, 255)
    line(200,i,200,i+10);
  }
  
  
  //create edge boundaries
  //make the ball bounce with the top and the bottom edges
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(playerPaddle);
  ball.bounceOff(computerPaddle);
 
  
  //serve the ball when space is pressed
  if (keyDown("space") && gameState === "serve") {
    serve();
    gameState = "play";
  }
  
 
  //reset the ball to the centre if it crosses the screen
  if(ball.x > 400 || ball.x <0) {
    reset();
    gameState ="serve";
  }
  
// Increasing Score
if (ball.isTouching(edges[1])) {
    compScore = compScore + 1;
  }
  
  text(compScore, 180, 15);
  text(playerScore, 220, 15);
  
// Colours
  ball.shapeColor = "white";
  playerPaddle.shapeColor = "white";
  computerPaddle.shapeColor = "white";

  drawSprites();
}

function serve() {
  ball.velocityX = 3;
  ball.velocityY = 4;
}

function reset() {
  ball.x = 200;
  ball.y = 200;
  ball.velocityX = 0;
  ball.velocityY = 0;
}