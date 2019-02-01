// OnePlusOneIsThree -- Soojin Choi, Tabassum Fabiha
// SoftDev2 pd7
// K01 - ...and I want to Paint It Better
// 2019-01-31

const c = document.getElementById("playground");
const ctx = c.getContext("2d");

var x = -1
var y = -1

var getMousePos = function(evt) { //Same as using evt.offsetX and evt.offsetY

    // e.offsetX is used to return the x coordinate of mouse cursor
    // in relation to the div in which your cursor is in

    //e.offsetY same as above, but returns y coordinate instead
    
    return {
	x: evt.offsetX,
	y: evt.offsetY
    };
}

var draw = function(evt) { //Draws the shape based on

    // ctx.beginPath() is used before starting a new path,
    // it can be used to draw lines, ellipses, arcs, or rectangles
    ctx.beginPath();

    // create a dot on ctx
    //ctx.ellipse(pos.x, pos.y, 12, 12, Math.PI / 4, 0, 2 * Math.PI);
    ctx.ellipse(evt.offsetX, evt.offsetY, 30, 30, Math.PI / 4, 0, 2 * Math.PI);

    //ctx.stroke();

    ctx.fillStyle = '#0000ff'; // change color of fill
    ctx.fill() // display shape on page
    
    // connect if possible
    if (x > -1)
    {
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(evt.offsetX, evt.offsetY);
	ctx.stroke();
    }

    x = evt.offsetX;
    y = evt.offsetY;

}

var drawShape = function(evt)
{};

var clear = function(e) { // clears the canvas

    ctx.clearRect(0, 0, c.width, c.height); 
}

// Not incorporated in the program:
// e.preventDefault()
// --- when called it prevents the default event from occurring

var cls = document.getElementById("clear");
cls.addEventListener('click', clear);
