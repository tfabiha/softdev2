var toggleb = document.getElementById("toggle");
var clearb = document.getElementById("clear");

var c = document.getElementById("slate");

toggleb.addEventListener("click", function(e)
			    {
				toggle();
			    });

clearb.addEventListener("clear", function(e)
			  {
			      clear();
			  });

var ctx = c.getContext("2d");

c.addEventListener("click", function(e)
		     {
			 draw();
		     });

var toggle = function(e)
{

};

var clear = function(e)
{

};

var draw = function(e)
{

};
