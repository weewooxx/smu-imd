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

let howMany = 50;

function draw() {
  background(255);
  stroke(0);
  noFill();
  //   for (let tileX = 0; tileX < width; tileX += 10) {
  //     line(tileX, 0, tileX, height);

  for (let tileCnt = 0; tileCnt < howMany; tileCnt++) {
    let tileX = (width / (howMany + 1)) * (tileCnt + 1);
    line(tileX, 0, tileX, height);
  }
}
