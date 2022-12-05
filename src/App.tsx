import './reset.css'
import './App.scss'
import React, { useEffect } from 'react'
import KoFiWidget from './KoFiWidget'
import Copyright from './Copyright'

// Here's the prompt I'm using to get these:
// I've already seen mandelbrot, the julia set, the apollonion gasket, the dragon curve, the sierpinski triangle, the koch curve, the peanno curve, the barnsley fern, the heighway dragon, the Vicsek fractal, and the cantor set. Can you show me a different one that I haven't already seen?

const randomInt = (max: number = 1) => {
  return Math.round(Math.random() * max)
}

function generateFractal() {
  // Get the canvas element by its ID
  const canvasElement = document.getElementById("fractal-canvas") as HTMLCanvasElement;

  canvasElement.addEventListener("click", (evt) => {
    drawPeanoCurve(ctx, 0, 0, width, 4);
  });

  canvasElement.addEventListener("mousemove", (evt) => {
    drawPeanoCurve(ctx, 0, 0, width, 4);
  });

  const width = window.innerWidth
  const height = window.innerHeight

  // Set the size of the canvas
  canvasElement.width = width
  canvasElement.height = height

  // Get the canvas drawing context
  const ctx = canvasElement.getContext("2d") as CanvasRenderingContext2D

  // drawMandelbrot(ctx, randomInt(100), randomInt(100), 100)
  // drawApollionianGasket(ctx, randomInt(100), randomInt(300), randomInt(400));
  // drawSierpinskiTriangle(ctx, Math.random() * 400, Math.random() * 300, Math.random() * 400, Math.random() * 300, Math.random() * 400, Math.random() * 400);
  // drawCantorSet(ctx, 100, 100, 200, 3);
  // drawKochCurve(ctx, 100, 100, 300, 100, 4);

  // drawPeanoCurve(ctx, 0, 0, width, 4);
  // generateBarnsleyFern(ctx)
  // drawBarnsleyFern(ctx, 0, 0, 1000)
  // drawHeighwayDragon(ctx, 100, 100, 200, 10)
  // drawVicsekFractal(ctx, 100, 100, 300, 6)
  drawPeanoCurve(ctx, 0, 0, width, 4);
}

// Just rectangles and triangles
function drawRectsandTriang(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  // Calculate the coordinates and size of the next level of the fractal
  const x1 = x - size / 2;
  const y1 = y - size / 2;
  const x2 = x + size / 2;
  const y2 = y + size / 2;
  const size1 = size / 2;

  // Draw the current level of the fractal
  ctx.beginPath();
  ctx.rect(x1, y1, size1, size1);
  ctx.rect(x2, y1, size1, size1);
  ctx.rect(x1, y2, size1, size1);
  ctx.rect(x2, y2, size1, size1);
  ctx.fillStyle = "#555";
  ctx.fill();

  // // Draw the triangles
  // ctx.beginPath();
  // ctx.moveTo(x1, y1);
  // ctx.lineTo(x, y);
  // ctx.lineTo(x1, y2);
  // ctx.lineTo(x2, y2);
  // ctx.lineTo(x, y);
  // ctx.lineTo(x2, y1);
  // ctx.fillStyle = "#FF0000";
  // ctx.fill();

  if (size1 > 10) {
    drawRectsandTriang(ctx, x1, y1, size1);
    drawRectsandTriang(ctx, x2, y1, size1);
    drawRectsandTriang(ctx, x1, y2, size1);
    drawRectsandTriang(ctx, x2, y2, size1);
  }
}

