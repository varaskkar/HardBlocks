function collisionBlockLife(){
	// BlockLife -> BlockRed
	for(i in blockRed){
		if(blockLife.collide(blockRed[i])){
  			blockLife.x = random(canvas.width - 10);
  			blockLife.y = random(canvas.height - 10);
		}
	}

	// BlockLife -> BloqueBlanco
	for(i in blockWhiteVert){
		if(blockLife.collide(blockWhiteVert[i])){
  			blockLife.x = random(canvas.width - 10);
  			blockLife.y = random(canvas.height - 10);
		}
	}
	for(i in blockWhiteHor){
		if(blockLife.collide(blockWhiteHor[i])){
  			blockLife.x = random(canvas.width - 10);
  			blockLife.y = random(canvas.height - 10);
		}
	}

	// BlockLife -> BlockBrown
	for(i in blockBrown){
		if(blockLife.collide(blockBrown[i])){
  			blockLife.x = random(canvas.width - 10);
  			blockLife.y = random(canvas.height - 10);
		}
	}

	// BlockLife -> Portal
	for(i in portalInput){
		if(blockLife.collide(portalInput[i])){
  			blockLife.x = random(canvas.width - 10);
  			blockLife.y = random(canvas.height - 10);
		}
	}
	for(i in portalOutput){
		if(blockLife.collide(portalOutput[i])){
  			blockLife.x = random(canvas.width - 10);
  			blockLife.y = random(canvas.height - 10);
		}
	}

	// BlockLife -> Enemy
	for(i in enemy){
		if(blockLife.collide(enemy[i])){
  			blockLife.x = random(canvas.width - 10);
  			blockLife.y = random(canvas.height - 10);
		}
	}

	// BlockLife -> Home
	for(i in home){
		if(blockLife.collide(home[i])){
  			blockLife.x = random(canvas.width - 10);
  			blockLife.y = random(canvas.height - 10);
		}
	}
}

