requirejs(['resource']);
requirejs(['pojo']);
requirejs(['map']);
requirejs(['weapon']);
requirejs(['movement']);

window.addEventListener('load',init,false);

const _LifePlayer = 1, _TimeProtected = 125,    _PointsBlock = 3, _MunitionWeapon1 = 9999,
	  _LifeBlock = 3,  _TimeChangeLevel = 150,  _PointsEnemy = 5, _MunitionWeapon2 = 300,
	  _LifeEnemy = 25, _TimeRechargeHome = 100,

	  _SizeBlock = 20, _DamageWeapon = 1, _SizeWeapon = 4, _MaxRebounds = 100;

var canvas = null, ctx = null;
var player, blockLife;
var key = null;
var keyPressed = [];
var bullets1 = [], bulletsTest = [], bullets2 = [];

var info       = true,
	pause      = false,
	gameOver   = false,
	fullScreen = true,
	sound      = false;

var iPlayer      = new Image(),
	iEnemy       = new Image(),
 	iBlockLife   = new Image(),
 	iBlockRed    = new Image(),
 	iBlockWhite  = new Image(),
 	iBlockBrown0 = new Image(),
 	iBlockBrown1 = new Image(),
 	iBlockBrown2 = new Image(),
 	iBlockBrown3 = new Image();

var sWeapon1           = new Audio(),
	sWeapon2           = new Audio(),
	sGetLife           = new Audio(),
	sLoseLife          = new Audio(),
	sRebounds          = new Audio(),
	sContinue          = new Audio(),
	sNoMunition        = new Audio(),
	sChangeLevelBefore = new Audio(),
	sChangeLevelAfter  = new Audio(),
	sGameOver          = new Audio(),
	sMap1              = new Audio(),
	sMap2              = new Audio(),
	sMap3              = new Audio(),
	sMap4              = new Audio(),
	sMap5              = new Audio(),
	sMap6              = new Audio();

function init(){
	// Esperamos a que le de tiempo a los scripts de la cabecera que carguen por completo
	setTimeout(function(){
		canvas = document.getElementsByTagName('canvas')[0];
		ctx = canvas.getContext('2d');

		player = new Player(225,200,16,16);
		blockLife = new Element(null,null,16,16);

		loadAssets();
		reset();
		run();
	}, 250);
}
function loadAssets(){
	iPlayer.src      = 'assets/img/player1.png';
	iEnemy.src      = 'assets/img/boat.png';
	iBlockLife.src   = 'assets/img/life1.png';
	iBlockRed.src    = 'assets/img/fire2.png';
	iBlockWhite.src  = 'assets/img/blockWhite.png';
	iBlockBrown0.src = 'assets/img/blockBrown0.png';
	iBlockBrown1.src = 'assets/img/blockBrown1.png';
	iBlockBrown2.src = 'assets/img/blockBrown2.png';
	iBlockBrown3.src = 'assets/img/blockBrown3.png';

	sWeapon1.src           = 'assets/audio/weapon1.wav';
	sWeapon2.src           = 'assets/audio/weapon2.wav';
	sGetLife.src           = 'assets/audio/blip.wav';
	sLoseLife.src          = 'assets/audio/Error.wav';
	sRebounds.src          = 'assets/audio/rebounds.wav';
	sContinue.src          = 'assets/audio/recharge.wav';
	sNoMunition.src        = 'assets/audio/noMunition.wav';
	sChangeLevelBefore.src = 'assets/audio/process4.wav';
	sChangeLevelAfter.src  = 'assets/audio/life.wav';
	sGameOver.src          = 'assets/audio/gameOver2.wav';
	sMap1.src              = 'assets/audio/MenuOpciones.wav';
	sMap2.src              = 'assets/audio/FondoDeUnaCueva.wav';
	sMap3.src              = 'assets/audio/FondoDeUnaCueva.wav';
	sMap4.src              = 'assets/audio/FondoDeUnaCueva.wav';
	sMap5.src              = 'assets/audio/FondoDeUnaCueva.wav';
	sMap6.src              = 'assets/audio/FondoDeUnaCueva.wav';

	templateSetSound(sound);
	templateSetFullscreen(fullScreen);
	templateSetLightEfects(false);
}
function reset(){
	setPositionPlayer(270, 330, 0);
	// setPositionPlayer(270, 280, 180);
	player.life            = _LifePlayer;
	player.munitionWeapon1 = _MunitionWeapon1;
	player.munitionWeapon2 = _MunitionWeapon2;
	player.timeProtected   = 0;
	blockLife.x            = random(canvas.width - 10);
	blockLife.y            = random(canvas.height - 10);
	gameOver               = false;
	clearMap();
	createMap(map1, _SizeBlock, sMap1, "map1", "#011224");
}
function run(){
	requestAnimFrame(run);
	game();
	draw();
	templateSetPoints(player.score);
	templateSetLives(player.life);
}

