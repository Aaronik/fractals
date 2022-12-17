import './reset.css'
import './App.scss'
import React, { useEffect } from 'react'
import KoFiWidget from './KoFiWidget'
import Copyright from './Copyright'
import drawPeanoCurve from './draw/peano-curve'
import drawMandelbrot from './draw/mandebrot'

// Here's the prompt I'm using to get these:
// I've already seen mandelbrot, the julia set, the apollonion gasket, the dragon curve, the sierpinski triangle, the koch curve, the peanno curve, the barnsley fern, the heighway dragon, the Vicsek fractal, and the cantor set. Can you show me a different one that I haven't already seen?

const randomInt = (max: number = 1) => {
  return Math.round(Math.random() * max)
}

const randomColor = () => {
  const colors = [
    'red',
    'tangerine',
    'yellow',
    'green',
    'electric blue',
    'barney',
    'violet'
  ]
  const index = Math.round(Math.random() * (colors.length - 1))
  return colors[index]
}


function generateFractal() {
  // Get the canvas element by its ID
  const canvasElement = document.getElementById("fractal-canvas") as HTMLCanvasElement;

  // canvasElement.addEventListener("click", (evt) => {
  //   ctx.clearRect(0, 0, width, height)
  //   drawPeanoCurve(ctx, 0, 0, Math.max(width, height), 4);
  // });

  // canvasElement.addEventListener("mousemove", (evt) => {
  //   ctx.clearRect(0, 0, width, height)
  //   drawPeanoCurve(ctx, 0, 0, Math.max(width, height), 4);
  // });

  const width = window.innerWidth
  const height = window.innerHeight

  // Set the size of the canvas
  canvasElement.width = width
  canvasElement.height = height

  // Get the canvas drawing context
  const ctx = canvasElement.getContext("2d") as CanvasRenderingContext2D

  drawMandelbrot(ctx, randomInt(100), randomInt(100), 100)
  // drawApollionianGasket(ctx, randomInt(100), randomInt(300), randomInt(400));
  // drawSierpinskiTriangle(ctx, Math.random() * 400, Math.random() * 300, Math.random() * 400, Math.random() * 300, Math.random() * 400, Math.random() * 400);
  // drawCantorSet(ctx, 100, 100, 200, 3);
  // drawKochCurve(ctx, 100, 100, 300, 100, 4);

  // drawPeanoCurve(ctx, 0, 0, width, 4);
  // generateBarnsleyFern(ctx)
  // drawBarnsleyFern(ctx, 0, 0, 1000)
  // drawHeighwayDragon(ctx, 100, 100, 200, 10)
  // drawVicsekFractal(ctx, 100, 100, 300, 6)
  // drawPeanoCurve(ctx, 0, 0, Math.max(width, height), 4);
}

function App() {

  useEffect(() => {
    generateFractal()
  }, [])

  return (
    <React.Fragment>
      <canvas id="fractal-canvas"></canvas>
      <KoFiWidget />
      <Copyright />
    </React.Fragment>
  );
}

export default App
