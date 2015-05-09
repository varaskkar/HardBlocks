function collisionPlayer(){

	// Player -> CanvasEdge
	if(player.x > canvas.width - player.width)				player.x = canvas.width - player.width;
	else if(player.y > canvas.height - player.height)		player.y = canvas.height - player.height;
	else if(player.x <= 0)									player.x = 0;
	else if(player.y <= 0)									player.y = 0;
	// if(player.x > canvas.width - player.width)			movementBackPlayer();
	// else if(player.y > canvas.height - player.height)	movementBackPlayer();
	// else if(player.x <= 0)								movementBackPlayer();
	// else if(player.y <= 0)								movementBackPlayer();

	// Player -> BlockBrown
	for(i in blockBrown){
		if(player.collide(blockBrown[i]))
			movementBackPlayer();
	}

	// Player -> BlockGray
	for(i in blockGray){
		if(player.collide(blockGray[i]))
			movementBackPlayer();
	}

	// Player -> BlockWhite
	for(i in blockWhiteVert){
		if(player.collide(blockWhiteVert[i]))
			movementBackPlayer();
	}
	for(i in blockWhiteHor){
		if(player.collide(blockWhiteHor[i]))
			movementBackPlayer();
	}

	// Player -> life
	if(player.collide(life)){
  		player.life++;
  		loadSound(sGetLife);
  		life.x = random(canvas.width - 10);
  		life.y = random(canvas.height - 10);
 	}

	// Player -> fire
	for(i in fire){
		if(player.collide(fire[i]) && player.timeProtected < 1){
			// In the last life, not hear the sound of lose it, otherwise the sound of GameOver
			if(player.life != 1)
				loadSound(sLoseLife);
			player.timeProtected = _TimeProtected;
			player.life--;
		}
	}

	// Player -> PortalInput
	for(i in portalInput){
		if(player.collide(portalInput[i]) && !portalInputCrossed){
	 		if(player.timeChangeLevel == 0){
				player.timeChangeLevel = _TimeChangeLevel;
				loadSound(sPortalInput);
			}else if(player.timeChangeLevel == 1){
				if(currentMap == "map_1"){
					makeBackupMap("map_1");
					loadMap("map_2", 32, 212, 90);
					// loadMap("map_2", 352, 32, 180);			Animated gif of Github
					loadBackupMap("map_2");
				}else if(currentMap == "map_2"){
					makeBackupMap("map_2");
					loadMap("map_1", 532, 62, 180);
					// loadMap("map_1", 511, 82, 270);			Animated gif of Github
					loadBackupMap("map_1");
				}else if(currentMap == "map_3"){
					// loadMap("map_3", 512, 32, 270);
					setPositionPlayer(512, 32, 270);
					// setTimeout(function(){
					// 	setPositionPlayer(512, 32, 270);
					// }, 1);
				}
				portalInputCrossed = true;
				loadSound(sPortalOutput);
			}else{
				if(currentMap == "map1"){
					if(player.timeChangeLevel == 150)		templateSetBackgroundColor(mapList[0].colorBackground);
					else if(player.timeChangeLevel == 140)	templateSetBackgroundColor("#011123");
					else if(player.timeChangeLevel == 130)	templateSetBackgroundColor("#011122");
					else if(player.timeChangeLevel == 120)	templateSetBackgroundColor("#011021");
					else if(player.timeChangeLevel == 110)	templateSetBackgroundColor("#01101f");
					else if(player.timeChangeLevel == 100)	templateSetBackgroundColor("#010f1e");
					else if(player.timeChangeLevel == 90)	templateSetBackgroundColor("#010e1d");
					else if(player.timeChangeLevel == 80)	templateSetBackgroundColor("#010e1c");
					else if(player.timeChangeLevel == 70)	templateSetBackgroundColor("#010d1b");
					else if(player.timeChangeLevel == 60)	templateSetBackgroundColor("#010d1a");
					else if(player.timeChangeLevel == 50)	templateSetBackgroundColor("#010c18");
					else if(player.timeChangeLevel == 40)	templateSetBackgroundColor("#010c17");
					else if(player.timeChangeLevel == 30)	templateSetBackgroundColor("#010b16");
					else if(player.timeChangeLevel == 20)	templateSetBackgroundColor(mapList[1].colorBackground);
					else if(player.timeChangeLevel == 10)	templateSetBackgroundColor(mapList[1].colorBackground);
				}else if(currentMap == "map2"){
					if(player.timeChangeLevel == 150)		templateSetBackgroundColor(mapList[1].colorBackground);
					else if(player.timeChangeLevel == 140)	templateSetBackgroundColor("#010b16");
					else if(player.timeChangeLevel == 130)	templateSetBackgroundColor("#010c17");
					else if(player.timeChangeLevel == 120)	templateSetBackgroundColor("#010c18");
					else if(player.timeChangeLevel == 110)	templateSetBackgroundColor("#010d1a");
					else if(player.timeChangeLevel == 100)	templateSetBackgroundColor("#010d1b");
					else if(player.timeChangeLevel == 90)	templateSetBackgroundColor("#010e1c");
					else if(player.timeChangeLevel == 80)	templateSetBackgroundColor("#010e1d");
					else if(player.timeChangeLevel == 70)	templateSetBackgroundColor("#010f1e");
					else if(player.timeChangeLevel == 60)	templateSetBackgroundColor("#01101f");
					else if(player.timeChangeLevel == 50)	templateSetBackgroundColor("#011021");
					else if(player.timeChangeLevel == 40)	templateSetBackgroundColor("#011122");
					else if(player.timeChangeLevel == 30)	templateSetBackgroundColor("#011123");
					else if(player.timeChangeLevel == 20)	templateSetBackgroundColor(mapList[0].colorBackground);
					else if(player.timeChangeLevel == 10)	templateSetBackgroundColor(mapList[0].colorBackground);
				}
			}
		}else{
			// When you've croosed the portal, avoid return automaticaly to portal before
			// There is move player in 4 directions outside the portal
			setTimeout(function(){
				if(player.timeChangeLevel == 1){
					if(currentMap == "map1")
						templateSetBackgroundColor(mapList[0].colorBackground);
					else if(currentMap == "map2")
						templateSetBackgroundColor(mapList[1].colorBackground);
				}

				if(portalInput[0].x + 50 < player.x || portalInput[0].x - 50 > player.x ||
				   portalInput[0].y + 50 < player.y || portalInput[0].y - 50 > player.y){

					portalInputCrossed = false;
					// console.log("Yes");
				}
				// else
				// 	console.log("No");
			}, 250);
		}
	}

	// Player -> PortalOutput
	for(i in portalOutput){
		if(player.collide(portalOutput[i]) && !portalOutputCrossed){
	 		if(player.timeChangeLevel == 0){
				player.timeChangeLevel = _TimeChangeLevel;
				loadSound(sPortalInput);
			}else if(player.timeChangeLevel == 1){
				if(currentMap == "map3"){
					setPositionPlayer(32, 272, 90);
				}
				portalOutputCrossed = true;
				loadSound(sPortalOutput);
			}
		}else{
			setTimeout(function(){
				if(portalOutput[0].x + 50 < player.x || portalOutput[0].x - 50 > player.x || portalOutput[0].y + 50 < player.y || portalOutput[0].y - 50 > player.y){
					portalOutputCrossed = false;
				}
			}, 250);
		}
	}

	// Player -> Home
	for(i in home){
		if(player.collide(home[i])){
			// Recover life and munition
			if(player.munitionWeapon2 <= 0 && player.timeRechargeHome == 0){
				player.timeRechargeHome = _TimeRechargeHome;

				player.munitionWeapon2 = _MunitionWeapon2;
				loadSound(sHome);
			}
		}
	}

	// Player -> Enemy
	for(i in enemy){
		if(player.collide(enemy[i]) && player.timeProtected < 1){
			// In the last life, not hear the sound of lose it, otherwise the sound of GameOver
			if(player.life != 1)
				loadSound(sLoseLife);
			player.timeProtected = _TimeProtected;
			player.life--;
		}
	}
}

