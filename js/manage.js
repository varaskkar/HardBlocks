requirejs(['resource']);
requirejs(['pojo']);
requirejs(['map']);
requirejs(['weapon']);
requirejs(['movement']);

window.addEventListener('load',init,false);

const _LifesPlayer   = 1,  _LifesBlock    = 3,
	  _PointsStart   = 0,  _PointsBlock   = 3,
	  _DamageWeapon1 = 1,  _SizeWeapon1   = 4, _MaxRebounds = 100,
	  _SizeBlock     = 20, _TimeProtected = 125, _TimeDoor = 150;

var canvas = null, ctx = null;
var player, blockLife;
var key = null;
var keyPressed = [];
var bullets1 = [], bullets2 = [];

var info       = true,
	pause      = false,
	gameOver   = false,
	fullScreen = false,
	sound      = false;

var iPlayer      = new Image(),
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
	sContinue.src         = 'assets/audio/recharge.wav';
	sChangeLevelBefore.src = 'assets/audio/process4.wav';
	sChangeLevelAfter.src  = 'assets/audio/life.wav';
	sGameOver.src          = 'assets/audio/gameOver2.wav';
	sMap1.src              = 'assets/audio/MenuOpciones.wav';
	sMap2.src              = 'assets/audio/FondoDeUnaCueva.wav';
	sMap3.src              = 'assets/audio/FondoDeUnaCueva.wav';
	sMap4.src              = 'assets/audio/FondoDeUnaCueva.wav';
	sMap5.src              = 'assets/audio/FondoDeUnaCueva.wav';
	sMap6.src              = 'assets/audio/FondoDeUnaCueva.wav';

	templateSetSound();
	templateSetLightEfects(false);
}
function reset(){
	setPositionPlayer(270, 330, 0);
	player.score         = _PointsStart;
	player.life          = _LifesPlayer;
	player.timeProtected = 0;
	blockLife.x          = random(canvas.width - 10);
	blockLife.y          = random(canvas.height - 10);
	gameOver             = false;
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
		lifePlayer();
		collision();
	}
	keyboard();
}

