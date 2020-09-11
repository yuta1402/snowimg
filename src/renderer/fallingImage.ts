import { canvas, context } from "./canvas";

export class FallingImage {
  private x: number;
  private y: number;

  constructor() {
    this.x = 0;
    this.y = 0;
  }

  public initialize() {
    this.x = canvas.width * Math.random();
    this.y = -canvas.height * Math.random();
    console.log(this.x, this.y);
  }

  public update() {
    this.y += 3;
  }

  public draw() {
    context.fillRect(this.x, this.y, 100, 100);
  }
}
