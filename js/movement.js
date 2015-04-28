function movement(player){
    if(player.rotation > 360)
		player.rotation = 0;
    else if(player.rotation < 0)
		player.rotation = 360;

	// Movimiento
	if(keyPressed[formatKey("UP")]){
		if(player.rotation == 0 || player.rotation == 360)	player.y -= 4;
		else if(player.rotation == 90)			player.x += 4;
		else if(player.rotation == 180)			player.y += 4;
		else if(player.rotation == 270)			player.x -= 4;

		else if(player.rotation == 275){		player.y -= 1;		player.x -= 4; }
		else if(player.rotation == 280){		player.y -= 1;		player.x -= 4; }
		else if(player.rotation == 285){		player.y -= 1;		player.x -= 4; }
		else if(player.rotation == 290){		player.y -= 2;		player.x -= 4; }
		else if(player.rotation == 295){		player.y -= 2;		player.x -= 4; }
		else if(player.rotation == 300){		player.y -= 2;		player.x -= 4; }
		else if(player.rotation == 305){		player.y -= 3;		player.x -= 4; }
		else if(player.rotation == 310){		player.y -= 3;		player.x -= 4; }
		else if(player.rotation == 315){		player.y -= 3;		player.x -= 3; }
		else if(player.rotation == 320){		player.y -= 4;		player.x -= 3; }
		else if(player.rotation == 325){		player.y -= 4;		player.x -= 3; }
		else if(player.rotation == 330){		player.y -= 4;		player.x -= 2; }
		else if(player.rotation == 335){		player.y -= 4;		player.x -= 2; }
		else if(player.rotation == 340){		player.y -= 4;		player.x -= 2; }
		else if(player.rotation == 345){		player.y -= 4;		player.x -= 1; }
		else if(player.rotation == 350){		player.y -= 4;		player.x -= 1; }
		else if(player.rotation == 355){		player.y -= 4;		player.x -= 1; }

		else if(player.rotation == 5){			player.y -= 4;		player.x += 1; }
		else if(player.rotation == 10){			player.y -= 4;		player.x += 1; }
		else if(player.rotation == 15){			player.y -= 4;		player.x += 1; }
		else if(player.rotation == 20){			player.y -= 4;		player.x += 2; }
		else if(player.rotation == 25){			player.y -= 4;		player.x += 2; }
		else if(player.rotation == 30){			player.y -= 4;		player.x += 2; }
		else if(player.rotation == 35){			player.y -= 4;		player.x += 3; }
		else if(player.rotation == 40){			player.y -= 4;		player.x += 3; }
		else if(player.rotation == 45){			player.y -= 3;		player.x += 3; }
		else if(player.rotation == 50){			player.y -= 3;		player.x += 4; }
		else if(player.rotation == 55){			player.y -= 3;		player.x += 4; }
		else if(player.rotation == 60){			player.y -= 2;		player.x += 4; }
		else if(player.rotation == 65){			player.y -= 2;		player.x += 4; }
		else if(player.rotation == 70){			player.y -= 2;		player.x += 4; }
		else if(player.rotation == 75){			player.y -= 1;		player.x += 4; }
		else if(player.rotation == 80){			player.y -= 1;		player.x += 4; }
		else if(player.rotation == 85){			player.y -= 1;		player.x += 4; }

		else if(player.rotation == 95){			player.y += 1;		player.x += 4; }
		else if(player.rotation == 100){		player.y += 1;		player.x += 4; }
		else if(player.rotation == 105){		player.y += 1;		player.x += 4; }
		else if(player.rotation == 110){		player.y += 2;		player.x += 4; }
		else if(player.rotation == 115){		player.y += 2;		player.x += 4; }
		else if(player.rotation == 120){		player.y += 2;		player.x += 4; }
		else if(player.rotation == 125){		player.y += 3;		player.x += 4; }
		else if(player.rotation == 130){		player.y += 3;		player.x += 4; }
		else if(player.rotation == 135){		player.y += 3;		player.x += 3; }
		else if(player.rotation == 140){		player.y += 4;		player.x += 3; }
		else if(player.rotation == 145){		player.y += 4;		player.x += 3; }
		else if(player.rotation == 150){		player.y += 4;		player.x += 2; }
		else if(player.rotation == 155){		player.y += 4;		player.x += 2; }
		else if(player.rotation == 160){		player.y += 4;		player.x += 2; }
		else if(player.rotation == 165){		player.y += 4;		player.x += 1; }
		else if(player.rotation == 170){		player.y += 4;		player.x += 1; }
		else if(player.rotation == 175){		player.y += 4;		player.x += 1; }

		else if(player.rotation == 185){		player.y += 4;		player.x -= 1; }
		else if(player.rotation == 190){		player.y += 4;		player.x -= 1; }
		else if(player.rotation == 195){		player.y += 4;		player.x -= 1; }
		else if(player.rotation == 200){		player.y += 4;		player.x -= 2; }
		else if(player.rotation == 205){		player.y += 4;		player.x -= 2; }
		else if(player.rotation == 210){		player.y += 4;		player.x -= 2; }
		else if(player.rotation == 215){		player.y += 4;		player.x -= 3; }
		else if(player.rotation == 220){		player.y += 4;		player.x -= 3; }
		else if(player.rotation == 225){		player.y += 3;		player.x -= 3; }
		else if(player.rotation == 230){		player.y += 3;		player.x -= 4; }
		else if(player.rotation == 235){		player.y += 3;		player.x -= 4; }
		else if(player.rotation == 240){		player.y += 2;		player.x -= 4; }
		else if(player.rotation == 245){		player.y += 2;		player.x -= 4; }
		else if(player.rotation == 250){		player.y += 2;		player.x -= 4; }
		else if(player.rotation == 255){		player.y += 1;		player.x -= 4; }
		else if(player.rotation == 260){		player.y += 1;		player.x -= 4; }
		else if(player.rotation == 265){		player.y += 1;		player.x -= 4; }

		// Si choca, invertimos el desplazamiento (cambio el signo)
		for(i in blockBrown){
			if(player.collide(blockBrown[i]))
				retroceder();
		}
		for(i in blockWhiteVert){
			if(player.collide(blockWhiteVert[i]))
				retroceder();
		}
		for(i in blockWhiteHor){
			if(player.collide(blockWhiteHor[i]))
				retroceder();
		}
	}
	if(keyPressed[formatKey("DOWN")]){
		// Poner TURBO
	}
	if(keyPressed[formatKey("LEFT")]){
		player.rotation -= 5;
	}
	if(keyPressed[formatKey("RIGHT")]){
		player.rotation += 5;
	}

	// No salirse de la Pantalla
	if(player.x > canvas.width - player.width)		player.x = canvas.width - player.width;
	if(player.y > canvas.height - player.height)	player.y = canvas.height - player.height;
	if(player.x <= 0)								player.x = 0;
	if(player.y <= 0)								player.y = 0;
}

