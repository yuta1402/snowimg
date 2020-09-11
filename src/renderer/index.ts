import { canvas, context } from "./canvas";
import { FallingImage } from "./fallingImage";

const initialize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  if (context === null) {
    return;
  }

  context.fillStyle = "red";

  const images = new Array<FallingImage>(10);

  for (let i = 0; i < images.length; ++i) {
    images[i] = new FallingImage();
  }

  for (let image of images) {
    image.initialize();
  }

  const update = () => {
    for (let image of images) {
      image.update();
    }

    draw();

    window.requestAnimationFrame(update);
  };

  const draw = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let image of images) {
      image.draw();
    }
  };

  update();
};

initialize();
