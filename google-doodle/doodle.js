d3.select("svg").transition()
  .duration(500)
  .ease(d3.easeLinear)
  .attr("opacity", 1);

var opacity = 0;

d3.select("#play").on("click", function() {
  var paths = d3.selectAll(".draw");
  paths.each(function(p, i) {
    var totalLength = this.getTotalLength();
    var path = d3.select(this);
    path.style("opacity", 1)
      .attr("stroke-dasharray", totalLength + " " + totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
        .duration(750)
        .delay(function(p) {
          return i * 750;
        })
        .ease(d3.easeLinear)
        .attr("stroke-dashoffset", 0);
  });
  opacity = 1;
})
.on("mouseover", function() {
  d3.select(this).style("cursor", "pointer");
});

var g = d3.select("#Layer_2").selectAll(".letter");
g.on("click", function() {
  var paths = d3.select(this).selectAll(".draw");
  console.log(1000 / paths.size());
  paths.each(function(p, i) {
    var totalLength = this.getTotalLength();
    var path = d3.select(this);
    path.attr("opacity", 1)
      .attr("stroke-dasharray", totalLength + " " + totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
        .duration(1000 / paths.size())
        .delay(function(p) {
          return i * 1000 / paths.size();
        })
        .ease(d3.easeLinear)
        .attr("stroke-dashoffset", 0);
    path.transition()
      .duration(1000)
      .delay(2000)
      .attr("opacity", opacity);
  });
})
.on("mouseover", function() {
  d3.select(this).style("cursor", "pointer");
});
