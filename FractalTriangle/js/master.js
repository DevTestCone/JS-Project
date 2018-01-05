// USE AddOn.js look in StarterPack
//
window.onload = function() {
  "use strict"

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

  console.log(width);

  ctx.translate(width / 2, height / 2);
  let trianglePoints = {
    pointX: {
      x: 0,
      y: -(width / 4.2)
    },
    pointY: {
      x: (width / 3.5),
      y: (width / 4.5)
    },
    pointZ: {
      x: -(width / 3.5),
      y: (width / 4.5)
    }
  }


  function drawTriangle(pointX, pointY, pointZ) {
    ctx.beginPath()
    ctx.moveTo(pointX.x, pointX.y);
    ctx.lineTo(pointY.x, pointY.y);
    ctx.lineTo(pointZ.x, pointZ.y);
    ctx.lineTo(pointX.x, pointX.y);
    ctx.strokeStyle = AddOn.getRandomColor(5);
    ctx.stroke();
    ctx.closePath();
  }

  function drawFractalTriangle(pointX, pointY, pointZ, step) {
    if (step > 0) {
      let fractalPoints = {
        pointA: {
          x: (pointX.x + pointY.x) / 2,
          y: (pointX.y + pointY.y) / 2
        },
        pointB: {
          x: (pointY.x + pointZ.x) / 2,
          y: (pointY.y + pointZ.y) / 2
        },
        pointC: {
          x: (pointZ.x + pointX.x) / 2,
          y: (pointZ.y + pointX.y) / 2
        }
      }
      drawFractalTriangle(pointX, fractalPoints.pointA, fractalPoints.pointC, step - 1);
      drawFractalTriangle(fractalPoints.pointA, pointY, fractalPoints.pointB, step - 1);
      drawFractalTriangle(fractalPoints.pointC, fractalPoints.pointB, pointZ, step - 1);
    } else {
      drawTriangle(pointX,pointY,pointZ);
    }
  }
  drawFractalTriangle(trianglePoints.pointX, trianglePoints.pointY, trianglePoints.pointZ, 6)

}
