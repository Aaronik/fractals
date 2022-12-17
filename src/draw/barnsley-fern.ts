export default function generateBarnsleyFern(ctx: CanvasRenderingContext2D) {
  // Set the initial point
  let x = 0;
  let y = 0;

  // Set the transformation probabilities
  const p1 = 0.85;
  const p2 = 0.92;
  const p3 = 0.99;

  // Set the number of iterations
  const iterations = 10000;

  ctx.translate(60, 60)
  ctx.scale(10, 10)

  // Draw the fractal
  ctx.beginPath();
  ctx.moveTo(x, y);
  for (let i = 0; i < iterations; i++) {
    const r = Math.random();
    if (r <= p1) {
      x = 0.85 * x + 0.04 * y;
      y = -0.04 * x + 0.85 * y + 1.6;
    } else if (r <= p2) {
      x = 0.2 * x - 0.26 * y;
      y = 0.23 * x + 0.22 * y + 1.6;
    } else if (r <= p3) {
      x = -0.15 * x + 0.28 * y;
      y = 0.26 * x + 0.24 * y + 0.44;
    } else {
      x = 0;
      y = 0.16 * y;
    }
    ctx.lineTo(x, y);
  }

  // Set the stroke style and draw the fractal
  ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
  ctx.stroke();
}


// export default function drawBarnsleyFern(ctx: CanvasRenderingContext2D, x: number, y: number, iterations: number) {
//   ctx.beginPath();
//   ctx.moveTo(x, y);
//   for (let i = 0; i < iterations; i++) {
//     // Generate a random number between 0 and 1
//     const r = Math.random();

//     // Choose which transformation to apply based on the value of r
//     if (r < 0.01) {
//       // Transformation 1: Scale by 0.16 and translate by 0, 0.01
//       x = 0.16 * x;
//       y = 0.16 * y + 0.01;
//     } else if (r < 0.86) {
//       // Transformation 2: Scale by 0.85, rotate by -0.15 radians, and translate by 0, 1.6
//       const a = -0.15;
//       const s = 0.85;
//       const tx = 0;
//       const ty = 1.6;
//       x = s * x * Math.cos(a) - s * y * Math.sin(a) + tx;
//       y = s * x * Math.sin(a) + s * y * Math.cos(a) + ty;
//     } else if (r < 0.93) {
//       // Transformation 3: Scale by 0.2, rotate by 0.28 radians, and translate by 0, 0.26
//       const a = 0.28;
//       const s = 0.2;
//       const tx = 0;
//       const ty = 0.26;
//       x = s * x * Math.cos(a) - s * y * Math.sin(a) + tx;
//       y = s * x * Math.sin(a) + s * y * Math.cos(a) + ty;
//     } else {
//       // Transformation 4: Scale by -0.04, rotate by 0.24 radians, and translate by 0, 0.44
//       const a = 0.24;
//       const s = -0.04;
//       const tx = 0;
//       const ty = 0.44;
//       x = s * x * Math.cos(a) - s * y * Math.sin(a) + tx;
//       y = s * x * Math.sin(a) + s * y * Math.cos(a) + ty;
//     }

//     // Draw a point at the current coordinates
//     ctx.lineTo(x, y);
//     ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
//     ctx.stroke();
//   }
// }

