var toggleb = document.getElementById("toggle");
var clearb = document.getElementById("clear");

var shape = document.getElementById("shape");

var c = document.getElementById("slate");
var canvas = c.getBoundingClientRect();

var ctx = c.getContext("2d");

toggleb.addEventListener("click", function(e)
			    {
				toggle();
			    });

clearb.addEventListener("click", function(e)
			{
			    console.log("clearing");
			    clear();
			});

c.addEventListener("click", function(e)
		     {
			 draw(e);
		     });

var toggle = function(e)
{
    if (shape.innerHTML == "rectangle")
    {
	shape.innerHTML = "circle";
    }
    else
    {
	shape.innerHTML = "rectangle";
    }
};

var clear = function(e)
{
    ctx.clearRect(0, 0, c.width, c.height);;
};

var draw = function(e)
{
    console.log("(" + e.clientX + ", " + e.clientY + ")");

    var x = e.clientX - canvas.left;
    var y = e.clientY - canvas.top;

    console.log(x + " " + y);

    if (shape.innerHTML == "circle")
    {
	drawCircle(e, x, y);
    }
    else
    {
	drawRect(e, x, y);
    }
    
};

var drawCircle = function(e, xcor, ycor)
{
    ctx.fillStyle = "#ff0000";
    ctx.beginPath();
    ctx.ellipse(xcor, ycor, 20, 20, 0, 0, 2 * Math.PI);
    ctx.fill();
};

var drawRect = function(e, xcor, ycor)
{
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(xcor, ycor, 20, 20);
};

