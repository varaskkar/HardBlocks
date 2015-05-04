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

function movementEnemy(kindMovement){
	for(i in enemy){
		if(enemy[i].life > 0){
			if(kindMovement == "horizontal")
				enemy[i].x += (enemy[i].toggleDirection) ? +_SpeedEnemy : -_SpeedEnemy;
			else if(kindMovement == "vertical")
				enemy[i].y += (enemy[i].toggleDirection) ? +_SpeedEnemy : -_SpeedEnemy;
			else if(kindMovement == "random"){
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

				if(enemy[i].distanceTraveled >= canvas.width/2){
					enemy[i].direction = parseDirectionEnemy();
					enemy[i].distanceTraveled = 0;
				}
			}
		}
	}
}

function movementBackEnemy(){
	for(i in enemy){
		if(kindMovementEnemy == "horizontal")
			enemy[i].x += (enemy[i].toggleDirection == true) ? -15 : +15;
		else if(kindMovementEnemy == "vertical")
			enemy[i].y += (enemy[i].toggleDirection == true) ? -15 : +15;
		else if(kindMovementEnemy == "random"){
			switch(enemy[i].direction) {
			    case "up":
			        enemy[i].y += 15;
			        break;
			    case "down":
			        enemy[i].y -= 15;
			        break;
			    case "left":
			        enemy[i].x += 15;
			        break;
			    case "right":
			        enemy[i].x -= 15;
			        break;
			}
		}
	}
}

// When the enemy collides with a block, he change of direction depending on the previous direction
function parseDirectionEnemy(){
	var newDirection = "right";
	if(kindMovementEnemy == "horizontal" || kindMovementEnemy == "vertical"){
		for(i in enemy)
			enemy[i].toggleDirection = !enemy[i].toggleDirection;
	}else if(kindMovementEnemy == "random"){
		var previousDirection = enemy[i].direction;
		if(previousDirection != newDirection){
			var rn = random(4);
			if(rn == 0)			newDirection = "up";
			else if(rn == 1)	newDirection = "down";
			else if(rn == 2)	newDirection = "left";
			else if(rn == 3)	newDirection = "right";
		}else{
			while(previousDirection == newDirection){
				var rn = random(4);
				if(rn == 0)			newDirection = "up";
				else if(rn == 1)	newDirection = "down";
				else if(rn == 2)	newDirection = "left";
				else if(rn == 3)	newDirection = "right";
			}
		}
	}
	return newDirection;
}