function game(){
    if(!pause){
	    movement(player);
		weapon1(player, bullets1);
		weapon2(player, bullets2);
		// weaponTest(player, bulletsTest);
		lifePlayer();
		collision();
	}
	keyboard();
}

function draw() {
	ctx.clearRect(0,0,canvas.width,canvas.height);

	for(i in home){
		if(player.timeRechargeHome > 0){
			if(player.timeRechargeHome%3 == 0)
  				ctx.strokeStyle = "#022939";
			else
  				ctx.strokeStyle = "#03404A";
		}else
  			ctx.strokeStyle = "#03404A";
		roundRect(ctx, home[i].x, home[i].y, home[i].width, home[i].height, 30, false, true);
	}

	// bullets1 -> home
	ctx.fillStyle = '#690303';
	ctx.strokeStyle = "#692A03";
	for(i in bullets1){
		for(j in home){
			if(bullets1[i].collide(home[j])){
				roundRect(ctx, home[j].x, home[j].y, home[j].width, home[j].height, 20, false, true);
			}
		}
	}

	// circle(ctx, 270, 180, 30, true, true);

	// bullets2 -> home
	ctx.fillStyle = '#690303';
	ctx.strokeStyle = "#692A03";
	for(i in bullets2){
		for(j in home){
			if(bullets2[i].collide(home[j]))
				roundRect(ctx, home[j].x, home[j].y, home[j].width, home[j].height, 20, false, true);
		}
	}

	for(i in portalInput){
		if(player.timeChangeLevel > 0){
			if(player.timeChangeLevel%3 == 0)
				ctx.fillStyle = '#011224';
			else
				ctx.fillStyle = '#07213C';
		}else
			ctx.fillStyle = '#07213C';

		ctx.strokeStyle = "#8A0A0A";
		roundRect(ctx, portalInput[i].x, portalInput[i].y, portalInput[i].width, portalInput[i].height, 25, true, true);
	}

	for(i in portalOutput){
		if(player.timeChangeLevel > 0){
			if(player.timeChangeLevel%3 == 0)
				ctx.fillStyle = '#011224';
			else
				ctx.fillStyle = '#07213C';
		}else
			ctx.fillStyle = '#07213C';

		ctx.strokeStyle = "#8A0A0A";
		roundRect(ctx, portalOutput[i].x, portalOutput[i].y, portalOutput[i].width, portalOutput[i].height, 25, true, true);
	}

	if(player.timeProtected > 0){
		if(player.timeProtected%2 == 0)
			mostrarNaveRotada();
	}else
		mostrarNaveRotada();

	ctx.drawImage(iBlockLife,blockLife.x,blockLife.y, blockLife.width, blockLife.height);

	for(i in blockBrown){
		if(blockBrown[i].life == 0)
			ctx.drawImage(iBlockBrown3,blockBrown[i].x,blockBrown[i].y,blockBrown[i].width,blockBrown[i].height);
		else if(blockBrown[i].life == 1)
			ctx.drawImage(iBlockBrown2,blockBrown[i].x,blockBrown[i].y,blockBrown[i].width,blockBrown[i].height);
		else if(blockBrown[i].life == 2)
			ctx.drawImage(iBlockBrown1,blockBrown[i].x,blockBrown[i].y,blockBrown[i].width,blockBrown[i].height);
		else if(blockBrown[i].life == 3)
			ctx.drawImage(iBlockBrown0,blockBrown[i].x,blockBrown[i].y,blockBrown[i].width,blockBrown[i].height);
	}

	for(i in enemy){
		if(enemy[i].life > 0)
			ctx.drawImage(iEnemy,enemy[i].x,enemy[i].y,enemy[i].width,enemy[i].height);
	}

	for(i in blockWhiteVert)
		ctx.drawImage(iBlockWhite,blockWhiteVert[i].x,blockWhiteVert[i].y,blockWhiteVert[i].width,blockWhiteVert[i].height);

	for(i in blockWhiteHor)
		ctx.drawImage(iBlockWhite,blockWhiteHor[i].x,blockWhiteHor[i].y,blockWhiteHor[i].width,blockWhiteHor[i].height);

	for(i in blockRed)
		ctx.drawImage(iBlockRed,blockRed[i].x,blockRed[i].y,blockRed[i].width,blockRed[i].height);

	ctx.fillStyle = '#614E70';
	for(i in bullets1)
  		ctx.fillRect(bullets1[i].x,bullets1[i].y,bullets1[i].width,bullets1[i].height);


  	ctx.fillStyle = '#4A6192';
	for(i in bullets2)
  		ctx.fillRect(bullets2[i].x,bullets2[i].y,bullets2[i].width,bullets2[i].height);

  	ctx.fillStyle = '#4A6192';
	for(i in bulletsTest)
  		ctx.fillRect(bulletsTest[i].x,bulletsTest[i].y,bulletsTest[i].width,bulletsTest[i].height);

	ctx.font = "10px Verdana";
	ctx.fillStyle = '#fff';
	if(info){
		ctx.fillText('key: '+key,5,15);
		ctx.fillText('Score: '+player.score,5,30);
		ctx.fillText('Bullets 1: '+bullets1.length,5,45);
		ctx.fillText('Bullets 2: '+bullets2.length,5,60);
		ctx.fillText('Bullets Test: '+bulletsTest.length,5,75);
		ctx.fillText('Weapon2: '+player.munitionWeapon2,5,90);
		ctx.fillText('Fps: '+ getFps().toFixed(1),5,105);
		ctx.fillText('Lifes: '+player.life,5,120);
		ctx.fillText('Rotation: '+player.rotation,5,135);
		ctx.fillText('Time Protection: '+player.timeProtected,5,150);
		ctx.fillText('Time Level: '+player.timeChangeLevel,5,165);
		ctx.fillText('Time Home: '+player.timeRechargeHome,5,180);
		ctx.fillText('Map: '+currentMap,5,195);
	}

	ctx.font = "18px Verdana";
	ctx.fillStyle = '#FFA112';
	if(pause){
		if(gameOver)
			ctx.fillText('GAME OVER',canvas.width/2 - 35,canvas.height/2 - 10);
		else
			ctx.fillText('PAUSE',canvas.width/2 - 35,canvas.height/2 - 10);
	}
}

