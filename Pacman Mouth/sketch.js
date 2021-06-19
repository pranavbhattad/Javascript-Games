i = 1.85 // upper mouth radian
x = 0.2 // lower mouth radian
speed = 0.01 // speed of mouth opening & closing

function setup() { 
  var cnv = createCanvas(400, 400);
} 

function draw() { 
  background(0);
  
  //Pacman body
  fill(255, 255, 0);
  ellipse(200, 200, 200, 200);
  
  //Pacman mouth
  fill(0);

  if (i >= 2 || i <= 1.8) {
    speed = speed*(-1) 
  }
  arc(200, 200, 200, 200, 
      (i+=speed)*PI, (x-=speed)*PI, PIE);
  
  //Pacman eye
  ellipse(200, 150, 15, 15);

}