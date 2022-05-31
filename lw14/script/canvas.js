window.onload = () => {
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');
    context.beginPath();

	const startPosX = 8;
	const startPosY = 8;
	
	const sizeOfSheetX = 130;
	const sizeOfSheetY = 90;
	
	//Туловище
	context.fillStyle = "#3e77c8";
	context.fillRect(30 + startPosX, 245 + startPosY, sizeOfSheetX, sizeOfSheetY);


	//Куртка
	context.beginPath();
	context.fillStyle = "#d47062";
	context.moveTo(31 + startPosX, 232 + startPosY);
	context.bezierCurveTo(25 , 260, 25, 260, 7 + startPosX, 285 + startPosY);
	context.bezierCurveTo(28, 285, 28, 285, 27 + startPosX, 285 + startPosY);
	context.bezierCurveTo(45, 290, 45, 300, 24 + startPosX, 305 + startPosY);
	context.lineTo(22 + startPosX, 310 + startPosY);
	context.bezierCurveTo(100, 330, 100, 330, 167, 318);
	context.lineTo(180, 296);
	context.bezierCurveTo(176, 270, 176, 270, 150 + startPosX, 230 + startPosY);
	context.arc(100, 200, 60, 0, 2* Math.PI);
	context.fill();

	//Воротник
	context.beginPath();
	context.fillStyle = "#ff2f4c";
	context.moveTo(30 + startPosX, 230 + startPosY);
	context.bezierCurveTo(80, 285,120, 280, 90, 230);
	context.stroke();
	context.fill();

	//Левая варежка
	context.beginPath();
	context.fillStyle = "#ff1f41";
	context.arc(18 + startPosX, 293 + startPosY, 15, 0, 2 * Math.PI);
	context.stroke();
	context.fill();
	context.beginPath();
	context.strokeStyle = "black";
	context.arc(28 + startPosX, 290 + startPosY, 6, 0, 2* Math.PI);
	context.stroke();
	context.fill();

	//Правая варежка
	context.beginPath();
	context.fillStyle = "#ff1f41";
	context.arc(162 + startPosX, 297 + startPosY, 15, 0, 2 * Math.PI);
	context.stroke();
	context.fill();
	context.beginPath();
	context.strokeStyle = "black";
	context.arc(150 + startPosX, 295 + startPosY, 6, 0, 2* Math.PI);
	context.stroke();
	context.fill();

	//Ноги
	context.beginPath();
	context.fillStyle= "black";
	context.moveTo(20 + startPosX, 335 + startPosY);
	context.lineTo(168 + startPosX, 337 + startPosY);
	context.bezierCurveTo(160, 330 + startPosY, 160, 330 + startPosY, 90 + startPosX, 332 + startPosY);
	context.bezierCurveTo(60, 325 + startPosY,60, 325 + startPosY, 20 + startPosX, 335 + startPosY);
	context.fill();

	//Голова
	context.beginPath();
	context.moveTo(90 + startPosX, 50 + startPosY);
	context.arc(90 + startPosX, 162 + startPosY, 90, 0, 2 * Math.PI);
	context.fillStyle = "#ffecc1"
	context.fill();
	context.beginPath();
	
	//Левый глаз
	//context.moveTo(80, 100);
	context.ellipse(65 + startPosX, 172 + startPosY, 24, 30, Math.PI / 4, 0, 2 * Math.PI);
	context.fillStyle = "#ffffff"
	context.fill();
	context.beginPath();
	
	//Правый глаз
	//context.moveTo(110, 100);
	context.ellipse(115 + startPosX, 172 + startPosY, 24, 30, 3 *Math.PI / 4, 0, 2 * Math.PI);
	context.fillStyle = "#ffffff"
	context.fill();
	context.beginPath();
	
	//Зрачек левый
	context.fillStyle = "#000000";
	context.arc(72 + startPosX, 173 + startPosY, 3, 0, 2 * Math.PI);
	context.fill();
	context.beginPath();
	
	//Зрачек правый
	context.arc(104 + startPosX, 173 + startPosY, 3, 0, 2 * Math.PI);
	context.fill();
	context.beginPath();
	
	//рот
	context.moveTo(68 + startPosX, 220 + startPosY);
	context.lineTo(95 + startPosX, 242 + startPosY);
	context.lineTo(118 + startPosX, 218 + startPosY);
	context.fill();
	context.beginPath();
	
	//зуб 1
	context.fillStyle = "#ffffff"
	context.moveTo(72 + startPosX, 220 + startPosY);
	context.lineTo(75 + startPosX, 225 + startPosY);
	context.lineTo(81 + startPosX, 226 + startPosY);
	context.lineTo(83 + startPosX, 220 + startPosY);
	context.fill();
	//context.fillRect(72, 220, 12, 5);
	
	//зуб 2
	context.moveTo(85 + startPosX, 220 + startPosY);
	context.lineTo(85 + startPosX, 226 + startPosY);
	context.lineTo(94 + startPosX, 226 + startPosY);
	context.lineTo(94 + startPosX, 220 + startPosY);
	context.fill();

	//зуб 3
	context.moveTo(95 + startPosX, 220 + startPosY);
	context.lineTo(95 + startPosX, 226 + startPosY);
	context.lineTo(103 + startPosX, 226 + startPosY);
	context.lineTo(107 + startPosX, 219 + startPosY);
	context.fill();
	
	//зуб 4
	context.moveTo(108 + startPosX, 219 + startPosY);
	context.lineTo(104 + startPosX, 226 + startPosY);
	context.lineTo(110 + startPosX, 226 + startPosY);
	context.lineTo(117 + startPosX, 219 + startPosY);
	context.fill();
	
	//шапка
	context.beginPath();
	context.fillStyle = "#3e77c8"
	context.ellipse(90 + startPosX, 150 + startPosY, 90, 90, Math.PI, 0.1, 3);
	context.fill();
	
	//коёмка шапки
	context.beginPath();
	context.fillStyle = "#ff1f42"
	context.moveTo(0 + startPosX, 140 + startPosY);
	context.bezierCurveTo(80 + (startPosX),115  + (startPosY), 80 + ( startPosX), 115 + (startPosY), 182 + startPosX, 133 + startPosY );
	context.lineTo(182 + startPosX, 152 + startPosY);
	context.bezierCurveTo(80 + (startPosX),135  + (startPosY), 80  + (startPosX), 137 + (startPosY), 0 + startPosX - 2, 157 + startPosY );
	context.lineTo(3, 140 + startPosY);
	context.fill();
	//context..ellipse(86, 140, 98, 15, Math.PI, 0, Math.PI);

	//context.fill();
	
	//помпошка
	context.beginPath();
	context.strokeStyle = "#ff1f42"
	context.moveTo(78 + startPosX, 47 + startPosY);
	context.lineTo(82 + startPosX, 87 + startPosY);
	context.stroke();
	
	context.moveTo(86 + startPosX, 47 + startPosY);
	context.lineTo(76 + startPosX, 88 + startPosY);
	context.stroke();
	
	context.moveTo(70 + startPosX, 49 + startPosY);
	context.lineTo(90 + startPosX, 88 + startPosY);
	context.stroke();
	
	context.moveTo(64 + startPosX, 53 + startPosY);
	context.lineTo(96 + startPosX, 80 + startPosY);
	context.stroke();
	
	context.moveTo(60 + startPosX, 60 + startPosY);
	context.lineTo(100 + startPosX, 74 + startPosY);
	context.stroke();

	context.moveTo(58 + startPosX, 66 + startPosY);
	context.lineTo(100 + startPosX, 68 + startPosY);
	context.stroke();

	context.moveTo(60 + startPosX, 75 + startPosY);
	context.lineTo(100 + startPosX, 57 + startPosY);
	context.stroke();

	context.moveTo(66 + startPosX, 85 + startPosY);
	context.lineTo(94 + startPosX, 54 + startPosY);
	context.stroke();

	//Левая бровь
	context.beginPath();
	context.moveTo(30 + startPosX, 152 + startPosY);
	context.lineTo(48 + startPosX, 135 + startPosY);
	context.strokeStyle = "#000000";
	context.stroke();

	//Правая бровь
	context.beginPath();
	context.moveTo(142 + startPosX, 146 + startPosY);
	context.lineTo(120 + startPosX, 132 + startPosY);
	context.strokeStyle = "#000000";
	context.stroke();
}