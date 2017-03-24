console.log("Lib 'Weapon' loaded");

function weapon1(player, bullets){

	// Make bullets
	if((key == formatKey("Z") || key == formatKey("SPACE")) && player.timeReturnShootWeapon1 == 0){
		if(player.rotation == 0 || player.rotation == 360)	bullets.push(new Bullet(player.x+player.width/2,player.y,_SizeWeapon,_SizeWeapon,4,4));
		else if(player.rotation == 90)				bullets.push(new Bullet(player.x+player.width,player.y+player.height/2,_SizeWeapon,_SizeWeapon,4,4));
		else if(player.rotation == 180)				bullets.push(new Bullet(player.x+player.width/2,player.y+player.height,_SizeWeapon,_SizeWeapon,4,4));
		else if(player.rotation == 270)				bullets.push(new Bullet(player.x,player.y+player.height/2,_SizeWeapon,_SizeWeapon,4,4));

		else if(player.rotation == 275){ 	bullets.push(new Bullet(player.x+player.width/2 - 8,player.y + 4,_SizeWeapon,_SizeWeapon,4,1));  }
		else if(player.rotation == 280){ 	bullets.push(new Bullet(player.x+player.width/2 - 8,player.y + 4,_SizeWeapon,_SizeWeapon,4,1));  }
		else if(player.rotation == 285){ 	bullets.push(new Bullet(player.x+player.width/2 - 7,player.y + 3,_SizeWeapon,_SizeWeapon,4,1));  }
		else if(player.rotation == 290){ 	bullets.push(new Bullet(player.x+player.width/2 - 7,player.y + 3,_SizeWeapon,_SizeWeapon,4,2));  }
		else if(player.rotation == 295){ 	bullets.push(new Bullet(player.x+player.width/2 - 6,player.y + 2,_SizeWeapon,_SizeWeapon,4,2));  }
		else if(player.rotation == 300){ 	bullets.push(new Bullet(player.x+player.width/2 - 6,player.y + 2,_SizeWeapon,_SizeWeapon,4,2));  }
		else if(player.rotation == 305){ 	bullets.push(new Bullet(player.x+player.width/2 - 5,player.y,_SizeWeapon,_SizeWeapon,4,3));  }
		else if(player.rotation == 310){ 	bullets.push(new Bullet(player.x+player.width/2 - 5,player.y,_SizeWeapon,_SizeWeapon,4,3));  }
		else if(player.rotation == 315){ 	bullets.push(new Bullet(player.x+player.width/2 - 4.5,player.y,_SizeWeapon,_SizeWeapon,3,3));  }
		else if(player.rotation == 320){ 	bullets.push(new Bullet(player.x+player.width/2 - 4.5,player.y,_SizeWeapon,_SizeWeapon,3,4));  }
		else if(player.rotation == 325){ 	bullets.push(new Bullet(player.x+player.width/2 - 3,player.y,_SizeWeapon,_SizeWeapon,3,4));  }
		else if(player.rotation == 330){ 	bullets.push(new Bullet(player.x+player.width/2 - 3,player.y,_SizeWeapon,_SizeWeapon,2,4));  }
		else if(player.rotation == 335){ 	bullets.push(new Bullet(player.x+player.width/2 - 2,player.y,_SizeWeapon,_SizeWeapon,2,4));  }
		else if(player.rotation == 340){ 	bullets.push(new Bullet(player.x+player.width/2 - 0.75,player.y,_SizeWeapon,_SizeWeapon,2,4));  }
		else if(player.rotation == 345){ 	bullets.push(new Bullet(player.x+player.width/2 - 0.75,player.y,_SizeWeapon,_SizeWeapon,1,4));  }
		else if(player.rotation == 350){ 	bullets.push(new Bullet(player.x+player.width/2,player.y,_SizeWeapon,_SizeWeapon,1,4));  }
		else if(player.rotation == 355){ 	bullets.push(new Bullet(player.x+player.width/2,player.y,_SizeWeapon,_SizeWeapon,1,4));  }

		else if(player.rotation == 5){ 		bullets.push(new Bullet(player.x+player.width/2,player.y,_SizeWeapon,_SizeWeapon,1,4));  }
		else if(player.rotation == 10){ 	bullets.push(new Bullet(player.x+player.width/2,player.y,_SizeWeapon,_SizeWeapon,1,4));  }
		else if(player.rotation == 15){ 	bullets.push(new Bullet(player.x+player.width/2 + 0.75,player.y,_SizeWeapon,_SizeWeapon,1,4));  }
		else if(player.rotation == 20){ 	bullets.push(new Bullet(player.x+player.width/2 + 0.75,player.y,_SizeWeapon,_SizeWeapon,2,4));  }
		else if(player.rotation == 25){ 	bullets.push(new Bullet(player.x+player.width/2 + 2,player.y,_SizeWeapon,_SizeWeapon,2,4));  }
		else if(player.rotation == 30){ 	bullets.push(new Bullet(player.x+player.width/2 + 3,player.y,_SizeWeapon,_SizeWeapon,2,4));  }
		else if(player.rotation == 35){ 	bullets.push(new Bullet(player.x+player.width/2 + 3,player.y,_SizeWeapon,_SizeWeapon,3,4));  }
		else if(player.rotation == 40){ 	bullets.push(new Bullet(player.x+player.width/2 + 4.5,player.y,_SizeWeapon,_SizeWeapon,3,4));  }
		else if(player.rotation == 45){ 	bullets.push(new Bullet(player.x+player.width/2 + 4.5,player.y,_SizeWeapon,_SizeWeapon,3,3));  }
		else if(player.rotation == 50){ 	bullets.push(new Bullet(player.x+player.width/2 + 5,player.y,_SizeWeapon,_SizeWeapon,4,3));  }
		else if(player.rotation == 55){ 	bullets.push(new Bullet(player.x+player.width/2 + 5,player.y,_SizeWeapon,_SizeWeapon,4,3));  }
		else if(player.rotation == 60){ 	bullets.push(new Bullet(player.x+player.width/2 + 6,player.y + 2,_SizeWeapon,_SizeWeapon,4,2));  }
		else if(player.rotation == 65){ 	bullets.push(new Bullet(player.x+player.width/2 + 6,player.y + 2,_SizeWeapon,_SizeWeapon,4,2));  }
		else if(player.rotation == 70){ 	bullets.push(new Bullet(player.x+player.width/2 + 7,player.y + 3,_SizeWeapon,_SizeWeapon,4,2));  }
		else if(player.rotation == 75){ 	bullets.push(new Bullet(player.x+player.width/2 + 7,player.y + 3,_SizeWeapon,_SizeWeapon,4,1));  }
		else if(player.rotation == 80){ 	bullets.push(new Bullet(player.x+player.width/2 + 8,player.y + 4,_SizeWeapon,_SizeWeapon,4,1));  }
		else if(player.rotation == 85){ 	bullets.push(new Bullet(player.x+player.width/2 + 8,player.y + 4,_SizeWeapon,_SizeWeapon,4,1));  }

		else if(player.rotation == 95){ 	bullets.push(new Bullet(player.x+player.width/2 + 8,player.y+player.height - 4,_SizeWeapon,_SizeWeapon,4,1));  }
		else if(player.rotation == 100){ 	bullets.push(new Bullet(player.x+player.width/2 + 8,player.y+player.height - 4,_SizeWeapon,_SizeWeapon,4,1));  }
		else if(player.rotation == 105){ 	bullets.push(new Bullet(player.x+player.width/2 + 7,player.y+player.height - 3,_SizeWeapon,_SizeWeapon,4,1));  }
		else if(player.rotation == 110){ 	bullets.push(new Bullet(player.x+player.width/2 + 7,player.y+player.height - 3,_SizeWeapon,_SizeWeapon,4,2));  }
		else if(player.rotation == 115){ 	bullets.push(new Bullet(player.x+player.width/2 + 6,player.y+player.height - 2,_SizeWeapon,_SizeWeapon,4,2));  }
		else if(player.rotation == 120){ 	bullets.push(new Bullet(player.x+player.width/2 + 6,player.y+player.height - 2,_SizeWeapon,_SizeWeapon,4,2));  }
		else if(player.rotation == 125){ 	bullets.push(new Bullet(player.x+player.width/2 + 5,player.y+player.height,_SizeWeapon,_SizeWeapon,4,3));  }
		else if(player.rotation == 130){ 	bullets.push(new Bullet(player.x+player.width/2 + 5,player.y+player.height,_SizeWeapon,_SizeWeapon,4,3));  }
		else if(player.rotation == 135){ 	bullets.push(new Bullet(player.x+player.width/2 + 4.5,player.y+player.height,_SizeWeapon,_SizeWeapon,3,3));  }
		else if(player.rotation == 140){ 	bullets.push(new Bullet(player.x+player.width/2 + 4.5,player.y+player.height,_SizeWeapon,_SizeWeapon,3,4));  }
		else if(player.rotation == 145){ 	bullets.push(new Bullet(player.x+player.width/2 + 3,player.y+player.height,_SizeWeapon,_SizeWeapon,3,4));  }
		else if(player.rotation == 150){ 	bullets.push(new Bullet(player.x+player.width/2 + 3,player.y+player.height,_SizeWeapon,_SizeWeapon,2,4));  }
		else if(player.rotation == 155){ 	bullets.push(new Bullet(player.x+player.width/2 + 2,player.y+player.height,_SizeWeapon,_SizeWeapon,2,4));  }
		else if(player.rotation == 160){ 	bullets.push(new Bullet(player.x+player.width/2 + 0.75,player.y+player.height,_SizeWeapon,_SizeWeapon,2,4));  }
		else if(player.rotation == 165){ 	bullets.push(new Bullet(player.x+player.width/2 + 0.75,player.y+player.height,_SizeWeapon,_SizeWeapon,1,4));  }
		else if(player.rotation == 170){ 	bullets.push(new Bullet(player.x+player.width/2,player.y+player.height,_SizeWeapon,_SizeWeapon,1,4));  }
		else if(player.rotation == 175){ 	bullets.push(new Bullet(player.x+player.width/2,player.y+player.height,_SizeWeapon,_SizeWeapon,1,4));  }

		else if(player.rotation == 185){ 	bullets.push(new Bullet(player.x+player.width/2,player.y+player.height,_SizeWeapon,_SizeWeapon,1,4));  }
		else if(player.rotation == 190){ 	bullets.push(new Bullet(player.x+player.width/2 - 2,player.y+player.height,_SizeWeapon,_SizeWeapon,1,4));  }
		else if(player.rotation == 195){ 	bullets.push(new Bullet(player.x+player.width/2 - 2.5,player.y+player.height,_SizeWeapon,_SizeWeapon,1,4));  }
		else if(player.rotation == 200){ 	bullets.push(new Bullet(player.x+player.width/2 - 2.5,player.y+player.height,_SizeWeapon,_SizeWeapon,2,4));  }
		else if(player.rotation == 205){ 	bullets.push(new Bullet(player.x+player.width/2 - 3,player.y+player.height,_SizeWeapon,_SizeWeapon,2,4));  }
		else if(player.rotation == 210){ 	bullets.push(new Bullet(player.x+player.width/2 - 3,player.y+player.height,_SizeWeapon,_SizeWeapon,2,4));  }
		else if(player.rotation == 215){ 	bullets.push(new Bullet(player.x+player.width/2 - 4,player.y+player.height,_SizeWeapon,_SizeWeapon,3,4));  }
		else if(player.rotation == 220){ 	bullets.push(new Bullet(player.x+player.width/2 - 5.5,player.y+player.height,_SizeWeapon,_SizeWeapon,3,4));  }
		else if(player.rotation == 225){ 	bullets.push(new Bullet(player.x+player.width/2 - 6.5,player.y+player.height,_SizeWeapon,_SizeWeapon,3,3));  }
		else if(player.rotation == 230){ 	bullets.push(new Bullet(player.x+player.width/2 - 8,player.y+player.height,_SizeWeapon,_SizeWeapon,4,3));  }
		else if(player.rotation == 235){ 	bullets.push(new Bullet(player.x+player.width/2 - 8,player.y+player.height,_SizeWeapon,_SizeWeapon,4,3));  }
		else if(player.rotation == 240){ 	bullets.push(new Bullet(player.x+player.width/2 - 6,player.y+player.height - 3,_SizeWeapon,_SizeWeapon,4,2));  }
		else if(player.rotation == 245){ 	bullets.push(new Bullet(player.x+player.width/2 - 6,player.y+player.height - 3,_SizeWeapon,_SizeWeapon,4,2));  }
		else if(player.rotation == 250){ 	bullets.push(new Bullet(player.x+player.width/2 - 7,player.y+player.height - 4,_SizeWeapon,_SizeWeapon,4,2));  }
		else if(player.rotation == 255){ 	bullets.push(new Bullet(player.x+player.width/2 - 7,player.y+player.height - 4,_SizeWeapon,_SizeWeapon,4,1));  }
		else if(player.rotation == 260){ 	bullets.push(new Bullet(player.x+player.width/2 - 8,player.y+player.height - 5,_SizeWeapon,_SizeWeapon,4,1));  }
		else if(player.rotation == 265){ 	bullets.push(new Bullet(player.x+player.width/2 - 8,player.y+player.height - 6,_SizeWeapon,_SizeWeapon,4,1));  }

		loadSound(sWeapon1);
		player.timeReturnShootWeapon1 = _TimeReturnShootPlayerWeapon1;

		key = null;
	}

	// Move bullets
	// ------------
	// bullets[i].move360 		-->		The bullet only is moved to up though change the rotation
	// bullets[i].allow			-->		Avoid 1 determinate bullet change of direction when spin the spaceship(rotation)
	for(i in bullets){
		if((player.rotation == 0 || player.rotation == 360) && !bullets[i].allow){	bullets[i].move360 = true;	bullets[i].allow = true;	}
		else if(player.rotation == 90 && !bullets[i].allow){          		bullets[i].move90 = true;	bullets[i].allow = true;	}
		else if(player.rotation == 180 && !bullets[i].allow){				bullets[i].move180 = true;	bullets[i].allow = true; 	}
		else if(player.rotation == 270 && !bullets[i].allow){				bullets[i].move270 = true;	bullets[i].allow = true;	}

		else if(player.rotation == 275 && !bullets[i].allow){  			bullets[i].move275 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 280 && !bullets[i].allow){  			bullets[i].move280 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 285 && !bullets[i].allow){  			bullets[i].move285 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 290 && !bullets[i].allow){  			bullets[i].move290 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 295 && !bullets[i].allow){  			bullets[i].move295 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 300 && !bullets[i].allow){  			bullets[i].move300 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 305 && !bullets[i].allow){  			bullets[i].move305 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 310 && !bullets[i].allow){  			bullets[i].move310 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 315 && !bullets[i].allow){  			bullets[i].move315 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 320 && !bullets[i].allow){  			bullets[i].move320 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 325 && !bullets[i].allow){  			bullets[i].move325 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 330 && !bullets[i].allow){  			bullets[i].move330 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 335 && !bullets[i].allow){  			bullets[i].move335 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 340 && !bullets[i].allow){  			bullets[i].move340 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 345 && !bullets[i].allow){  			bullets[i].move345 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 350 && !bullets[i].allow){  			bullets[i].move350 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 355 && !bullets[i].allow){  			bullets[i].move355 = true; 	bullets[i].allow = true; 	}

		else if(player.rotation == 5 && !bullets[i].allow){  			bullets[i].move5 = true; 		bullets[i].allow = true; 	}
		else if(player.rotation == 10 && !bullets[i].allow){  			bullets[i].move10 = true; 		bullets[i].allow = true; 	}
		else if(player.rotation == 15 && !bullets[i].allow){  			bullets[i].move15 = true; 		bullets[i].allow = true; 	}
		else if(player.rotation == 20 && !bullets[i].allow){  			bullets[i].move20 = true; 		bullets[i].allow = true; 	}
		else if(player.rotation == 25 && !bullets[i].allow){  			bullets[i].move25 = true; 		bullets[i].allow = true; 	}
		else if(player.rotation == 30 && !bullets[i].allow){  			bullets[i].move30 = true; 		bullets[i].allow = true; 	}
		else if(player.rotation == 35 && !bullets[i].allow){  			bullets[i].move35 = true; 		bullets[i].allow = true; 	}
		else if(player.rotation == 40 && !bullets[i].allow){  			bullets[i].move40 = true; 		bullets[i].allow = true; 	}
		else if(player.rotation == 45 && !bullets[i].allow){  			bullets[i].move45 = true; 		bullets[i].allow = true; 	}
		else if(player.rotation == 50 && !bullets[i].allow){  			bullets[i].move50 = true; 		bullets[i].allow = true; 	}
		else if(player.rotation == 55 && !bullets[i].allow){  			bullets[i].move55 = true; 		bullets[i].allow = true; 	}
		else if(player.rotation == 60 && !bullets[i].allow){  			bullets[i].move60 = true; 		bullets[i].allow = true; 	}
		else if(player.rotation == 65 && !bullets[i].allow){  			bullets[i].move65 = true; 		bullets[i].allow = true; 	}
		else if(player.rotation == 70 && !bullets[i].allow){  			bullets[i].move70 = true; 		bullets[i].allow = true; 	}
		else if(player.rotation == 75 && !bullets[i].allow){  			bullets[i].move75 = true; 		bullets[i].allow = true; 	}
		else if(player.rotation == 80 && !bullets[i].allow){  			bullets[i].move80 = true; 		bullets[i].allow = true; 	}
		else if(player.rotation == 85 && !bullets[i].allow){  			bullets[i].move85 = true; 		bullets[i].allow = true; 	}

		else if(player.rotation == 95 && !bullets[i].allow){  			bullets[i].move95 = true; 		bullets[i].allow = true; 	}
		else if(player.rotation == 100 && !bullets[i].allow){  			bullets[i].move100 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 105 && !bullets[i].allow){  			bullets[i].move105 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 110 && !bullets[i].allow){  			bullets[i].move110 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 115 && !bullets[i].allow){  			bullets[i].move115 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 120 && !bullets[i].allow){  			bullets[i].move120 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 125 && !bullets[i].allow){  			bullets[i].move125 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 130 && !bullets[i].allow){  			bullets[i].move130 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 135 && !bullets[i].allow){  			bullets[i].move135 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 140 && !bullets[i].allow){  			bullets[i].move140 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 145 && !bullets[i].allow){  			bullets[i].move145 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 150 && !bullets[i].allow){  			bullets[i].move150 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 155 && !bullets[i].allow){  			bullets[i].move155 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 160 && !bullets[i].allow){  			bullets[i].move160 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 165 && !bullets[i].allow){  			bullets[i].move165 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 170 && !bullets[i].allow){  			bullets[i].move170 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 175 && !bullets[i].allow){  			bullets[i].move175 = true; 	bullets[i].allow = true; 	}

		else if(player.rotation == 185 && !bullets[i].allow){  			bullets[i].move185 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 190 && !bullets[i].allow){  			bullets[i].move190 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 195 && !bullets[i].allow){  			bullets[i].move195 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 200 && !bullets[i].allow){  			bullets[i].move200 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 205 && !bullets[i].allow){  			bullets[i].move205 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 210 && !bullets[i].allow){  			bullets[i].move210 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 215 && !bullets[i].allow){  			bullets[i].move215 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 220 && !bullets[i].allow){  			bullets[i].move220 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 225 && !bullets[i].allow){  			bullets[i].move225 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 230 && !bullets[i].allow){  			bullets[i].move230 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 235 && !bullets[i].allow){  			bullets[i].move235 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 240 && !bullets[i].allow){  			bullets[i].move240 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 245 && !bullets[i].allow){  			bullets[i].move245 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 250 && !bullets[i].allow){  			bullets[i].move250 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 255 && !bullets[i].allow){  			bullets[i].move255 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 260 && !bullets[i].allow){  			bullets[i].move260 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 265 && !bullets[i].allow){  			bullets[i].move265 = true; 	bullets[i].allow = true; 	}

		// Move bullets
  		if(bullets[i].move360)				bullets[i].y -= bullets[i].velY;
  		else if(bullets[i].move180)		bullets[i].y += bullets[i].velY;
  		else if(bullets[i].move270)		bullets[i].x -= bullets[i].velX;
  		else if(bullets[i].move90)			bullets[i].x += bullets[i].velX;

  		else if(bullets[i].move275){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move280){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move285){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move290){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move295){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move300){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move305){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move310){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move315){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move320){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move325){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move330){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move335){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move340){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move345){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move350){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move355){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }

		else if(bullets[i].move5){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move10){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move15){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move20){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move25){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move30){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move35){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move40){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move45){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move50){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move55){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move60){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move65){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move70){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move75){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move80){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move85){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }

  		else if(bullets[i].move95){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move100){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move105){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move110){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move115){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move120){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move125){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move130){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move135){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move140){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move145){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move150){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move155){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move160){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move165){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move170){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move175){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }

  		else if(bullets[i].move185){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move190){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move195){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move200){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move205){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move210){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move215){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move220){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move225){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move230){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move235){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move240){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move245){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move250){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move255){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move260){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move265){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }

  		// Remove bullets if exceed the map limits
	 	if(bullets[i].x < 0 || bullets[i].y < 0)								bullets.splice(i,1);
    	else if(bullets[i].x > canvas.width || bullets[i].y > canvas.height)	bullets.splice(i,1);
  	}
}

