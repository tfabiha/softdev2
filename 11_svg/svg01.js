// T Fabiha
// SoftDev pd7
// K #11: Ask Circles [Change || Die] …While On The Go
// 2019-03-18m


var HEIGHT = 500;
var WIDTH = 500;
var requestID;

var pic = document.getElementById("vimage");
var clear = document.getElementById("but_clear");
var move = document.getElementById("moving");
var question = document.getElementById("question");

pic.addEventListener( "click", function(e)
		      {
			  drawCircle(e);
		      }
		    );

clear.addEventListener( "click", function(e)
			{
			    clearing(e);
			}
		      );

move.addEventListener("click", function(e)
		      {
			  circleMove(e);
		      }
		     );

question.addEventListener("click", function(e)
			  {
			      randomVel(e);
			  }
			 );

var draw = true;

var drawCircle = function(e)
{
    console.log( "[" + e.offsetX + ", " + e.offsetY + "]");
    
    var c = document.createElementNS(
    "http://www.w3.org/2000/svg", "circle");

    c.addEventListener("click", function(s)
		       {
			   childclicked(s);
		       });

    if (draw)
    {
	circle( c, e.offsetX, e.offsetY );
    }

    draw = true;
    
};

var circle = function( c, x, y )
{
    c.setAttribute( "r", "30" );
    c.setAttribute( "fill", "red" );
    c.setAttribute( "stroke", "black" );
    c.setAttribute( "cx", x );
    c.setAttribute( "cy", y );
    c.setAttribute( "xVel", 1 );
    c.setAttribute( "yVel", 1 );
    
    pic.appendChild( c );
}

var clearing = function(e)
{
    var children = pic.children;
    //console.log(children);
    var size = children.length
    
    for (var i = 0; i < size; i++)
    {
	pic.removeChild(children[0]);
    }

};

var childclicked = function(e)
{
    draw = false;

    if ( e.target.getAttribute("fill") == "red" )
    {
	e.target.setAttribute( "fill", "green" )
    }
    else
    {
	pic.removeChild(e.target);

	var c = document.createElementNS(
	    "http://www.w3.org/2000/svg", "circle");
	
	c.addEventListener("click", function(s)
			   {
			       childclicked(s);
			   });
	
	
	circle( c, Math.floor( Math.random() * 500 ), Math.floor( Math.random() * 500 ) );

    }
};

var circleMove = function(e)
{
    window.cancelAnimationFrame(requestID);
    
    var children = pic.children;
    
    for (var i = 0; i < children.length; i++)
    {
	window.cancelAnimationFrame(requestID);
	
	var xVel = parseInt( children[i].getAttribute("xVel") );
	var yVel = parseInt( children[i].getAttribute("yVel") );
	
	var x = parseInt( children[i].getAttribute("cx") );
	var y = parseInt( children[i].getAttribute("cy") );

	console.log(x + " " + y);
	
	if (x >= WIDTH || x <= 0)
	{
	    xVel *= -1;
	    children[i].setAttribute( "xVel",  xVel );
	}
	if (y >= HEIGHT || y <= 0)
	{
	    yVel *= -1;
	    children[i].setAttribute( "yVel",  yVel );
	}

	x += xVel;
	y += yVel;
	
	children[i].setAttribute( "cx", x );
	children[i].setAttribute( "cy", y );

	requestID = requestAnimationFrame(circleMove);
    }
    
};

var randomVel = function(e)
{
    children = pic.children;

    for (var i = 0; i < children.length; i++)
    {
	var xVel = Math.floor( Math.random() * 10 );
	var yVel = Math.floor( Math.random() * 10 );

	children[i].setAttribute( "xVel", xVel );
	children[i].setAttribute( "yVel", yVel );
    }
}
