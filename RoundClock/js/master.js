"use strict"
const canvas = document.createElement("canvas");
canvas.id = "canvas";
document.body.appendChild(canvas);
const c = document.getElementById('canvas');
const ctx = c.getContext("2d");
const width = 400;
const height = 400;
c.width = width;
c.height = height;
const offset = 23;

// ADD ZERO IN FIRST SLOT IF NUMBER IS 1,2,3,4,5,6,7,8,9
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function time() {
  //DATE
  let date = new Date();
  let hours = addZero(date.getHours());
  let minutes = addZero(date.getMinutes());
  let seconds = addZero(date.getSeconds());
  let milliSec = date.getMilliseconds();
  let day = addZero(date.getDate());
  let month = addZero(date.getMonth());
  let year = date.getFullYear();
  //console.log(day);
  //TIME
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "20px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(hours + " : " + minutes + " : " + seconds, width / 2, 45);
  ctx.fillText(day + " / " + month + " / " + year, width / 2, height - 26);

  const draw = function(time, duration, radius, color) {
    //START
    let sAngle = 270;
    let sDeg = (Math.PI / 180) * sAngle;
    //TICK
    let eAngle = 270 + Math.round(time * duration);
    let eDeg = (Math.PI / 180) * eAngle;

    //COLOR
    let scol = color * 4;
    // CIRCLE

    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.strokeStyle = "#222222";
    ctx.arc(width / 2, height / 2, radius, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.strokeStyle = "hsl(" + scol + ", 100%, 50%)";
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, radius, sDeg, eDeg);
    ctx.stroke();
  }

  draw(hours % 12, 30, 130, (hours % 12) * 5);
  draw(minutes, 6, 110, minutes);
  draw(seconds, 6, 90, seconds);
  draw(milliSec, 0.36, 70, milliSec / 18);
}

function background() {
  ctx.fillStyle = "#000000"
  ctx.fillRect(0, 0, width, height);

}

function update() {
  background();
  time();
}

setInterval(update, 30);