function collisionEnemy(){

	for(i in enemy){

		// Enemy -> CanvasEdge
		if(enemy[i].x >= canvas.width - enemy[i].width){
			movementBackEnemy(i);
			enemy[i].direction = parseDirectionEnemy(i);
		}else if(enemy[i].x <= 0){
			movementBackEnemy(i);
			enemy[i].direction = parseDirectionEnemy(i);
		}else if(enemy[i].y >= canvas.height - enemy[i].height){
			movementBackEnemy(i);
			enemy[i].direction = parseDirectionEnemy(i);
		}else if(enemy[i].y <= 0){
			movementBackEnemy(i);
			enemy[i].direction = parseDirectionEnemy(i);
		}

		// Enemy -> BlockBrown
		for(j in blockBrown){
			if(enemy[i].collide(blockBrown[j])){
				if(enemy[i].life > 0){
					movementBackEnemy(i);
					enemy[i].direction = parseDirectionEnemy(i);
				}else
					blockBrown[j].life -= _DamageWeapon;
			}
		}

		// Enemy -> BlockGray
		for(j in blockGray){
			if(enemy[i].collide(blockGray[j])){
				movementBackEnemy(i);
				enemy[i].direction = parseDirectionEnemy(i);
			}
		}

		// Enemy -> blockWhite
		for(j in blockWhiteVert){
			if(enemy[i].collide(blockWhiteVert[j])){
				movementBackEnemy(i);
				enemy[i].direction = parseDirectionEnemy(i);
			}
		}
		for(j in blockWhiteHor){
			if(enemy[i].collide(blockWhiteHor[j])){
				movementBackEnemy(i);
				enemy[i].direction = parseDirectionEnemy(i);
			}
		}

		// Enemy -> fire
		for(j in fire){
			if(enemy[i].collide(fire[j])){
				movementBackEnemy(i);
				enemy[i].direction = parseDirectionEnemy(i);
			}
		}

		// Enemy -> Portal
		for(j in portalInput){
			if(enemy[i].collide(portalInput[j])){
				movementBackEnemy(i);
				enemy[i].direction = parseDirectionEnemy(i);
			}
		}
		for(j in portalOutput){
			if(enemy[i].collide(portalOutput[j])){
				movementBackEnemy(i);
				enemy[i].direction = parseDirectionEnemy(i);
			}
		}

		// Enemy -> Home
		for(j in home){
			if(enemy[i].collide(home[j])){
				movementBackEnemy(i);
				enemy[i].direction = parseDirectionEnemy(i);
			}
		}

		// Enemy -> Enemy
		for(j in enemy){
			// "i != j" avoid that the enemy collides with itself
			if(enemy[i].collide(enemy[j]) && i != j)
				enemy[i].direction = parseDirectionEnemy(i);
		}
	}
}

