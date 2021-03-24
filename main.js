var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d"); 
function circle(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fill();
};
function rect(x, y, width, height) {
    ctx.beginPath();
    ctx.fillRect(x, y, width, height);
};

function drawHuman(x, y){
// draw face
ctx.fillStyle = "chocolate";
rect(x, y, 100, 100); // 20, 10
// draw hair
ctx.fillStyle = "black";
ctx.beginPath();
rect(x, y, 100, 20);
ctx.fill();
// draw neck
ctx.fillStyle = "chocolate";
rect(x * 3, y * 11, 20, 30);
//draw shirt
ctx.fillStyle = "red";
rect(x, y * 14, 100, 150);
// draw arms
ctx.fillStyle = "chocolate";
rect(x / 3.1, y * 14, 15, 100);
rect(x * 6, y * 14, 15, 100);
// draw legs
ctx.fillStyle = "blue";
rect(x * 5, y * 29, 20, 100);
rect(x, y * 29, 20, 100);
// draw eyes and mouth
ctx.fillStyle = "black";
circle(x * 2, y * 5, 10);
circle(x * 5, y * 5, 10);
ctx.fillStyle = "black";
ctx.stroke();
ctx.beginPath();
ctx.arc(x * 3.5, y * 6.5, 20, 0, Math.PI, false);
ctx.fill();
}
let pos = 20;
drawHuman(pos, pos/2);