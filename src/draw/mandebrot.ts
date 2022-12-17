type Palette = { r: number, g: number, b: number }[]

// Mandelbrot (according to chat bot, actually it's just more squares)
export default function drawMandelbrot(canvas: HTMLCanvasElement) {
  console.log('drawMandelbrot')

  // Get the canvas and context
  const context = canvas.getContext("2d") as CanvasRenderingContext2D

  // Width and height of the image
  const width = canvas.width;
  const height = canvas.height;

  // Image Data (RGBA)
  const imagedata = context.createImageData(width, height);

  // Pan and zoom parameters
  const offsetx = -width / 2;
  const offsety = -height / 2;
  let panx = -100;
  let pany = 0;
  let zoom = 150;

  // Palette array of 256 colors
  const palette: Palette = [];

  // The maximum number of iterations per pixel
  const maxIterations = 25;

  let iterationCount = 0;

  // Call init to start the game
  init();

  // Initialize the game
  function init() {
    console.log('init')

    // Add mouse events
    canvas.addEventListener("wheel", onMouseWheel);
    canvas.addEventListener("mousedown", onMouseDown);

    // Generate palette
    generatePalette();

    // Generate image
    generateImage();

    // Enter main loop
    main();
  }

  // Main loop
  function main() {
    // console.log('main')

    // Request animation frames
    window.requestAnimationFrame(main);

    // Draw the generate image
    context.putImageData(imagedata, 0, 0);
  }

  // Generate palette
  function generatePalette() {
    console.log('generatePalette');

    // Calculate a gradient
    let roffset = 0;
    let goffset = 16;
    let boffset = 24;

    for (var i = 0; i < 256; i++) {
      palette[i] = { r: roffset, g: goffset, b: boffset };

      if (i < 64) {
        boffset += 3;
      } else if (i < 128) {
        goffset += 3;
      } else if (i < 192) {
        roffset += 3;
      }
    }
  }

  // Generate the fractal image
  function generateImage() {
    // Iterate over the pixels
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        iterate(x, y, maxIterations);
      }
    }
  }

  // Calculate the color of a specific pixel
  function iterate(pixelX: number, pixelY: number, maxiterations: number) {
    iterationCount++

    // Convert the screen coordinate to a fractal coordinate
    const x0 = (pixelX + offsetx + panx) / zoom;
    const y0 = (pixelY + offsety + pany) / zoom;

    // Iteration variables
    let a = 0;
    let b = 0;
    let rx = 0;
    let ry = 0;

    // if (iterationCount % 100000 === 0) {
    //   console.log("iterationCount:", iterationCount, "a, b, rx, ry:", a, b, rx, ry)
    // }

    // Iterate
    let iterations = 0;
    while (iterations < maxiterations && (rx * rx + ry * ry <= 4)) {
      rx = a * a - b * b + x0;
      ry = 2 * a * b + y0;

      // Next iteration
      a = rx;
      b = ry;
      iterations++;
    }

    // Get palette color based on the number of iterations
    let color;
    if (iterations == maxiterations) {
      color = { r: 0, g: 0, b: 0 }; // Black
    } else {
      const index = Math.floor((iterations / (maxiterations - 1)) * 255);
      color = palette[index];
    }

    // Apply the color
    const pixelindex = (pixelY * width + pixelX) * 4;
    imagedata.data[pixelindex] = color.r;
    imagedata.data[pixelindex + 1] = color.g;
    imagedata.data[pixelindex + 2] = color.b;
    imagedata.data[pixelindex + 3] = 255;
  }

  // Zoom the fractal
  function zoomFractal(factor: number, zoomin: boolean) {
    console.log('zoomFractal, zoom:', zoom, factor)
    if (zoomin) {
      // Zoom in
      zoom *= factor;
    } else {
      // Zoom out
      zoom /= factor;
    }
  }

  function panFractal(x: number, y: number) {
    console.log("x, y:", x, y)

    // So right now it sets where you click to be the center.
    // I want where you click to be where the mouse is.
    panx = (x + offsetx + panx)
    pany = (y + offsety + pany)

    console.log("panx, pany:", panx, pany)
  }

  // Mouse event handlers
  function onMouseWheel(e: WheelEvent) {
    console.log('onMouseWheel, e:', e)

    const pos = getMousePos(canvas, e);

    // Zoom out with Control
    let zoomIn = true;
    // @ts-ignore
    if (e.wheelDelta < 0) {
      zoomIn = false;
    }

    // Zoom the fractal
    zoomFractal(1.05, zoomIn);

    // // Pan fractal
    // panFractal(pos.x, pos.y)

    // Generate a new image
    generateImage();
  }

  function onMouseDown(e: MouseEvent) {
    console.log('onMouseDown, e:', e)

    const pos = getMousePos(canvas, e);

    // Pan fractal
    panFractal(pos.x, pos.y)

    // Generate a new image
    generateImage();
  }

  // Get the mouse position
  function getMousePos(canvas: HTMLCanvasElement, e: MouseEvent) {
    console.log('getMousePos')

    var rect = canvas.getBoundingClientRect();
    return {
      x: Math.round((e.clientX - rect.left) / (rect.right - rect.left) * canvas.width),
      y: Math.round((e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height)
    };
  }
}
