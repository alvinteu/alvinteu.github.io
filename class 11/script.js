document.addEventListener('DOMContentLoaded', function (){

	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	//Face
	ctx.beginPath();
	ctx.arc(100,75,50,0,2*Math.PI);
	ctx.stroke();

	//left eye
	ctx.beginPath();
	ctx.arc(80,60,5,0,2*Math.PI);
	ctx.stroke();
	ctx.fill();


	//right eye
	ctx.beginPath();
	ctx.arc(120,60,5,0,2*Math.PI);
	ctx.stroke();
	ctx.fill();


	//mouth

	ctx.beginPath();
	ctx.arc(100,75,30,0,1*Math.PI);
	ctx.stroke();

// Start Square with triangle

	//Square
	ctx.beginPath();
	ctx.strokeRect(200, 25, 100, 100);

	//Triangle
	ctx.beginPath();
	ctx.moveTo(150,25);
	ctx.lineTo(350,25);
	ctx.lineTo(250,75);
	ctx.fillStyle = 'rgba(255, 165, 0, 0.5)';
	ctx.fill();



})

// fill the whole canvas
// ctx.fillRect(0, 0, canvas.width, canvas.height);