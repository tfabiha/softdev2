// T Fabiha

var data;

d3.queue()
    .defer(d3.json, "data.json")
    .await(ready);

function ready( edu )
{
    console.log(edu);
    edu.forEach( function(d)
		 {
		     data.append( d );
		 });
};

console.log(data);

var x = [1, 2, 3, 4]
var newX = x.map( function(n)
		  {
		      return (n * 2)
		  });

console.log( newX );