function retroceder(){
	if(player.rotation == 0 || player.rotation == 360)	player.y += 4;
	else if(player.rotation == 90)		player.x -= 4;
	else if(player.rotation == 180)	player.y -= 4;
	else if(player.rotation == 270)	player.x += 4;

	else if(player.rotation == 275){		player.y += 4;		player.x += 1; }
	else if(player.rotation == 280){		player.y += 4;		player.x += 1; }
	else if(player.rotation == 285){		player.y += 4;		player.x += 1; }
	else if(player.rotation == 290){		player.y += 4;		player.x += 1; }
	else if(player.rotation == 295){		player.y += 4;		player.x += 1; }
	else if(player.rotation == 300){		player.y += 4;		player.x += 1; }
	else if(player.rotation == 305){		player.y += 4;		player.x += 1; }
	else if(player.rotation == 310){		player.y += 4;		player.x += 1; }
	else if(player.rotation == 315){		player.y += 4;		player.x += 1; }
	else if(player.rotation == 320){		player.y += 4;		player.x += 1; }
	else if(player.rotation == 325){		player.y += 4;		player.x += 1; }
	else if(player.rotation == 330){		player.y += 4;		player.x += 1; }
	else if(player.rotation == 335){		player.y += 4;		player.x += 1; }
	else if(player.rotation == 340){		player.y += 4;		player.x += 1; }
	else if(player.rotation == 345){		player.y += 4;		player.x += 1; }
	else if(player.rotation == 350){		player.y += 4;		player.x += 1; }
	else if(player.rotation == 355){		player.y += 4;		player.x += 1; }

	else if(player.rotation == 5){			player.y += 4;		player.x -= 1; }
	else if(player.rotation == 10){			player.y += 4;		player.x -= 1; }
	else if(player.rotation == 15){			player.y += 4;		player.x -= 1; }
	else if(player.rotation == 20){			player.y += 4;		player.x -= 1; }
	else if(player.rotation == 25){			player.y += 4;		player.x -= 1; }
	else if(player.rotation == 30){			player.y += 4;		player.x -= 1; }
	else if(player.rotation == 35){			player.y += 4;		player.x -= 1; }
	else if(player.rotation == 40){			player.y += 4;		player.x -= 1; }
	else if(player.rotation == 45){			player.y += 4;		player.x -= 1; }
	else if(player.rotation == 50){			player.y += 4;		player.x -= 1; }
	else if(player.rotation == 55){			player.y += 4;		player.x -= 1; }
	else if(player.rotation == 60){			player.y += 4;		player.x -= 1; }
	else if(player.rotation == 65){			player.y += 4;		player.x -= 1; }
	else if(player.rotation == 70){			player.y += 4;		player.x -= 1; }
	else if(player.rotation == 75){			player.y += 4;		player.x -= 1; }
	else if(player.rotation == 80){			player.y += 4;		player.x -= 1; }
	else if(player.rotation == 85){			player.y += 4;		player.x -= 1; }

	else if(player.rotation == 95){			player.y -= 4;		player.x -= 1; }
	else if(player.rotation == 100){		player.y -= 4;		player.x -= 1; }
	else if(player.rotation == 105){		player.y -= 4;		player.x -= 1; }
	else if(player.rotation == 110){		player.y -= 4;		player.x -= 1; }
	else if(player.rotation == 115){		player.y -= 4;		player.x -= 1; }
	else if(player.rotation == 120){		player.y -= 4;		player.x -= 1; }
	else if(player.rotation == 125){		player.y -= 4;		player.x -= 1; }
	else if(player.rotation == 130){		player.y -= 4;		player.x -= 1; }
	else if(player.rotation == 135){		player.y -= 4;		player.x -= 1; }
	else if(player.rotation == 140){		player.y -= 4;		player.x -= 1; }
	else if(player.rotation == 145){		player.y -= 4;		player.x -= 1; }
	else if(player.rotation == 150){		player.y -= 4;		player.x -= 1; }
	else if(player.rotation == 155){		player.y -= 4;		player.x -= 1; }
	else if(player.rotation == 160){		player.y -= 4;		player.x -= 1; }
	else if(player.rotation == 165){		player.y -= 4;		player.x -= 1; }
	else if(player.rotation == 170){		player.y -= 4;		player.x -= 1; }
	else if(player.rotation == 175){		player.y -= 4;		player.x -= 1; }

	else if(player.rotation == 185){		player.y -= 4;		player.x += 1; }
	else if(player.rotation == 190){		player.y -= 4;		player.x += 1; }
	else if(player.rotation == 195){		player.y -= 4;		player.x += 1; }
	else if(player.rotation == 200){		player.y -= 4;		player.x += 1; }
	else if(player.rotation == 205){		player.y -= 4;		player.x += 1; }
	else if(player.rotation == 210){		player.y -= 4;		player.x += 1; }
	else if(player.rotation == 215){		player.y -= 4;		player.x += 1; }
	else if(player.rotation == 220){		player.y -= 4;		player.x += 1; }
	else if(player.rotation == 225){		player.y -= 4;		player.x += 1; }
	else if(player.rotation == 230){		player.y -= 4;		player.x += 1; }
	else if(player.rotation == 235){		player.y -= 4;		player.x += 1; }
	else if(player.rotation == 240){		player.y -= 4;		player.x += 1; }
	else if(player.rotation == 245){		player.y -= 4;		player.x += 1; }
	else if(player.rotation == 250){		player.y -= 4;		player.x += 1; }
	else if(player.rotation == 255){		player.y -= 4;		player.x += 1; }
	else if(player.rotation == 260){		player.y -= 4;		player.x += 1; }
	else if(player.rotation == 265){		player.y -= 4;		player.x += 1; }
}