var canvasSnowman = document.getElementById("canvasSnowman");
var ctx = canvas.getContext("2d");

function circle(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fill();
};
let size = 5;
// nose
ctx.fillStyle = "white";
circle(250, 145, 30);
ctx.stroke();
ctx.fillStyle = "orange";
circle(250, 150, size);
// eyes
ctx.fillStyle = "black";
circle(235, 135, size);
circle(265, 135, size);
// head
ctx.fillStyle = "white";
circle(250, 210, 40);
ctx.stroke();
// buttons
ctx.fillStyle = "black";
circle(250, 190, size);
circle(250, 205, size);
circle(250, 220, size);