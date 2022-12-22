function setup() {
  //   let dom = document.getElementById("p5Canvas");
  //   createCanvas(dom.getClientRects().width, dom.getClientRects().height);

  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  //parent > class 못 받고 아이디만 받음.
}

let howManyX = 20;
let howManyY = 20;

function draw() {
  background(255);
  stroke(0);
  noFill();
  for (let tileCntX = 0; tileCntX < howManyX; tileCntX++) {
    for (let tileCntY = 0; tileCntY < howManyY; tileCntY++) {
      let tileCenterX = (width / (howManyX + 1)) * (tileCntX + 1);
      let tileCenterY = (height / (howManyY + 1)) * (tileCntY + 1);
      let tlX = tileCenterX - 0.5 * (width / (howManyX + 1));
      let tlY = tileCenterY - 0.5 * (height / (howManyY + 1));
      let brX = tileCenterX + 0.5 * (width / (howManyX + 1));
      let brY = tileCenterY + 0.5 * (height / (howManyY + 1));
      line(tlX, tlY, brX, brY);
    }
  }
}