function draw() {
	ctx.clearRect(0,0,canvas.width,canvas.height);

	for(i in portal1){
		if(player.timeChangeLevel > 0){
			if(player.timeChangeLevel%3 == 0)
				ctx.fillStyle = '#011224';
			else
				ctx.fillStyle = '#07213C';
		}else
			ctx.fillStyle = '#07213C';

		ctx.strokeStyle = "#8A0A0A";
		roundRect(ctx, portal1[i].x, portal1[i].y, portal1[i].width, portal1[i].height, 25, true, true);
	}

	for(i in portal2){
		if(player.timeChangeLevel > 0){
			if(player.timeChangeLevel%3 == 0)
				ctx.fillStyle = '#011224';
			else
				ctx.fillStyle = '#07213C';
		}else
			ctx.fillStyle = '#07213C';

		ctx.strokeStyle = "#8A0A0A";
		roundRect(ctx, portal2[i].x, portal2[i].y, portal2[i].width, portal2[i].height, 25, true, true);
	}

	if(player.timeProtected > 0){
		if(player.timeProtected%2 == 0)
			mostrarNaveRotada();
	}else
		mostrarNaveRotada();

	ctx.drawImage(iBlockLife,blockLife.x,blockLife.y, blockLife.width, blockLife.height);

	for(i in blockBrown){
		if(blockBrown[i].life == 0)
			ctx.drawImage(iBlockBrown0,blockBrown[i].x,blockBrown[i].y,blockBrown[i].width,blockBrown[i].height);
		else if(blockBrown[i].life == 1)
			ctx.drawImage(iBlockBrown1,blockBrown[i].x,blockBrown[i].y,blockBrown[i].width,blockBrown[i].height);
		else if(blockBrown[i].life == 2)
			ctx.drawImage(iBlockBrown2,blockBrown[i].x,blockBrown[i].y,blockBrown[i].width,blockBrown[i].height);
		else if(blockBrown[i].life == 3)
			ctx.drawImage(iBlockBrown3,blockBrown[i].x,blockBrown[i].y,blockBrown[i].width,blockBrown[i].height);
	}

	for(i in blockWhiteVert)
		ctx.drawImage(iBlockWhite,blockWhiteVert[i].x,blockWhiteVert[i].y,blockWhiteVert[i].width,blockWhiteVert[i].height);

	for(i in blockWhiteHor)
		ctx.drawImage(iBlockWhite,blockWhiteHor[i].x,blockWhiteHor[i].y,blockWhiteHor[i].width,blockWhiteHor[i].height);

	for(i in blockRed)
		ctx.drawImage(iBlockRed,blockRed[i].x,blockRed[i].y,blockRed[i].width,blockRed[i].height);

	ctx.fillStyle = '#614E70';
	for(i in bullets1){
  		ctx.fillRect(bullets1[i].x,bullets1[i].y,bullets1[i].width,bullets1[i].height);
	}

  	ctx.fillStyle = '#4A6192';
	for(i in bullets2)
  		ctx.fillRect(bullets2[i].x,bullets2[i].y,bullets2[i].width,bullets2[i].height);

	ctx.font = "10px Verdana";
	ctx.fillStyle = '#fff';
	if(info){
		ctx.fillText('key: '+key,5,15);
		ctx.fillText('Score: '+player.score,5,30);
		ctx.fillText('Bullets 1: '+bullets1.length,5,45);
		ctx.fillText('Bullets 2: '+bullets2.length,5,60);
		ctx.fillText('Fps: '+getFps().toFixed(1),5,75);
		ctx.fillText('Lifes: '+player.life,5,90);
		ctx.fillText('Rotation: '+player.rotation,5,105);
		ctx.fillText('Time Protection: '+player.timeProtected,5,120);
		ctx.fillText('Time Level: '+player.timeChangeLevel,5,135);
		ctx.fillText('Map: '+currentMap,5,150);
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
	// blockLife -> blockRed
	for(i in blockRed){
		if(blockLife.collide(blockRed[i])){
  			blockLife.x = random(canvas.width - 10);
  			blockLife.y = random(canvas.height - 10);
		}
	}

	// blockLife -> bloqueBlanco
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

	// blockLife -> blockBrown
	for(i in blockBrown){
		if(blockLife.collide(blockBrown[i])){
  			blockLife.x = random(canvas.width - 10);
  			blockLife.y = random(canvas.height - 10);
		}
	}

	// blockLife -> portal
	for(i in blockBrown){
		if(blockLife.collide(portal1[i])){
  			blockLife.x = random(canvas.width - 10);
  			blockLife.y = random(canvas.height - 10);
		}
	}

	// player -> blockLife
	if(player.collide(blockLife)){
  		player.life++;
  		loadSound(sGetLife);
  		blockLife.x = random(canvas.width - 10);
  		blockLife.y = random(canvas.height - 10);
 	}

	// player -> blockRed
	for(i in blockRed){
		if(player.collide(blockRed[i]) && player.timeProtected < 1){
			// En la última vida no se oiga el sonido de perderla, que se oiga el sonido de GameOver
			if(player.life != 1){
				loadSound(sLoseLife);
			}
			player.timeProtected = _TimeProtected;
			player.life--;
		}
	}

	// player -> portal1
	for(i in portal1){
		if(player.collide(portal1[i]) && !portalCrossed){
	 		if(player.timeChangeLevel == 0){
				player.timeChangeLevel = _TimeDoor;
				loadSound(sChangeLevelBefore);
			}else if(player.timeChangeLevel == 1){
				if(currentMap == "map1"){
					clearMap();
					createMap(map2, _SizeBlock, sMap2, "map2", "#010F1D", 32, 212, 90);
				}else if(currentMap == "map2"){
					clearMap();
					createMap(map1, _SizeBlock, sMap1, "map1", "#011224", 532, 62, 180);
				}else if(currentMap == "map3"){

						// clearMap();
						// createMap(map3, _SizeBlock, sMap1, "map3", "#010B16", 512, 32, 270);
						setPositionPlayer(512, 32, 270);
					// setTimeout(function(){
					// 	setPositionPlayer(512, 32, 270);
					// }, 1);
				}
				portalCrossed = true;
				loadSound(sChangeLevelAfter);
			}
		}else{
			// BUG: antes carga el portal que la nave (tiempo espera en metodo crearPapa)
			// por eso cuando carga el portal la nave ya esta a la derecha y dice ¡SI!

			// When you've croosed the portal, avoid return to portal before
			// There is move player in 4 directions outside the portal
			setTimeout(function(){
				if(portal1[0].x + 50 < player.x || portal1[0].x - 50 > player.x || portal1[0].y + 50 < player.y || portal1[0].y - 50 > player.y){
					portalCrossed = false;
					// console.log("Si");
				}
				// else
				// 	console.log("No");
			}, 250);
		}
	}

	// player -> portal2
	for(i in portal2){
		if(player.collide(portal2[i]) && !portalCrossed2){
	 		if(player.timeChangeLevel == 0){
				player.timeChangeLevel = _TimeDoor;
				loadSound(sChangeLevelBefore);
			}else if(player.timeChangeLevel == 1){
				if(currentMap == "map3"){
					setPositionPlayer(32, 272, 90);
				}
				portalCrossed2 = true;
				loadSound(sChangeLevelAfter);
			}
		}else{
			setTimeout(function(){
				if(portal2[0].x + 50 < player.x || portal2[0].x - 50 > player.x || portal2[0].y + 50 < player.y || portal2[0].y - 50 > player.y){
					portalCrossed2 = false;
				}
			}, 250);
		}
	}

	// bullets1 -> blockBrown
	for(i in bullets1){
		for(j in blockBrown){
			// console.log(bullets1[i].collide(blockBrown[j]));
			if(bullets1[i].collide(blockBrown[j])){
	  			player.score += _PointsBlock;

				bullets1.splice(i,1);

				if(blockBrown[j].life >= _LifesBlock)
					blockBrown.splice(j,1);
				else
					blockBrown[j].life += _DamageWeapon1;

				templateSetLightEfects(true);
			}
		}
	}

	// bullets1 -> blockRed
	for(i in bullets1){
		for(j in blockRed){
			if(bullets1[i].collide(blockRed[j])){
	  			bullets1.splice(i,1);
	  			templateSetLightEfects(true);
 			}
		}
	}

	// bullets1 -> blockWhite
	for(i in bullets1){
		for(j in blockWhiteVert){
	  		if(bullets1[i].collide(blockWhiteVert[j])){
	  			// bullets1[i].velY = -bullets1[i].velY;
	  			if(bullets1[i].maxRebounds < _MaxRebounds){
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
	  			// bullets1[i].velX = -bullets1[i].velX;
	  			if(bullets1[i].maxRebounds < _MaxRebounds){
	  				bullets1[i].velX *= -1;
	  				bullets1[i].maxRebounds++;
	  				loadSound(sRebounds);
				}else
					bullets1.splice(i,1);
			}
		}
	}

	// bullets1 -> bullets1
	// for(i in bullets1){
	// 	for(j in bullets1){
	//   		if(bullets1[i].collide(bullets1[j]))
	// 			bullets1.splice(i,1);
	// 	}
	// }

	// bullets1 -> blockLife
	for(i in bullets1){
		if(bullets1[i].collide(blockLife)){
			player.life++;
			loadSound(sGetLife);
	  		blockLife.x = random(canvas.width - 10);
	  		blockLife.y = random(canvas.height - 10);
		}
	}

	// bullets1 -> portal
	for(i in bullets1){
		for(j in portal1){
			if(bullets1[i].collide(portal1[j])){
		  		bullets1.splice(i,1);
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
		templateSetFullscreen(canvas);
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
		createMap(map6, _SizeBlock, sMap1, "map6", "#1A3E5C");
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
	}
}

function toggleSound(){
	sound = !sound;
	templateSetSound();

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
	}else{
		nameVarSound.pause();
		nameVarSound.currentTime = 0;
	}
}

function playMapSound(){
	// Convert nameMap to nameSoundMap
	// Before: map1		After: sMap1
	var soundCurrentMap = "s" + currentMap.charAt(0).toUpperCase() + currentMap.substr(1, currentMap.length);
	if(soundCurrentMap == "sMap1")
		sMap1.play();
	else if(soundCurrentMap == "sMap2")
		sMap2.play();
	else if(soundCurrentMap == "sMap3")
		sMap3.play();
	else if(soundCurrentMap == "sMap4")
		sMap4.play();
	else if(soundCurrentMap == "sMap5")
		sMap5.play();
	else if(soundCurrentMap == "sMap6")
		sMap6.play();
}

function stopSounds(){
	sWeapon1.pause();
	sWeapon2.pause();
	sGetLife.pause();
	sLoseLife.pause();
	sRebounds.pause();
	sContinue.pause();
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