// Mandelbrot (according to chat bot, actually it's just more squares)
function drawMandelbrot(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  // Calculate the coordinates and size of the next level of the fractal
  // Calculate the coordinates and size of the next level of the fractal
  const x1 = x - size / 2;
  const y1 = y - size / 2;
  const x2 = x + size / 2;
  const y2 = y + size / 2;
  const size1 = size / 2;

  // Calculate the complex coordinates for the current level of the fractal
  const cx = -0.8;
  const cy = 0.156;
  let zx = x1 + size1 / 2;
  let zy = y1 + size1 / 2;

  // Calculate the number of iterations for the current level of the fractal
  const maxIterations = 128;
  let iterations = 0;
  while (zx * zx + zy * zy <= 4 && iterations <= maxIterations) {
    const zx1 = zx * zx - zy * zy + cx;
    const zy1 = 2 * zx * zy + cy;
    zx = zx1;
    zy = zy1;
    iterations++;
  }

  // Calculate the normalized value of the number of iterations
  const n = Math.log(iterations) / Math.log(maxIterations);

  // Draw the current level of the fractal
  ctx.beginPath();
  ctx.rect(x1, y1, size1, size1);
  ctx.fillStyle = `hsl(${n * 360}, 100%, 50%)`;
  ctx.fill();

  // Recursively draw the next level of the fractal, if the size is greater than 1
  if (size1 > 1) {
    drawMandelbrot(ctx, x1, y1, size1);
    drawMandelbrot(ctx, x2, y1, size1);
    drawMandelbrot(ctx, x1, y2, size1);
    drawMandelbrot(ctx, x2, y2, size1);
  }
}

// Julia set
function drawJuliaSet(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  // Calculate the coordinates and size of the next level of the fractal
  const x1 = x - size / 2;
  const y1 = y - size / 2;
  const x2 = x + size / 2;
  const y2 = y + size / 2;
  const size1 = size / 2;

  // Calculate the complex coordinates for the current level of the fractal
  const cx = -0.8;
  const cy = 0.156;
  let zx = x1 + size1 / 2;
  let zy = y1 + size1 / 2;

  // Calculate the number of iterations for the current level of the fractal
  const maxIterations = 128;
  let iterations = 0;
  while (zx * zx + zy * zy <= 4 && iterations <= maxIterations) {
    const zx1 = zx * zx - zy * zy + cx;
    const zy1 = 2 * zx * zy + cy;
    zx = zx1;
    zy = zy1;
    iterations++;
  }

  // Calculate the normalized value of the number of iterations
  const n = iterations / maxIterations;

  // Draw the current level of the fractal
  ctx.beginPath();
  ctx.rect(x1, y1, size1, size1);
  ctx.fillStyle = `hsl(${n * 360}, 100%, 50%)`;
  ctx.fill();

  // Recursively draw the next level of the fractal, if the size is greater than 1
  if (size1 > 1) {
    drawJuliaSet(ctx, x1, y1, size1);
    drawJuliaSet(ctx, x2, y1, size1);
    drawJuliaSet(ctx, x1, y2, size1);
    drawJuliaSet(ctx, x2, y2, size1);
  }
}

// Apallonian gasket. Fun
function drawApollionianGasket(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
  // Stop recursing if the radius is less than 1
  if (r < 1) return;

  // Calculate the coordinates of the centers of the three new circles
  const r1 = r / 2;
  const r2 = r * Math.sqrt(3) / 2;
  const x1 = x;
  const y1 = y + r + r1;
  const x2 = x + r2;
  const y2 = y - r1;
  const x3 = x - r2;
  const y3 = y - r1;

  // Draw the current circle
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
  ctx.fill();

  // Recursively draw the three new circles
  drawApollionianGasket(ctx, x1, y1, r1);
  drawApollionianGasket(ctx, x2, y2, r1);
  drawApollionianGasket(ctx, x3, y3, r1);
}

// This one is truly cool, easily the coolest one I've seen yet.
function drawDragonCurve(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number) {
  // Stop recursing if the line segment is less than 1 pixel long
  if (Math.abs(x1 - x2) < 1 && Math.abs(y1 - y2) < 1) return;

  // Calculate the coordinates of the new points
  const x3 = (x1 + x2) / 2 + (y2 - y1) / 2;
  const y3 = (y1 + y2) / 2 + (x1 - x2) / 2;
  const x4 = (x1 + x2) / 2 + (y1 - y2) / 2;
  const y4 = (y1 + y2) / 2 + (x2 - x1) / 2;

  // Draw the current line segment
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
  ctx.stroke();

  // Recursively draw the two new line segments
  drawDragonCurve(ctx, x3, y3, x2, y2);
  drawDragonCurve(ctx, x1, y1, x4, y4);
}

