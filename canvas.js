//1 - get object
//2 - set parameters/properties
//3 - action

function makeCanvas() {
	
	var PI_TWO = Math.PI * 2;
	var canvas5 = document.getElementById('canvas5');
	var ctx5 = canvas5.getContext('2d');

	var posX = 0;
	var posY = 0;
	var pos

	var posX1 = 0;
	var posX2 = 0;
	var posX3 = 0;
	var posX4 = 0;
	var posX5 = 0;
	setInterval(function() {
		posX += 1;
		posY += 1;

		posX1 += 0.9;
		posX2 += 1.6;
		posX3 += 1.9;
		posX4 += 2.4;
		posX5 += 2.8;
		ctx5.fillStyle = "DeepSkyBlue";
		ctx5.fillRect(0, 0, canvas5.width, canvas5.height);

		ctx5.fillStyle = "#F2F0F0";
		ctx5.beginPath();
		ctx5.arc(posX5, 160, 40, 0, PI_TWO);
		ctx5.arc(posX5+50, 150, 50, 0, PI_TWO);
		ctx5.arc(posX5+100, 160, 40, 0, PI_TWO);
		ctx5.fill();
		ctx5.closePath();

		ctx5.fillStyle = "white";
		ctx5.beginPath();
		ctx5.arc(posX3+90, 300, 50, 0, PI_TWO);
		ctx5.arc(posX3+160, 290, 65, 0, PI_TWO);
		ctx5.arc(posX3+230, 300, 50, 0, PI_TWO);
		ctx5.fill();
		ctx5.closePath();

		ctx5.fillStyle = "#F3F1F1";
		ctx5.beginPath();
		ctx5.arc(posX2+70, 60, 30, 0, PI_TWO);
		ctx5.arc(posX2+110, 50, 40, 0, PI_TWO);
		ctx5.arc(posX2+150, 60, 30, 0, PI_TWO);
		ctx5.fill();
		ctx5.closePath();

		ctx5.beginPath();
		ctx5.fillStyle = "gray";
		ctx5.arc(posX3-60, 90, 30, 0, PI_TWO);
		ctx5.arc(posX3-140, 90, 30, 0, PI_TWO);
		ctx5.arc(posX3-100, 80, 40, 0, PI_TWO);
		ctx5.fill();
		ctx5.closePath();

		ctx5.fillStyle = "white";
		ctx5.beginPath();
		ctx5.arc(posX2-100, 160, 40, 0, PI_TWO);
		ctx5.arc(posX2-200, 160, 40, 0, PI_TWO);
		ctx5.arc(posX2-150, 150, 50, 0, PI_TWO);
		ctx5.fill();
		ctx5.closePath();

		ctx5.fillStyle = "#F1F3F3";
		ctx5.beginPath();
		ctx5.arc(posX4-60, 200, 30, 0, PI_TWO);
		ctx5.arc(posX4-140, 200, 30, 0, PI_TWO);
		ctx5.arc(posX4-100, 195, 40, 0, PI_TWO);
		ctx5.fill();
		ctx5.closePath();


		ctx5.fillStyle = 'black'; 
		ctx5.beginPath();
		ctx5.arc(posX1-230, 300, 60, 0, PI_TWO);
		ctx5.arc(posX1-370, 300, 60, 0, PI_TWO);
		ctx5.arc(posX1-300, 290, 80, 0, PI_TWO);
		ctx5.fill();
		ctx5.closePath();

		ctx5.font = '70px Comic Sans MS';
		ctx5.fillStyle = 'white'; 
		ctx5.fillText("LOL", posX1-360, 320);


	}, 30)



}
