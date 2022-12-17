// Apallonian gasket. Fun
export default function drawApollionianGasket(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
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

