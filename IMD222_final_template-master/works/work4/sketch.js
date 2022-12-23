let actRandomSeed = 0;
let count = 150;

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  cursor(CROSS);
  noStroke();
}

function draw() {
  background(0);
  let faderX = mouseX / width;
  randomSeed(actRandomSeed);
  let angle = radians(360 / count);
  for (let i = 0; i < count; i++) {
    var randomX = random(0, width);
    var randomY = random(0, height);
    var circleX = width / 2 + cos(angle * i) * 300;
    var circleY = height / 2 + sin(angle * i) * 300;

    let x = lerp(randomX, circleX, faderX);
    let y = lerp(randomY, circleY, faderX);

    ellipse(x, y, 11, 11);
    fill(random(255), random(255), random(255));
  }
}

function mousePressed() {
  actRandomSeed = random(100000);
}

var myp5 = new p5(sketch);