function collision(){
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

	// BlockLife -> BlockBrown
	for(i in blockBrown){
		if(blockLife.collide(portalInput[i])){
  			blockLife.x = random(canvas.width - 10);
  			blockLife.y = random(canvas.height - 10);
		}
	}

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
				loadSound(sChangeLevelBefore);
			}else if(player.timeChangeLevel == 1){
				if(currentMap == "map1"){
					makeBackupMap("map1");
					clearMap();
					createMap(map2, _SizeBlock, sMap2, "map2", "#010F1D", 32, 212, 90);
					loadBackupMap("map2");
				}else if(currentMap == "map2"){
					makeBackupMap("map2");
					clearMap();
					createMap(map1, _SizeBlock, sMap1, "map1", "#011224", 532, 62, 180);
					loadBackupMap("map1");
				}else if(currentMap == "map3"){
					// clearMap();
					// createMap(map3, _SizeBlock, sMap1, "map3", "#010B16", 512, 32, 270);
					setPositionPlayer(512, 32, 270);
					// setTimeout(function(){
					// 	setPositionPlayer(512, 32, 270);
					// }, 1);
				}
				portalInputCrossed = true;
				loadSound(sChangeLevelAfter);
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
				loadSound(sChangeLevelBefore);
			}else if(player.timeChangeLevel == 1){
				if(currentMap == "map3"){
					setPositionPlayer(32, 272, 90);
				}
				portalOutputCrossed = true;
				loadSound(sChangeLevelAfter);
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
				loadSound(sChangeLevelAfter);
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
				player.score += _PointsEnemy;
	  			bullets1.splice(i,1);

				if(enemy[j].life <= 0)
					enemy.splice(j,1);
				else
					enemy[j].life -= _DamageWeapon;

	  			templateSetLightEfects(true);
 			}
		}
	}

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
				player.score += _PointsEnemy;
	  			bullets2.splice(i,1);

				if(enemy[j].life <= 0)
					enemy.splice(j,1);
				else
					enemy[j].life -= _DamageWeapon;

	  			templateSetLightEfects(true);
 			}
		}
	}
}

