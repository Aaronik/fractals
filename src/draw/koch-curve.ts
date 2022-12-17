export default function drawKochCurve(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, level: number) {
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