function collisionPlayer(){
	// Player -> BlockLife
	if(player.collide(blockLife)){
  		player.life++;
  		loadSound(sGetLife);
  		blockLife.x = random(canvas.width - 10);
  		blockLife.y = random(canvas.height - 10);
 	}

	// Player -> BlockRed
	for(i in blockRed){
		if(player.collide(blockRed[i]) && player.timeProtected < 1){
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
				if(currentMap == "map1"){
					makeBackupMap("map1");
					createMap(map2, _SizeBlock, sMap2, "map2", "#010F1D", 32, 212, 90);
					loadBackupMap("map2");
				}else if(currentMap == "map2"){
					makeBackupMap("map2");
					createMap(map1, _SizeBlock, sMap1, "map1", "#011224", 532, 62, 180);
					loadBackupMap("map1");
				}else if(currentMap == "map3"){
					// createMap(map3, _SizeBlock, sMap1, "map3", "#010B16", 512, 32, 270);
					setPositionPlayer(512, 32, 270);
					// setTimeout(function(){
					// 	setPositionPlayer(512, 32, 270);
					// }, 1);
				}
				portalInputCrossed = true;
				loadSound(sPortalOutput);
			}
		}else{
			// BUG: antes carga el portal que la nave (tiempo espera en metodo crearPapa)
			// por eso cuando carga el portal la nave ya esta a la derecha y dice ¡SI!

			// When you've croosed the portal, avoid return automaticaly to portal before
			// There is move player in 4 directions outside the portal
			setTimeout(function(){
				if(portalInput[0].x + 50 < player.x || portalInput[0].x - 50 > player.x || portalInput[0].y + 50 < player.y || portalInput[0].y - 50 > player.y){
					portalInputCrossed = false;
					// console.log("Si");
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

function collisionBullets1(){
	// Bullets1 -> BlockBrown
	for(i in bullets1){
		for(j in blockBrown){
			// console.log(bullets1[i].collide(blockBrown[j]));
			if(bullets1[i].collide(blockBrown[j])){
	  			player.score += _PointsBlock;
				bullets1.splice(i,1);

				if(blockBrown[j].life <= 0)
					blockBrown.splice(j,1);
				else
					blockBrown[j].life -= _DamageWeapon;

				templateSetLightEfects(true);
			}
		}
	}

	// Bullets1 -> BlockRed
	for(i in bullets1){
		for(j in blockRed){
			if(bullets1[i].collide(blockRed[j])){
	  			bullets1.splice(i,1);
	  			templateSetLightEfects(true);
 			}
		}
	}

	// Bullets1 -> BlockWhite
	for(i in bullets1){
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
	}
	for(i in bullets1){
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
	}

	// Bullets1 -> BlockLife
	for(i in bullets1){
		if(bullets1[i].collide(blockLife)){
			player.life++;
			loadSound(sGetLife);
	  		blockLife.x = random(canvas.width - 10);
	  		blockLife.y = random(canvas.height - 10);
		}
	}

	// Bullets1 -> Portal
	for(i in bullets1){
		for(j in portalInput){
			if(bullets1[i].collide(portalInput[j])){
		  		bullets1.splice(i,1);
		  		templateSetLightEfects(true);
			}
		}
	}
	for(i in bullets1){
		for(j in portalOutput){
			if(bullets1[i].collide(portalOutput[j])){
		  		bullets1.splice(i,1);
		  		templateSetLightEfects(true);
			}
		}
	}

	// Bullets1 -> Enemy
	for(i in bullets1){
		for(j in enemy){
			if(bullets1[i].collide(enemy[j])){
				player.score += _PointsTouchEnemy;
	  			bullets1.splice(i,1);

				enemy[j].life -= _DamageWeapon;

				if(enemy[j].life <= 0){
					loadSound(sExplosion);
					player.score += _PointsEnemy;
				}

	  			templateSetLightEfects(true);
 			}
		}
	}
}

function collisionBullets2(){
	// Bullets2 -> BlockBrown
	for(i in bullets2){
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
	}

	// Bullets2 -> BlockWhite
	for(i in bullets2){
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
	}
	for(i in bullets2){
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
	}

	// Bullets2 -> BlockLife
	for(i in bullets2){
		if(bullets2[i].collide(blockLife)){
			player.life++;
			loadSound(sGetLife);
	  		blockLife.x = random(canvas.width - 10);
	  		blockLife.y = random(canvas.height - 10);
		}
	}

	// Bullets2 ->Portal
	for(i in bullets2){
		for(j in portalInput){
			if(bullets2[i].collide(portalInput[j])){
		  		bullets2.splice(i,1);
		  		templateSetLightEfects(true);
			}
		}
	}
	for(i in bullets2){
		for(j in portalOutput){
			if(bullets2[i].collide(portalOutput[j])){
		  		bullets2.splice(i,1);
		  		templateSetLightEfects(true);
			}
		}
	}

	// Bullets2 -> BlockRed
	for(i in bullets2){
		for(j in blockRed){
			if(bullets2[i].collide(blockRed[j])){
	  			bullets2.splice(i,1);
	  			templateSetLightEfects(true);
 			}
		}
	}

	// Bullets2 -> Enemy
	for(i in bullets2){
		for(j in enemy){
			if(bullets2[i].collide(enemy[j])){
				player.score += _PointsTouchEnemy;
	  			bullets2.splice(i,1);

				enemy[j].life -= _DamageWeapon;

				if(enemy[j].life <= 0){
					loadSound(sExplosion);
					player.score += _PointsEnemy;
				}

	  			templateSetLightEfects(true);
 			}
		}
	}
}

function collisionEnemy(){
	// Enemy -> BlockBrown
	for(i in enemy){
		for(j in blockBrown){
			if(enemy[i].collide(blockBrown[j]))
				enemy[i].toggleDirection = !enemy[i].toggleDirection;
		}
	}

	// Enemy -> blockWhite
	for(i in enemy){
		for(j in blockWhiteVert){
			if(enemy[i].collide(blockWhiteVert[j]))
				enemy[i].toggleDirection = !enemy[i].toggleDirection;
		}
	}
	for(i in enemy){
		for(j in blockWhiteHor){
			if(enemy[i].collide(blockWhiteHor[j]))
				enemy[i].toggleDirection = !enemy[i].toggleDirection;
		}
	}

	// Enemy -> BlockRed
	for(i in enemy){
		for(j in blockRed){
			if(enemy[i].collide(blockRed[j]))
				enemy[i].toggleDirection = !enemy[i].toggleDirection;
		}
	}

	// // Enemy -> Enemy
	// for(i in enemy){
	// 	for(j in enemy){
	// 		if(enemy[i].collide(enemy[j]))
	// 			enemy[i].toggleDirection = !enemy[i].toggleDirection;
	// 	}
	// }
}


























