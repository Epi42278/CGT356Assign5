var w = "800px"
h = "800px"

svg = d3.select("#nymap")
.append("svg")
.attr("width", w)
.attr("height", w);

d3.queue()
.defer(d3.json, "scripts/us_county.json")
.await(ready)

function ready(error, data) {
	if(error) throw error;

	var us = topojson.feature(data, {
		type: "GeometryCollection",
		geometries: data.objects.us_county.geometries
	});

	var projection = d3.geoAlbersUsa()
	.fileExtent([[20, 20], [400, 500]], us_county);
}