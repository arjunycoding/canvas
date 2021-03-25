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
    var eye = document.getElementById("eyecolor").value;
    var shirt = document.getElementById("shirtColor").value;
    var skin = document.getElementById("skincolor").value;
    var pant = document.getElementById("pantcolor").value;
    // draw face
    ctx.fillStyle = skin;
    rect(x, y, 100, 100); // 20, 10
    // draw hair
    ctx.fillStyle = "black";
    ctx.beginPath();
    rect(x, y, 100, 20);
    ctx.fill();
    // draw neck
    ctx.fillStyle = skin;
    rect(x * 3, y * 11, 20, 30);
    //draw shirt
    ctx.fillStyle = shirt;
    rect(x, y * 14, 100, 150);
    // draw arms
    ctx.fillStyle = skin;
    rect(x / 3.1, y * 14, 15, 100);
    rect(x * 6, y * 14, 15, 100);
    // draw legs
    ctx.fillStyle = pant;
    rect(x * 5, y * 29, 20, 100);
    rect(x, y * 29, 20, 100);
    // draw eyes and mouth
    ctx.fillStyle = eye;
    circle(x * 2, y * 5, 10);
    circle(x * 5, y * 5, 10);
    ctx.fillStyle = "black";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x * 3.5, y * 6.5, 20, 0, Math.PI, false);
    ctx.fill();
}

function background(){
// draw sky
var sky = document.getElementById("skycolor").value;
ctx.fillStyle = sky;
rect(0, 0, 150, 1003);
// draw grass
ctx.fillStyle = "green";
rect(0, 350, 150, 100);
}
function showHuman(){
    console.log(canvas.id);
    background();
    drawHuman(20, 10);
    ctx.clearRect();
}
canvas.id = "show";
drawHuman(20, 10);