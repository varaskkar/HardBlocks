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

function Enemy(x, y, width, height, life){
	this.x = x;
 	this.y = y;
 	this.width = width;
 	this.height = height;
 	this.life = 0;

	// Damage
 	this.timeShowDamage = 0;

 	// Explosion
 	this.timeShowExplosion = 0;
 	this.setTimeOnlyOnce = true;

 	// Movement
 	this.toggleDirection = false;
 	this.direction = "left";

 	this.distanceTraveled = 0;

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

function Player(x, y, width, height){
	this.x = x;
 	this.y = y;
 	this.width = width;
 	this.height = height;
 	this.life = 0;
 	this.rotation = 0;
 	this.score = 0;
 	this.timeProtected = 0;
 	this.timeChangeLevel = 0;
 	this.timeRechargeHome = 0;
 	this.munitionWeapon1 = 0;
 	this.munitionWeapon2 = 0;

 	if(this.munitionWeapon1 >= 999)
 		this.munitionWeapon1 = 99999999999;

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

	// Bullets's Atributes
 	this.mover360 = false;		// Up
 	this.mover180 = false;		// Down
 	this.mover270 = false;		// Left
 	this.mover90 = false;		// Right

	this.mover275 = false;
	this.mover280 = false;
	this.mover285 = false;
	this.mover290 = false;
	this.mover295 = false;
	this.mover300 = false;
	this.mover305 = false;
	this.mover310 = false;
	this.mover315 = false;
	this.mover320 = false;
	this.mover325 = false;
	this.mover330 = false;
	this.mover335 = false;
	this.mover340 = false;
	this.mover345 = false;
	this.mover350 = false;
	this.mover355 = false;

	this.mover5 = false;
	this.mover10 = false;
	this.mover15 = false;
 	this.mover20 = false;
 	this.mover25 = false;
 	this.mover30 = false;
 	this.mover35 = false;
 	this.mover40 = false;
 	this.mover45 = false;
	this.mover50 = false;
	this.mover55 = false;
 	this.mover60 = false;
 	this.mover65 = false;
 	this.mover70 = false;
 	this.mover75 = false;
 	this.mover80 = false;
 	this.mover85 = false;

 	this.mover95 = false;
 	this.mover100 = false;
 	this.mover105 = false;
 	this.mover110 = false;
 	this.mover115 = false;
 	this.mover120 = false;
 	this.mover125 = false;
 	this.mover130 = false;
 	this.mover135 = false;
 	this.mover140 = false;
 	this.mover145 = false;
 	this.mover150 = false;
 	this.mover155 = false;
 	this.mover160 = false;
 	this.mover165 = false;
 	this.mover170 = false;
 	this.mover175 = false;

 	this.mover185 = false;
 	this.mover190 = false;
 	this.mover195 = false;
 	this.mover200 = false;
 	this.mover205 = false;
 	this.mover210 = false;
 	this.mover215 = false;
 	this.mover220 = false;
 	this.mover225 = false;
 	this.mover230 = false;
 	this.mover235 = false;
 	this.mover240 = false;
 	this.mover245 = false;
 	this.mover250 = false;
 	this.mover255 = false;
 	this.mover260 = false;
 	this.mover265 = false;

 	this.permitir = false;
 	this.collide = function(thing){
	  	if(typeof thing != "undefined"){
	   		return this.x < thing.x+thing.width &&
	   		       this.x+this.width > thing.x &&
	   			   this.y < thing.y+thing.height &&
	   			   this.y+this.height>thing.y;
	  	}
 	}
}