function weapon2(player, bullets){

	// Make bullets
	if((key == formatKey("X") || key == formatKey("CTRL")) && player.timeReturnShootWeapon2 == 0 && player.munition2 > 0){
		if(player.rotation == 0 || player.rotation == 360){
			bullets.push(new Bullet(player.x-2,player.y - 3,_SizeWeapon,_SizeWeapon,4,4));
			bullets.push(new Bullet(player.x+player.width/2-2,player.y - 3,_SizeWeapon,_SizeWeapon,4,4));
			bullets.push(new Bullet(player.x+player.width-2,player.y - 3,_SizeWeapon,_SizeWeapon,4,4));
		}else if(player.rotation == 90){
			bullets.push(new Bullet(player.x+player.width,player.y-2,_SizeWeapon,_SizeWeapon,4,4));
			bullets.push(new Bullet(player.x+player.width,player.y+player.height/2-2,_SizeWeapon,_SizeWeapon,4,4));
			bullets.push(new Bullet(player.x+player.width,player.y+player.height-2,_SizeWeapon,_SizeWeapon,4,4));
		}else if(player.rotation == 180){
			bullets.push(new Bullet(player.x-2,player.y+player.height,_SizeWeapon,_SizeWeapon,4,4));
			bullets.push(new Bullet(player.x+player.width/2-2,player.y+player.height,_SizeWeapon,_SizeWeapon,4,4));
			bullets.push(new Bullet(player.x+player.width-2,player.y+player.height,_SizeWeapon,_SizeWeapon,4,4));
		}else if(player.rotation == 270){
			bullets.push(new Bullet(player.x-2,player.y-2,_SizeWeapon,_SizeWeapon,4,4));
			bullets.push(new Bullet(player.x-2,player.y+player.height/2-2,_SizeWeapon,_SizeWeapon,4,4));
			bullets.push(new Bullet(player.x-2,player.y+player.height-2,_SizeWeapon,_SizeWeapon,4,4));
		}

		else if(player.rotation == 275){
		 	bullets.push(new Bullet(player.x+player.width/2 - 8,player.y + 0,_SizeWeapon,_SizeWeapon,4,1));
		 	bullets.push(new Bullet(player.x+player.width/2 - 15,player.y + 5,_SizeWeapon,_SizeWeapon,4,1));
		 	bullets.push(new Bullet(player.x+player.width/2 - 22,player.y + 10,_SizeWeapon,_SizeWeapon,4,1));
		}else if(player.rotation == 280){
		 	bullets.push(new Bullet(player.x+player.width/2 - 8,player.y + 0,_SizeWeapon,_SizeWeapon,4,1));
		 	bullets.push(new Bullet(player.x+player.width/2 - 15,player.y + 5,_SizeWeapon,_SizeWeapon,4,1));
		 	bullets.push(new Bullet(player.x+player.width/2 - 22,player.y + 10,_SizeWeapon,_SizeWeapon,4,1));
		}else if(player.rotation == 285){
		 	bullets.push(new Bullet(player.x+player.width/2 - 8,player.y - 2,_SizeWeapon,_SizeWeapon,4,1));
		 	bullets.push(new Bullet(player.x+player.width/2 - 15,player.y + 3,_SizeWeapon,_SizeWeapon,4,1));
		 	bullets.push(new Bullet(player.x+player.width/2 - 22,player.y + 8,_SizeWeapon,_SizeWeapon,4,1));
		}else if(player.rotation == 290){
		 	bullets.push(new Bullet(player.x+player.width/2 - 8,player.y - 2,_SizeWeapon,_SizeWeapon,4,2));
		 	bullets.push(new Bullet(player.x+player.width/2 - 15,player.y + 3,_SizeWeapon,_SizeWeapon,4,2));
		 	bullets.push(new Bullet(player.x+player.width/2 - 22,player.y + 8,_SizeWeapon,_SizeWeapon,4,2));
		}else if(player.rotation == 295){
		 	bullets.push(new Bullet(player.x+player.width/2 - 8,player.y - 2,_SizeWeapon,_SizeWeapon,4,2));
		 	bullets.push(new Bullet(player.x+player.width/2 - 15,player.y + 3,_SizeWeapon,_SizeWeapon,4,2));
		 	bullets.push(new Bullet(player.x+player.width/2 - 22,player.y + 8,_SizeWeapon,_SizeWeapon,4,2));
		}else if(player.rotation == 300){
		 	bullets.push(new Bullet(player.x+player.width/2 - 8,player.y - 4,_SizeWeapon,_SizeWeapon,4,2));
		 	bullets.push(new Bullet(player.x+player.width/2 - 15,player.y + 1,_SizeWeapon,_SizeWeapon,4,2));
		 	bullets.push(new Bullet(player.x+player.width/2 - 22,player.y + 6,_SizeWeapon,_SizeWeapon,4,2));
		}else if(player.rotation == 305){
		 	bullets.push(new Bullet(player.x+player.width/2 - 8,player.y - 6,_SizeWeapon,_SizeWeapon,4,3));
		 	bullets.push(new Bullet(player.x+player.width/2 - 15,player.y - 1,_SizeWeapon,_SizeWeapon,4,3));
		 	bullets.push(new Bullet(player.x+player.width/2 - 22,player.y + 4,_SizeWeapon,_SizeWeapon,4,3));
		}else if(player.rotation == 310){
		 	bullets.push(new Bullet(player.x+player.width/2 - 8,player.y - 8,_SizeWeapon,_SizeWeapon,4,3));
		 	bullets.push(new Bullet(player.x+player.width/2 - 15,player.y - 3,_SizeWeapon,_SizeWeapon,4,3));
		 	bullets.push(new Bullet(player.x+player.width/2 - 22,player.y + 2,_SizeWeapon,_SizeWeapon,4,3));
		}else if(player.rotation == 315){
		 	bullets.push(new Bullet(player.x+player.width/2 - 8,player.y - 9,_SizeWeapon,_SizeWeapon,3,3));
		 	bullets.push(new Bullet(player.x+player.width/2 - 15,player.y - 4,_SizeWeapon,_SizeWeapon,3,3));
		 	bullets.push(new Bullet(player.x+player.width/2 - 22,player.y + 1,_SizeWeapon,_SizeWeapon,3,3));
		}else if(player.rotation == 320){
		 	bullets.push(new Bullet(player.x+player.width/2 - 6,player.y - 10,_SizeWeapon,_SizeWeapon,3,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 13,player.y - 5,_SizeWeapon,_SizeWeapon,3,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 20,player.y + 0,_SizeWeapon,_SizeWeapon,3,4));
		}else if(player.rotation == 325){
		 	bullets.push(new Bullet(player.x+player.width/2 - 6,player.y - 12,_SizeWeapon,_SizeWeapon,3,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 13,player.y - 7,_SizeWeapon,_SizeWeapon,3,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 20,player.y - 2,_SizeWeapon,_SizeWeapon,3,4));
		}else if(player.rotation == 330){
		 	bullets.push(new Bullet(player.x+player.width/2 - 2,player.y - 12,_SizeWeapon,_SizeWeapon,2,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 9,player.y - 7,_SizeWeapon,_SizeWeapon,2,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 16,player.y - 2,_SizeWeapon,_SizeWeapon,2,4));
		}else if(player.rotation == 335){
		 	bullets.push(new Bullet(player.x+player.width/2 - 2,player.y - 12,_SizeWeapon,_SizeWeapon,2,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 8,player.y - 7,_SizeWeapon,_SizeWeapon,2,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 14,player.y - 2,_SizeWeapon,_SizeWeapon,2,4));
		}else if(player.rotation == 340){
		 	bullets.push(new Bullet(player.x+player.width/2 + 0,player.y - 12,_SizeWeapon,_SizeWeapon,2,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 7,player.y - 7,_SizeWeapon,_SizeWeapon,2,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 14,player.y - 2,_SizeWeapon,_SizeWeapon,2,4));
		}else if(player.rotation == 345){
		 	bullets.push(new Bullet(player.x+player.width/2 + 1,player.y - 12,_SizeWeapon,_SizeWeapon,1,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 6,player.y - 7,_SizeWeapon,_SizeWeapon,1,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 13,player.y - 2,_SizeWeapon,_SizeWeapon,1,4));
		}else if(player.rotation == 350){
		 	bullets.push(new Bullet(player.x+player.width/2 + 2,player.y - 13,_SizeWeapon,_SizeWeapon,1,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 5,player.y - 8,_SizeWeapon,_SizeWeapon,1,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 12,player.y - 3,_SizeWeapon,_SizeWeapon,1,4));
		}else if(player.rotation == 355){
		 	bullets.push(new Bullet(player.x+player.width/2 + 3,player.y - 15,_SizeWeapon,_SizeWeapon,1,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 4,player.y - 10,_SizeWeapon,_SizeWeapon,1,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 11,player.y - 5,_SizeWeapon,_SizeWeapon,1,4));
		}

		else if(player.rotation == 5){
		 	bullets.push(new Bullet(player.x+player.width/2 + 6,player.y - 5,_SizeWeapon,_SizeWeapon,1,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 1,player.y - 5,_SizeWeapon,_SizeWeapon,1,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 8,player.y - 5,_SizeWeapon,_SizeWeapon,1,4));
		}else if(player.rotation == 10){
		 	bullets.push(new Bullet(player.x+player.width/2 + 7,player.y - 5,_SizeWeapon,_SizeWeapon,1,4));
		 	bullets.push(new Bullet(player.x+player.width/2 + 0,player.y - 5,_SizeWeapon,_SizeWeapon,1,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 7,player.y - 5,_SizeWeapon,_SizeWeapon,1,4));
		}else if(player.rotation == 15){
		 	bullets.push(new Bullet(player.x+player.width/2 + 9,player.y - 5,_SizeWeapon,_SizeWeapon,1,4));
		 	bullets.push(new Bullet(player.x+player.width/2 + 2,player.y - 5,_SizeWeapon,_SizeWeapon,1,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 5,player.y - 5,_SizeWeapon,_SizeWeapon,1,4));
		}else if(player.rotation == 20){
		 	bullets.push(new Bullet(player.x+player.width/2 + 10,player.y - 5,_SizeWeapon,_SizeWeapon,2,4));
		 	bullets.push(new Bullet(player.x+player.width/2 + 3,player.y - 5,_SizeWeapon,_SizeWeapon,2,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 4,player.y - 5,_SizeWeapon,_SizeWeapon,2,4));
		}else if(player.rotation == 25){
		 	bullets.push(new Bullet(player.x+player.width/2 + 11,player.y - 5,_SizeWeapon,_SizeWeapon,2,4));
		 	bullets.push(new Bullet(player.x+player.width/2 + 4,player.y - 5,_SizeWeapon,_SizeWeapon,2,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 3,player.y - 5,_SizeWeapon,_SizeWeapon,2,4));
		}else if(player.rotation == 30){
		 	bullets.push(new Bullet(player.x+player.width/2 + 12,player.y - 5,_SizeWeapon,_SizeWeapon,2,4));
		 	bullets.push(new Bullet(player.x+player.width/2 + 5,player.y - 5,_SizeWeapon,_SizeWeapon,2,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 2,player.y - 5,_SizeWeapon,_SizeWeapon,2,4));
		}else if(player.rotation == 35){
		 	bullets.push(new Bullet(player.x+player.width/2 + 13,player.y - 5,_SizeWeapon,_SizeWeapon,3,4));
		 	bullets.push(new Bullet(player.x+player.width/2 + 6,player.y - 5,_SizeWeapon,_SizeWeapon,3,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 1,player.y - 5,_SizeWeapon,_SizeWeapon,3,4));
		}else if(player.rotation == 40){
		 	bullets.push(new Bullet(player.x+player.width/2 + 14,player.y - 5,_SizeWeapon,_SizeWeapon,3,4));
		 	bullets.push(new Bullet(player.x+player.width/2 + 7,player.y - 5,_SizeWeapon,_SizeWeapon,3,4));
		 	bullets.push(new Bullet(player.x+player.width/2 + 0,player.y - 5,_SizeWeapon,_SizeWeapon,3,4));
		}else if(player.rotation == 45){
		 	bullets.push(new Bullet(player.x+player.width/2 + 16,player.y - 5,_SizeWeapon,_SizeWeapon,3,3));
		 	bullets.push(new Bullet(player.x+player.width/2 + 9,player.y - 5,_SizeWeapon,_SizeWeapon,3,3));
		 	bullets.push(new Bullet(player.x+player.width/2 + 2,player.y - 5,_SizeWeapon,_SizeWeapon,3,3));
		}else if(player.rotation == 50){
		 	bullets.push(new Bullet(player.x+player.width/2 + 18,player.y - 5,_SizeWeapon,_SizeWeapon,4,3));
		 	bullets.push(new Bullet(player.x+player.width/2 + 11,player.y - 5,_SizeWeapon,_SizeWeapon,4,3));
		 	bullets.push(new Bullet(player.x+player.width/2 + 4,player.y - 5,_SizeWeapon,_SizeWeapon,4,3));
		}else if(player.rotation == 55){
		 	bullets.push(new Bullet(player.x+player.width/2 + 8,player.y - 8,_SizeWeapon,_SizeWeapon,4,1));
		 	bullets.push(new Bullet(player.x+player.width/2 + 15,player.y - 3,_SizeWeapon,_SizeWeapon,4,1));
		 	bullets.push(new Bullet(player.x+player.width/2 + 22,player.y + 2,_SizeWeapon,_SizeWeapon,4,1));
		}else if(player.rotation == 60){
		 	bullets.push(new Bullet(player.x+player.width/2 + 8,player.y - 6,_SizeWeapon,_SizeWeapon,4,1));
		 	bullets.push(new Bullet(player.x+player.width/2 + 15,player.y - 1,_SizeWeapon,_SizeWeapon,4,1));
		 	bullets.push(new Bullet(player.x+player.width/2 + 22,player.y + 4,_SizeWeapon,_SizeWeapon,4,1));
		}else if(player.rotation == 65){
		 	bullets.push(new Bullet(player.x+player.width/2 + 8,player.y - 5,_SizeWeapon,_SizeWeapon,4,1));
		 	bullets.push(new Bullet(player.x+player.width/2 + 15,player.y + 0,_SizeWeapon,_SizeWeapon,4,1));
		 	bullets.push(new Bullet(player.x+player.width/2 + 22,player.y + 5,_SizeWeapon,_SizeWeapon,4,1));
		}else if(player.rotation == 70){
		 	bullets.push(new Bullet(player.x+player.width/2 + 8,player.y - 4,_SizeWeapon,_SizeWeapon,4,1));
		 	bullets.push(new Bullet(player.x+player.width/2 + 15,player.y + 1,_SizeWeapon,_SizeWeapon,4,1));
		 	bullets.push(new Bullet(player.x+player.width/2 + 22,player.y + 6,_SizeWeapon,_SizeWeapon,4,1));
		}else if(player.rotation == 75){
		 	bullets.push(new Bullet(player.x+player.width/2 + 8,player.y - 3,_SizeWeapon,_SizeWeapon,4,1));
		 	bullets.push(new Bullet(player.x+player.width/2 + 15,player.y + 2,_SizeWeapon,_SizeWeapon,4,1));
		 	bullets.push(new Bullet(player.x+player.width/2 + 22,player.y + 7,_SizeWeapon,_SizeWeapon,4,1));
		}else if(player.rotation == 80){
		 	bullets.push(new Bullet(player.x+player.width/2 + 8,player.y - 2,_SizeWeapon,_SizeWeapon,4,1));
		 	bullets.push(new Bullet(player.x+player.width/2 + 15,player.y + 3,_SizeWeapon,_SizeWeapon,4,1));
		 	bullets.push(new Bullet(player.x+player.width/2 + 22,player.y + 8,_SizeWeapon,_SizeWeapon,4,1));
		}else if(player.rotation == 85){
		 	bullets.push(new Bullet(player.x+player.width/2 + 8,player.y - 1,_SizeWeapon,_SizeWeapon,4,1));
		 	bullets.push(new Bullet(player.x+player.width/2 + 15,player.y + 4,_SizeWeapon,_SizeWeapon,4,1));
		 	bullets.push(new Bullet(player.x+player.width/2 + 22,player.y + 9,_SizeWeapon,_SizeWeapon,4,1));
		}

		else if(player.rotation == 95){
			bullets.push(new Bullet(player.x+player.width,player.y-3,_SizeWeapon,_SizeWeapon,4,1));
			bullets.push(new Bullet(player.x+player.width,player.y+player.height/2-3,_SizeWeapon,_SizeWeapon,4,1));
			bullets.push(new Bullet(player.x+player.width,player.y+player.height-3,_SizeWeapon,_SizeWeapon,4,1));
		}else if(player.rotation == 100){
		 	bullets.push(new Bullet(player.x+player.width,player.y - 1,_SizeWeapon,_SizeWeapon,4,1));
		 	bullets.push(new Bullet(player.x+player.width,player.y+player.height/2 - 1,_SizeWeapon,_SizeWeapon,4,1));
		 	bullets.push(new Bullet(player.x+player.width,player.y+player.height - 1,_SizeWeapon,_SizeWeapon,4,1));
		}else if(player.rotation == 105){
		 	bullets.push(new Bullet(player.x+player.width,player.y + 0,_SizeWeapon,_SizeWeapon,4,1));
		 	bullets.push(new Bullet(player.x+player.width,player.y+player.height/2 + 0,_SizeWeapon,_SizeWeapon,4,1));
		 	bullets.push(new Bullet(player.x+player.width,player.y+player.height + 0,_SizeWeapon,_SizeWeapon,4,1));
		}else if(player.rotation == 110){
			bullets.push(new Bullet(player.x+player.width,player.y + 0,_SizeWeapon,_SizeWeapon,4,2));
		 	bullets.push(new Bullet(player.x+player.width,player.y+player.height/2 + 0,_SizeWeapon,_SizeWeapon,4,2));
		 	bullets.push(new Bullet(player.x+player.width,player.y+player.height + 0,_SizeWeapon,_SizeWeapon,4,2));
		}else if(player.rotation == 115){
		 	bullets.push(new Bullet(player.x+player.width,player.y + 1,_SizeWeapon,_SizeWeapon,4,2));
		 	bullets.push(new Bullet(player.x+player.width,player.y+player.height/2 + 1,_SizeWeapon,_SizeWeapon,4,2));
		 	bullets.push(new Bullet(player.x+player.width,player.y+player.height + 1,_SizeWeapon,_SizeWeapon,4,2));
		}else if(player.rotation == 120){
			bullets.push(new Bullet(player.x+player.width,player.y + 2,_SizeWeapon,_SizeWeapon,4,2));
		 	bullets.push(new Bullet(player.x+player.width,player.y+player.height/2 + 2,_SizeWeapon,_SizeWeapon,4,2));
		 	bullets.push(new Bullet(player.x+player.width,player.y+player.height + 2,_SizeWeapon,_SizeWeapon,4,2));
		}else if(player.rotation == 125){
			bullets.push(new Bullet(player.x+player.width,player.y + 3,_SizeWeapon,_SizeWeapon,4,3));
		 	bullets.push(new Bullet(player.x+player.width,player.y+player.height/2 + 3,_SizeWeapon,_SizeWeapon,4,3));
		 	bullets.push(new Bullet(player.x+player.width,player.y+player.height + 3,_SizeWeapon,_SizeWeapon,4,3));
		}else if(player.rotation == 130){
			bullets.push(new Bullet(player.x+player.width,player.y + 4,_SizeWeapon,_SizeWeapon,4,3));
		 	bullets.push(new Bullet(player.x+player.width,player.y+player.height/2 + 4,_SizeWeapon,_SizeWeapon,4,3));
		 	bullets.push(new Bullet(player.x+player.width,player.y+player.height + 4,_SizeWeapon,_SizeWeapon,4,3));
		}else if(player.rotation == 135){
			bullets.push(new Bullet(player.x+player.width,player.y + 3,_SizeWeapon,_SizeWeapon,3,3));
		 	bullets.push(new Bullet(player.x+player.width,player.y+player.height/2 + 5,_SizeWeapon,_SizeWeapon,3,3));
		 	bullets.push(new Bullet(player.x+player.width,player.y+player.height + 7,_SizeWeapon,_SizeWeapon,3,3));
		}else if(player.rotation == 140){
			bullets.push(new Bullet(player.x+player.width,player.y + 3,_SizeWeapon,_SizeWeapon,3,4));
		 	bullets.push(new Bullet(player.x+player.width,player.y+player.height/2 + 6,_SizeWeapon,_SizeWeapon,3,4));
		 	bullets.push(new Bullet(player.x+player.width,player.y+player.height + 9,_SizeWeapon,_SizeWeapon,3,4));
		}else if(player.rotation == 145){
			bullets.push(new Bullet(player.x+player.width - 1,player.y + 5,_SizeWeapon,_SizeWeapon,3,4));
		 	bullets.push(new Bullet(player.x+player.width - 1,player.y+player.height/2 + 9,_SizeWeapon,_SizeWeapon,3,4));
		 	bullets.push(new Bullet(player.x+player.width - 1,player.y+player.height + 13,_SizeWeapon,_SizeWeapon,3,4));
		}else if(player.rotation == 150){
			bullets.push(new Bullet(player.x+player.width - 1,player.y + 2,_SizeWeapon,_SizeWeapon,2,4));
		 	bullets.push(new Bullet(player.x+player.width - 1,player.y+player.height/2 + 10,_SizeWeapon,_SizeWeapon,2,4));
		 	bullets.push(new Bullet(player.x+player.width - 1,player.y+player.height + 18,_SizeWeapon,_SizeWeapon,2,4));
		}else if(player.rotation == 155){
			bullets.push(new Bullet(player.x+player.width - 1,player.y + 4,_SizeWeapon,_SizeWeapon,2,4));
		 	bullets.push(new Bullet(player.x+player.width - 1,player.y+player.height/2 + 12,_SizeWeapon,_SizeWeapon,2,4));
		 	bullets.push(new Bullet(player.x+player.width - 1,player.y+player.height + 20,_SizeWeapon,_SizeWeapon,2,4));
		}else if(player.rotation == 160){
			bullets.push(new Bullet(player.x+player.width - 1,player.y + 6,_SizeWeapon,_SizeWeapon,2,4));
		 	bullets.push(new Bullet(player.x+player.width - 1,player.y+player.height/2 + 14,_SizeWeapon,_SizeWeapon,2,4));
		 	bullets.push(new Bullet(player.x+player.width - 1,player.y+player.height + 22,_SizeWeapon,_SizeWeapon,2,4));
		}else if(player.rotation == 165){
			bullets.push(new Bullet(player.x+player.width + 2,player.y + 12,_SizeWeapon,_SizeWeapon,1,4));
		 	bullets.push(new Bullet(player.x+player.width - 3,player.y+player.height/2 + 16,_SizeWeapon,_SizeWeapon,1,4));
		 	bullets.push(new Bullet(player.x+player.width - 8,player.y+player.height + 20,_SizeWeapon,_SizeWeapon,1,4));
		}else if(player.rotation == 170){
			bullets.push(new Bullet(player.x+player.width + 0,player.y + 12,_SizeWeapon,_SizeWeapon,1,4));
		 	bullets.push(new Bullet(player.x+player.width - 5,player.y+player.height/2 + 16,_SizeWeapon,_SizeWeapon,1,4));
		 	bullets.push(new Bullet(player.x+player.width - 10,player.y+player.height + 20,_SizeWeapon,_SizeWeapon,1,4));
		}else if(player.rotation == 175){
			bullets.push(new Bullet(player.x+player.width - 2,player.y + 12,_SizeWeapon,_SizeWeapon,1,4));
		 	bullets.push(new Bullet(player.x+player.width - 7,player.y+player.height/2 + 16,_SizeWeapon,_SizeWeapon,1,4));
		 	bullets.push(new Bullet(player.x+player.width - 12,player.y+player.height + 20,_SizeWeapon,_SizeWeapon,1,4));
		}

		else if(player.rotation == 185){
		 	bullets.push(new Bullet(player.x+player.width/2 + 7,player.y + 15,_SizeWeapon,_SizeWeapon,1,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 1,player.y + 15,_SizeWeapon,_SizeWeapon,1,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 9,player.y + 15,_SizeWeapon,_SizeWeapon,1,4));
		}else if(player.rotation == 190){
		 	bullets.push(new Bullet(player.x+player.width/2 + 5,player.y + 15,_SizeWeapon,_SizeWeapon,1,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 3,player.y + 15,_SizeWeapon,_SizeWeapon,1,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 11,player.y + 15,_SizeWeapon,_SizeWeapon,1,4));
		}else if(player.rotation == 195){
		 	bullets.push(new Bullet(player.x+player.width/2 + 4,player.y + 15,_SizeWeapon,_SizeWeapon,1,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 4,player.y + 15,_SizeWeapon,_SizeWeapon,1,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 12,player.y + 15,_SizeWeapon,_SizeWeapon,1,4));
		}else if(player.rotation == 200){
		 	bullets.push(new Bullet(player.x+player.width/2 + 4,player.y + 15,_SizeWeapon,_SizeWeapon,2,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 4,player.y + 15,_SizeWeapon,_SizeWeapon,2,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 12,player.y + 15,_SizeWeapon,_SizeWeapon,2,4));
		}else if(player.rotation == 205){
		 	bullets.push(new Bullet(player.x+player.width/2 + 3,player.y + 15,_SizeWeapon,_SizeWeapon,2,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 5,player.y + 15,_SizeWeapon,_SizeWeapon,2,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 13,player.y + 15,_SizeWeapon,_SizeWeapon,2,4));
		}else if(player.rotation == 210){
		 	bullets.push(new Bullet(player.x+player.width/2 + 3,player.y + 15,_SizeWeapon,_SizeWeapon,2,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 6,player.y + 15,_SizeWeapon,_SizeWeapon,2,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 15,player.y + 15,_SizeWeapon,_SizeWeapon,2,4));
		}else if(player.rotation == 215){
		 	bullets.push(new Bullet(player.x+player.width/2 + 3,player.y + 15,_SizeWeapon,_SizeWeapon,3,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 7,player.y + 15,_SizeWeapon,_SizeWeapon,3,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 17,player.y + 15,_SizeWeapon,_SizeWeapon,3,4));
		}else if(player.rotation == 220){
		 	bullets.push(new Bullet(player.x+player.width/2 + 1,player.y + 15,_SizeWeapon,_SizeWeapon,3,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 9,player.y + 15,_SizeWeapon,_SizeWeapon,3,4));
		 	bullets.push(new Bullet(player.x+player.width/2 - 19,player.y + 15,_SizeWeapon,_SizeWeapon,3,4));
		}else if(player.rotation == 225){
		 	bullets.push(new Bullet(player.x+player.width/2 + 1,player.y + 15,_SizeWeapon,_SizeWeapon,3,3));
		 	bullets.push(new Bullet(player.x+player.width/2 - 10,player.y + 15,_SizeWeapon,_SizeWeapon,3,3));
		 	bullets.push(new Bullet(player.x+player.width/2 - 21,player.y + 15,_SizeWeapon,_SizeWeapon,3,3));
		}else if(player.rotation == 230){
			bullets.push(new Bullet(player.x+player.width/2 + 1,player.y + 15,_SizeWeapon,_SizeWeapon,4,3));
		 	bullets.push(new Bullet(player.x+player.width/2 - 12,player.y + 15,_SizeWeapon,_SizeWeapon,4,3));
		 	bullets.push(new Bullet(player.x+player.width/2 - 25,player.y + 15,_SizeWeapon,_SizeWeapon,4,3));
		}else if(player.rotation == 235){
			bullets.push(new Bullet(player.x+player.width/2 - 1,player.y + 15,_SizeWeapon,_SizeWeapon,4,3));
		 	bullets.push(new Bullet(player.x+player.width/2 - 14,player.y + 15,_SizeWeapon,_SizeWeapon,4,3));
		 	bullets.push(new Bullet(player.x+player.width/2 - 27,player.y + 15,_SizeWeapon,_SizeWeapon,4,3));
		}else if(player.rotation == 240){
			bullets.push(new Bullet(player.x+player.width/2 - 5,player.y + 17,_SizeWeapon,_SizeWeapon,4,2));
		 	bullets.push(new Bullet(player.x+player.width/2 - 18,player.y + 16,_SizeWeapon,_SizeWeapon,4,2));
		 	bullets.push(new Bullet(player.x+player.width/2 - 31,player.y + 15,_SizeWeapon,_SizeWeapon,4,2));
		}else if(player.rotation == 245){
			bullets.push(new Bullet(player.x+player.width/2 - 6,player.y + 15,_SizeWeapon,_SizeWeapon,4,2));
		 	bullets.push(new Bullet(player.x+player.width/2 - 19,player.y + 13,_SizeWeapon,_SizeWeapon,4,2));
		 	bullets.push(new Bullet(player.x+player.width/2 - 32,player.y + 11,_SizeWeapon,_SizeWeapon,4,2));
		}else if(player.rotation == 250){
			bullets.push(new Bullet(player.x+player.width/2 - 6,player.y + 14,_SizeWeapon,_SizeWeapon,4,2));
		 	bullets.push(new Bullet(player.x+player.width/2 - 19,player.y + 12,_SizeWeapon,_SizeWeapon,4,2));
		 	bullets.push(new Bullet(player.x+player.width/2 - 32,player.y + 10,_SizeWeapon,_SizeWeapon,4,2));
		}else if(player.rotation == 255){
			bullets.push(new Bullet(player.x+player.width/2 - 6,player.y + 15,_SizeWeapon,_SizeWeapon,4,1));
		 	bullets.push(new Bullet(player.x+player.width/2 - 19,player.y + 11,_SizeWeapon,_SizeWeapon,4,1));
		 	bullets.push(new Bullet(player.x+player.width/2 - 32,player.y + 7,_SizeWeapon,_SizeWeapon,4,1));
		}else if(player.rotation == 260){
			bullets.push(new Bullet(player.x+player.width/2 - 6,player.y + 14,_SizeWeapon,_SizeWeapon,4,1));
		 	bullets.push(new Bullet(player.x+player.width/2 - 19,player.y + 10,_SizeWeapon,_SizeWeapon,4,1));
		 	bullets.push(new Bullet(player.x+player.width/2 - 32,player.y + 6,_SizeWeapon,_SizeWeapon,4,1));
		}else if(player.rotation == 265){
			bullets.push(new Bullet(player.x+player.width/2 - 17,player.y + 16,_SizeWeapon,_SizeWeapon,4,1));
		 	bullets.push(new Bullet(player.x+player.width/2 - 19,player.y + 8,_SizeWeapon,_SizeWeapon,4,1));
		 	bullets.push(new Bullet(player.x+player.width/2 - 21,player.y + 0,_SizeWeapon,_SizeWeapon,4,1));
		}

		player.munition2 -= 3;
		if(player.munition2 < 0)
			player.munition2 = 0;
		loadSound(sWeapon2);
		player.timeReturnShootWeapon2 = _TimeReturnShootPlayerWeapon2;

		key = null;
	}else if((key == formatKey("X") || key == formatKey("CTRL")) && player.munition2 <= 0){
		loadSound(sNoMunition);
		key = null;
	}

	// Move bullets
	// ------------
	// bullets[i].move360 		-->		The bullet only is moved to up though change the rotation
	// bullets[i].allow			-->		Avoid 1 determinate bullet change of direction when spin the spaceship(rotation)
	for(i in bullets){
		if((player.rotation == 0 || player.rotation == 360) && !bullets[i].allow){	bullets[i].move360 = true;	bullets[i].allow = true;	}
		else if(player.rotation == 90 && !bullets[i].allow){          		bullets[i].move90 = true;	bullets[i].allow = true;	}
		else if(player.rotation == 180 && !bullets[i].allow){				bullets[i].move180 = true;	bullets[i].allow = true; 	}
		else if(player.rotation == 270 && !bullets[i].allow){				bullets[i].move270 = true;	bullets[i].allow = true;	}

		else if(player.rotation == 275 && !bullets[i].allow){  			bullets[i].move275 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 280 && !bullets[i].allow){  			bullets[i].move280 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 285 && !bullets[i].allow){  			bullets[i].move285 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 290 && !bullets[i].allow){  			bullets[i].move290 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 295 && !bullets[i].allow){  			bullets[i].move295 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 300 && !bullets[i].allow){  			bullets[i].move300 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 305 && !bullets[i].allow){  			bullets[i].move305 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 310 && !bullets[i].allow){  			bullets[i].move310 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 315 && !bullets[i].allow){  			bullets[i].move315 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 320 && !bullets[i].allow){  			bullets[i].move320 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 325 && !bullets[i].allow){  			bullets[i].move325 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 330 && !bullets[i].allow){  			bullets[i].move330 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 335 && !bullets[i].allow){  			bullets[i].move335 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 340 && !bullets[i].allow){  			bullets[i].move340 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 345 && !bullets[i].allow){  			bullets[i].move345 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 350 && !bullets[i].allow){  			bullets[i].move350 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 355 && !bullets[i].allow){  			bullets[i].move355 = true; 	bullets[i].allow = true; 	}

		else if(player.rotation == 5 && !bullets[i].allow){  			bullets[i].move5 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 10 && !bullets[i].allow){  			bullets[i].move10 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 15 && !bullets[i].allow){  			bullets[i].move15 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 20 && !bullets[i].allow){  			bullets[i].move20 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 25 && !bullets[i].allow){  			bullets[i].move25 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 30 && !bullets[i].allow){  			bullets[i].move30 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 35 && !bullets[i].allow){  			bullets[i].move35 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 40 && !bullets[i].allow){  			bullets[i].move40 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 45 && !bullets[i].allow){  			bullets[i].move45 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 50 && !bullets[i].allow){  			bullets[i].move50 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 55 && !bullets[i].allow){  			bullets[i].move55 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 60 && !bullets[i].allow){  			bullets[i].move60 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 65 && !bullets[i].allow){  			bullets[i].move65 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 70 && !bullets[i].allow){  			bullets[i].move70 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 75 && !bullets[i].allow){  			bullets[i].move75 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 80 && !bullets[i].allow){  			bullets[i].move80 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 85 && !bullets[i].allow){  			bullets[i].move85 = true; 	bullets[i].allow = true; 	}

		else if(player.rotation == 95 && !bullets[i].allow){  			bullets[i].move95 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 100 && !bullets[i].allow){  			bullets[i].move100 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 105 && !bullets[i].allow){  			bullets[i].move105 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 110 && !bullets[i].allow){  			bullets[i].move110 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 115 && !bullets[i].allow){  			bullets[i].move115 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 120 && !bullets[i].allow){  			bullets[i].move120 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 125 && !bullets[i].allow){  			bullets[i].move125 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 130 && !bullets[i].allow){  			bullets[i].move130 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 135 && !bullets[i].allow){  			bullets[i].move135 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 140 && !bullets[i].allow){  			bullets[i].move140 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 145 && !bullets[i].allow){  			bullets[i].move145 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 150 && !bullets[i].allow){  			bullets[i].move150 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 155 && !bullets[i].allow){  			bullets[i].move155 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 160 && !bullets[i].allow){  			bullets[i].move160 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 165 && !bullets[i].allow){  			bullets[i].move165 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 170 && !bullets[i].allow){  			bullets[i].move170 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 175 && !bullets[i].allow){  			bullets[i].move175 = true; 	bullets[i].allow = true; 	}

		else if(player.rotation == 185 && !bullets[i].allow){  			bullets[i].move185 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 190 && !bullets[i].allow){  			bullets[i].move190 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 195 && !bullets[i].allow){  			bullets[i].move195 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 200 && !bullets[i].allow){  			bullets[i].move200 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 205 && !bullets[i].allow){  			bullets[i].move205 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 210 && !bullets[i].allow){  			bullets[i].move210 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 215 && !bullets[i].allow){  			bullets[i].move215 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 220 && !bullets[i].allow){  			bullets[i].move220 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 225 && !bullets[i].allow){  			bullets[i].move225 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 230 && !bullets[i].allow){  			bullets[i].move230 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 235 && !bullets[i].allow){  			bullets[i].move235 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 240 && !bullets[i].allow){  			bullets[i].move240 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 245 && !bullets[i].allow){  			bullets[i].move245 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 250 && !bullets[i].allow){  			bullets[i].move250 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 255 && !bullets[i].allow){  			bullets[i].move255 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 260 && !bullets[i].allow){  			bullets[i].move260 = true; 	bullets[i].allow = true; 	}
		else if(player.rotation == 265 && !bullets[i].allow){  			bullets[i].move265 = true; 	bullets[i].allow = true; 	}

		// Movemos las bullets
  		if(bullets[i].move360)			bullets[i].y -= bullets[i].velY;
  		else if(bullets[i].move180)		bullets[i].y += bullets[i].velY;
  		else if(bullets[i].move270)		bullets[i].x -= bullets[i].velX;
  		else if(bullets[i].move90)		bullets[i].x += bullets[i].velX;

  		else if(bullets[i].move275){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move280){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move285){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move290){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move295){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move300){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move305){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move310){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move315){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move320){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move325){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move330){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move335){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move340){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move345){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move350){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move355){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }

		else if(bullets[i].move5){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move10){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move15){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move20){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move25){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move30){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move35){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move40){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move45){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move50){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move55){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move60){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move65){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move70){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move75){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move80){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move85){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }

  		else if(bullets[i].move95){			bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move100){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move105){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move110){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move115){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move120){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move125){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move130){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move135){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move140){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move145){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move150){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move155){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move160){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].move165){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move170){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].move175){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }

  		else if(bullets[i].move185){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move190){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move195){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move200){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move205){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move210){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move215){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move220){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move225){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move230){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move235){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move240){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move245){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move250){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].move255){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move260){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].move265){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }

  		// Remove bullets if exceed the map limits
	 	if(bullets[i].x < 0 || bullets[i].y < 0)								bullets.splice(i,1);
    	else if(bullets[i].x > canvas.width || bullets[i].y > canvas.height)	bullets.splice(i,1);

		// Remove bullets if they're 100px farther from the player
	 	// if(bullets[i].y < player.y-100 || bullets[i].y > player.y+100)
	 	// 	bullets.splice(i,1);
	 	// if(bullets[i].x < player.x-100 || bullets[i].x > player.x+100)
	 	// 	bullets.splice(i,1);
  	}
}

