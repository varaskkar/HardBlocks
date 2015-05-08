requirejs(['resource']);
requirejs(['pojo']);
requirejs(['map']);
requirejs(['weapon']);
requirejs(['movement']);
requirejs(['collision']);
requirejs(['sound']);

window.addEventListener('load',init,false);

const _LifePlayer = 2, _TimeProtected = 125,         _PointsBlock = 3,       _MunitionWeapon1 = 9999,
	  _LifeBlock = 3,  _TimeChangeLevel = 150,       _PointsEnemy = 10,      _MunitionWeapon2 = 500,
	  _LifeEnemy = 21, _TimeRechargeHome = 75,       _PointsTouchEnemy = 4,
	  				   _TimeShowExplosionEnemy = 30,
	  				   _TimeShowDamagedEnemy = 10,

	  _SizeBlock = 20, _DamageWeapon = 1, _SizeWeapon = 4, _MaxRebounds = 100, _SpeedEnemy = 2;

var canvas = null, ctx = null;
var key = null;
var keyPressed = [];
var bullets1 = [], bullets2 = [], bulletsTest = [];

var info             = true,
	pause            = false,
	gameOver         = false,
	fullScreen       = false,
	sound            = false;

var iPlayer      = new Image(),
	iEnemy       = new Image(),
 	iLife        = new Image(),
 	iBlockRed    = new Image(),
 	iBlockWhite  = new Image(),
 	iBlockGray   = new Image(),
 	iBlockBrown0 = new Image(),
 	iBlockBrown1 = new Image(),
 	iBlockBrown2 = new Image(),
 	iBlockBrown3 = new Image();

var sWeapon1      = new Audio(),
	sWeapon2      = new Audio(),
	sGetLife      = new Audio(),
	sLoseLife     = new Audio(),
	sRebounds     = new Audio(),
	sContinue     = new Audio(),
	sNoMunition   = new Audio(),
	sPortalInput  = new Audio(),
	sPortalOutput = new Audio(),
	sGameOver     = new Audio(),
	sExplosion    = new Audio(),
	sHome         = new Audio(),
	sMap1         = new Audio(),
	sMap2         = new Audio(),
	sMap3         = new Audio(),
	sMap4         = new Audio(),
	sMap5         = new Audio(),
	sMap6         = new Audio();

function init(){
	// Wait to load completely scripts of the header
	setTimeout(function(){
		canvas = document.getElementsByTagName('canvas')[0];
		ctx = canvas.getContext('2d');

		createMap();
		loadAssets();
		reset();
		run();
	}, 250);
}

function loadAssets(){
	iPlayer.src      = 'assets/img/player1.png';
	iEnemy.src       = 'assets/img/boat.png';
	iLife.src        = 'assets/img/life1.png';
	iBlockRed.src    = 'assets/img/fire2.png';
	iBlockWhite.src  = 'assets/img/blockWhite.png';
	iBlockGray.src   = 'assets/img/blockGray.png';
	iBlockBrown0.src = 'assets/img/blockBrown0.png';
	iBlockBrown1.src = 'assets/img/blockBrown1.png';
	iBlockBrown2.src = 'assets/img/blockBrown2.png';
	iBlockBrown3.src = 'assets/img/blockBrown3.png';

	sWeapon1.src      = 'assets/audio/weapon1.wav';
	sWeapon2.src      = 'assets/audio/weapon2.wav';
	sGetLife.src      = 'assets/audio/blip.wav';
	sLoseLife.src     = 'assets/audio/error.wav';
	sRebounds.src     = 'assets/audio/rebounds.wav';
	sContinue.src     = 'assets/audio/recharge.wav';
	sNoMunition.src   = 'assets/audio/noMunition.wav';
	sPortalInput.src  = 'assets/audio/process4.wav';
	sPortalOutput.src = 'assets/audio/life.wav';
	sGameOver.src     = 'assets/audio/gameOver.wav';
	sExplosion.src    = 'assets/audio/explosion.wav';
	sHome.src         = 'assets/audio/magic.wav';
	sMap1.src         = 'assets/audio/map1.wav';
	sMap2.src         = 'assets/audio/map2.wav';
	sMap3.src         = 'assets/audio/map2.wav';
	sMap4.src         = 'assets/audio/map2.wav';
	sMap5.src         = 'assets/audio/map2.wav';
	sMap6.src         = 'assets/audio/map2.wav';

	templateSetSound(sound);
	templateSetFullscreen(fullScreen);
	templateSetLightEfects(false);
}

