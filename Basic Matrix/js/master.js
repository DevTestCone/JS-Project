"use strict"

function matrix() {

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

  const symbolSize = Math.round(width / 90);
  const symbolSizeSpace = symbolSize * 2;
  let minCharNum = 30;
  let maxCharNum = 118;
  let charY = [];
  let charStart, drawChar, charStartY,colorRed,colorGreen,colorBlue;
  //console.log(symbolSize);

  function background() {
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, width, height);
  }
// Greek and Coptic (Unicode block) from 904 to 1022 = gap =
  function setupChar() {
    let char = [];
    for (let i = 0; i < width; i += symbolSize) {
      char += String.fromCharCode(904 + randomNum(minCharNum, maxCharNum));
    }
    return char.split("");
  }

  function setupCharY() {
    for (let y = 0; y < width; y++) {
      charY[y] = randomNum(-50,-300);
    }
    return charY;
  }

  function randomNum(min, max) {
    let adjustedHigh = (max - min) + 1;
    return Math.floor(Math.random() * adjustedHigh) + parseFloat(min);
  }
// call array of ones
  charStartY = setupCharY();

  function draw() {
    colorRed = randomNum(0,250);
    colorGreen = randomNum(0,250);
    colorBlue = randomNum(0,250);
    ctx.fillStyle = "rgb("+ colorRed +","+ colorGreen +","+ colorBlue +")";
    ctx.font = symbolSize + "px Monospace";
    charStart = setupChar();
    for (let i = 0; i < width; i++) {
      drawChar = charStart[Math.floor(Math.random() * charStart.length)];
      //console.log(drawChar);
      ctx.fillText(drawChar, i * symbolSize, charStartY[i] * symbolSize);
      //console.log(i);
      //console.log(charStartY[i]);
      if (charStartY[i] * symbolSize > height && Math.random() > 0.98){
        charStartY[i]= 0;
      }
        charStartY[i]++;
  }
}

function update() {
  background();
  draw();
}

setInterval(update, 60);
}