function mostrarNaveRotada(){
	ctx.save();
	ctx.translate(player.x+player.width/2,player.y+player.height/2);
	ctx.rotate(player.rotation*Math.PI/180);
	ctx.drawImage(iPlayer,-player.width/2,-player.height/2, player.width, player.height);
	ctx.restore();
}

function keyboard(){

	pressKey();

	if(key == formatKey("ENTER")){
		if(gameOver){
			reset();
			loadSound(sContinue);
		}
		pause = !pause;
		key = null;
	}else if(key == formatKey("M")){
		fullScreen = !fullScreen;
		templateSetFullscreen(fullScreen);
		key = null;
	}else if(key == formatKey("S")){
		toggleSound();
		key = null;
	}else if(key == formatKey("PadNum1") || key == formatKey("1")){
		clearMap();
		createMap(map1, _SizeBlock, sMap1, "map1", "#011224");
		key = null;
	}else if(key == formatKey("PadNum2") || key == formatKey("2")){
		clearMap();
		createMap(map2, _SizeBlock, sMap2, "map2", "#010F1D");
		key = null;
	}else if(key == formatKey("PadNum3") || key == formatKey("3")){
		clearMap();
		createMap(map3, _SizeBlock, sMap1, "map3", "#010B16");
		key = null;
	}else if(key == formatKey("PadNum4") || key == formatKey("4")){
		clearMap();
		createMap(map4, _SizeBlock, sMap1, "map4", "#08212F");
		key = null;
	}else if(key == formatKey("PadNum5") || key == formatKey("5")){
		clearMap();
		createMap(map5, _SizeBlock, sMap1, "map5", "#0F2F40");
		key = null;
	}else if(key == formatKey("PadNum6") || key == formatKey("6")){
		clearMap();
		createMap(map6, _SizeBlock, sMap1, "map6", "#011224");
		key = null;
	}else if(key == formatKey("PadNum7") || key == formatKey("7")){
		info = !info;
		key = null;
	}else if(key == formatKey("PadNum8") || key == formatKey("8")){
		clearMap();
		key = null;
	}else if(key == formatKey("R")){
		reset();
		clearMap();
		createMap(map1, _SizeBlock, sMap1, "map1");
		key = null;
	}
}

function lifePlayer(){
	if(gameOver){
		pause = true;
		loadSound(sGameOver);
	}else{
		if(player.life < 1)
			gameOver = true;
		if(player.timeProtected > 0)
	        player.timeProtected--;
		if(player.timeChangeLevel > 0)
			player.timeChangeLevel--;
		if(player.timeRechargeHome > 0)
			player.timeRechargeHome--;
	}
}

function toggleSound(){
	sound = !sound;
	templateSetSound(sound);

	if(sound)
		playMapSound();
	else
		stopSounds();
}

function loadSound(nameVarSound, repeat){
	if (typeof repeat == "undefined")
		repeat = false;

	if(sound){
		nameVarSound.play();
		nameVarSound.loop = repeat;
	}else
		nameVarSound.pause();
}

function playMapSound(){
	// Convert nameMap to nameSoundMap
	// Before: map1		After: sMap1
	var soundCurrentMap = "s" + currentMap.charAt(0).toUpperCase() + currentMap.substr(1, currentMap.length);
	if(soundCurrentMap == "sMap1")
		loadSound(sMap1, true);
	else if(soundCurrentMap == "sMap2")
		loadSound(sMap2, true);
	else if(soundCurrentMap == "sMap3")
		loadSound(sMap3, true);
	else if(soundCurrentMap == "sMap4")
		loadSound(sMap4, true);
	else if(soundCurrentMap == "sMap5")
		loadSound(sMap5, true);
	else if(soundCurrentMap == "sMap6")
		loadSound(sMap6, true);
}

function stopSounds(){
	sWeapon1.pause();
	sWeapon2.pause();
	sGetLife.pause();
	sLoseLife.pause();
	sRebounds.pause();
	sContinue.pause();
	sNoMunition.pause();
	sChangeLevelBefore.pause();
	sChangeLevelAfter.pause();
	sGameOver.pause();
	sMap1.pause();
	sMap2.pause();
	sMap3.pause();
	sMap4.pause();
	sMap5.pause();
	sMap6.pause();
}





