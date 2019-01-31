var toggleb = document.getElementById("toggle");
var clearb = document.getElementById("clear");

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

    ctx.fillStyle = "#ff0000";
    ctx.fillRect(x, y, 20, 20);
};

