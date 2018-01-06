"use strict"
const canvas = document.createElement("canvas");
canvas.id = "canvas";
document.body.appendChild(canvas);

const c = document.getElementById("canvas");
const ctx = c.getContext("2d");
const width = c.width = 600;
const height = c.height = 600;
const centerX = width / 2;
const centerY = height / 2;
const offset = 2;
let angle = 0.1;
let aVelocity = 0.01;
let start = false;
let snd = new Audio("http://www.wavlist.com/soundfx/020/clock-tick1.wav"); // buffers automatically when created


let circle = {
  x: centerX,
  y: centerY,
  r: 70,
  start: 0,
  finish: 2 * Math.PI,
}

let octagon = {
  x: centerX,
  y: centerY,
  numSides: 8,
  size: 100,
}

let numClock = {
  x: 0,
  y: 0,
  offset: 20,
  start: 1,

}

let box = {
  x: 0,
  y: 0,
  w: 140,
  h: 300,
}

function Background() {
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, width, height);
}

function FixUpperShapes() {
  //Octagon
  ctx.fillStyle = "#5e4803";
  ctx.strokeStyle = "#E5C100";
  ctx.lineWidth = 5;
  ctx.save(); // saves the coordinate system
  ctx.translate(centerX, centerY / offset); // (0,0) == (centerX,centerY)
  ctx.rotate(0.4);
  ctx.beginPath();
  ctx.moveTo(0 + octagon.size * Math.cos(0), 0 + octagon.size * Math.sin(0));
  for (let i = 1; i < octagon.numSides; i++) {
    ctx.lineTo(0 + octagon.size * Math.cos(i * 2 * Math.PI / octagon.numSides), 0 + octagon.size * Math.sin(i * 2 * Math.PI / octagon.numSides, ))
  }
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
  ctx.restore(); // restores coordinate (0,0)

  // Circle
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = "#E5C100";
  ctx.arc(circle.x, circle.y / offset, circle.r, circle.start, circle.finish);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  // Number Clock
  ctx.fillStyle = "#000000";
  ctx.strokeStyle = "#FFFFFF";
  ctx.lineWidth = 1;
  ctx.save(); // saves the coordinate system
  ctx.translate(centerX, centerY / offset); // (0,0) == (centerX,centerY)
  ctx.translate(-5, 3);
  for (let i = -2; i < 10; i++) {
    ctx.beginPath();
    numClock.y = Math.sin((360 / 12 * i) * (Math.PI / 180)) * 3;
    numClock.x = Math.cos((360 / 12 * i) * (Math.PI / 180)) * 3;
    ctx.font = "12px Arial";
    ctx.fillText(numClock.start++, numClock.x * numClock.offset, numClock.y * numClock.offset);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }
  ctx.restore(); // restores coordinate (0,0)
  numClock.y = 0;
  numClock.x = 0;
  numClock.start = 1;
}

function FixLowerShapesBack() {
  // Background box inner box
  ctx.fillStyle = "#514431";
  ctx.lineWidth = 3;
  ctx.save(); // saves the coordinate system
  ctx.translate(centerX, centerY / offset); // (0,0) == (centerX,centerY)
  ctx.fillRect(box.x - box.w / 2, box.y, box.w, box.h);
  ctx.restore(); // restores coordinate (0,0)
}

