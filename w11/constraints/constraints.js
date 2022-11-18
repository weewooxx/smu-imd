let Engine = Matter.Engine,
  Events = Matter.Events,
  Render = Matter.Render,
  Composites = Matter.Composites,
  Constraint = Matter.Constraint,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Composite = Matter.Composite,
  Bodies = Matter.Bodies,
  Vector = Matter.Vector;

// create engine
let engine;

let render = Render.create({
  engine: engine,
  options: {
    wireframes: false,
  },
});

// add mouse control
let mouse;
let mouseConstraint;

let canvas;
let matterBodies = [];
let matterConstraints = [];
let walls = [];
let colors = ["#ececd1", "#f55a3c", "#f19648", "#f5d259", "#063e7b"];

function createWalls(thickness) {
  let walls = [
    new P5Rect(width * 0.5, 0, width, thickness, {
      isStatic: true,
    }).setStrokeColor("#cccccc"),
    new P5Rect(width * 0.5, height, width, thickness, {
      isStatic: true,
    }).setStrokeColor("#cccccc"),
    new P5Rect(width, height * 0.5, thickness, height, {
      isStatic: true,
    }).setStrokeColor("#cccccc"),
    new P5Rect(0, height * 0.5, thickness, height, {
      isStatic: true,
    }).setStrokeColor("#cccccc"),
  ];
  walls.forEach((wall) => matterBodies.push(wall));
  return walls;
}

function setup() {
  let dom = document.getElementById("sketch");
  canvas = createCanvas(
    dom.getBoundingClientRect().width,
    dom.getBoundingClientRect().height
  );

  canvas.parent("sketch");
  engine = Engine.create();
  world = engine.world;

  walls = createWalls(50);

  // add stiff global constraint
  let body0 = new P5Polygon(200, 200, 5, 30);
  matterBodies.push(body0);
  let constraint0 = new P5Constraint({
    pointA: { x: 200, y: 120 },
    bodyB: body0.getBody(),
    pointB: { x: -10, y: -10 },
  });
  matterConstraints.push(constraint0);

  // add soft global constraint
  let body1 = new P5Polygon(580, 100, 3, 30);
  matterBodies.push(body1);
  let constraint1 = new P5Constraint({
    pointA: { x: 500, y: 120 },
    bodyB: body1.getBody(),
    pointB: { x: -10, y: -7 },
    stiffness: 0.001,
  });
  matterConstraints.push(constraint1);

  let body5A = new P5Polygon(100, 400, 6, 20);
  let body5B = new P5Polygon(200, 400, 1, 50);
  matterBodies.push(body5A);
  matterBodies.push(body5B);
  let constraint5 = new P5Constraint({
    bodyA: body5A.getBody(),
    pointA: { x: -10, y: -10 },
    bodyB: body5B.getBody(),
    pointB: { x: -10, y: -10 },
  });
  matterConstraints.push(constraint5);

  let body7A = new P5Polygon(500, 400, 6, 30);
  let body7B = new P5Polygon(600, 400, 7, 60);
  matterBodies.push(body7A);
  matterBodies.push(body7B);
  let constraint7 = new P5Constraint({
    bodyA: body7A.getBody(),
    pointA: { x: -10, y: -10 },
    bodyB: body7B.getBody(),
    pointB: { x: -10, y: -10 },
    stiffness: 0.001,
    damping: 0.1,
  });
  matterConstraints.push(constraint7);

  matterBodies
    .filter((body) => !walls.includes(body))
    .forEach((body) => {
      body.setFillColor(colors[Math.floor(random(colors.length))]);
    });

  // console.log(matterBodies);
  console.log(constraint7);

  // console.log(constraint7.getConstraint().bodyA.position.x);

  mouse = Mouse.create(canvas.elt);
  mouse.pixelRatio = pixelDensity();
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false,
      },
    },
  });

  Composite.add(world, mouseConstraint);
}

let trail = [];

Events.on(render, "afterRender", function () {
  trail.unshift({
    position: Vector.clone(body1.position),
    speed: body1.speed,
  });

  Render.startViewTransform(render);
  render.context.globalAlpha = 0.7;

  for (let i = 0; i < trail.length; i += 1) {
    let point = trail[i].position,
      speed = trail[i].speed;

    var hue = 250 + Math.round((1 - Math.min(1, speed / 10)) * 170);
    render.context.fillStyle = "hsl(" + hue + ", 100%, 55%)";
    render.context.fillRect(point.x, point.y, 2, 2);

    render.context.globalAlpha = 1;
    Render.endViewTransform(render);

    if (trail.length > 2000) {
      trail.pop();
    }
  }
});

render.mouse = mouse;

function draw() {
  background(255);
  Engine.update(engine);
  matterBodies.forEach((body) => {
    body.render();
  });
  matterConstraints.forEach((constraint) => constraint.render());

  matterBodies.forEach((obj, idx) => {
    if (mouseConstraint.body === obj.body) {
      fill("#000000");
    } else {
      fill(colors[idx % colors.length]);
    }
    obj.render();
  });
  // matterBodies.forEach((body) => {
  //   body.renderDirVector();
  // });
}
