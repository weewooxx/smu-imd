let oneDGraph;

function setup() {
  createCanvas(400, 400);
  oneDGraph = new OneDGraph();
  frameRate(15);
}

function draw() {
  background(255);
  let randVal = random(height);
  noStroke();
  fill("#ff0000");
  circle(width, randVal, 20);
  stroke(0);
  noFill();
  oneDGraph.update(randVal);
  oneDGraph.render();
}

class OneDGraph {
  constructor() {
    this.points = new Array(width);
    this.initPoints();
  }

  initPoints() {
    for (let idx = 0; idx < this.points.length; idx++) {
      this.points[idx] = height / 2.0;
    }
  }

  update(newVal) {
    this.points[this.points.length - 1] = newVal;
    for (let idx = 0; idx < this.points.length - 1; idx++) {
      this.points[idx] = this.points[idx + 1];
    }
  }

  render() {
    for (let idx = 1; idx < this.points.length; idx++) {
      line(idx - 1, this.points[idx - 1], idx, this.points[idx]);
    }
  }
}