function reset(){
	player.score           = 0;
	player.life            = _LifePlayer;
	player.munitionWeapon1 = _MunitionWeapon1;
	player.munitionWeapon2 = _MunitionWeapon2;
	player.timeProtected   = 0;
	gameOver               = false
	loadMap("map_1", 270, 330, 0);

	// Map to create animated gifs, to show the game's features in Github
	// loadMap("map_11", 290, 81, 90);
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
	    movementPlayer();
		movementEnemy();
		weapon1(player, bullets1);
		weapon2(player, bullets2);
		// weaponTest(player, bulletsTest);
		collision();
		basicConditions();
	}
	keyboard();
}

function draw() {
	ctx.clearRect(0,0,canvas.width,canvas.height);

	for(i in home){
		if(player.timeRechargeHome > 0)
  			ctx.strokeStyle = (player.timeRechargeHome%3 == 0) ? "#022939" : "#03404A";
		else
  			ctx.strokeStyle = "#03404A";
		roundRect(ctx, home[i].x, home[i].y, home[i].width, home[i].height, 30, false, true);
	}

	// bullets1 -> home
	ctx.fillStyle = '#690303';
	ctx.strokeStyle = "#692A03";
	for(i in bullets1){
		for(j in home){
			if(bullets1[i].collide(home[j]))
				roundRect(ctx, home[j].x, home[j].y, home[j].width, home[j].height, 20, false, true);
		}
	}

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
		if(player.timeChangeLevel > 0)
			ctx.fillStyle = (player.timeChangeLevel%3 == 0) ? '#011224' : '#07213C';
		else
			ctx.fillStyle = '#07213C';

		ctx.strokeStyle = "#8A0A0A";
		roundRect(ctx, portalInput[i].x, portalInput[i].y, portalInput[i].width, portalInput[i].height, 25, true, true);
	}

	for(i in portalOutput){
		if(player.timeChangeLevel > 0)
			ctx.fillStyle = (player.timeChangeLevel%3 == 0) ? '#011224' : '#07213C';
		else
			ctx.fillStyle = '#07213C';

		ctx.strokeStyle = "#8A0A0A";
		roundRect(ctx, portalOutput[i].x, portalOutput[i].y, portalOutput[i].width, portalOutput[i].height, 25, true, true);
	}

	if(player.timeProtected > 0){
		if(player.timeProtected%2 == 0)
			showRotatedPlayer();
	}else
		showRotatedPlayer();

	if(typeof life != "undefined")
		ctx.drawImage(iLife,life.x,life.y,life.width,life.height);

	for(i in enemy){
		if(enemy[i].life > 0){
			if(enemy[i].timeShowDamage > 0){
				if(enemy[i].timeShowDamage%2 == 0)
					ctx.drawImage(iEnemy,enemy[i].x,enemy[i].y,enemy[i].width,enemy[i].height);
			}else
				ctx.drawImage(iEnemy,enemy[i].x,enemy[i].y,enemy[i].width,enemy[i].height);
		}else{
	  		if(enemy[i].setTimeOnlyOnce){
	  			enemy[i].timeShowExplosion = _TimeShowExplosionEnemy;
	  			enemy[i].setTimeOnlyOnce = false;
	  		}
			if(enemy[i].timeShowExplosion > 0){
				var centerX = enemy[i].x+enemy[i].width/2;
				var centerY = enemy[i].y+enemy[i].height/2;
				circle(ctx, centerX, centerY, enemy[i].width, true, true, "#6B0801", "#6B1601");
			}else
				enemy.splice(i,1);
		}
	}

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

	for(i in blockGray)
		ctx.drawImage(iBlockGray,blockGray[i].x,blockGray[i].y,blockGray[i].width,blockGray[i].height);

	for(i in blockWhiteVert)
		ctx.drawImage(iBlockWhite,blockWhiteVert[i].x,blockWhiteVert[i].y,blockWhiteVert[i].width,blockWhiteVert[i].height);

	for(i in blockWhiteHor)
		ctx.drawImage(iBlockWhite,blockWhiteHor[i].x,blockWhiteHor[i].y,blockWhiteHor[i].width,blockWhiteHor[i].height);

	for(i in fire)
		ctx.drawImage(iBlockRed,fire[i].x,fire[i].y,fire[i].width,fire[i].height);

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
		ctx.fillText('Key: '+key,5,15);
		ctx.fillText('Score: '+player.score,5,30);
		ctx.fillText('Bullets 1: '+bullets1.length,5,45);
		ctx.fillText('Bullets 2: '+bullets2.length,5,60);
		ctx.fillText('Bullets Test: '+bulletsTest.length,5,75);
		ctx.fillText('Weapon2: '+player.munitionWeapon2,5,90);
		ctx.fillText('Fps: '+ getFps().toFixed(1),5,105);
		ctx.fillText('Lifes: '+player.life,5,120);
		ctx.fillText('Rotation: '+player.rotation,5,135);
		ctx.fillText('Map: '+currentMap.replace("map_",""),5,150);
		// ctx.fillText('Time Protection: '+player.timeProtected,5,165);
		// ctx.fillText('Time Level: '+player.timeChangeLevel,5,180);
		// ctx.fillText('Time Home: '+player.timeRechargeHome,5,195);
		// ctx.fillText('Enemy: '+enemy.length,5,210);
		// ctx.fillText('Enemy 1 - Hor/Vert: '+enemy[0].toggleDirection,5,210);
		// ctx.fillText('Enemy 2 - Hor/Vert: '+enemy[1].toggleDirection,5,225);
		// ctx.fillText('Enemy 1 - Dir: '+enemy[0].direction,5,240);
		// ctx.fillText('Enemy 2 - Dir: '+enemy[1].direction,5,255);
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
	collisionPlayer();
	collisionEnemy();
	collisionLife();
	collisionBullets1();
	collisionBullets2();
}

