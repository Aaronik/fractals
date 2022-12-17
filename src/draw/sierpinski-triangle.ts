export default function drawSierpinskiTriangle(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
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