function collisionLife(){

	if(typeof life != "undefined"){

		// life -> fire
		for(i in fire){
			if(life.collide(fire[i])){
	  			life.x = random(canvas.width - 10);
	  			life.y = random(canvas.height - 10);
			}
		}

		// life -> BloqueBlanco
		for(i in blockWhiteVert){
			if(life.collide(blockWhiteVert[i])){
	  			life.x = random(canvas.width - 10);
	  			life.y = random(canvas.height - 10);
			}
		}
		for(i in blockWhiteHor){
			if(life.collide(blockWhiteHor[i])){
	  			life.x = random(canvas.width - 10);
	  			life.y = random(canvas.height - 10);
			}
		}

		// life -> BlockBrown
		for(i in blockBrown){
			if(life.collide(blockBrown[i])){
	  			life.x = random(canvas.width - 10);
	  			life.y = random(canvas.height - 10);
			}
		}

		// life -> BlockGray
		for(i in blockGray){
			if(life.collide(blockGray[i])){
	  			life.x = random(canvas.width - 10);
	  			life.y = random(canvas.height - 10);
			}
		}

		// life -> Portal
		for(i in portalInput){
			if(life.collide(portalInput[i])){
	  			life.x = random(canvas.width - 10);
	  			life.y = random(canvas.height - 10);
			}
		}
		for(i in portalOutput){
			if(life.collide(portalOutput[i])){
	  			life.x = random(canvas.width - 10);
	  			life.y = random(canvas.height - 10);
			}
		}

		// life -> Enemy
		for(i in enemy){
			if(life.collide(enemy[i])){
	  			life.x = random(canvas.width - 10);
	  			life.y = random(canvas.height - 10);
			}
		}

		// life -> Home
		for(i in home){
			if(life.collide(home[i])){
	  			life.x = random(canvas.width - 10);
	  			life.y = random(canvas.height - 10);
			}
		}
	}
}

