var drawing;

Template.quiz2.events({
	'mousemove': function(){
		var x = event.clientX;
		var y = event.clientY;
		var coords = "position = ("+x+","+y+")";
		document.getElementById("mouse").innerHTML = coords;
		
		if(drawing){
			var drawContext = paint.getContext("2d");
			drawContext.lineTo(event.clientX, event.clientY);
			drawContext.stroke();
		}
	},
	'mousedown': function(){
		var drawContext = paint.getContext("2d");
		drawing = true;
		drawContext.moveTo(event.clientX, event.clientY);
	},
	'mouseup': function(){
		var drawContext = paint.getContext("2d");
		drawContext.lineTo(event.clientX, event.clientY);
		drawContext.stroke();
		drawing = false;
	},
	// this tries to clear lines but actually clears everything..
	// 'click #erase': function(){
	// 	var drawContext = paint.getContext("2d");
	// 	drawContext.clearRect(0,0,paint.width,paint.height);
	// }
});

function draw(){
	var drawContext = paint.getContext("2d");
	drawContext.fillStyle="#ffff4c";
	drawContext.fillRect(0,0,paint.width,paint.height);
}

Template.quiz2.rendered = draw;