// Just rectangles and triangles
export default function drawRectsandTriang(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
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

