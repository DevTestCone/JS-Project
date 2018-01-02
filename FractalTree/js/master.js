"use strict"

function FractalTree() {
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
  const deg = 45;
  const rad = deg * (Math.PI / 180);
  const size = width / 7;

  let branch = {
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 100,
    length: 0.68,
    lineWidth: 3
  }

  function background() {
    ctx.fillStyle = "#0E0015";
    ctx.fillRect(0, 0, width, height);
  }

  function getRandomColor() {
    let letters = '6789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 10)];
    }
    return color;
  }

  function text() {
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "3vw Arial";
    ctx.fillText(deg + "\xB0", size / 3, size / 2);
  }

  function draw(len) {
    ctx.lineWidth = branch.lineWidth;
    ctx.strokeStyle = getRandomColor();
    ctx.beginPath();
    ctx.moveTo(branch.startX, branch.startY);
    ctx.lineTo(0, len);
    ctx.stroke();
    ctx.translate(0, len);
    if (Math.abs(len) > 2) {
      ctx.save()
      ctx.rotate(rad);
      draw(len * branch.length);
      ctx.restore();
      ctx.rotate(-rad);
      draw(len * branch.length);
    }

  }

  background();
  text();
  ctx.translate(width / 2, height);
  draw(-size);
}
