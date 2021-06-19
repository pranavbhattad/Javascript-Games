// Variables

var background, backgroundImg;

var pink_balloon_img, pinkB;
var blue_balloon_img, blueB;
var red_balloon_img, redB;
var green_balloon_img, greenB;

var bow, bow_image;
var arrow, arrow_image, arrowGroup;

var score;




function preload(){ 
  backgroundImg = loadImage("img/background0.png");
  
  blue_balloon_img = loadImage("img/blue_balloon0.png");
  red_balloon_img = loadImage("img/red_balloon0.png");
  bow_image = loadImage("img/bow0.png");
  arrow_image = loadImage("img/arrow0.png");
  green_balloon_img = loadImage("img/green_balloon0.png");
  pink_balloon_img = loadImage("img/pink_balloon0.png");

}



function setup() {
  createCanvas(550, 550);
  
  //creating background
  background = createSprite(10, 0, 10, 10);
  background.addImage(backgroundImg);
  background.scale = 2.5;
  
  // creating bow to shoot arrow
  bow = createSprite(450, 300, 10, 10);
  bow.addImage(bow_image);
  bow.scale = 1;
  
  //   Score start value
  score =  0;
  
 //   New Groups
  redB   = new Group();
  greenB = new Group();
  pinkB  = new Group();
  blueB  = new Group();
  
  arrowGroup = new Group();

}



function draw() {

//   BackGround Movement
background.velocityX = -3;
  
if (background.x < 0){
  background.x = background.width/2;
}

  
// Bow
bow.y = mouseY;

  
// arrow
if (keyDown("z")) {
    createArrow();
    
  }

  
  
  //   Continous Balloons to burst
  
  var choose_balloon = Math.round(random(1,4));
  
  if(World.frameCount % 80 == 0){ 
    
    if (choose_balloon == 1){
      redBalloon();
      
    } else if (choose_balloon == 2){
      blueBalloon();
      
    } else if (choose_balloon == 3){
      pinkBalloon();
      
    } else {
      greenBalloon();
    }
    
  }

//   To increase the Score and to play
  
  if (arrowGroup.isTouching(redB)){
    redB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;
  }
  

  if (arrowGroup.isTouching(blueB)){
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;
  }
  
  
  if (arrowGroup.isTouching(greenB)){
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;
  }
  
  
  if (arrowGroup.isTouching(pinkB)) {
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;
  }
  
  
  
  drawSprites();

  //   What is the score?
  text("Score: "+ score, 500,50);

}



function createArrow() {
  var arrow =createSprite(100, 100, 60, 10);
  arrow.addImage(arrow_image);
  arrow.x = 360;
  arrow.y = bow.y;
  arrow.scale = 0.3;
  arrow.lifetime = 100;
  arrow.velocityX = -15;
  arrowGroup.add(arrow);

}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloon_img);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1
  redB.add(red);
}


function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloon_img);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
}


function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloon_img);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);

}


function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloon_img);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1.2;
  pinkB.add(pink);

}