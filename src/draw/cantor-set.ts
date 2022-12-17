export default function drawCantorSet(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number) {
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


