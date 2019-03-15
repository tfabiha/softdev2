// GeeseGrease -- Robin Han, T Fabiha
// SoftDev2 pd7
// K04 -- What is it saving the screen from?
// 2019-02-06

var stopIt = function(){
    window.cancelAnimationFrame(requestID);
}

var circleMove = function(){
    window.cancelAnimationFrame(requestID);

    var x = 0;
    var y = 0;

    var xVel = 1;
    var yVel = 1;

    var logo = new Image();
    logo.src = "logo_dvd.jpg";

    var animateDVD = function(){
	window.cancelAnimationFrame(requestID);
	clear();
	
	if (rectX >= 500 || rectX <= 0){
	    xVel *= -1;
	}
	if (rectY >= 500 || rectY <= 0){
	    yVel *= -1;
	}
	rectX += xVel;
	rectY += yVel;
	requestID = requestAnimationFrame(animateDVD);
    }

    animateDVD();
}


function clear(e){
    //console.log("clear");
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

dvd.addEventListener("click",dvdLogoSetup);
