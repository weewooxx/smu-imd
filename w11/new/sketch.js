// module aliases
let Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

let engine;
let world;
let circles = [];
let boundaries = [];

let ground;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  //Engine.run(engine);

  boundaries.push(new Boundary(150, 200, width * 0.6, 20, 0.3));
  boundaries.push(new Boundary(250, 300, width * 0.6, 20, -0.3));
}

// function keyPressed() {
//   if (key == ' ') {
//   }
// }

function mouseDragged() {
  circles.push(new Circle(mouseX, mouseY, random(5, 10)));
  Engine.update(engine);
}
// function mouseDragged() {
//   circles.push(new Circle(200, 50, random(5, 10)));

// }

function draw() {
  background(51);
  for (let i = 0; i < boundaries.length; i++) {
    boundaries[i].show();
  }
  for (let i = 0; i < circles.length; i++) {
    circles[i].show();
    if (circles[i].isOffScreen()) {
      circles[i].removeFromWorld();
      circles.splice(i, 1);
      i--;
    }
  }
  //   console.log(circles.length, world.bodies.length);
}