function drawSierpinskiTriangle(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
  // Stop recursing if the triangle is less than 1 pixel on a side
  if (Math.abs(x1 - x2) < 1 && Math.abs(x2 - x3) < 1 && Math.abs(y1 - y2) < 1 && Math.abs(y2 - y3) < 1) return;

  // Calculate the coordinates of the new points
  const x12 = (x1 + x2) / 2;
  const y12 = (y1 + y2) / 2;
  const x23 = (x2 + x3) / 2;
  const y23 = (y2 + y3) / 2;
  const x31 = (x3 + x1) / 2;
  const y31 = (y3 + y1) / 2;

  // Draw the current triangle
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.closePath();
  ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
  ctx.fill();

  // Recursively draw the three new triangles
  drawSierpinskiTriangle(ctx, x1, y1, x12, y12, x31, y31);
  drawSierpinskiTriangle(ctx, x2, y2, x12, y12, x23, y23);
  drawSierpinskiTriangle(ctx, x3, y3, x23, y23, x31, y31);
}

function drawCantorSet(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number) {
  // Stop recursing if the line segment is less than 1 pixel long
  if (Math.abs(x1 - x2) < 1) return;

  // Calculate the coordinates of the new points
  const x12 = (x1 + x2) / 3;
  const x23 = (x1 + x2) / 3 * 2;

  // Draw the current line segment
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
  ctx.stroke();

  // Recursively draw the two new line segments
  drawCantorSet(ctx, x1, y1, x12, y1);
  drawCantorSet(ctx, x23, y1, x2, y2);
}

function drawKochCurve(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, level: number) {
  // Calculate the coordinates of the next level of the fractal
  const x3 = (2 * x1 + x2) / 3;
  const y3 = (2 * y1 + y2) / 3;
  const x4 = (x1 + 2 * x2) / 3;
  const y4 = (y1 + 2 * y2) / 3;
  const x5 = (x1 + x2) / 2 - (y2 - y1) * Math.sqrt(3) / 6;
  const y5 = (y1 + y2) / 2 + (x2 - x1) * Math.sqrt(3) / 6;

  // Draw the current level of the fractal
  if (level === 0) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
    ctx.stroke();
  } else {
    // Recursively draw the next level of the fractal
    drawKochCurve(ctx, x1, y1, x3, y3, level - 1);
    drawKochCurve(ctx, x3, y3, x5, y5, level - 1);
    drawKochCurve(ctx, x5, y5, x4, y4, level - 1);
    drawKochCurve(ctx, x4, y4, x2, y2, level - 1);
  }
}

function drawPeanoCurve(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, level: number) {
  // Recursively draw the next level of the Peano curve, if the level is greater than 0
  if (level > 0) {
    // Calculate the size of the next level of the Peano curve
    const size1 = size / 3;

    // Draw the first segment of the Peano curve
    drawPeanoCurve(ctx, x, y, size1, level - 1);

    // Draw the second segment of the Peano curve
    drawPeanoCurve(ctx, x + size1, y, size1, level - 1);

    // Draw the third segment of the Peano curve
    drawPeanoCurve(ctx, x + 2 * size1, y, size1, level - 1);

    // Draw the fourth segment of the Peano curve
    drawPeanoCurve(ctx, x + 2 * size1, y + size1, size1, level - 1);

    // Draw the fifth segment of the Peano curve
    drawPeanoCurve(ctx, x + size1, y + size1, size1, level - 1);

    // Draw the sixth segment of the Peano curve
    drawPeanoCurve(ctx, x, y + size1, size1, level - 1);

    // Draw the seventh segment of the Peano curve
    drawPeanoCurve(ctx, x, y + 2 * size1, size1, level - 1);

    // Draw the eighth segment of the Peano curve
    drawPeanoCurve(ctx, x + size1, y + 2 * size1, size1, level - 1);

    // Draw the ninth segment of the Peano curve
    drawPeanoCurve(ctx, x + 2 * size1, y + 2 * size1, size1, level - 1);
  }

  // Calculate the starting point and ending point of the line
  const x1 = x + size / 3;
  const y1 = y + size / 3;
  const x2 = x + 2 * size / 3;
  const y2 = y + 2 * size / 3;

  // Draw the line to the screen
  ctx.beginPath();
  ctx.lineTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
  ctx.stroke();
}

