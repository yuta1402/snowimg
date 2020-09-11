import { canvas, context } from "./canvas";
import { FallingImage } from "./fallingImage";

const initialize = () => {
  // const canvas: HTMLCanvasElement = <HTMLCanvasElement>(
  //   document.getElementById("canvas")
  // );

  // const context: CanvasRenderingContext2D = <CanvasRenderingContext2D>(
  //   canvas.getContext("2d")
  // );

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  if (context === null) {
    return;
  }

  context.fillStyle = "red";

  const image = new FallingImage();

  image.initialize();

  const update = () => {
    image.update();

    draw();

    window.requestAnimationFrame(update);
  };

  const draw = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);

    image.draw();
  };

  update();
};

initialize();
