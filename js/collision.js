console.log("Lib 'Collision' loaded");

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
  		player.health = _HealthPlayer;
  		player.score += _PointsGetLife;
  		loadSound(sGetLife);
  		life.x = random(canvas.width - 10);
  		life.y = random(canvas.height - 10);
 	}

	// Player -> fire
	for(i in fire){
		if(player.collide(fire[i]) && player.timeProtected < 1){
			if(damage){
				player.timeProtected = _TimeProtected;
				player.health--;
			}
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
			if( (player.health < _HealthPlayer || player.munition2 < _MunitionWeapon2) && player.timeRechargeHome == 0){
				player.timeRechargeHome = _TimeRechargeHome;
				player.health           = _HealthPlayer;
				player.munition2        = _MunitionWeapon2;
				loadSound(sHome);
			}
		}
	}

	// Player -> Enemy
	for(i in enemy){
		if(player.collide(enemy[i]) && player.timeProtected < 1){
			if(damage){
				// player.timeProtected = _TimeProtected;
				player.health--;
			}
		}
	}
}

function collisionEnemy(){

	for(i in enemy){

		// Enemy -> CanvasEdge
		if(enemy[i].x >= canvas.width - enemy[i].width){
			movementBackEnemy(i, canvas.width);
			enemy[i].direction = parseDirectionEnemy(i);
		}else if(enemy[i].x <= 0){
			movementBackEnemy(i, 0);
			enemy[i].direction = parseDirectionEnemy(i);
		}else if(enemy[i].y >= canvas.height - enemy[i].height){
			movementBackEnemy(i, canvas.height);
			enemy[i].direction = parseDirectionEnemy(i);
		}else if(enemy[i].y <= 0){
			movementBackEnemy(i, 0);
			enemy[i].direction = parseDirectionEnemy(i);
		}

		// Enemy -> BlockBrown
		for(j in blockBrown){
			if(enemy[i].collide(blockBrown[j])){
				if(enemy[i].life > 0){
					movementBackEnemy(i, blockBrown[j].x);
					enemy[i].direction = parseDirectionEnemy(i);
				}else{
					blockBrown[j].life -= _DamageExplosionEnemy;
					player.score += _PointsKillBlock;
				}
			}
		}

		// Enemy -> BlockGray
		for(j in blockGray){
			if(enemy[i].collide(blockGray[j])){
				movementBackEnemy(i, blockGray[j].x);
				enemy[i].direction = parseDirectionEnemy(i);
			}
		}

		// Enemy -> blockWhite
		for(j in blockWhiteVert){
			if(enemy[i].collide(blockWhiteVert[j])){
				movementBackEnemy(i, blockWhiteVert[j].x);
				enemy[i].direction = parseDirectionEnemy(i);
			}
		}
		for(j in blockWhiteHor){
			if(enemy[i].collide(blockWhiteHor[j])){
				movementBackEnemy(i, blockWhiteHor[j].x);
				enemy[i].direction = parseDirectionEnemy(i);
			}
		}

		// Enemy -> fire
		for(j in fire){
			if(enemy[i].collide(fire[j])){
				movementBackEnemy(i, fire[j].x);
				enemy[i].direction = parseDirectionEnemy(i);
			}
		}

		// Enemy -> Portal
		for(j in portalInput){
			if(enemy[i].collide(portalInput[j])){
				movementBackEnemy(i, portalInput[j].x);
				enemy[i].direction = parseDirectionEnemy(i);
			}
		}
		for(j in portalOutput){
			if(enemy[i].collide(portalOutput[j])){
				movementBackEnemy(i, portalOutput[j].x);
				enemy[i].direction = parseDirectionEnemy(i);
			}
		}

		// Enemy -> Home
		for(j in home){
			if(enemy[i].collide(home[j])){
				movementBackEnemy(i, home[j].x);
				enemy[i].direction = parseDirectionEnemy(i);
			}
		}

		// Enemy -> Enemy
		for(j in enemy){
			// "i != j" avoid that the enemy collides with itself
			if(enemy[i].collide(enemy[j]) && i != j){
				if(enemy[i].life > 0)
					enemy[i].direction = parseDirectionEnemy(i);
				else{
					enemy[j].life -= _DamageExplosionEnemy;
					player.score += _PointsKillEnemy;
				}
			}
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
	for(i in player.bullets1){

		// Bullets1 -> BlockBrown
		for(j in blockBrown){
			if(typeof player.bullets1[i] != "undefined"){
				if(player.bullets1[i].collide(blockBrown[j])){
		  			player.score += _PointsTouchBlock;
					player.bullets1.splice(i,1);

					if(blockBrown[j].life > 0)
						blockBrown[j].life -= _DamageWeapon1;
					else
						blockBrown.splice(j,1);

					templateSetLightEfects(true);
				}
			}
		}

		// Bullets1 -> BlockGray
		for(j in blockGray){
			if(typeof player.bullets1[i] != "undefined"){
				if(player.bullets1[i].collide(blockGray[j]))
		  			player.bullets1.splice(i,1);
 			}
		}

		// Bullets1 -> fire
		for(j in fire){
			if(typeof player.bullets1[i] != "undefined"){
				if(player.bullets1[i].collide(fire[j])){
		  			player.bullets1.splice(i,1);
		  			templateSetLightEfects(true);
	 			}
	 		}
		}

		// Bullets1 -> BlockWhite
		for(j in blockWhiteVert){
			if(typeof player.bullets1[i] != "undefined"){
		  		if(player.bullets1[i].collide(blockWhiteVert[j])){
		  			if(player.bullets1[i].maxRebounds < _MaxRebounds){
		  				// player.bullets1[i].velY = -player.bullets1[i].velY;
		  				player.bullets1[i].velY *= -1;
		  				player.bullets1[i].maxRebounds++;
		  				loadSound(sRebounds);
		  			}else
						player.bullets1.splice(i,1);
				}
			}
		}
		for(j in blockWhiteHor){
			if(typeof player.bullets1[i] != "undefined"){
		  		if(player.bullets1[i].collide(blockWhiteHor[j])){
		  			if(player.bullets1[i].maxRebounds < _MaxRebounds){
		  				// player.bullets1[i].velX = -player.bullets1[i].velX;
		  				player.bullets1[i].velX *= -1;
		  				player.bullets1[i].maxRebounds++;
		  				loadSound(sRebounds);
					}else
						player.bullets1.splice(i,1);
				}
			}
		}

		// Bullets1 -> life
		if(typeof player.bullets1[i] != "undefined"){
			if(player.bullets1[i].collide(life)){
				player.life++;
				player.health = _HealthPlayer;
				loadSound(sGetLife);
		  		life.x = random(canvas.width - 10);
		  		life.y = random(canvas.height - 10);
			}
		}

		// Bullets1 -> Portal
		for(j in portalInput){
			if(typeof player.bullets1[i] != "undefined"){
				if(player.bullets1[i].collide(portalInput[j]))
			  		player.bullets1.splice(i,1);
			}
		}
		for(j in portalOutput){
			if(typeof player.bullets1[i] != "undefined"){
				if(player.bullets1[i].collide(portalOutput[j]))
			  		player.bullets1.splice(i,1);
			}
		}

		// Bullets1 -> Enemy
		for(j in enemy){
			if(typeof player.bullets1[i] != "undefined"){
				if(player.bullets1[i].collide(enemy[j])){
					player.score += _PointsTouchEnemy;
		  			player.bullets1.splice(i,1);

		  			if(enemy[j].life > 0)
						enemy[j].life -= _DamageWeapon1;
					else{
						player.score += _PointsKillEnemy;
						enemy[j].showExplosionBullet3 = true;
					}
					enemy[j].timeShowDamage = _TimeShowDamagedEnemy;

		  			templateSetLightEfects(true);
	 			}
	 		}
		}

		// Bullets1 -> BulletsEnemy
		for(j in enemy){
			for(k in enemy[j].bullets){
				if(typeof player.bullets1[i] != "undefined"){
					if(player.bullets1[i].collide(enemy[j].bullets[k])){
						enemy[j].bullets.splice(k, 1);
						player.bullets1.splice(i, 1);
					}
				}
			}
		}
	}
}

function collisionBullets2(){
	for(i in player.bullets2){

		// Bullets2 -> BlockBrown
		for(j in blockBrown){
			if(typeof player.bullets2[i] != "undefined"){
				if(player.bullets2[i].collide(blockBrown[j])){
		  			player.score += _PointsTouchBlock;
					player.bullets2.splice(i,1);

					if(blockBrown[j].life <= 0)
						blockBrown.splice(j,1);
					else
						blockBrown[j].life -= _DamageWeapon2;

					templateSetLightEfects(true);
				}
			}
		}

		// Bullets2 -> BlockGray
		for(j in blockGray){
			if(typeof player.bullets2[i] != "undefined"){
				if(player.bullets2[i].collide(blockGray[j]))
		  			player.bullets2.splice(i,1);
 			}
		}

		// Bullets2 -> BlockWhite
		for(j in blockWhiteVert){
			if(typeof player.bullets2[i] != "undefined"){
		  		if(player.bullets2[i].collide(blockWhiteVert[j])){
		  			if(player.bullets2[i].maxRebounds < _MaxRebounds){
		  				player.bullets2[i].velY *= -1;
		  				player.bullets2[i].maxRebounds++;
		  				loadSound(sRebounds);
		  			}else
						player.bullets2.splice(i,1);
				}
			}
		}
		for(j in blockWhiteHor){
			if(typeof player.bullets2[i] != "undefined"){
		  		if(player.bullets2[i].collide(blockWhiteHor[j])){
		  			if(player.bullets2[i].maxRebounds < _MaxRebounds){
		  				player.bullets2[i].velX *= -1;
		  				player.bullets2[i].maxRebounds++;
		  				loadSound(sRebounds);
					}else
						player.bullets2.splice(i,1);
				}
			}
		}

		// Bullets2 -> life
		if(typeof player.bullets2[i] != "undefined"){
			if(player.bullets2[i].collide(life)){
				player.life++;
				player.health = _HealthPlayer;
				loadSound(sGetLife);
		  		life.x = random(canvas.width - 10);
		  		life.y = random(canvas.height - 10);
			}
		}

		// Bullets2 -> Portal
		for(j in portalInput){
			if(typeof player.bullets2[i] != "undefined"){
				if(player.bullets2[i].collide(portalInput[j])){
			  		player.bullets2.splice(i,1);
			  		templateSetLightEfects(true);
				}
			}
		}
		for(j in portalOutput){
			if(typeof player.bullets2[i] != "undefined"){
				if(player.bullets2[i].collide(portalOutput[j])){
			  		player.bullets2.splice(i,1);
			  		templateSetLightEfects(true);
				}
			}
		}

		// Bullets2 -> fire
		for(j in fire){
			if(typeof player.bullets2[i] != "undefined"){
				if(player.bullets2[i].collide(fire[j])){
		  			player.bullets2.splice(i,1);
		  			templateSetLightEfects(true);
	 			}
	 		}
		}

		// Bullets2 -> Enemy
		for(j in enemy){
			if(typeof player.bullets2[i] != "undefined"){
				if(player.bullets2[i].collide(enemy[j])){
					player.score += _PointsTouchEnemy;
		  			player.bullets2.splice(i,1);

		  			if(enemy[j].life > 0)
						enemy[j].life -= _DamageWeapon2;
					else{
						player.score += _PointsKillEnemy;
						enemy[j].showExplosionBullet3 = true;
					}
					enemy[j].timeShowDamage = _TimeShowDamagedEnemy;

		  			templateSetLightEfects(true);
	 			}
	 		}
		}

		// Bullets2 -> BulletsEnemy
		for(j in enemy){
			for(k in enemy[j].bullets){
				if(typeof player.bullets2[i] != "undefined"){
					if(player.bullets2[i].collide(enemy[j].bullets[k])){
						enemy[j].bullets.splice(k, 1);
						player.bullets2.splice(i, 1);
					}
				}
			}
		}

		// Bullets2 -> Bullets3 (explosion)
		for(j in player.bullets3){
			if(typeof player.bullets2[i] != "undefined"){
				if(player.bullets2[i].collide(player.bullets3[j]))
					player.bullets2.splice(i, 1);
			}
		}

	}
}

function collisionBullets3(){
	for(i in player.bullets3){

		// Bullets3 -> BlockBrown
		for(j in blockBrown){
			if(typeof player.bullets3[i] != "undefined"){
				if(player.bullets3[i].collide(blockBrown[j])){
					if(!player.bullets3[i].isCollide)
						player.bullets3[i].isCollide = true;
		  			player.score += _PointsTouchBlock;

					if(blockBrown[j].life > 0)
						blockBrown[j].life -= _DamageWeapon3;
					else
						blockBrown.splice(j,1);

					templateSetLightEfects(true);
				}
			}
		}

		// Bullets3 -> BlockGray
		for(j in blockGray){
			if(typeof player.bullets3[i] != "undefined"){
				if(player.bullets3[i].collide(blockGray[j])){
					if(!player.bullets3[i].isCollide)
						player.bullets3[i].isCollide = true;
				}
 			}
		}

		// Bullets3 -> fire
		for(j in fire){
			if(typeof player.bullets3[i] != "undefined"){
				if(player.bullets3[i].collide(fire[j])){
					if(!player.bullets3[i].isCollide)
						player.bullets3[i].isCollide = true;
		  			templateSetLightEfects(true);
	 			}
	 		}
		}

		// Bullets3 -> BlockWhite
		for(j in blockWhiteVert){
			if(typeof player.bullets3[i] != "undefined"){
		  		if(player.bullets3[i].collide(blockWhiteVert[j])){
		  			if(player.bullets3[i].maxRebounds < _MaxRebounds){
		  				player.bullets3[i].velY *= -1;
		  				player.bullets3[i].maxRebounds++;
		  				loadSound(sRebounds);
		  			}else
						player.bullets3.splice(i,1);
				}
			}
		}
		for(j in blockWhiteHor){
			if(typeof player.bullets3[i] != "undefined"){
		  		if(player.bullets3[i].collide(blockWhiteHor[j])){
		  			if(player.bullets3[i].maxRebounds < _MaxRebounds){
		  				// player.bullets3[i].velX = -player.bullets3[i].velX;
		  				player.bullets3[i].velX *= -1;
		  				player.bullets3[i].maxRebounds++;
		  				loadSound(sRebounds);
					}else
						player.bullets3.splice(i,1);
				}
			}
		}

		// Bullets3 -> life
		if(typeof player.bullets3[i] != "undefined"){
			if(player.bullets3[i].collide(life)){
				player.life++;
				player.health = _HealthPlayer;
				loadSound(sGetLife);
		  		life.x = random(canvas.width - 10);
		  		life.y = random(canvas.height - 10);
			}
		}

		// Bullets3 -> Portal
		for(j in portalInput){
			if(typeof player.bullets3[i] != "undefined"){
				if(player.bullets3[i].collide(portalInput[j])){
					if(!player.bullets3[i].isCollide)
						player.bullets3[i].isCollide = true;
				}
			}
		}
		for(j in portalOutput){
			if(typeof player.bullets3[i] != "undefined"){
				if(player.bullets3[i].collide(portalOutput[j])){
					if(!player.bullets3[i].isCollide)
						player.bullets3[i].isCollide = true;
				}
			}
		}

		// Bullets3 -> Enemy
		for(j in enemy){
			if(typeof player.bullets3[i] != "undefined"){
				if(player.bullets3[i].collide(enemy[j])){
					player.score += _PointsTouchEnemy;

		  			if(enemy[j].life > 0)
						enemy[j].life -= _DamageWeapon3;
					else{
						// First time enemy die, only display his explosion (not bullet3's explosion)
						// If to that enemy/explosion is returned to shoot, then yes show bullet3's explosion
						if(!enemy[j].showExplosionBullet3){
							enemy[j].showExplosionBullet3 = true;
							player.bullets3.splice(i, 1);
						}else{
							if(!player.bullets3[i].isCollide)
								player.bullets3[i].isCollide = true;
						}
						player.score += _PointsKillEnemy;
					}
					enemy[j].timeShowDamage = _TimeShowDamagedEnemy;
		  			templateSetLightEfects(true);
	 			}
	 		}
		}

		// Bullets3 -> BulletsEnemy
		for(j in enemy){
			for(k in enemy[j].bullets){
				if(typeof player.bullets3[i] != "undefined"){
					if(player.bullets3[i].collide(enemy[j].bullets[k])){
						if(!player.bullets3[i].isCollide)
							player.bullets3[i].isCollide = true;
						enemy[j].bullets.splice(k, 1);
					}
				}
			}
		}

		// Bullets3 -> Bullets3
		for(j in player.bullets3){
			if(typeof player.bullets3[i] != "undefined"){
				// "i != j" avoid that the bullet collides with itself
				if(player.bullets3[i].collide(player.bullets3[j]) && i != j){
					if(!player.bullets3[i].isCollide)
						player.bullets3[i].isCollide = true;
				}
			}
		}

		// Bullets3 -> Player
		if(typeof player.bullets3[i] != "undefined"){
			if(player.bullets3[i].collide(player) && player.timeProtected < 1){
				if(damage && player.bullets3[i].isCollide)
					player.health--;
			}
		}
	}
}

function collisionBulletsEnemy(){
	for(i in enemy){
		for(j in enemy[i].bullets){

			// BulletsEnemy -> Player
			if(typeof enemy[i].bullets[j] != "undefined"){
				if(enemy[i].bullets[j].collide(player) && player.timeProtected < 1){
					enemy[i].bullets.splice(j,1);
					if(damage)
						player.health--;
				}
			}

			// BulletsEnemy -> BlockBrown
			for(k in blockBrown){
				if(typeof enemy[i].bullets[j] != "undefined"){
					if(enemy[i].bullets[j].collide(blockBrown[k]))
						enemy[i].bullets.splice(j,1);
				}
			}

			// BulletsEnemy -> BlockGray
			for(k in blockGray){
				if(typeof enemy[i].bullets[j] != "undefined"){
					if(enemy[i].bullets[j].collide(blockGray[k]))
			  			enemy[i].bullets.splice(j,1);
			  	}
			}

			// BulletsEnemy -> BlockWhite
			for(k in blockWhiteVert){
				if(typeof enemy[i].bullets[j] != "undefined"){
			  		if(enemy[i].bullets[j].collide(blockWhiteVert[k]))
						enemy[i].bullets.splice(j,1);
				}
			}
			for(k in blockWhiteHor){
				if(typeof enemy[i].bullets[j] != "undefined"){
			  		if(enemy[i].bullets[j].collide(blockWhiteHor[k]))
						enemy[i].bullets.splice(j,1);
				}
			}

			// BulletsEnemy -> life
			if(typeof enemy[i].bullets[j] != "undefined"){
				if(enemy[i].bullets[j].collide(life))
					enemy[i].bullets.splice(j,1);
			}

			// BulletsEnemy -> Portal
			for(k in portalInput){
				if(typeof enemy[i].bullets[j] != "undefined"){
					if(enemy[i].bullets[j].collide(portalInput[k]))
						enemy[i].bullets.splice(j,1);
				}
			}
			for(k in portalOutput){
				if(typeof enemy[i].bullets[j] != "undefined"){
					if(enemy[i].bullets[j].collide(portalOutput[k]))
						enemy[i].bullets.splice(j,1);
				}
			}

			// BulletsEnemy -> fire
			for(k in fire){
				if(typeof enemy[i].bullets[j] != "undefined"){
					if(enemy[i].bullets[j].collide(fire[k]))
			  			enemy[i].bullets.splice(j,1);
	 			}
			}

			// BulletsEnemy -> Enemy
			for(k in enemy){
				if(typeof enemy[i].bullets[j] != "undefined"){
					// "i != k" avoid that enemy's bullets collides with itself
					if(enemy[i].bullets[j].collide(enemy[k]) && i != k){
						enemy[i].bullets.splice(j,1);

						if(friendlyFire){
							if(enemy[k].life > 0)
								enemy[k].life -= _DamageWeapon;
							else{
								player.score += _PointsKillEnemy;
								enemy[k].showExplosionBullet3 = true;
							}
						}
		 			}
		 		}
			}

		}
	}
}



