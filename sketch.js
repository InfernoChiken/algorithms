var moving, fixed;

function setup() {
  createCanvas(600, 600);
  moving = createSprite(300, 300, 40, 80);
  fixed = createSprite(300, 300, 60, 60);

  moving.shapeColor = "yellow";
  fixed.shapeColor = "green";
}

function draw() {

  background(0);

  moving.x = mouseX;
  moving.y = mouseY;

  if (moving.x - fixed.x < moving.width / 2 + fixed.width / 2 &&
    fixed.x - moving.x < moving.width/2 + fixed.width/2 &&
    moving.y - fixed.y < moving.height/2 + fixed.height/2 &&
    fixed.y - moving.y < moving.height/2 + fixed.height/2) {
    moving.shapeColor = "red";
    fixed.shapeColor = "blue";
  } else {
    moving.shapeColor = "yellow";
    fixed.shapeColor = "green";
  }

  drawSprites();
}