function basicConditions(){
	if(gameOver){
		pause = true;
		loadSound(sGameOver);
	}else{
		if(player.rotation > 360)
			player.rotation = 0;
   	 	else if(player.rotation < 0)
			player.rotation = 360;

		if(player.life < 1)
			gameOver = true;
		if(player.timeProtected > 0)
	        player.timeProtected--;
		if(player.timeChangeLevel > 0)
			player.timeChangeLevel--;
		if(player.timeRechargeHome > 0)
			player.timeRechargeHome--;
		for(i in enemy){
			if(enemy[i].timeShowExplosion > 0)
				enemy[i].timeShowExplosion--;
			if(enemy[i].timeShowDamage > 0)
				enemy[i].timeShowDamage--;
		}
	}
}

function showRotatedPlayer(){
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
		if(pause)
			stopSounds();
		else
			playMapSound();

		key = null;
	}else if(key == formatKey("M")){
		fullScreen = !fullScreen;
		templateSetFullscreen(fullScreen);
		key = null;
	}else if(key == formatKey("S")){
		if(!pause)
			toggleSound();
		key = null;
	}else if(key == formatKey("PadNum1") || key == formatKey("1")){
		loadMap("map_1");
		key = null;
	}else if(key == formatKey("PadNum2") || key == formatKey("2")){
		loadMap("map_2");
		key = null;
	}else if(key == formatKey("PadNum3") || key == formatKey("3")){
		loadMap("map_3");
		key = null;
	}else if(key == formatKey("PadNum4") || key == formatKey("4")){
		loadMap("map_4");
		key = null;
	}else if(key == formatKey("PadNum5") || key == formatKey("5")){
		loadMap("map_5");
		key = null;
	}else if(key == formatKey("PadNum6") || key == formatKey("6")){
		loadMap("map_6");
		key = null;
	}else if(key == formatKey("PadNum7") || key == formatKey("7")){
		info = !info;
		key = null;
	}else if(key == formatKey("PadNum8") || key == formatKey("8")){
		key = null;
	}else if(key == formatKey("R")){
		reset();
		key = null;
	}
}