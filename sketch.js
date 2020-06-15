var wall,thickness;

var bullet,speed,weight;





function setup() {
  createCanvas(1600,400);
  
  speed = random(123,321);
  weight = random(20,52);
  thickness = random(22,83);
  bullet = createSprite(50,200,50,50);
  
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "white";
  bullet.shapeColor = "yellow";
  bullet.velocityX = speed;
 
}

function draw() {
  background(0);
  if(wall.x-bullet.x<wall.width/2+bullet.width/2){
    bullet.velocityX = 0;
    var damage = 0.5 *weight*speed*speed/thickness*thickness*thickness;
    if(damage<10){
      wall.shapeColor= "green";
    }
    if(damage>10){

    wall.shapeColor = "red";
    }
  }
  


  
  drawSprites();
}