function FixLowerShapesFront() {
  // Front box
  ctx.strokeStyle = "#5e4803";
  ctx.lineWidth = 45;
  ctx.save(); // saves the coordinate system
  ctx.translate(centerX, centerY / offset); // (0,0) == (centerX,centerY)
  ctx.strokeRect(box.x - box.w / 3, box.y - 22, box.w / 1.5, box.h);
  ctx.strokeStyle = "#E5C100";
  ctx.lineWidth = 3;
  ctx.strokeRect(box.x - box.w / 2, box.y, box.w, box.h);
  ctx.globalCompositeOperation = "destination-over";
  ctx.stroke();
  ctx.restore(); // restores coordinate (0,0)

  // Trinagle
  ctx.lineWidth = 2.3;
  ctx.fillStyle = "#5e4803";
  ctx.strokeStyle = "#E5C100";
  ctx.beginPath();
  ctx.save(); // saves the coordinate system
  ctx.translate(centerX, centerY / offset); // (0,0) == (centerX,centerY)
  ctx.moveTo(box.x - box.w / 2, box.h - 2);
  ctx.lineTo(box.x - box.w / 2, box.h);
  ctx.lineTo(box.x, box.h + 30);
  ctx.lineTo(box.x + box.w / 2, box.h);
  ctx.lineTo(box.x + box.w / 2, box.h - 2);
  ctx.fill();
  ctx.stroke();
  ctx.restore(); // restores coordinate (0,0)

  // Stroke around empty center
  ctx.save(); // saves the coordinate system
  ctx.translate(centerX, centerY / offset); // (0,0) == (centerX,centerY)
  ctx.strokeRect(box.x - 25, box.y, 50, 255);
  ctx.stroke();
  ctx.restore(); // restores coordinate (0,0)
}

function UpdateUpperShape() {
  let date = new Date();
  let second = date.getSeconds() * 6;
  let minutes = date.getMinutes() * 6;
  let hour = (date.getHours() % 12) * 30;
  //Background
  ctx.save(); // saves the coordinate system
  ctx.translate(centerX, centerY / offset); // (0,0) == (centerX,centerY)
  ctx.beginPath();
  ctx.fillStyle = "#FFFFFF";
  ctx.arc(0, 0, 50, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();

  //spindle SECOND
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#D89D4A";
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.rotate(second * Math.PI / 180);
  ctx.lineTo(0, -45);
  ctx.closePath();
  ctx.stroke();
  ctx.restore(); // restores coordinate (0,0)

  //spindle SECOND
  ctx.save(); // saves the coordinate system
  ctx.translate(centerX, centerY / offset); // (0,0) == (centerX,centerY)
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#D89D4A";
  ctx.moveTo(0, 0);
  ctx.rotate(minutes * Math.PI / 180);
  ctx.lineTo(0, -45);
  ctx.closePath();
  ctx.stroke();
  ctx.restore(); // restores coordinate (0,0)

  //spindle SECOND
  ctx.save(); // saves the coordinate system
  ctx.translate(centerX, centerY / offset); // (0,0) == (centerX,centerY)
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = "#D89D4A";
  ctx.moveTo(0, 0);
  ctx.rotate(hour * Math.PI / 180);
  ctx.lineTo(0, -35);
  ctx.closePath();
  ctx.stroke();
  ctx.restore(); // restores coordinate (0,0)

  // dot in the midle
  ctx.save(); // saves the coordinate system
  ctx.translate(centerX, centerY / offset); // (0,0) == (centerX,centerY)
  ctx.beginPath();
  ctx.fillStyle = "#000000";
  ctx.arc(0, 0, 4, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
  ctx.restore(); // restores coordinate (0,0)
}

function UpdateLowerShape() {
  let date = new Date();
  let second = date.getSeconds() * 6;

  angle += aVelocity;
  // Pendulum
  ctx.save(); // saves the coordinate system
  ctx.translate(centerX, centerY / offset); // (0,0) == (centerX,centerY)
  ctx.lineWidth = 5;
  ctx.fillStyle = "#cead00";
  ctx.strokeStyle = "#cead00";
  ctx.rotate(angle);
  if (second%2==0) {
    start=true;
  }
  if (angle > 0.12 && start == true) {
    aVelocity = -0.0098;
        snd.play();
  }
  else if (angle < -0.12){
    aVelocity = 0.0098;
        snd.play();
  }
  ctx.beginPath();
  ctx.arc(0, 200, 20, 0, 2 * Math.PI);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 200);
  ctx.fill();
  ctx.stroke();
  ctx.restore(); // restores coordinate (0,0)
}


function Draw() {
  Background();
  FixLowerShapesBack();
  UpdateLowerShape();
  FixLowerShapesFront();
  FixUpperShapes();
  UpdateUpperShape();
  setTimeout(Draw, 30);
}

Draw();
