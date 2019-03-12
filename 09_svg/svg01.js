var pic = document.getElementById("vimage");
var clear = document.getElementById("but_clear");

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

var prev = 0;

var drawCircle = function(e)
{
    console.log( "[" + e.offsetX + ", " + e.offsetY + "]");

    if (prev != 0)
    {
	var line = document.createElementNS(
	    "http://www.w3.org/2000/svg", "line");

	line.setAttribute( "x1", prev.getAttribute( "cx" ) );
	line.setAttribute( "y1", prev.getAttribute( "cy" ) );
	line.setAttribute( "x2", e.offsetX );
	line.setAttribute( "y2", e.offsetY );
	line.setAttribute( "stroke", "black" );
	
	pic.appendChild( line );
	pic.appendChild( prev );
    }
    
    var c = document.createElementNS(
    "http://www.w3.org/2000/svg", "circle");

    c.setAttribute( "r", "10" );
    c.setAttribute( "fill", "red" );
    c.setAttribute( "stroke", "black" );
    c.setAttribute( "cx", e.offsetX );
    c.setAttribute( "cy", e.offsetY );

    pic.appendChild( c );

    prev = c;
};

var clearing = function(e)
{
    var c = document.createElementNS(
    "http://www.w3.org/2000/svg", "circle");

    c.setAttribute( "r", "500" );
    c.setAttribute( "fill", "white" );
    c.setAttribute( "stroke", "white" );
    c.setAttribute( "cx", 0 );
    c.setAttribute( "cy", 0 );

    pic.appendChild( c );

    prev = 0;
};

//pic.appendChild( c );

