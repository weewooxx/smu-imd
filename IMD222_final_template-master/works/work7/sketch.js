class Particle {
  // 파티클의 좌표값, 반경, 그리고 속도를
  // 두 좌표축에 의거하여 설정합니다.
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.r = random(1, 20);
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-1, 1.5);
  }

  // 파티클 생성하기
  createParticle() {
    noStroke();
    fill(random(255), random(255), random(255));
    circle(this.x, this.y, this.r);
  }

  // 파티클이 움직이도록 설정하기
  moveParticle() {
    if (this.x < 0 || this.x > width) this.xSpeed *= -1;
    if (this.y < 0 || this.y > height) this.ySpeed *= -1;
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  joinParticles(paraticles) {
    particles.forEach((element) => {
      let dis = dist(this.x, this.y, element.x, element.y);
      if (dis < 85) {
        stroke(random(255), random(255), random(255));
        line(this.x, this.y, element.x, element.y);
      }
    });
  }
}

// 복수의 파티클들을 추가하기 위한 배열
let particles = [];

function setup() {
  let boundingRects = document
    .getElementById("p5Canvas")
    .getBoundingClientRect();
  let canvas = createCanvas(boundingRects.width, boundingRects.height);
  canvas.parent("p5Canvas");
  for (let i = 0; i < width / 10; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background("#0f0f0f");
  for (let i = 0; i < particles.length; i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
  }
}