function collisionBullets1(){
	for(i in bullets1){

		// Bullets1 -> BlockBrown
		for(j in blockBrown){
			if(bullets1[i].collide(blockBrown[j])){
	  			player.score += _PointsBlock;
				bullets1.splice(i,1);

				if(blockBrown[j].life > 0)
					blockBrown[j].life -= _DamageWeapon;
				else
					blockBrown.splice(j,1);

				templateSetLightEfects(true);
			}
		}

		// Bullets1 -> BlockGray
		for(j in blockGray){
			if(bullets1[i].collide(blockGray[j])){
	  			bullets1.splice(i,1);
 			}
		}

		// Bullets1 -> fire
		for(j in fire){
			if(bullets1[i].collide(fire[j])){
	  			bullets1.splice(i,1);
	  			templateSetLightEfects(true);
 			}
		}

		// Bullets1 -> BlockWhite
		for(j in blockWhiteVert){
	  		if(bullets1[i].collide(blockWhiteVert[j])){
	  			if(bullets1[i].maxRebounds < _MaxRebounds){
	  				// bullets1[i].velY = -bullets1[i].velY;
	  				bullets1[i].velY *= -1;
	  				bullets1[i].maxRebounds++;
	  				loadSound(sRebounds);
	  			}else
					bullets1.splice(i,1);
			}
		}
		for(j in blockWhiteHor){
	  		if(bullets1[i].collide(blockWhiteHor[j])){
	  			if(bullets1[i].maxRebounds < _MaxRebounds){
	  				// bullets1[i].velX = -bullets1[i].velX;
	  				bullets1[i].velX *= -1;
	  				bullets1[i].maxRebounds++;
	  				loadSound(sRebounds);
				}else
					bullets1.splice(i,1);
			}
		}

		// Bullets1 -> life
		if(bullets1[i].collide(life)){
			player.life++;
			loadSound(sGetLife);
	  		life.x = random(canvas.width - 10);
	  		life.y = random(canvas.height - 10);
		}

		// Bullets1 -> Portal
		for(j in portalInput){
			if(bullets1[i].collide(portalInput[j])){
		  		bullets1.splice(i,1);
		  		templateSetLightEfects(true);
			}
		}
		for(j in portalOutput){
			if(bullets1[i].collide(portalOutput[j])){
		  		bullets1.splice(i,1);
		  		templateSetLightEfects(true);
			}
		}

		// Bullets1 -> Enemy
		for(j in enemy){
			if(bullets1[i].collide(enemy[j])){
				player.score += _PointsTouchEnemy;
	  			bullets1.splice(i,1);

	  			if(enemy[j].life > 0)
					enemy[j].life -= _DamageWeapon;
				else{
					loadSound(sExplosion);
					player.score += _PointsEnemy;
				}
				enemy[j].timeShowDamage = _TimeShowDamagedEnemy;

	  			templateSetLightEfects(true);
 			}
		}
	}
}

function collisionBullets2(){
	for(i in bullets2){

		// Bullets2 -> BlockBrown
		for(j in blockBrown){
			if(bullets2[i].collide(blockBrown[j])){
	  			player.score += _PointsBlock;
				bullets2.splice(i,1);

				if(blockBrown[j].life <= 0)
					blockBrown.splice(j,1);
				else
					blockBrown[j].life -= _DamageWeapon;

				templateSetLightEfects(true);
			}
		}

		// Bullets1 -> BlockGray
		for(j in blockGray){
			if(bullets2[i].collide(blockGray[j])){
	  			bullets2.splice(i,1);
 			}
		}

		// Bullets2 -> BlockWhite
		for(j in blockWhiteVert){
	  		if(bullets2[i].collide(blockWhiteVert[j])){
	  			if(bullets2[i].maxRebounds < _MaxRebounds){
	  				bullets2[i].velY *= -1;
	  				bullets2[i].maxRebounds++;
	  				loadSound(sRebounds);
	  			}else
					bullets2.splice(i,1);
			}
		}
		for(j in blockWhiteHor){
	  		if(bullets2[i].collide(blockWhiteHor[j])){
	  			if(bullets2[i].maxRebounds < _MaxRebounds){
	  				bullets2[i].velX *= -1;
	  				bullets2[i].maxRebounds++;
	  				loadSound(sRebounds);
				}else
					bullets2.splice(i,1);
			}
		}

		// Bullets2 -> life
		if(bullets2[i].collide(life)){
			player.life++;
			loadSound(sGetLife);
	  		life.x = random(canvas.width - 10);
	  		life.y = random(canvas.height - 10);
		}

		// Bullets2 ->Portal
		for(j in portalInput){
			if(bullets2[i].collide(portalInput[j])){
		  		bullets2.splice(i,1);
		  		templateSetLightEfects(true);
			}
		}
		for(j in portalOutput){
			if(bullets2[i].collide(portalOutput[j])){
		  		bullets2.splice(i,1);
		  		templateSetLightEfects(true);
			}
		}

		// Bullets2 -> fire
		for(j in fire){
			if(bullets2[i].collide(fire[j])){
	  			bullets2.splice(i,1);
	  			templateSetLightEfects(true);
 			}
		}

		// Bullets2 -> Enemy
		for(j in enemy){
			if(bullets2[i].collide(enemy[j])){
				player.score += _PointsTouchEnemy;
	  			bullets2.splice(i,1);

	  			if(enemy[j].life > 0)
					enemy[j].life -= _DamageWeapon;
				else{
					loadSound(sExplosion);
					player.score += _PointsEnemy;
				}
				enemy[j].timeShowDamage = _TimeShowDamagedEnemy;

	  			templateSetLightEfects(true);
 			}
		}
	}
}





