class Circle {
  constructor(x, y, d, c, opt) {
    this.d = d;
    //   this.r = d /2; 가능. 같아야한다는 법칙은 없음.
    this.c = c;
    this.bodies = Bodies.circle(x, y, this.d * 0.5, opt);
  }

  render() {
    //   rectMode(CENTER);
    // 원은 중심에서 위아래로 크기 구현. 고로 위 코드는 필요 없음.
    push();
    translate(this.bodies.position.x, this.bodies.position.y);
    rotate(this.bodies.angle);
    fill(this.c);
    circle(0, 0, this.d);
    pop();
  }
}
