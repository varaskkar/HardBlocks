function movementPlayer(){
	if(keyPressed[formatKey("UP")]){
		if(player.rotation == 0 || player.rotation == 360)	player.y -= 4;
		else if(player.rotation == 90)						player.x += 4;
		else if(player.rotation == 180)						player.y += 4;
		else if(player.rotation == 270)						player.x -= 4;

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
	}
	if(keyPressed[formatKey("DOWN")]){
		// Put player's acceleration -> Give more speed
	}
	if(keyPressed[formatKey("LEFT")]){
		player.rotation -= 5;
	}
	if(keyPressed[formatKey("RIGHT")]){
		player.rotation += 5;
	}
}

// If player collides, we invert the movement (change of sign)
function movementBackPlayer(){
	if(player.rotation == 0 || player.rotation == 360)	player.y += 4;
	else if(player.rotation == 90)						player.x -= 4;
	else if(player.rotation == 180)						player.y -= 4;
	else if(player.rotation == 270)						player.x += 4;

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

function movementEnemy(){
	for(i in enemy){
		if(enemy[i].life > 0){
			if(enemy[i].movement == "horizontal")
				enemy[i].x += (enemy[i].toggleDirection) ? +_SpeedEnemy : -_SpeedEnemy;
			else if(enemy[i].movement == "vertical")
				enemy[i].y += (enemy[i].toggleDirection) ? +_SpeedEnemy : -_SpeedEnemy;
			else if(enemy[i].movement == "random"){
				switch(enemy[i].direction){
				    case "up":
				        enemy[i].y -= _SpeedEnemy;
				        break;
				    case "down":
				        enemy[i].y += _SpeedEnemy;
				        break;
				    case "left":
				        enemy[i].x -= _SpeedEnemy;
				        break;
				    case "right":
				        enemy[i].x += _SpeedEnemy;
				        break;
				}

				// If enemy have traveled the map's middle, change his direction
				enemy[i].distanceTraveled += _SpeedEnemy;

				if(enemy[i].distanceTraveled >= canvas.width/3){
					enemy[i].direction = parseDirectionEnemy(i);
					enemy[i].distanceTraveled = 0;
				}
			}else if(enemy[i].movement == "chaseHor"){

				// If player is down of enemy and player is between a space
				// if(player.y >= enemy[i].y && player.y <= enemy[i].y+100){
				if(player.y <= enemy[i].y+100 && player.y >= enemy[i].y-100){
					if(enemy[i].x < player.x){
						if(enemy[i].acceleration < _SpeedEnemy*1.2)
							enemy[i].acceleration += 1;
						else
							enemy[i].acceleration -= 1;
						enemy[i].x += enemy[i].acceleration;
						enemy[i].direction = "right";
					}else if(enemy[i].x > player.x){
						if(enemy[i].acceleration < _SpeedEnemy*1.2)
							enemy[i].acceleration += 1;
						else
							enemy[i].acceleration -= 1;
						enemy[i].x -= enemy[i].acceleration;
						enemy[i].direction = "left";
					}else{
						if(enemy[i].acceleration > 0)
							enemy[i].acceleration -= 1;
					}
				}
			}
		}
	}
}

function movementBackEnemy(index, elementOfColissionX){
	if(enemy[index].movement == "horizontal")
		enemy[index].x += (enemy[index].toggleDirection) ? -15 : +15;
	else if(enemy[index].movement == "vertical")
		enemy[index].y += (enemy[index].toggleDirection) ? -15 : +15;
	else if(enemy[index].movement == "random"){
		switch(enemy[index].direction) {
		    case "up":
		        enemy[index].y += 15;
		        break;
		    case "down":
		        enemy[index].y -= 15;
		        break;
		    case "left":
		        enemy[index].x += 15;
		        break;
		    case "right":
		        enemy[index].x -= 15;
		        break;
		}
	}else if(enemy[index].movement == "chaseHor"){
		switch(enemy[index].direction) {
			case "left":
				enemy[index].x = elementOfColissionX + _SizeBlock;
				break;
			case "right":
				enemy[index].x = elementOfColissionX - _SizeBlock;
				break;
		}
	}
}

// When the enemy collides with a block, he change of direction depending on the previous direction
function parseDirectionEnemy(index){
	var newDirection = "right";
	if(enemy[index].movement == "horizontal" || enemy[index].movement == "vertical"){
		enemy[index].toggleDirection = !enemy[index].toggleDirection;
	}else if(enemy[index].movement == "random"){
		var previousDirection = enemy[index].direction;
		do{
			var rn = random(4);
			if(rn == 0)			newDirection = "up";
			else if(rn == 1)	newDirection = "down";
			else if(rn == 2)	newDirection = "left";
			else if(rn == 3)	newDirection = "right";
		}while(previousDirection == newDirection);
	}
	return newDirection;
}











