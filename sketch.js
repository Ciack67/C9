var bockx
function setup() {
  createCanvas(400,400);

  bockx= createSprite (200,200,100,100)
}

function draw() 
{
  background(30);
if(keyIsDown(UP_ARROW)){
  bockx.position.y-= 3
}
if(keyIsDown("W")){
  bockx.position.x-= 3
}
  drawSprites();
}




