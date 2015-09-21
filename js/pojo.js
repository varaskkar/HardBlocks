console.log("Lib 'Pojo' loaded");

function Map(name, map, sound, colorBackground, size){
	this.name = name;
	this.map = map;
 	this.sound = sound;
 	this.colorBackground = colorBackground;
 	this.size = size;
}

function Element(x, y, width, height, life){
	this.x = x;
 	this.y = y;
 	this.width = width;
 	this.height = height;
 	this.life = 0;

 	if(typeof life != "undefined")
 		this.life = life;

 	this.collide = function(thing){
	  	if(typeof thing != "undefined"){
	   		return this.x < thing.x+thing.width &&
	   		       this.x+this.width > thing.x &&
	   			   this.y < thing.y+thing.height &&
	   			   this.y+this.height>thing.y;
	  	}
 	}
}

function Enemy(x, y, width, height, life, movement){
	this.x = x;
 	this.y = y;
 	this.width = width;
 	this.height = height;
 	this.life = 0;

	// Initial's values
	this.initX = x;
 	this.initY = y;
 	this.initWidth = width;
 	this.initHeight = height;

	// Damage
 	this.timeShowDamage = 0;

 	// Explosion
 	this.timeShowExplosion = 0;
 	this.setTimeOnlyOnce = true;
 	this.sizeExplosion = 0;
 	this.copyX;
 	this.copyY;
 	this.copyWidth;
 	this.copyHeight;
 	this.showExplosionBullet3 = false;		// Colission.js 	Bullets3 -> Enemy
 	// this.XTest;
 	// this.YTest;
 	// this.widthTest;
 	// this.heightTest;

 	// Movement
 	this.movement = "";
 	this.toggleDirection = true;
 	this.direction = "left";
 	this.distanceTraveled = 0;
 	this.acceleration = 0;

 	// Weapon
 	this.timeReturnShoot = 0;
 	this.bullets = [];

 	// Zone Attack
 	this.blockXClosestLeft;
 	this.blockXClosestRight;
 	this.getValuesXOnlyOnce = true;

 	// 2 images when is moved
 	// this.timeChangeImg = 0;

 	if(typeof life != "undefined")
 		this.life = life;
 	if(typeof movement != "undefined")
 		this.movement = movement;

 	this.collide = function(thing){
	  	if(typeof thing != "undefined"){
	   		return this.x < thing.x+thing.width &&
	   		       this.x+this.width > thing.x &&
	   			   this.y < thing.y+thing.height &&
	   			   this.y+this.height>thing.y;
	  	}
 	}
}

function Player(x, y, width, height){
	this.x = x;
 	this.y = y;
 	this.width = width;
 	this.height = height;
 	this.health = 0;
 	this.life = 0;
 	this.rotation = 0;
 	this.score = 0;
 	this.timeProtected = 0;
 	this.timeChangeLevel = 0;
 	this.timeRechargeHome = 0;

 	// Weapon 1
 	this.timeReturnShootWeapon1 = 0;
 	this.bullets1 = [];
 	this.munition1 = 0;

 	// Weapon 2
 	this.timeReturnShootWeapon2 = 0;
 	this.bullets2 = [];
 	this.munition2 = 0;

 	// Weapon 3
 	this.timeReturnShootWeapon3 = 0;
 	this.bullets3 = [];
 	this.munition3 = 0;

 	this.collide = function(thing){
	  	if(typeof thing != "undefined"){
	   		return this.x < thing.x+thing.width &&
	   		       this.x+this.width > thing.x &&
	   			   this.y < thing.y+thing.height &&
	   			   this.y+this.height>thing.y;
	  	}
 	}
}

function Bullet(x, y, width, height, velX, velY){
	this.x = x;
 	this.y = y;
 	this.width = width;
 	this.height = height;
 	this.velX = velX;
 	this.velY = velY;
 	this.maxRebounds = 0;

 	// Explosion to collide - Weapon3
 	this.isCollide = false;
 	this.timeShowExplosion = 0;
 	this.setTimeOnlyOnce = true;
 	this.sizeExplosion = 0;
 	this.copyX;
 	this.copyY;
 	this.copyWidth;
 	this.copyHeight;

	// Bullets's Atributes
 	this.move360 = false;		// Up
 	this.move180 = false;		// Down
 	this.move270 = false;		// Left
 	this.move90 = false;		// Right

	this.move275 = false;
	this.move280 = false;
	this.move285 = false;
	this.move290 = false;
	this.move295 = false;
	this.move300 = false;
	this.move305 = false;
	this.move310 = false;
	this.move315 = false;
	this.move320 = false;
	this.move325 = false;
	this.move330 = false;
	this.move335 = false;
	this.move340 = false;
	this.move345 = false;
	this.move350 = false;
	this.move355 = false;

	this.move5 = false;
	this.move10 = false;
	this.move15 = false;
 	this.move20 = false;
 	this.move25 = false;
 	this.move30 = false;
 	this.move35 = false;
 	this.move40 = false;
 	this.move45 = false;
	this.move50 = false;
	this.move55 = false;
 	this.move60 = false;
 	this.move65 = false;
 	this.move70 = false;
 	this.move75 = false;
 	this.move80 = false;
 	this.move85 = false;

 	this.move95 = false;
 	this.move100 = false;
 	this.move105 = false;
 	this.move110 = false;
 	this.move115 = false;
 	this.move120 = false;
 	this.move125 = false;
 	this.move130 = false;
 	this.move135 = false;
 	this.move140 = false;
 	this.move145 = false;
 	this.move150 = false;
 	this.move155 = false;
 	this.move160 = false;
 	this.move165 = false;
 	this.move170 = false;
 	this.move175 = false;

 	this.move185 = false;
 	this.move190 = false;
 	this.move195 = false;
 	this.move200 = false;
 	this.move205 = false;
 	this.move210 = false;
 	this.move215 = false;
 	this.move220 = false;
 	this.move225 = false;
 	this.move230 = false;
 	this.move235 = false;
 	this.move240 = false;
 	this.move245 = false;
 	this.move250 = false;
 	this.move255 = false;
 	this.move260 = false;
 	this.move265 = false;

 	this.allow = false;

 	// Bullet's weapon3
 	this.rotationFixed;
 	this.blockRotation = false;

 	this.collide = function(thing){
	  	if(typeof thing != "undefined"){
	   		return this.x < thing.x+thing.width &&
	   		       this.x+this.width > thing.x &&
	   			   this.y < thing.y+thing.height &&
	   			   this.y+this.height>thing.y;
	  	}
 	}
}