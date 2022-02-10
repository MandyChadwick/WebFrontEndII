console.clear();

window.addEventListener('keydown', e => {
  if (e.keyCode === 32) {
    cancelAnimationFrame(anim);
    anim = null;
  }
})


let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let width = canvas.width = 900;
let height = canvas.height = 500;
let done = false;
let radiusStep = 0.1;
let radius = nextRadius(40);
let points = [];
ctx.lineWidth = 1;
let degrees = nextRadian(0);
let bigRads = nextBigRad(0);
let stepSize = 0.1;
let bigStepSize = 0.001;
let center = {
  x: width/2,
  y: height/2
}
const toRads = deg => deg * (180/Math.PI);
let bigRadius = Math.min(width * 1/2, height * 1/2);
let smallRadius = radius.next().value;

console.log(bigRadius)

class Point {
  constructor (r,rad) {
    this.x = r * Math.cos(rad) + center.x;
    this.y = r * Math.sin(rad) + center.y;
  }
}

let anim = null;
draw();

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  
  ctx.strokeRect(0,0,width,height);
  
  const nextRad = bigRads.next().value;
  bigRadius += -0.05;
  center.x = bigRadius * Math.cos(nextRad) + width/2;
  center.y = bigRadius * Math.sin(nextRad) + height/2;
  
  crossHairs();
  
  for (let i = 0; i < 5; i++) {
    points.push(
      new Point(smallRadius, degrees.next().value)
    );
  }
  
  drawPoints(points);
  
  anim = requestAnimationFrame(draw);
}

function* nextRadius(index) {
  while (!done) {
    yield index;
    
    if (index <= 10) {
      radiusStep *= -1;
      index += radiusStep
    } else if (index >= 50) {
      radiusStep *= -1;
      index += radiusStep
    } else {
      index += radiusStep
    }
  }
}

function* nextRadian(index) {
  while (!done) {
    yield index * Math.PI;
    index += stepSize;
    if (index % 2 > 1.9) {
      smallRadius = radius.next().value;
    }
  }
}
function* nextBigRad(index) {
  while (index <= 4) {
    yield index * Math.PI;
    index += bigStepSize;
  }
  done = true;
}

function crossHairs() {
  // cross hairs
  line(new Point(smallRadius, Math.PI), new Point(smallRadius, 0));
  line(new Point(smallRadius, Math.PI * 1.5), new Point(smallRadius, Math.PI * .5));
}

function circle(r,cx,cy) {
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2, 0);
  ctx.fill();
  ctx.closePath();
}

function line(point1, point2) {
  ctx.beginPath();
  ctx.moveTo(point1.x, point1.y);
  ctx.lineTo(point2.x, point2.y);
  ctx.stroke();
  ctx.closePath();
}

function drawPoints(points) {
  if (points.length < 3) {
      var b = points[0];
      ctx.beginPath();
      ctx.arc(b.x, b.y, ctx.lineWidth / 2, 0, Math.PI * 2, !0);
      ctx.fill();
      ctx.closePath();
      
      return;
  }

  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (var i = 1; i < points.length - 2; i++) {
      var c = (points[i].x + points[i + 1].x) / 2;
      var d = (points[i].y + points[i + 1].y) / 2;
      ctx.quadraticCurveTo(points[i].x, points[i].y, c, d);
  }
	// For the last 2 points
	ctx.quadraticCurveTo(
		points[i].x,
		points[i].y,
		points[i + 1].x,
		points[i + 1].y
  );
  ctx.strokeStyle = "steelblue";
  ctx.stroke();
  ctx.closePath();

}