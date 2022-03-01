var box;


function setup() {
  createCanvas(600,600);
  box=createSprite(300,300,20,20);
  box.shapeColor="yellow";
}

function draw() {
  background("brown");

 if (keyIsDown("right")){
   box.x= box.x +5
 }
 
 if (keyIsDown("left"))[
   box.x= box.x -5
 ]

if(keyDown("up")){
  box.y = box.y -5
}else if(keyDown("down")){
  box.y = box.y +5
}
if(keyDown("space")){
  background("black");
}else{
  background("brown");
}


drawSprites();
} 