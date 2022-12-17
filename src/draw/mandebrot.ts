// Mandelbrot (according to chat bot, actually it's just more squares)
export default function drawMandelbrot(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
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


