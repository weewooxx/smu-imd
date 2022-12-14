// 반사 횟수에 따른 대칭을 설정합니다. 반사 횟수를 조정해보세요.
let symmetry = 9;

let angle = 360 / symmetry;
let saveButton, clearButton, mouseButton, keyboardButton;
let slider;

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  angleMode(DEGREES);
  background(0);

  saveButton = createButton("save");
  saveButton.mousePressed(saveFile);

  clearButton = createButton("clear");
  clearButton.mousePressed(clearScreen);

  fullscreenButton = createButton("Full Screen");
  fullscreenButton.mousePressed(screenFull);

  brushSizeSlider = createButton("Brush Size Slider");
  sizeSlider = createSlider(1, 32, 4, 0.1);
}

function saveFile() {
  save("design.jpg");
}

function clearScreen() {
  background(0);
}

function screenFull() {
  let fs = fullscreen();
  fullscreen(!fs);
}

function draw() {
  translate(width / 2, height / 2);
  fill(random(255), random(255), random(255));

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;

    if (mouseIsPressed) {
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        let sw = sizeSlider.value();
        strokeWeight(sw);
        stroke(random(255), random(255), random(255));
        line(mx, my, pmx, pmy);
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);

        pop();
      }
    }
  }
}
