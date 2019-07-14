<script>
  import { onMount } from "svelte";

  export let style = "";

  const speedX = 1.4;
  const speedY = 1.4;
  const nodeCount = 8;
  const connectDistance = 260;
  const color = "#B8D2FF";

  function rand(min, max) {
    const res = min + Math.floor(Math.random() * (max - min + 1));
    return res === 0 ? rand(min, max) : res;
  }
  function dist(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  }
  class Ball {
    constructor(x, y, radius, vx, vy) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.vx = vx;
      this.vy = vy;
    }
    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
      ctx.fill();
    }
    update(canvas) {
      if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0)
        this.vx = -this.vx;
      if (this.y + this.radius >= canvas.height || this.y - this.radius <= 0)
        this.vy = -this.vy;
      this.x += this.vx;
      this.y += this.vy;
    }
  }
  class BallSystem {
    constructor(nodeCount, radius, { width, height }) {
      this.nodeCount = nodeCount;
      this.radius = radius;
      this.nodes = Array(nodeCount)
        .fill(1)
        .map(
          el =>
            new Ball(
              rand(radius, width - radius),
              rand(radius, height - radius),
              radius,
              rand(-speedX, speedX),
              rand(-speedY, speedY)
            )
        );
    }
    draw(canvas, ctx) {
      ctx.fillStyle = ctx.strokeStyle = color;
      this.nodes.forEach(node => {
        node.update(canvas);
        node.draw(ctx);
      });
      // for (let i = 0; i < this.nodeCount; ++i) {
      //   for (let j = 0; j < this.nodeCount; ++j) {
      //     if (this.nodes[i] !== this.nodes[j]) {
      //       const { x: x1, y: y1 } = this.nodes[i];
      //       const { x: x2, y: y2 } = this.nodes[j];
      //       if (dist(x1, y1, x2, y2) < connectDistance) {
      //         ctx.beginPath();
      //         ctx.moveTo(x1, y1);
      //         ctx.lineTo(x2, y2);
      //         ctx.stroke();
      //         ctx.closePath();
      //       }
      //     }
      //   }
      // }
    }
    addNode(x, y) {
      this.nodes.push(
        new Ball(
          x,
          y,
          this.radius,
          rand(-speedX, speedX),
          rand(-speedY, speedY)
        )
      );
      this.nodeCount += 1;
    }
  }
  onMount(() => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    const radius = 10;
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
    const system = new BallSystem(nodeCount, 12, {
      width: canvas.width,
      height: canvas.height
    });
    canvas.addEventListener("click", e => {
      console.log("hey", e.offsetX, e.clientY);
      system.addNode(e.offsetX, e.offsetY);
    });
    function draw() {
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // ctx.clearRect(0, 0, canvas.width, canvas.height);
      system.draw(canvas, ctx);
      requestAnimationFrame(draw);
    }
    draw();
  });
</script>

<style>

</style>

<canvas {style} />
