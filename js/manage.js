requirejs(['resource']);
requirejs(['pojo']);
requirejs(['map']);
requirejs(['weapon']);
requirejs(['movement']);
requirejs(['collision']);
requirejs(['sound']);

window.addEventListener('load',init,false);

const _LifePlayer = 1, _TimeProtected = 125,         _PointsBlock = 3,       _MunitionWeapon1 = 9999,
	  _LifeBlock = 3,  _TimeChangeLevel = 150,       _PointsEnemy = 10,      _MunitionWeapon2 = 300,
	  _LifeEnemy = 21, _TimeRechargeHome = 75,       _PointsTouchEnemy = 4,
	  				   _TimeShowExplosionEnemy = 30,

	  _SizeBlock = 20, _DamageWeapon = 1, _SizeWeapon = 4, _MaxRebounds = 100, _SpeedEnemy = 5;

var canvas = null, ctx = null;
var player, blockLife;
var key = null;
var keyPressed = [];
var bullets1 = [], bulletsTest = [], bullets2 = [];

var info             = true,
	pause            = false,
	gameOver         = false,
	fullScreen       = true,
	sound            = false,
	movementEnemyHor = true;

var iPlayer      = new Image(),
	iEnemy       = new Image(),
 	iBlockLife   = new Image(),
 	iBlockRed    = new Image(),
 	iBlockWhite  = new Image(),
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

		player = new Player(225,200,16,16);
		blockLife = new Element(null,null,16,16);

		loadAssets();
		reset();
		run();
	}, 250);
}
function loadAssets(){
	iPlayer.src      = 'assets/img/player1.png';
	iEnemy.src       = 'assets/img/boat.png';
	iBlockLife.src   = 'assets/img/life1.png';
	iBlockRed.src    = 'assets/img/fire2.png';
	iBlockWhite.src  = 'assets/img/blockWhite.png';
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
	setPositionPlayer(270, 330, 0);
	// setPositionPlayer(270, 280, 180);
	player.score           = 0;
	player.life            = _LifePlayer;
	player.munitionWeapon1 = _MunitionWeapon1;
	player.munitionWeapon2 = _MunitionWeapon2;
	player.timeProtected   = 0;
	blockLife.x            = random(canvas.width - 10);
	blockLife.y            = random(canvas.height - 10);
	gameOver               = false
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
		collision();
		movementEnemy(movementEnemyHor);
		lifePlayer();
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
		else{
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
		ctx.fillText('Key: '+key,5,15);
		ctx.fillText('Score: '+player.score,5,30);
		ctx.fillText('Bullets 1: '+bullets1.length,5,45);
		ctx.fillText('Bullets 2: '+bullets2.length,5,60);
		ctx.fillText('Bullets Test: '+bulletsTest.length,5,75);
		ctx.fillText('Weapon2: '+player.munitionWeapon2,5,90);
		ctx.fillText('Fps: '+ getFps().toFixed(1),5,105);
		ctx.fillText('Lifes: '+player.life,5,120);
		ctx.fillText('Rotation: '+player.rotation,5,135);
		ctx.fillText('Map: '+currentMap,5,150);
		// ctx.fillText('Time Protection: '+player.timeProtected,5,165);
		// ctx.fillText('Time Level: '+player.timeChangeLevel,5,180);
		// ctx.fillText('Time Home: '+player.timeRechargeHome,5,195);
		// ctx.fillText('Enemy: '+enemy.length,5,210);
		// ctx.fillText('Direction Enemy: '+toggleDirection,5,210);
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
	collisionBlockLife();
	collisionPlayer();
	collisionBullets1();
	collisionBullets2();
	collisionEnemy();
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
		for(i in enemy){
			if(enemy[i].timeShowExplosion > 0)
				enemy[i].timeShowExplosion--;
		}
	}
}

function movementEnemy(horizontal){
	for(i in enemy){
		if(enemy[i].life > 0){
			if(horizontal){
				if(enemy[i].x >= canvas.width - enemy[i].width){
					enemy[i].x = canvas.width - enemy[i].width - _SpeedEnemy;
					enemy[i].toggleDirection = !enemy[i].toggleDirection;
				}else if(enemy[i].x <= 0){
					enemy[i].x = _SpeedEnemy;
					enemy[i].toggleDirection = !enemy[i].toggleDirection;
				}else
					enemy[i].x += (enemy[i].toggleDirection) ? +_SpeedEnemy : -_SpeedEnemy;
			}else{
				if(enemy[i].y >= canvas.height - enemy[i].height){
					enemy[i].y = canvas.height - enemy[i].height - _SpeedEnemy;
					enemy[i].toggleDirection = !enemy[i].toggleDirection;
				}else if(enemy[i].y <= 0){
					enemy[i].y = _SpeedEnemy;
					enemy[i].toggleDirection = !enemy[i].toggleDirection;
				}else
					enemy[i].y += (enemy[i].toggleDirection) ? +_SpeedEnemy : -_SpeedEnemy;
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
		createMap(map1, _SizeBlock, sMap1, "map1", "#011224");
		key = null;
	}else if(key == formatKey("PadNum2") || key == formatKey("2")){
		createMap(map2, _SizeBlock, sMap2, "map2", "#010F1D");
		key = null;
	}else if(key == formatKey("PadNum3") || key == formatKey("3")){
		createMap(map3, _SizeBlock, sMap1, "map3", "#010B16");
		key = null;
	}else if(key == formatKey("PadNum4") || key == formatKey("4")){
		createMap(map4, _SizeBlock, sMap1, "map4", "#08212F");
		key = null;
	}else if(key == formatKey("PadNum5") || key == formatKey("5")){
		createMap(map5, _SizeBlock, sMap1, "map5", "#0F2F40");
		key = null;
	}else if(key == formatKey("PadNum6") || key == formatKey("6")){
		createMap(map6, _SizeBlock, sMap1, "map6", "#011224");
		key = null;
	}else if(key == formatKey("PadNum7") || key == formatKey("7")){
		info = !info;
		key = null;
	}else if(key == formatKey("PadNum8") || key == formatKey("8")){
		key = null;
	}else if(key == formatKey("R")){
		reset();
		createMap(map1, _SizeBlock, sMap1, "map1");
		key = null;
	}
}