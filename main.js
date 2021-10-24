//Create a reference for canvas 

//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.




window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}


canvas= document.getElementById ('myCanvas');
ctx = canvas.getContext("2nd");
greencar_width = 75;
greencar_height = 100;
greencar_x = 5;
greencar_y = 225;
function add(){
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;
	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;

}
function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}
function uploadgreencar (){
	ctx.drawImage(greencar_imgTag, greencar_x,greencar_y, greencar_width, greencar_height);
}
function up()
{
	(if_greencar_y >=0)
	{
		greencar_y = greencan_y - 10;
		console.log("when up arrow key is pressed, x=" + greencar_x + " | y = " +greencar_y);
		uploadbackground();
		uploadgreencar();
	}
}
function down()
{
	(if_greencar_y <=450)
	{
		greencar_y = greencan_y + 10;
		console.log("when down arrow key is pressed, x=" + greencar_x + " | y = " +greencar_y);
		uploadbackground();
		uploadgreencar();
	}
}
function left()
{
	(if_greencar_x <=0)
	{
		greencar_x = greencan_x - 10;
		console.log("when up left arrow key is pressed, x=" + greencar_x + " | y = " +greencar_y);
		uploadbackground();
		uploadgreencar();
	}
}
function right()
{
	(if_greencar_x >=450)
	{
		greencar_x = greencan_x + 10;
		console.log("when right arrow key is pressed, x=" + greencar_x + " | y = " +greencar_y);
		uploadbackground();
		uploadgreencar();
	}
}