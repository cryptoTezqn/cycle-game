var fixedRec, movingRec;
function setup() {
  createCanvas(800,400);
fixedRec = createSprite(200,200,50,80);
movingRec = createSprite(400,200,80,30);
movingRec.shapeColor = "green";
fixedRec.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  movingRec.x = World.mouseX;
  movingRec.y = World.mouseY;
  if(movingRec.x-fixedRec.x < fixedRec.width/2+movingRec.width/2 
    && fixedRec.x-movingRec.x < movingRec.width/2+fixedRec.width/2
    && movingRec.y-fixedRec.y < fixedRec.width/2+movingRec.width/2 
    && fixedRec.y-movingRec.y < movingRec.width/2+fixedRec.width/2){
    fixedRec.shapeColor = "red";
    movingRec.shapeColor = "red";
  }
  else{
    fixedRec.shapeColor = "green";
    movingRec.shapeColor = "green";
  }
  drawSprites();
}