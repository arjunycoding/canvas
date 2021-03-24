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