export const canvas: HTMLCanvasElement = <HTMLCanvasElement>(
  document.getElementById("canvas")
);

export const context: CanvasRenderingContext2D = <CanvasRenderingContext2D>(
  canvas.getContext("2d")
);
