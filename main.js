var lastpositionofx, lastpositionofy;

color = "black";

widthofline = 2;

canvas = document.getElementById("canvas1");

ctx = canvas.getContext("2d");

var width = screen.width;

newwidth = screen.width - 70;

newheight = screen.height - 300;

if(width < 992) {
    document.getElementById("canvas1").width = newwidth;

    document.getElementById("canvas1").height = newheight;

    document.body.style.overflow = "hidden";
}
    canvas.addEventListener("touchstart", myTouchStart) 

    function myTouchStart(e) {
        console.log("myTouchStart");

        color = document.getElementById("color").value;

        widthofline = document.getElementById("widthofline").value;

        lastpositionofx = e.touches[0].clientX - canvas.offsetLeft;

        lastpositionofy = e.touches[0].clientY - canvas.offsetTop;
    }

    canvas.addEventListener("touchmove", myTouchMove);

    function myTouchMove(e) {
        console.log("myTouchMove");

        currentpositionofx = e.touches[0].clientX - canvas.offsetLeft;

        currentpositionofy = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();

        ctx.strokeStyle = color;

        ctx.lineWidth = widthofline;

        console.log("Last Position of X and Y cooridinates are ");

        console.log("X = " + lastpositionofx + ", and Y = " + lastpositionofy);

        ctx.moveTo(lastpositionofx, lastpositionofy);

        console.log("Current Position of X and Y cooridinates are ");

        console.log("X = " + currentpositionofx + ", and Y = " + currentpositionofy);

        ctx.lineTo(currentpositionofx, currentpositionofy);

        ctx.stroke();

        lastpositionofx = currentpositionofx;

        lastpositionofy = currentpositionofy;
    }

    function cleararea() {
        ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
    }