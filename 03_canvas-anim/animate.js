// DuckDuck - Robin Han, T Fabiha
// SoftDev2 pd7
// K03 - They lock us in the tower whenever we get caught ...which is often
// 2019-02-03

// Not incorporated in the program:
// e.preventDefault()
// --- when called it prevents the default event from occurring  

var c = document.getElementById("playground");
var canvas = c.getBoundingClientRect();

var ctx = c.getContext("2d");

// only one request animation frame

// NEW VARIABLES

var dotButton = document.getElementById("circle");
var stopButton = document.getElementById("stop");

var requestID;
var radius = 0;
var growing = true;

// clears the canvas
var clear = function(e)
{
    ctx.clearRect(0, 0, c.width, c.height);; // clear canvas the size of the canvas

};

// draws a dot on the canvas
// connects new dot to the previous dot if applicable
var drawDot = function(e)
{
    window.cancelAnimationFrame(requestID);
    console.log(radius);
    clear();

    // e.offsetX is used to return the x coordinate of mouse cursor
    // in relation to the div in which your cursor is in
    //e.offsetY same as above, but returns y coordinate instead        

    var xcor = c.width / 2;
    var ycor = c.width / 2;
    
    ctx.fillStyle = "#ff0000"; // color of fill
    ctx.beginPath();
    ctx.ellipse(xcor, ycor, radius, radius, 0, 0, 2 * Math.PI); // creates an ellipse
    ctx.fill(); // display a filled in ellipse

    if (radius >= c.width / 2)
    {
	growing = false;
    }

    if (radius <= 0)
    {
	growing = true;
    }

    if (growing)
    {
	radius += 1;
    }
    else
    {
	radius -= 1;
    }
    
    requestID = window.requestAnimationFrame(drawDot);
};



var stopIt = function()
{
    window.cancelAnimationFrame(requestID);
};

dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stopIt);
