// Team NoMansVoices -- Mai Rachlevsky
// Softdev2 pd 7
// K #15: Scattered...
// 2019-03-25m

//source: https://www.kaggle.com/unsdsn/world-happiness/version/2?fbclid=IwAR2OMugNWxf_LVIwhwR0MKFwBcbMxvodsi6ZYipiemKaWYz0qcmYQnv6qZQ
// Data shows levels of happiness in comparison to different factors. We focused on its relation to trust in the government


d3.csv('2017.csv', function (data) {
    // Variables
    var body = d3.select('body')
    var margin = { top: 50, right: 50, bottom: 50, left: 50 }
    var h = 500 - margin.top - margin.bottom
    var w = 500 - margin.left - margin.right

    // Scales
    var colorScale = d3.scale.category20()
    var xScale = d3.scale.linear()
	.domain([
    	    d3.min(data,function (d) { return d.Score }),
    	    8
    	])
	.range([0,w])
    var yScale = d3.scale.linear()
	.domain([
    	    d3.min([0,d3.min(data,function (d) { return d.Trust })]),
    	    d3.max([0,d3.max(data,function (d) { return d.Trust })])
    	])
	.range([h,0])

    // SVG
    var svg = body.append('svg')
	.attr('height',h + margin.top + margin.bottom)
	.attr('width',w + margin.left + margin.right)
	.append('g')
	.attr('transform','translate(' + margin.left + ',' + margin.top + ')')

    // X-axis
    var xAxis = d3.svg.axis()
	.scale(xScale)
	.ticks(5)
	.orient('bottom')

    // Y-axis
    var yAxis = d3.svg.axis()
	.scale(yScale)
	.ticks(5)
	.orient('left')

    // Circles
    var circles = svg.selectAll('circle')
	.data(data)
	.enter()
	.append('circle')
	.attr('cx',function (d) { return xScale(d.Score) })
	.attr('cy',function (d) { return yScale(d.Trust) })
	.attr('r','10')
	.attr('stroke','black')
	.attr('stroke-width',1)
	.attr('fill',function (d,i) { return colorScale(i) })

    // X-axis
    svg.append('g')
	.attr('class','axis')
	.attr('transform', 'translate(0,' + h + ')')
	.call(xAxis)
	.append('text') // X-axis Label
	.attr('class','label')
	.attr('y',-10)
	.attr('x',w)
	.attr('dy','.71em')
	.style('text-anchor','end')
	.text('Average Happiness')

    // Y-axis
    svg.append('g')
	.attr('class', 'axis')
	.call(yAxis)
	.append('text') // y-axis Label
	.attr('class','label')
	.attr('transform','rotate(-90)')
	.attr('x',0)
	.attr('y',5)
	.attr('dy','.71em')
	.style('text-anchor','end')
	.text('Affect of Government Trust')

    // Title
    svg.append("text")
        .attr("x", (w / 2))             
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", "16px") 
        .style("text-decoration", "underline")  
        .text("Overall Happiness vs Affect of Trust on Government Graph");
})
