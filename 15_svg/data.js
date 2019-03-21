var x = d3.scale.linear();

var chart = d3.select(".chart");

d3.tsv("data.tsv", type, function(error, data) {

    var width = d3.max(data, function(a) { return a.Age; });
    var height = d3.max(data, function(d) { return d.Deaths; } );

    console.log(width);
    console.log(height);
    
    chart = chart.attr( "width", width )
	.attr( "height", height );
    
    console.log(data)
    x.domain([0, d3.max(data, function(a) { return a.Age; })])
	.range([0, d3.max(data, function(d) { return d.Deaths;  })]);

    /*
    chart.attr("height", barHeight * data.length);

    var bar = chart.selectAll("g")
	.data(data)
	.enter().append("g")
	.attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

    bar.append("rect")
	.attr("width", function(d) { return x(d.value); })
	.attr("height", barHeight - 1);

    bar.append("text")
	.attr("x", function(d) { return x(d.value) - 3; })
	.attr("y", barHeight / 2)
	.attr("dy", ".35em")
	.text(function(d) { return d.value; });
    */
});

function type(a) {
    a.Age = +a.Age; // coerce to number
    return a;
}

function type(d){
    d.Deaths = +d.Deaths;
    return d;
}
