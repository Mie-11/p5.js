let num = 1000;
let points = [];

function setup() {
  createCanvas(900, 900, WEBGL);
  pixelDensity(displayDensity());

  for (let i = 0; i < num; i++) {
    points.push(new Point());
  }
}

function draw() {
  background(460);
  translate(width / 16, height / 16,10);
  rotateY(frameCount * 0.01);

  for (let i = 0; i < num; i++) {
    points[i].display();
  }

  for (let i = 0; i < num; i++) {
    for (let j = i + 1; j < num; j++) {
      let d = dist(
        points[i].x,
        points[i].y,
        points[i].z,
        points[j].x,
        points[j].y,
        points[j].z
      );
      if (d < 40) {
        stroke(map( d,0, 40, 0, 205));
        strokeWeight(1);
        line(
          points[i].x,
          points[i].y,
          points[i].z,
          points[j].x,
          points[j].y,
          points[j].z
        );
      }
    }
  }
}

class Point {
  constructor() {
    this.radius = 300;
    let phi = random(TWO_PI);
    let unitZ = random(-1, 1);
    this.x = this.radius * sqrt(1 - unitZ * unitZ) * cos(phi);
    this.y = this.radius * sqrt(1 - unitZ * unitZ) * sin(phi);
    this.z = this.radius * unitZ;
  }

  display() {
    stroke(0,0,0);
    strokeWeight(3);
    point(this.x, this.y, this.z);
  }
}
