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

  let radius = width / 10;
  let circleX = height / 5;
  let circleY = width / 10;
  let angle;
  let counter = 0;
  let numCircle = 180;
  let offsetX = AddOn.getRandomNumber(0, 360);
  let offsetY = AddOn.getRandomNumber(0, 360);
  let i = 0;

ctx.translate(width/2,height/2)

  function update() {
    i++;
    counter++;
    angle = Math.PI * i;
    ctx.strokeStyle = AddOn.getRandomColor();
    ctx.beginPath();
    ctx.arc(circleX * Math.cos(offsetX + AddOn.getDegrees(angle*100)),circleY * Math.sin(offsetY + AddOn.getDegrees(angle*100)), radius, 0, 2 * Math.PI);
    ctx.stroke();
    if (counter > 360) {
      ctx.clearRect(-width, -height, width * 2, height * 2);
      counter = 0;
      offsetX = AddOn.getRandomNumber(0, 360);
      offsetY = AddOn.getRandomNumber(0, 360);
    }

  }

  setInterval(update, 60);

}
