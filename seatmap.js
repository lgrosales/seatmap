window.onload = function () {
	
	var seats = [{"x":1,"y":1}, {"x":2,"y":1}, {"x":3,"y":1}, {"x":4,"y":1}, {"x":1,"y":2}, {"x":2,"y":2}, {"x":3,"y":2}, {"x":4,"y":2}, 
		{"x":1,"y":3}, {"x":2,"y":3}, {"x":3,"y":3}, {"x":4,"y":3},{"x":1,"y":4}, {"x":2,"y":4}, {"x":3,"y":4}, {"x":4,"y":4}];
	var radius = 10;
	
	// Creates canvas 320 × 200 at 50, 30
	var paper = Raphael(50, 30, 320, 200);

	for (var i = 0; i < seats.length; i++)
	{
		var seatObj = seats[i];
		var x = seatObj.x * 2.5 * radius,
			y = seatObj.y * 2.5 * radius;
		
		var seat = paper.circle(x, y, radius).attr({stroke: "none", fill: "#f00", opacity: .4});
		
		seat.mouseover(function(){
			this.attr("opacity", 1);
		});
		
		seat.mouseout(function(){
			this.attr("opacity", .4);
		});
		
		seat.click(function(){
			if (this.attrs.fill == "#f00")
			{
				this.attr("fill", "#000");
			}
			else
			{
				this.attr("fill", "#f00");
			}
			document.getElementById('selectedSeat').innerHTML = 'Seat selected at ' + this.attrs.cx + ',' + this.attrs.cy;
		});
		
	}
	
}