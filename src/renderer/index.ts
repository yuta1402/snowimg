const initialize = () => {
  const canvas: HTMLCanvasElement = <HTMLCanvasElement>(
    document.getElementById("canvas")
  );

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const context = canvas.getContext("2d");
  if (context === null) {
    return;
  }

  context.fillStyle = "red";

  let y: number = 0;

  const update = () => {
    draw();
    window.requestAnimationFrame(update);
  };

  const draw = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    y += 2;
    y = y % canvas.height;
    context.fillRect(0, y, 100, 100);
  };

  update();
};

initialize();
