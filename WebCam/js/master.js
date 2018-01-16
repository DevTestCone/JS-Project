"use strict"
window.onload = function() {
  const canvas = document.createElement("canvas");
  canvas.id = "canvas";
  document.body.appendChild(canvas);
  const video = document.createElement("video");
  video.id = "videoID";
  document.body.appendChild(video);

  const c = document.getElementById("canvas");
  const v = document.getElementById("videoID");
  // Cross-browser

  //VIDEO
  video.autoplay = "true";
  video.style = "display: none";
  v.height = 0;
  v.width = 0;
  //CANVAS
  const width = c.width = window.innerWidth || document.documentElement.clientWidth ||
    document.body.clientWidth;
  const height = c.height = window.innerHeight || document.documentElement.clientHeight ||
    document.body.clientHeight;
  const ctx = c.getContext("2d");
  const url = window.URL || window.webkitURL;

  navigator.getMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia || null;

  //CODE
  navigator.getMedia({
    video: true,
    audio: false,
  }, function(stream) {
    video.src = url.createObjectURL(stream);
    video.play;
  }, function(error) {
    alert(error);
    console.log(error);
  });

  video.addEventListener('play', function() {
    draw();

  }, false);

  function draw() {
    ctx.drawImage(video, 0, 0, width, height);
    setTimeout(draw, 10);
  }
}