function weapon3(player, bullets, size1, size2){

	// Make bullets
	if(key == formatKey("C") && player.timeReturnShootWeapon3 == 0 && player.munition3 > 0){
		if(player.rotation == 0 || player.rotation == 360)	bullets.push(new Bullet(player.x+player.width/2,player.y,size1,size2,4,4));
		else if(player.rotation == 90)				bullets.push(new Bullet(player.x+player.width,player.y+player.height/2,size1,size2,4,4));
		else if(player.rotation == 180)				bullets.push(new Bullet(player.x+player.width/2,player.y+player.height,size1,size2,4,4));
		else if(player.rotation == 270)				bullets.push(new Bullet(player.x,player.y+player.height/2,size1,size2,4,4));

		else if(player.rotation == 275){ 	bullets.push(new Bullet(player.x+player.width/2 - 8,player.y + 4,size1,size2,4,1));  }
		else if(player.rotation == 280){ 	bullets.push(new Bullet(player.x+player.width/2 - 8,player.y + 4,size1,size2,4,1));  }
		else if(player.rotation == 285){ 	bullets.push(new Bullet(player.x+player.width/2 - 7,player.y + 3,size1,size2,4,1));  }
		else if(player.rotation == 290){ 	bullets.push(new Bullet(player.x+player.width/2 - 7,player.y + 3,size1,size2,4,2));  }
		else if(player.rotation == 295){ 	bullets.push(new Bullet(player.x+player.width/2 - 6,player.y + 2,size1,size2,4,2));  }
		else if(player.rotation == 300){ 	bullets.push(new Bullet(player.x+player.width/2 - 6,player.y + 2,size1,size2,4,2));  }
		else if(player.rotation == 305){ 	bullets.push(new Bullet(player.x+player.width/2 - 5,player.y,size1,size2,4,3));  }
		else if(player.rotation == 310){ 	bullets.push(new Bullet(player.x+player.width/2 - 5,player.y,size1,size2,4,3));  }
		else if(player.rotation == 315){ 	bullets.push(new Bullet(player.x+player.width/2 - 4.5,player.y,size1,size2,3,3));  }
		else if(player.rotation == 320){ 	bullets.push(new Bullet(player.x+player.width/2 - 4.5,player.y,size1,size2,3,4));  }
		else if(player.rotation == 325){ 	bullets.push(new Bullet(player.x+player.width/2 - 3,player.y,size1,size2,3,4));  }
		else if(player.rotation == 330){ 	bullets.push(new Bullet(player.x+player.width/2 - 3,player.y,size1,size2,2,4));  }
		else if(player.rotation == 335){ 	bullets.push(new Bullet(player.x+player.width/2 - 2,player.y,size1,size2,2,4));  }
		else if(player.rotation == 340){ 	bullets.push(new Bullet(player.x+player.width/2 - 0.75,player.y,size1,size2,2,4));  }
		else if(player.rotation == 345){ 	bullets.push(new Bullet(player.x+player.width/2 - 0.75,player.y,size1,size2,1,4));  }
		else if(player.rotation == 350){ 	bullets.push(new Bullet(player.x+player.width/2,player.y,size1,size2,1,4));  }
		else if(player.rotation == 355){ 	bullets.push(new Bullet(player.x+player.width/2,player.y,size1,size2,1,4));  }

		else if(player.rotation == 5){ 		bullets.push(new Bullet(player.x+player.width/2,player.y,size1,size2,1,4));  }
		else if(player.rotation == 10){ 	bullets.push(new Bullet(player.x+player.width/2,player.y,size1,size2,1,4));  }
		else if(player.rotation == 15){ 	bullets.push(new Bullet(player.x+player.width/2 + 0.75,player.y,size1,size2,1,4));  }
		else if(player.rotation == 20){ 	bullets.push(new Bullet(player.x+player.width/2 + 0.75,player.y,size1,size2,2,4));  }
		else if(player.rotation == 25){ 	bullets.push(new Bullet(player.x+player.width/2 + 2,player.y,size1,size2,2,4));  }
		else if(player.rotation == 30){ 	bullets.push(new Bullet(player.x+player.width/2 + 3,player.y,size1,size2,2,4));  }
		else if(player.rotation == 35){ 	bullets.push(new Bullet(player.x+player.width/2 + 3,player.y,size1,size2,3,4));  }
		else if(player.rotation == 40){ 	bullets.push(new Bullet(player.x+player.width/2 + 4.5,player.y,size1,size2,3,4));  }
		else if(player.rotation == 45){ 	bullets.push(new Bullet(player.x+player.width/2 + 4.5,player.y,size1,size2,3,3));  }
		else if(player.rotation == 50){ 	bullets.push(new Bullet(player.x+player.width/2 + 5,player.y,size1,size2,4,3));  }
		else if(player.rotation == 55){ 	bullets.push(new Bullet(player.x+player.width/2 + 5,player.y,size1,size2,4,3));  }
		else if(player.rotation == 60){ 	bullets.push(new Bullet(player.x+player.width/2 + 6,player.y + 2,size1,size2,4,2));  }
		else if(player.rotation == 65){ 	bullets.push(new Bullet(player.x+player.width/2 + 6,player.y + 2,size1,size2,4,2));  }
		else if(player.rotation == 70){ 	bullets.push(new Bullet(player.x+player.width/2 + 7,player.y + 3,size1,size2,4,2));  }
		else if(player.rotation == 75){ 	bullets.push(new Bullet(player.x+player.width/2 + 7,player.y + 3,size1,size2,4,1));  }
		else if(player.rotation == 80){ 	bullets.push(new Bullet(player.x+player.width/2 + 8,player.y + 4,size1,size2,4,1));  }
		else if(player.rotation == 85){ 	bullets.push(new Bullet(player.x+player.width/2 + 8,player.y + 4,size1,size2,4,1));  }

		else if(player.rotation == 95){ 	bullets.push(new Bullet(player.x+player.width/2 + 8,player.y+player.height - 4,size1,size2,4,1));  }
		else if(player.rotation == 100){ 	bullets.push(new Bullet(player.x+player.width/2 + 8,player.y+player.height - 4,size1,size2,4,1));  }
		else if(player.rotation == 105){ 	bullets.push(new Bullet(player.x+player.width/2 + 7,player.y+player.height - 3,size1,size2,4,1));  }
		else if(player.rotation == 110){ 	bullets.push(new Bullet(player.x+player.width/2 + 7,player.y+player.height - 3,size1,size2,4,2));  }
		else if(player.rotation == 115){ 	bullets.push(new Bullet(player.x+player.width/2 + 6,player.y+player.height - 2,size1,size2,4,2));  }
		else if(player.rotation == 120){ 	bullets.push(new Bullet(player.x+player.width/2 + 6,player.y+player.height - 2,size1,size2,4,2));  }
		else if(player.rotation == 125){ 	bullets.push(new Bullet(player.x+player.width/2 + 5,player.y+player.height,size1,size2,4,3));  }
		else if(player.rotation == 130){ 	bullets.push(new Bullet(player.x+player.width/2 + 5,player.y+player.height,size1,size2,4,3));  }
		else if(player.rotation == 135){ 	bullets.push(new Bullet(player.x+player.width/2 + 4.5,player.y+player.height,size1,size2,3,3));  }
		else if(player.rotation == 140){ 	bullets.push(new Bullet(player.x+player.width/2 + 4.5,player.y+player.height,size1,size2,3,4));  }
		else if(player.rotation == 145){ 	bullets.push(new Bullet(player.x+player.width/2 + 3,player.y+player.height,size1,size2,3,4));  }
		else if(player.rotation == 150){ 	bullets.push(new Bullet(player.x+player.width/2 + 3,player.y+player.height,size1,size2,2,4));  }
		else if(player.rotation == 155){ 	bullets.push(new Bullet(player.x+player.width/2 + 2,player.y+player.height,size1,size2,2,4));  }
		else if(player.rotation == 160){ 	bullets.push(new Bullet(player.x+player.width/2 + 0.75,player.y+player.height,size1,size2,2,4));  }
		else if(player.rotation == 165){ 	bullets.push(new Bullet(player.x+player.width/2 + 0.75,player.y+player.height,size1,size2,1,4));  }
		else if(player.rotation == 170){ 	bullets.push(new Bullet(player.x+player.width/2,player.y+player.height,size1,size2,1,4));  }
		else if(player.rotation == 175){ 	bullets.push(new Bullet(player.x+player.width/2,player.y+player.height,size1,size2,1,4));  }

		else if(player.rotation == 185){ 	bullets.push(new Bullet(player.x+player.width/2,player.y+player.height,size1,size2,1,4));  }
		else if(player.rotation == 190){ 	bullets.push(new Bullet(player.x+player.width/2 - 2,player.y+player.height,size1,size2,1,4));  }
		else if(player.rotation == 195){ 	bullets.push(new Bullet(player.x+player.width/2 - 2.5,player.y+player.height,size1,size2,1,4));  }
		else if(player.rotation == 200){ 	bullets.push(new Bullet(player.x+player.width/2 - 2.5,player.y+player.height,size1,size2,2,4));  }
		else if(player.rotation == 205){ 	bullets.push(new Bullet(player.x+player.width/2 - 3,player.y+player.height,size1,size2,2,4));  }
		else if(player.rotation == 210){ 	bullets.push(new Bullet(player.x+player.width/2 - 3,player.y+player.height,size1,size2,2,4));  }
		else if(player.rotation == 215){ 	bullets.push(new Bullet(player.x+player.width/2 - 4,player.y+player.height,size1,size2,3,4));  }
		else if(player.rotation == 220){ 	bullets.push(new Bullet(player.x+player.width/2 - 5.5,player.y+player.height,size1,size2,3,4));  }
		else if(player.rotation == 225){ 	bullets.push(new Bullet(player.x+player.width/2 - 6.5,player.y+player.height,size1,size2,3,3));  }
		else if(player.rotation == 230){ 	bullets.push(new Bullet(player.x+player.width/2 - 8,player.y+player.height,size1,size2,4,3));  }
		else if(player.rotation == 235){ 	bullets.push(new Bullet(player.x+player.width/2 - 8,player.y+player.height,size1,size2,4,3));  }
		else if(player.rotation == 240){ 	bullets.push(new Bullet(player.x+player.width/2 - 6,player.y+player.height - 3,size1,size2,4,2));  }
		else if(player.rotation == 245){ 	bullets.push(new Bullet(player.x+player.width/2 - 6,player.y+player.height - 3,size1,size2,4,2));  }
		else if(player.rotation == 250){ 	bullets.push(new Bullet(player.x+player.width/2 - 7,player.y+player.height - 4,size1,size2,4,2));  }
		else if(player.rotation == 255){ 	bullets.push(new Bullet(player.x+player.width/2 - 7,player.y+player.height - 4,size1,size2,4,1));  }
		else if(player.rotation == 260){ 	bullets.push(new Bullet(player.x+player.width/2 - 8,player.y+player.height - 5,size1,size2,4,1));  }
		else if(player.rotation == 265){ 	bullets.push(new Bullet(player.x+player.width/2 - 8,player.y+player.height - 6,size1,size2,4,1));  }

		player.munition3--;
		loadSound(sWeapon3);
		player.timeReturnShootWeapon3 = _TimeReturnShootPlayerWeapon3;

		key = null;
	}else if(key == formatKey("C") && player.munition3 <= 0){
		loadSound(sNoMunition);
		key = null;
	}

	// Move bullets
	// ------------
	// bullets[i].move360 		-->		The bullet only is moved to up though change the rotation
	// bullets[i].allow			-->		Avoid 1 determinate bullet change of direction when spin the spaceship(rotation)
	for(i in bullets){
		if(!bullets[i].isCollide){
			if((player.rotation == 0 || player.rotation == 360) && !bullets[i].allow){	bullets[i].move360 = true;	bullets[i].allow = true;	}
			else if(player.rotation == 90 && !bullets[i].allow){          		bullets[i].move90 = true;	bullets[i].allow = true;	}
			else if(player.rotation == 180 && !bullets[i].allow){				bullets[i].move180 = true;	bullets[i].allow = true; 	}
			else if(player.rotation == 270 && !bullets[i].allow){				bullets[i].move270 = true;	bullets[i].allow = true;	}

			else if(player.rotation == 275 && !bullets[i].allow){  			bullets[i].move275 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 280 && !bullets[i].allow){  			bullets[i].move280 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 285 && !bullets[i].allow){  			bullets[i].move285 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 290 && !bullets[i].allow){  			bullets[i].move290 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 295 && !bullets[i].allow){  			bullets[i].move295 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 300 && !bullets[i].allow){  			bullets[i].move300 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 305 && !bullets[i].allow){  			bullets[i].move305 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 310 && !bullets[i].allow){  			bullets[i].move310 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 315 && !bullets[i].allow){  			bullets[i].move315 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 320 && !bullets[i].allow){  			bullets[i].move320 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 325 && !bullets[i].allow){  			bullets[i].move325 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 330 && !bullets[i].allow){  			bullets[i].move330 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 335 && !bullets[i].allow){  			bullets[i].move335 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 340 && !bullets[i].allow){  			bullets[i].move340 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 345 && !bullets[i].allow){  			bullets[i].move345 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 350 && !bullets[i].allow){  			bullets[i].move350 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 355 && !bullets[i].allow){  			bullets[i].move355 = true; 	bullets[i].allow = true; 	}

			else if(player.rotation == 5 && !bullets[i].allow){  			bullets[i].move5 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 10 && !bullets[i].allow){  			bullets[i].move10 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 15 && !bullets[i].allow){  			bullets[i].move15 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 20 && !bullets[i].allow){  			bullets[i].move20 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 25 && !bullets[i].allow){  			bullets[i].move25 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 30 && !bullets[i].allow){  			bullets[i].move30 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 35 && !bullets[i].allow){  			bullets[i].move35 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 40 && !bullets[i].allow){  			bullets[i].move40 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 45 && !bullets[i].allow){  			bullets[i].move45 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 50 && !bullets[i].allow){  			bullets[i].move50 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 55 && !bullets[i].allow){  			bullets[i].move55 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 60 && !bullets[i].allow){  			bullets[i].move60 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 65 && !bullets[i].allow){  			bullets[i].move65 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 70 && !bullets[i].allow){  			bullets[i].move70 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 75 && !bullets[i].allow){  			bullets[i].move75 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 80 && !bullets[i].allow){  			bullets[i].move80 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 85 && !bullets[i].allow){  			bullets[i].move85 = true; 	bullets[i].allow = true; 	}

			else if(player.rotation == 95 && !bullets[i].allow){  			bullets[i].move95 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 100 && !bullets[i].allow){  			bullets[i].move100 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 105 && !bullets[i].allow){  			bullets[i].move105 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 110 && !bullets[i].allow){  			bullets[i].move110 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 115 && !bullets[i].allow){  			bullets[i].move115 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 120 && !bullets[i].allow){  			bullets[i].move120 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 125 && !bullets[i].allow){  			bullets[i].move125 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 130 && !bullets[i].allow){  			bullets[i].move130 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 135 && !bullets[i].allow){  			bullets[i].move135 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 140 && !bullets[i].allow){  			bullets[i].move140 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 145 && !bullets[i].allow){  			bullets[i].move145 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 150 && !bullets[i].allow){  			bullets[i].move150 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 155 && !bullets[i].allow){  			bullets[i].move155 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 160 && !bullets[i].allow){  			bullets[i].move160 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 165 && !bullets[i].allow){  			bullets[i].move165 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 170 && !bullets[i].allow){  			bullets[i].move170 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 175 && !bullets[i].allow){  			bullets[i].move175 = true; 	bullets[i].allow = true; 	}

			else if(player.rotation == 185 && !bullets[i].allow){  			bullets[i].move185 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 190 && !bullets[i].allow){  			bullets[i].move190 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 195 && !bullets[i].allow){  			bullets[i].move195 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 200 && !bullets[i].allow){  			bullets[i].move200 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 205 && !bullets[i].allow){  			bullets[i].move205 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 210 && !bullets[i].allow){  			bullets[i].move210 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 215 && !bullets[i].allow){  			bullets[i].move215 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 220 && !bullets[i].allow){  			bullets[i].move220 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 225 && !bullets[i].allow){  			bullets[i].move225 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 230 && !bullets[i].allow){  			bullets[i].move230 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 235 && !bullets[i].allow){  			bullets[i].move235 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 240 && !bullets[i].allow){  			bullets[i].move240 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 245 && !bullets[i].allow){  			bullets[i].move245 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 250 && !bullets[i].allow){  			bullets[i].move250 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 255 && !bullets[i].allow){  			bullets[i].move255 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 260 && !bullets[i].allow){  			bullets[i].move260 = true; 	bullets[i].allow = true; 	}
			else if(player.rotation == 265 && !bullets[i].allow){  			bullets[i].move265 = true; 	bullets[i].allow = true; 	}

			// Move bullets
	  		if(bullets[i].move360)				bullets[i].y -= bullets[i].velY;
	  		else if(bullets[i].move180)			bullets[i].y += bullets[i].velY;
	  		else if(bullets[i].move270)			bullets[i].x -= bullets[i].velX;
	  		else if(bullets[i].move90)			bullets[i].x += bullets[i].velX;

	  		else if(bullets[i].move275){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
			else if(bullets[i].move280){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
			else if(bullets[i].move285){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
	  		else if(bullets[i].move290){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
	  		else if(bullets[i].move295){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
			else if(bullets[i].move300){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
			else if(bullets[i].move305){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
	  		else if(bullets[i].move310){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
	  		else if(bullets[i].move315){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
			else if(bullets[i].move320){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
			else if(bullets[i].move325){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
	  		else if(bullets[i].move330){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
	  		else if(bullets[i].move335){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
			else if(bullets[i].move340){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
			else if(bullets[i].move345){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
	  		else if(bullets[i].move350){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
	  		else if(bullets[i].move355){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }

			else if(bullets[i].move5){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
			else if(bullets[i].move10){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
			else if(bullets[i].move15){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
	  		else if(bullets[i].move20){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
	  		else if(bullets[i].move25){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
			else if(bullets[i].move30){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
			else if(bullets[i].move35){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
	  		else if(bullets[i].move40){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
	  		else if(bullets[i].move45){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
			else if(bullets[i].move50){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
			else if(bullets[i].move55){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
	  		else if(bullets[i].move60){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
	  		else if(bullets[i].move65){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
			else if(bullets[i].move70){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
			else if(bullets[i].move75){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
	  		else if(bullets[i].move80){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
	  		else if(bullets[i].move85){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }

	  		else if(bullets[i].move95){			bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
			else if(bullets[i].move100){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
			else if(bullets[i].move105){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
	  		else if(bullets[i].move110){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
	  		else if(bullets[i].move115){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
			else if(bullets[i].move120){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
			else if(bullets[i].move125){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
	  		else if(bullets[i].move130){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
	  		else if(bullets[i].move135){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
			else if(bullets[i].move140){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
			else if(bullets[i].move145){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
	  		else if(bullets[i].move150){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
	  		else if(bullets[i].move155){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
			else if(bullets[i].move160){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
			else if(bullets[i].move165){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
	  		else if(bullets[i].move170){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
	  		else if(bullets[i].move175){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }

	  		else if(bullets[i].move185){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
			else if(bullets[i].move190){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
			else if(bullets[i].move195){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
	  		else if(bullets[i].move200){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
	  		else if(bullets[i].move205){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
			else if(bullets[i].move210){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
			else if(bullets[i].move215){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
	  		else if(bullets[i].move220){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
	  		else if(bullets[i].move225){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
			else if(bullets[i].move230){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
			else if(bullets[i].move235){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
	  		else if(bullets[i].move240){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
	  		else if(bullets[i].move245){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
			else if(bullets[i].move250){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
			else if(bullets[i].move255){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
	  		else if(bullets[i].move260){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
	  		else if(bullets[i].move265){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }


			// According bullet's rotation, i modify his size
			// Why? Width and Height of bullet3 have different values

			// Current bug: When change the size, as well change the image that is displayed on the canvas

			// if(!bullets[i].blockRotation){
			// 	bullets[i].rotationFixed = player.rotation;
			// 	bullets[i].blockRotation = true;
			// }

			// if((player.rotation == 0 || player.rotation == 360)){		bullets[i].width = size1;	bullets[i].height = size2;	}
			// else if(player.rotation == 90){        						bullets[i].width = size2;	bullets[i].height = size1;	}
			// else if(player.rotation == 180){							bullets[i].width = size1;	bullets[i].height = size2; 	}
			// else if(player.rotation == 270){							bullets[i].width = size2;	bullets[i].height = size1;	}







	  		// Remove bullets if exceed the map limits
		 	if(bullets[i].x < 0 || bullets[i].y < 0)								bullets.splice(i,1);
	    	else if(bullets[i].x > canvas.width || bullets[i].y > canvas.height)	bullets.splice(i,1);
	    }
  	}
}

function weaponEnemy(idx, shoot){
	// Make bullets
	if(enemy[idx].timeReturnShoot == 0 && shoot){
		enemy[idx].bullets.push(new Bullet(enemy[idx].x+enemy[idx].width/2 + 1,enemy[idx].y + 15,_SizeWeapon,_SizeWeapon,0,4));
		loadSound(sWeaponEnemy);
		enemy[idx].timeReturnShoot = _TimeReturnShootEnemy;
	}

	// Move bullets
	for(j in enemy[idx].bullets){
		enemy[idx].bullets[j].y += enemy[idx].bullets[j].velY;

		// Remove bullets if exceed the map limits
	 	if(enemy[idx].bullets[j].x < 0 || enemy[idx].bullets[j].y < 0)								enemy[idx].bullets.splice(j,1);
		else if(enemy[idx].bullets[j].x > canvas.width || enemy[idx].bullets[j].y > canvas.height)	enemy[idx].bullets.splice(j,1);
	}
}

// function weaponTest(player, bullets){
// 	// Make bullets
// 	if((key == formatKey("C")) && bullets.length <= 30){
// 		bullets.push(new Bullet(player.x+5,player.y,2,10,1,5));
// 		bullets.push(new Bullet(player.x+9,player.y,2,10,1,5));
// 		loadSound(sWeapon2);
// 		key = null;
// 	}

// 	// Move bullets
// 	for(i in bullets){
// 		bullets[i].y -= bullets[i].velY;
// 		//bullets[i].x -= bullets[i].velX;
// 	 	if(bullets[i].y < player.y-100)
//     		bullets.splice(i,1);
//     	/*else if(bullets[i].x > canvas.width || bullets[i].y > canvas.height)
//     		bullets.splice(i,1);*/
//   	}
// }

