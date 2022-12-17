export default function drawPeanoCurve(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, level: number) {
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
  // ctx.strokeStyle = randomColor()
  ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
  ctx.stroke();
}

