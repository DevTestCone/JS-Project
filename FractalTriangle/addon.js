
let AddOn = {};

// Random Color. default value ( 0, 16)
AddOn.getRandomColor = function(start = 0, end = 16) {
  let letters = '0123456789ABCDEF';
  let colorLength = letters.slice(start, end);
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * colorLength.length + start)];
  }
  return color;
};

//Random integer number. default value ( -1, 1)
AddOn.getRandomNumber = function(min = -1, max = 1) {
  let adjustedHigh = (max - min) + 1;
  return Math.floor(Math.random() * adjustedHigh) + parseFloat(min);
};

// Add zero at start of number. default value ( 0, 10)
AddOn.addZero = function(i=0,end = 10) {
  if (i < end) {
    i = "0" + i;
  }
  return i;
}

// Get Characters from x to y as array. default value ( 32, 126)
AddOn.getCharacterSet = function(start = 32, end = 126) {
  let char = [];
  let size = end - start;
  for (let i = 0; i < size; i++) {
    char += String.fromCharCode(start + i);
  }
  return char.split("");
};
// Converts from degrees to radians. default value (180)
AddOn.getRadians = function(deg = 180) {
  return deg * Math.PI / 180;
};

// Converts from radians to degrees. default value (Math.PI / 1)
AddOn.getDegrees = function(radians = Math.PI / 1) {
  return radians * 180 / Math.PI;
};

// Get 2D Array grid.  default value (3,3)
AddOn.getArray2D = function(numX = 3, numY = 3) {
  let arr = new Array(numX);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(numY);
  }
  return arr;
};
