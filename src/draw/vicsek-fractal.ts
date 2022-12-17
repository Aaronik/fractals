export default function drawVicsekFractal(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, level: number) {
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

