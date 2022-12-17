export default function drawHeighwayDragon(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, level: number) {
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


