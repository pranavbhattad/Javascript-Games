// Matter Engine
var engine, world;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// Game Objects
var bird;
var birds=[];
var pig1, pig2;
var box1, box2, box3, box4, box5;
var log1, log2, log3, log4;
var slingshot, plateform;

// Background
var backgroundImg;
var bg = 'sprites/dark_bg.png';

// Score
var score = 0;

// Game State
var gameState = "onSling";

// Angry Bird Theme Font
let AngryFont;


function preload() {
    getBackgroundImg()
    bgImg=loadImage(bg);
    AngryFont = loadFont('sprites/angrybirds.ttf')
}

function setup(){

    var canvas = createCanvas(1200,400);
    canvas.position(5, 70);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    bird = new Bird(200,50);    
    bird2 = new Bird(150,170);   
    bird3 = new Bird(100,170);     
    bird4 = new Bird(50,170);

    birds.push(bird4)
    birds.push(bird3)
    birds.push(bird2)
    birds.push(bird)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    
    pig1 = new Pig(810, 350);
    pig2 = new Pig(810, 220);

    log1 = new Log(810,260,300, PI/2);
    log2 =  new Log(810,180,300, PI/2);
    log3 = new Log(760,120,150, PI/7);
    log4 = new Log(870,120,150, -PI/7);

    slingshot = new SlingShot(bird.body,{x:200, y:50});

}

function draw(){
    
    if(backgroundImg){
        background(backgroundImg);
    
        noStroke();
        textFont(AngryFont);
        textSize(30)
        fill("white")
        text("Score  " + score, width-300, 50)
    }

    else {
        background(bgImg);

        noStroke();
        textFont(AngryFont);
        textSize(30);
        fill("white");
        text("Score  " + score, width-300, 50)
    }

    Engine.update(engine);

    ground.display();
    platform.display();

    bird.display();
    bird2.display();
    bird3.display();
    bird4.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    pig1.display();
    pig2.display();

    pig1.score();
    pig2.score();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    slingshot.display();
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(birds[birds.length-1].body, {x: mouseX , y: mouseY});
        Matter.Body.applyForce(birds[birds.length-1].body, birds[birds.length-1].body.position, {x:5,y:-5})
        return false;
    }
}

function mouseReleased(){
    slingshot.fly();
    birds.pop();
    gameState = "launched";
    return false;
}


function keyPressed(){
    if((keyCode === 32) && gameState ==="launched"){
        if(birds.length>=0 ){   
            Matter.Body.setPosition(birds[birds.length-1].body, {x: 200 , y: 50});         
            slingshot.attach(birds[birds.length-1].body);
            gameState = "onSling";
        }   
    }   
}
    

async function getBackgroundImg(){

    try{
        var response = await fetch("http://worldtimeapi.org/api/ip.json");
        var responseJSON = await response.json();
    
        var datetime = responseJSON.datetime;
        var hour = datetime.slice(11,13);
        
        if(hour>=06 && hour<=20){
            bg = "sprites/light_bg.png";
        }
        else{
            bg = "sprites/dark_bg.png";
        }
    
        backgroundImg = loadImage(bg);
    }

    finally{
        bg = "sprites/dark_bg.png"
        backgroundImg = loadImage(bg);
    }
}