// This one is truly cool, easily the coolest one I've seen yet.
export default function drawDragonCurve(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number) {
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


