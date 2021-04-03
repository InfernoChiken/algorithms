var moving, fixed;

var rect1, rect2, rect3, rect4;

function setup() {
  createCanvas(600, 600);
  moving = createSprite(10, 300, 40, 80);
  fixed = createSprite(300, 300, 50, 50);

  rect1 = createSprite(150, 150, 50, 50);
  rect2 = createSprite(250, 150, 50, 50);
  rect3 = createSprite(350, 150, 50, 50);
  rect4 = createSprite(450, 150, 50, 50);

  moving.shapeColor = "yellow";
  fixed.shapeColor = "green";

  moving.velocityX = 3;
}

function draw() {
  background(0);

  if (isTouching(moving, fixed)) {
    moving.shapeColor = "red";
    fixed.shapeColor = "blue";
  } else {
    moving.shapeColor = "yellow";
    fixed.shapeColor = "green";

    if (isTouching(moving, rect4)) {
      moving.shapeColor = "red";
      rect4.shapeColor = "blue";
    } else {
      moving.shapeColor = "yellow";
      rect4.shapeColor = "green";

      if (isTouching(moving, rect1)) {
        moving.shapeColor = "red";
        rect1.shapeColor = "blue";
      } else {
        moving.shapeColor = "yellow";
        rect1.shapeColor = "green";

        if (isTouching(moving, rect2)) {
          moving.shapeColor = "red";
          rect2.shapeColor = "blue";
        } else {
          moving.shapeColor = "yellow";
          rect2.shapeColor = "green";

          if (isTouching(moving, rect3)) {
            moving.shapeColor = "red";
            rect3.shapeColor = "blue";
          } else {
            moving.shapeColor = "yellow";
            rect3.shapeColor = "green";
          }
        }
      }
    }
  }

  bounceOff(moving, fixed);

  drawSprites();
}

// defining function: parameters
