// OnePlusOneIsThree -- Soojin Choi, Tabassum Fabiha
// SoftDev2 pd7
// K02 - Connecting the Dots
// 2019-02-03

// Not incorporated in the program:
// e.preventDefault()
// --- when called it prevents the default event from occurring  

var clearb = document.getElementById("clear"); 

var c = document.getElementById("playground");
var canvas = c.getBoundingClientRect();

var ctx = c.getContext("2d");

// holds the coordinates of the previously placed dot
var x_prev = -1
var y_prev = -1

clearb.addEventListener("click", function(e)
			{
			    console.log("clearing");
			    clear();
			});

c.addEventListener("click", function(e)
		     {
			 draw(e);
		     });

// clears the canvas
var clear = function(e)
{
    ctx.clearRect(0, 0, c.width, c.height);; // clear canvas the size of the canvas

    x_prev = -1;
    y_prev = -1;
};

// draws a dot on the canvas
// connects new dot to the previous dot if applicable
var draw = function(e)
{
    console.log("(" + e.clientX + ", " + e.clientY + ")");

    // e.offsetX is used to return the x coordinate of mouse cursor
    // in relation to the div in which your cursor is in
    //e.offsetY same as above, but returns y coordinate instead        

    // coordinates of the new dot
    var x = e.offsetX;
    var y = e.offsetY;

    console.log(x + " " + y);

    if (x_prev > -1)
    {
	// ctx.beginPath() is used before starting a new path,
	// it can be used to draw lines, ellipses, arcs, or rectangles     
	ctx.beginPath();

	// starts at a coordinate location
	ctx.moveTo(x_prev, y_prev);

	// creates a line to a new coordinate
	ctx.lineTo(x, y);

	// displays the line in the canvaas
	ctx.stroke();

	// redraw the previous circle
	drawCircle(x_prev, y_prev)
    }

    // draw the new circle
    drawCircle(x, y);

    // set the coordinates again
    x_prev = x;
    y_prev = y;
    
};

// draw a dot with given coordinates
var drawCircle = function(xcor, ycor)
{
    ctx.fillStyle = "#ff0000"; // color of fill
    ctx.beginPath();
    ctx.ellipse(xcor, ycor, 20, 20, 0, 0, 2 * Math.PI); // creates an ellipse
    ctx.fill(); // display a filled in ellipse
};