function generateBarnsleyFern(ctx: CanvasRenderingContext2D) {
  // Set the initial point
  let x = 0;
  let y = 0;

  // Set the transformation probabilities
  const p1 = 0.85;
  const p2 = 0.92;
  const p3 = 0.99;

  // Set the number of iterations
  const iterations = 10000;

  ctx.translate(60, 60)
  ctx.scale(10, 10)

  // Draw the fractal
  ctx.beginPath();
  ctx.moveTo(x, y);
  for (let i = 0; i < iterations; i++) {
    const r = Math.random();
    if (r <= p1) {
      x = 0.85 * x + 0.04 * y;
      y = -0.04 * x + 0.85 * y + 1.6;
    } else if (r <= p2) {
      x = 0.2 * x - 0.26 * y;
      y = 0.23 * x + 0.22 * y + 1.6;
    } else if (r <= p3) {
      x = -0.15 * x + 0.28 * y;
      y = 0.26 * x + 0.24 * y + 0.44;
    } else {
      x = 0;
      y = 0.16 * y;
    }
    ctx.lineTo(x, y);
  }

  // Set the stroke style and draw the fractal
  ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
  ctx.stroke();
}

function drawBarnsleyFern(ctx: CanvasRenderingContext2D, x: number, y: number, iterations: number) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  for (let i = 0; i < iterations; i++) {
    // Generate a random number between 0 and 1
    const r = Math.random();

    // Choose which transformation to apply based on the value of r
    if (r < 0.01) {
      // Transformation 1: Scale by 0.16 and translate by 0, 0.01
      x = 0.16 * x;
      y = 0.16 * y + 0.01;
    } else if (r < 0.86) {
      // Transformation 2: Scale by 0.85, rotate by -0.15 radians, and translate by 0, 1.6
      const a = -0.15;
      const s = 0.85;
      const tx = 0;
      const ty = 1.6;
      x = s * x * Math.cos(a) - s * y * Math.sin(a) + tx;
      y = s * x * Math.sin(a) + s * y * Math.cos(a) + ty;
    } else if (r < 0.93) {
      // Transformation 3: Scale by 0.2, rotate by 0.28 radians, and translate by 0, 0.26
      const a = 0.28;
      const s = 0.2;
      const tx = 0;
      const ty = 0.26;
      x = s * x * Math.cos(a) - s * y * Math.sin(a) + tx;
      y = s * x * Math.sin(a) + s * y * Math.cos(a) + ty;
    } else {
      // Transformation 4: Scale by -0.04, rotate by 0.24 radians, and translate by 0, 0.44
      const a = 0.24;
      const s = -0.04;
      const tx = 0;
      const ty = 0.44;
      x = s * x * Math.cos(a) - s * y * Math.sin(a) + tx;
      y = s * x * Math.sin(a) + s * y * Math.cos(a) + ty;
    }

    // Draw a point at the current coordinates
    ctx.lineTo(x, y);
    ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
    ctx.stroke();
  }
}

function drawHeighwayDragon(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, level: number) {
  if (level === 0) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + size, y);
    ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
    ctx.stroke();
    return;
  }

  const size1 = size / Math.sqrt(2);
  drawHeighwayDragon(ctx, x, y, size1, level - 1);
  drawHeighwayDragon(ctx, x + size1, y + size1, size1, level - 1);
  drawHeighwayDragon(ctx, x + size, y + size, -size1, level - 1);
}

function drawVicsekFractal(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, level: number) {
  if (level === 0) {
    return;
  }

  const angle = Math.PI / 5;
  const size1 = size / 3;

  ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;

  ctx.save();
  ctx.translate(x + size / 2, y + size / 2);
  ctx.rotate(angle);
  ctx.translate(-x - size / 2, -y - size / 2);
  drawVicsekFractal(ctx, x, y, size1, level - 1);
  ctx.restore();

  ctx.save();
  ctx.translate(x + size / 2, y + size / 2);
  ctx.rotate(-angle);
  ctx.translate(-x - size / 2, -y - size / 2);
  drawVicsekFractal(ctx, x + 2 * size1, y, size1, level - 1);
  ctx.restore();

  ctx.save();
  ctx.translate(x + size / 2, y + size / 2);
  ctx.translate(-x - size / 2, -y - size / 2);
  drawVicsekFractal(ctx, x + size1, y + size1, size1, level - 1);
  ctx.restore();

  ctx.beginPath();
  ctx.moveTo(x + size1, y);
  ctx.lineTo(x + size1, y + size);
  ctx.stroke();
}

function App() {

  useEffect(() => {
    generateFractal()
  }, [])

  return (
    <React.Fragment>
      <canvas id="fractal-canvas"></canvas>
      <KoFiWidget />
      <Copyright />
    </React.Fragment>
  );
}

export default App
