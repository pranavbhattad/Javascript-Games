// GameStates
var PLAY = "playing";
var END = "stopped";
var gameState = PLAY;

var sword, swordImage, knifeSwooshSound;
var score, gameOverImage, gameOverSound;
var monster, monsterImg, enemyGroup;
var apple, banana, orange, pear, fruitGroup, fruit;


function preload(){
    
    swordImage = loadImage("img/sword.png");
    monsterImg = loadAnimation("img/alien1.png", "img/alien2.png");

    apple = loadImage("img/apple.png");
    banana = loadImage("img/banana.png");
    orange = loadImage("img/orange.png");
    pear = loadImage("img/pear.png");

    gameOverImage = loadImage("img/gameover.png");

    knifeSwooshSound = loadSound("sound/knife.mp3")
    gameOverSound = loadSound("sound/gameover.mp3")
}


function setup(){
    
// Canvas Size and Positioning
    createCanvas(600,600);

// Creating Sword
    sword = createSprite(40, 200,20, 20);
    sword.addImage(swordImage);
    sword.scale = 0.7;

// set collider for sword
    sword.setCollider("rectangle", 0, 0, 40, 40);

// Score variables and Groups
    score = 0;
    fruitGroup = new Group();
    enemyGroup = new Group();

}

function draw(){
    background("lightblue");

  
    if (gameState === PLAY){

        // Calling the fruits and Enemy Function
        fruits();
        Enemy();  
        
        // Move sword with out=r Mouse Pointer
        sword.x  = mouseX;
        sword.y = mouseY;

        // Increase teh score if sword is touching fruit
        if (fruitGroup.isTouching(sword)){
            fruitGroup.destroyEach();
            knifeSwooshSound.play()
            score = score + 1;
        }

        if (enemyGroup.isTouching(sword)){
            gameState = END;

            gameOverSound.play();
            fruitGroup.destroyEach();
            enemyGroup.destroyEach();
            fruitGroup.setVelocityXEach(0);
            enemyGroup.setVelocityXEach(0);

            // Change the animation of sword to gameover and reset its position
            sword.addImage(gameOverImage);
            sword.x = 300;
            sword.y = 300;
        }
    }

    drawSprites();

    // Display score
    text("Score: " + score, 300, 30);
}

function fruits(){
    if(World.frameCount % 80 === 0){
        
        position = Math.round(random(1, 2));
        
        fruit = createSprite(600, 200, 20, 20);
        fruit.scale = 0.2;

        rFruit = Math.round(random(1, 4));

        if (rFruit == 1){
            fruit.addImage(apple);
        } else if (rFruit == 2){
            fruit.addImage(pear);
        } else if (rFruit == 3){
            fruit.addImage(orange);
        } else {
            fruit.addImage(banana);
        }

        fruit.y = Math.round(random(50, 340));

        fruit.velocityX = -7;
        fruit.setLifetime = 100;
        
        if(position == 1){
          fruit.x = 600;
          fruit.velocityX = -(7+(score/4));
        }
        else{
          if(position == 2){
            fruit.x = 0;
            fruit.velocityX = (7+(score/4));
          }
        }
      
        fruitGroup.add(fruit);

    }
}

function Enemy () {
    if(World.frameCount % 200 === 0){
        monster = createSprite(400, 200, 20, 20);
        monster.addAnimation("moving", monsterImg);
        monster.y =  Math.round(random(100, 300));
        monster.velocityX = -(8+(score/10));
        monster.setLifetime = 50;

        enemyGroup.add(monster);
      
    }
}