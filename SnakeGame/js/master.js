const canvas = document.createElement("canvas");
canvas.id = "canvas";
document.body.appendChild(canvas);
const c = document.getElementById("canvas");
const ctx = c.getContext("2d");
const width = c.width = 400;
const height = c.height = 400;

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 87:
    case 38:
      if (snake.speedY == 0) {
        snake.speedY = -10;
        snake.speedX = 0;
      }
      break;
    case 83:
    case 40:
      if (snake.speedY == 0) {
        snake.speedY = 10;
        snake.speedX = 0;
      }
      break;
    case 68:
    case 39:
      if (snake.speedX == 0) {
        snake.speedX = 10;
        snake.speedY = 0;
      }
      break;
    case 65:
    case 37:
      if (snake.speedX == 0) {
        snake.speedX = -10;
        snake.speedY = 0;
      }
      break;
  }
}

let snake = {
  x: width / 2,
  y: height / 2,
  w: 10,
  h: 10,
  speedX: 10,
  speedY: 0,
  score: 0,
  eat: false,
  tail: [],
  snakeLength: 3
}
let food = {
  x: Math.floor(Math.random() * 20),
  y: Math.floor(Math.random() * 20),
  w: 10,
  h: 10,
}

function Update() {
  game.background();
  game.snake();
  game.food();
  game.score();
}

let game = {
  background: function() {
    ctx.fillStyle = "#222222";
    ctx.fillRect(0, 0, width, height);
  },
  snake: function() {
    for (var i = 0; i < snake.tail.length; i++) {
      ctx.fillStyle = "#009900";
      ctx.fillRect(snake.tail[i].x, snake.tail[i].y, snake.w, snake.h);
      if (snake.tail[i].x == snake.x && snake.tail[i].y == snake.y) {
        game.reset();
      }
    }
    snake.tail.push({
      x: snake.x,
      y: snake.y
    });
    while (snake.tail.length > snake.snakeLength) {
      snake.tail.shift();
    }
    snake.x += snake.speedX;
    snake.y += snake.speedY;
    // Map bounds
    if (snake.x < 0 ||
      snake.x >= width ||
      snake.y < 0 ||
      snake.y >= height) {
      game.reset();
      game.foodLocation();
    }
    // If snake is collide with food
    if (snake.x + snake.w > food.x &&
      food.x + food.w > snake.x &&
      snake.y + snake.h > food.y &&
      food.y + food.h > snake.y) {
      snake.score++;
      snake.snakeLength++;
      game.foodLocation();
    }
  },
  food: function() {
    ctx.fillStyle = "#FF0022";
    ctx.fillRect(food.x, food.y, food.w, food.h);
  },
  foodLocation: function() {
    food.x = Math.floor(Math.random() * 20) * 20;
    food.y = Math.floor(Math.random() * 20) * 20;
  },
  score: function() {
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "16px Comic Sans MS";
    ctx.fillText("Score: " + snake.score, 20, 20);
  },
  reset: function() {
    snake.snakeLength = 3;
    snake.x = width / 2;
    snake.y = height / 2;
    snake.speedX = 10;
    snake.speedY = 0;
    snake.score = 0;
    game.foodLocation();
  }
}

setInterval(Update, 60);
