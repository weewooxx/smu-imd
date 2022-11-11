let t = 0; // 시간 변수

function setup() {
  createCanvas(1920, 1080);

  noStroke();
}

function draw() {
  background(10, 10); // 불투명한 배경화면(파티클의 꼬리 만들기)
  fill(height / 4.2, mouseY / 4.2, mouseX / 7.5);
  // 타원형으로 구성된 x와 y 그리드 만들기
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // 각 타원의 시작 점은 마우스 위치에 따라 달라집니다.
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // 또, 파티클의 위치에 따라 달라집니다.
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // 각 파티클은 동그라미를 그리며 움직입니다.
      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 15); // 파티클로 그리기
    }
  }

  t = t + 0.01; // 시간 업데이트
}

function mousePressed() {
  t2 = t + 0.2;
}

// const barWidth = 20;
// let lastBar = -1;

// function setup() {
//   createCanvas(720, 400);
//   colorMode(HSB, height, height, height);
//   noStroke();
//   background(0);
// }

// function draw() {
//   let whichBar = mouseX / barWidth;
//   if (whichBar !== lastBar) {
//     let barX = whichBar * barWidth;
//     fill(mouseY, height, height);
//     rect(barX, 0, barWidth, height);
//     lastBar = whichBar;
//   }
// }
