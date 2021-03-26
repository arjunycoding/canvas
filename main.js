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
function drawBoy(){
    var eye = document.getElementById("eyecolor").value;
    var shirt = document.getElementById("shirtColor").value;
    var skin = document.getElementById("skincolor").value;
    var pant = document.getElementById("pantcolor").value;
    var hair = document.getElementById("haircolor").value;
    // draw face
    ctx.fillStyle = skin;
    rect(20, 10, 100, 100); // 20, 10
    // draw hair
    ctx.fillStyle = hair;
    ctx.beginPath();
    rect(20, 10, 100, 20);
    ctx.fill();
    // draw neck
    ctx.fillStyle = skin;
    rect(60, 110, 20, 30);
    //draw shirt
    ctx.fillStyle = shirt;
    rect(20, 140, 100, 150);
    // draw arms
    ctx.fillStyle = skin;
    rect(5, 140, 15, 100);
    rect(120, 140, 15, 100);
    // draw legs
    ctx.fillStyle = pant;
    rect(100, 290, 20, 100);
    rect(20, 290, 20, 100);
    // draw eyes and mouth
    ctx.fillStyle = eye;
    circle(40, 50, 10);
    circle(100, 50, 10);
    ctx.fillStyle = "black";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(70, 60, 20, 0, Math.PI, false);
    ctx.fill();
}
function drawGirl(){
    var eye = document.getElementById("eyecolor").value;
    var shirt = document.getElementById("shirtColor").value;
    var skin = document.getElementById("skincolor").value;
    var pant = document.getElementById("pantcolor").value;
    var hair = document.getElementById("haircolor").value;
    // draw hair part 2
    ctx.fillStyle = hair;
    ctx.beginPath();
    rect(20, 10, 50, 200);
    ctx.fill();
    // draw face
    ctx.fillStyle = skin;
    rect(20, 10, 100, 100); // 20, 10
    // draw hair part 1
    ctx.fillStyle = hair;
    ctx.beginPath();
    rect(20, 10, 100, 20);
    ctx.fill();
    // draw neck
    ctx.fillStyle = skin;
    rect(60, 110, 20, 30);
    //draw shirt
    ctx.fillStyle = shirt;
    rect(20, 140, 100, 150);
    // draw arms
    ctx.fillStyle = skin;
    rect(5, 140, 15, 100);
    rect(120, 140, 15, 100);
    // draw legs
    ctx.fillStyle = pant;
    rect(100, 290, 20, 100);
    rect(20, 290, 20, 100);
    // draw eyes and mouth
    ctx.fillStyle = eye;
    circle(40, 50, 10);
    circle(100, 50, 10);
    ctx.fillStyle = "black";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(70, 60, 20, 0, Math.PI, false);
    ctx.fill();
    // draw hair part 2
    ctx.fillStyle = "black";
    ctx.beginPath();
    rect(20, 110, 40, 60);
    // draw hair part 2
    ctx.fillStyle = "black";
    ctx.beginPath();
    rect(80, 110, 40, 60);
}
function background(){
// draw sky
var sky = document.getElementById("skycolor").value;
ctx.fillStyle = "skyBlue";
rect(0, 0, 150, 1003);
// draw grass
ctx.fillStyle = "green";
rect(0, 350, 150, 100);
}
function showHuman(){
    var gender = document.getElementById("gender").value;
    if(gender == "girl"){
        background();
        drawGirl(20, 10);
        console.log("gender");
    } else {
        background();
        drawBoy(20, 10);
        console.log("gendereeeeeeeeee");
    }

}
canvas.id = "show";
drawBoy(20, 10);
