const canvas = document.createElement("canvas");
canvas.id = "canvas";
document.body.appendChild(canvas);
let numX = 80;
let numY = 80;
const c = document.getElementById("canvas");
const ctx = c.getContext("2d");
const width = ((Math.round(window.innerWidth / numX) * numX) - numX);
const height = ((Math.round(window.innerWidth / numY) * numY) - numY);
canvas.width = width;
canvas.height = height;

let grid, nextGrid;
let rectWidth = width / numX;
let rectHeight = height / numY;

function Array2D(numX, numY) {
  let arr = new Array(numX);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(numY);
  }
  return arr;
}

function Update() {
  Game.update();
}

const Game = {
  draw: function() {
    // Give number to Array2D
    grid = Array2D(numX, numY);
    //console.log(grid);
    for (let i = 0; i < numX; i++) {
      for (let j = 0; j < numY; j++) {
        grid[i][j] = Math.round(Math.random())
      }
    }

  },
  update: function() {
    // Draw Map and give color to 1 and 0
    for (let i = 0; i < numX; i++) {
      for (let j = 0; j < numY; j++) {
        let rectX = i * rectWidth;
        let rectY = j * rectHeight;
        if (grid[i][j] == 1) {
          ctx.fillStyle = "#00AA00";
        } else {
          ctx.fillStyle = "#000000";
        }
        ctx.fillRect(rectX, rectY, rectWidth - 1, rectHeight - 1);

      }
    }
// Make new Array2D to store numbers from grid
    nextGrid = Array2D(numX, numY);
    for (let i = 0; i < numX; i++) {
      for (let j = 0; j < numY; j++) {
        let state = grid[i][j];
        let around = check(grid, i, j);
        if (state == 0 && around == 3 ) {
          nextGrid[i][j] = 1;
        } else if (state == 1 && (around < 2 || around > 3)) {
          nextGrid[i][j] = 0;
        } else {
          nextGrid[i][j] = state;
        }
      }
    }
    grid = nextGrid;
  }
}
// Check Around the self
function check(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + numX) % numX;
      let row = (y + j + numY) % numY;
      sum += grid[col][row];
    }
  }
  sum -= grid[x][y];
  return sum;
}

Game.draw();

setInterval(Update, 30);
