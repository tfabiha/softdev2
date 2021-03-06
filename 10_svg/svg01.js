// T Fabiha
// SoftDev pd7
// K10 -- Ask Circles [Change || Die]
// 2019-03-14r

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


