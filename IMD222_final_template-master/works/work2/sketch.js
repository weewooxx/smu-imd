let theta;

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
}

function draw() {
  background(0);
  frameRate(30);
  stroke(random(255), random(255), random(255));
  let a = (mouseX / width) * 90;
  theta = radians(a);
  translate(width / 2, height);
  line(0, 0, 0, -150);
  translate(0, -150);
  branch(120);
}

function branch(h) {
  h *= 0.66;

  if (h > 2) {
    push();
    rotate(theta);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h);
    pop();

    push();
    rotate(-theta + 10);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h);
    pop();

    push();
    rotate(-theta);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h);
    pop();
  }
}

function mousePressed() {}
