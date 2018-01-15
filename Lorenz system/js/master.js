"use strict"
window.onload = function() {
  const canvas = document.createElement("canvas");
  canvas.id = "canvas";
  document.body.appendChild(canvas);

  const c = document.getElementById("canvas");
  // Cross-browser
  const width = c.width = window.innerWidth || document.documentElement.clientWidth ||
    document.body.clientWidth;
  const height = c.height = window.innerHeight || document.documentElement.clientHeight ||
    document.body.clientHeight;
  const ctx = c.getContext("2d");

  //CODE

  let x = 2;
  let y = 2;
  let z = 2;
  let sigma = 5.0 * 2;
  let rho = 40.0 * 2;
  let beta = 5.0 / 10.0 * 2;
  let lastX = 0;
  let lastY = 0;
  let color = 0;

  ctx.translate(width / 2, height / 4);
  ctx.scale(2, 2)

  function update() {
    let time = 0.005;
    let dx = (sigma * (y - x)) * time;
    let dy = (x * (rho - z) - y) * time;
    let dz = (x * y - beta * z) * time;
    x = x + dx;
    y = y + dy;
    z = z + dz;
    color++;
    ctx.lineWidth = 0.1;
    if (color > 359) {
      color = 0;
    }
    ctx.strokeStyle = "hsl(" + color + ", 100%, 50%)";
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(y, z)
    ctx.stroke();
    lastX = y;
    lastY = z;

  }
  setInterval(update, 10);
}
