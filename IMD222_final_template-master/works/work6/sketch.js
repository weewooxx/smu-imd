function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
}

let howManyX = 20;
let howManyY = 20;

function draw() {
  background(0);
  let tileWidth = width / (howManyX + 1);
  let tileHeight = height / (howManyY + 1);
  for (let tileCntX = 0; tileCntX < howManyX; tileCntX++) {
    for (let tileCntY = 0; tileCntY < howManyY; tileCntY++) {
      let tileCenterX = tileWidth * (tileCntX + 1);
      let tileCenterY = tileHeight * (tileCntY + 1);

      let toMouseAngle = atan2(mouseY - tileCenterY, mouseX - tileCenterX);
      push();
      translate(tileCenterX, tileCenterY);
      rotate(toMouseAngle + degrees(10));
      noFill();
      stroke(random(255), random(255), random(255));
      strokeWeight(10);
      line(0 - tileWidth * 0.5 + 5, 0, 0 + tileWidth * 0.5 - 5, 0);
      fill(0);
      noStroke();
      circle(0 + tileWidth * 0.5 - 5, 0, 10);
      pop();
    }
  }
}
