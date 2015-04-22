function weapon1(player, bullets){

	// Make bullets
	if((key == formatKey("Z") || key == formatKey("SPACE")) && bullets.length < 500){
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

		key = null;
	}

	// Move bullets
	// ------------
	// bullets[i].mover360 		-->		La bala sólo se mueva hacia arriba, aunque cambie la rotación
	// bullets[i].permitir		-->		Impide que 1 bala concreta cambie de direccion cuando gire la nave(rotación)
	for(i in bullets){
		if((player.rotation == 0 || player.rotation == 360) && !bullets[i].permitir){	bullets[i].mover360 = true;	bullets[i].permitir = true;	}
		else if(player.rotation == 90 && !bullets[i].permitir){          		bullets[i].mover90 = true;	bullets[i].permitir = true;	}
		else if(player.rotation == 180 && !bullets[i].permitir){				bullets[i].mover180 = true;	bullets[i].permitir = true; 	}
		else if(player.rotation == 270 && !bullets[i].permitir){				bullets[i].mover270 = true;	bullets[i].permitir = true;	}

		else if(player.rotation == 275 && !bullets[i].permitir){  			bullets[i].mover275 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 280 && !bullets[i].permitir){  			bullets[i].mover280 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 285 && !bullets[i].permitir){  			bullets[i].mover285 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 290 && !bullets[i].permitir){  			bullets[i].mover290 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 295 && !bullets[i].permitir){  			bullets[i].mover295 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 300 && !bullets[i].permitir){  			bullets[i].mover300 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 305 && !bullets[i].permitir){  			bullets[i].mover305 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 310 && !bullets[i].permitir){  			bullets[i].mover310 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 315 && !bullets[i].permitir){  			bullets[i].mover315 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 320 && !bullets[i].permitir){  			bullets[i].mover320 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 325 && !bullets[i].permitir){  			bullets[i].mover325 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 330 && !bullets[i].permitir){  			bullets[i].mover330 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 335 && !bullets[i].permitir){  			bullets[i].mover335 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 340 && !bullets[i].permitir){  			bullets[i].mover340 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 345 && !bullets[i].permitir){  			bullets[i].mover345 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 350 && !bullets[i].permitir){  			bullets[i].mover350 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 355 && !bullets[i].permitir){  			bullets[i].mover355 = true; 	bullets[i].permitir = true; 	}

		else if(player.rotation == 5 && !bullets[i].permitir){  			bullets[i].mover5 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 10 && !bullets[i].permitir){  			bullets[i].mover10 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 15 && !bullets[i].permitir){  			bullets[i].mover15 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 20 && !bullets[i].permitir){  			bullets[i].mover20 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 25 && !bullets[i].permitir){  			bullets[i].mover25 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 30 && !bullets[i].permitir){  			bullets[i].mover30 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 35 && !bullets[i].permitir){  			bullets[i].mover35 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 40 && !bullets[i].permitir){  			bullets[i].mover40 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 45 && !bullets[i].permitir){  			bullets[i].mover45 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 50 && !bullets[i].permitir){  			bullets[i].mover50 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 55 && !bullets[i].permitir){  			bullets[i].mover55 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 60 && !bullets[i].permitir){  			bullets[i].mover60 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 65 && !bullets[i].permitir){  			bullets[i].mover65 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 70 && !bullets[i].permitir){  			bullets[i].mover70 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 75 && !bullets[i].permitir){  			bullets[i].mover75 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 80 && !bullets[i].permitir){  			bullets[i].mover80 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 85 && !bullets[i].permitir){  			bullets[i].mover85 = true; 		bullets[i].permitir = true; 	}

		else if(player.rotation == 95 && !bullets[i].permitir){  			bullets[i].mover95 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 100 && !bullets[i].permitir){  			bullets[i].mover100 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 105 && !bullets[i].permitir){  			bullets[i].mover105 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 110 && !bullets[i].permitir){  			bullets[i].mover110 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 115 && !bullets[i].permitir){  			bullets[i].mover115 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 120 && !bullets[i].permitir){  			bullets[i].mover120 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 125 && !bullets[i].permitir){  			bullets[i].mover125 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 130 && !bullets[i].permitir){  			bullets[i].mover130 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 135 && !bullets[i].permitir){  			bullets[i].mover135 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 140 && !bullets[i].permitir){  			bullets[i].mover140 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 145 && !bullets[i].permitir){  			bullets[i].mover145 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 150 && !bullets[i].permitir){  			bullets[i].mover150 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 155 && !bullets[i].permitir){  			bullets[i].mover155 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 160 && !bullets[i].permitir){  			bullets[i].mover160 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 165 && !bullets[i].permitir){  			bullets[i].mover165 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 170 && !bullets[i].permitir){  			bullets[i].mover170 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 175 && !bullets[i].permitir){  			bullets[i].mover175 = true; 	bullets[i].permitir = true; 	}

		else if(player.rotation == 185 && !bullets[i].permitir){  			bullets[i].mover185 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 190 && !bullets[i].permitir){  			bullets[i].mover190 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 195 && !bullets[i].permitir){  			bullets[i].mover195 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 200 && !bullets[i].permitir){  			bullets[i].mover200 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 205 && !bullets[i].permitir){  			bullets[i].mover205 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 210 && !bullets[i].permitir){  			bullets[i].mover210 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 215 && !bullets[i].permitir){  			bullets[i].mover215 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 220 && !bullets[i].permitir){  			bullets[i].mover220 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 225 && !bullets[i].permitir){  			bullets[i].mover225 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 230 && !bullets[i].permitir){  			bullets[i].mover230 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 235 && !bullets[i].permitir){  			bullets[i].mover235 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 240 && !bullets[i].permitir){  			bullets[i].mover240 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 245 && !bullets[i].permitir){  			bullets[i].mover245 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 250 && !bullets[i].permitir){  			bullets[i].mover250 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 255 && !bullets[i].permitir){  			bullets[i].mover255 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 260 && !bullets[i].permitir){  			bullets[i].mover260 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 265 && !bullets[i].permitir){  			bullets[i].mover265 = true; 	bullets[i].permitir = true; 	}

		// Move bullets
  		if(bullets[i].mover360)				bullets[i].y -= bullets[i].velY;
  		else if(bullets[i].mover180)		bullets[i].y += bullets[i].velY;
  		else if(bullets[i].mover270)		bullets[i].x -= bullets[i].velX;
  		else if(bullets[i].mover90)			bullets[i].x += bullets[i].velX;

  		else if(bullets[i].mover275){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover280){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover285){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover290){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover295){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover300){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover305){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover310){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover315){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover320){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover325){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover330){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover335){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover340){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover345){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover350){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover355){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }

		else if(bullets[i].mover5){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover10){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover15){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover20){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover25){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover30){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover35){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover40){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover45){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover50){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover55){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover60){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover65){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover70){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover75){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover80){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover85){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }

  		else if(bullets[i].mover95){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover100){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover105){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover110){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover115){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover120){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover125){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover130){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover135){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover140){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover145){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover150){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover155){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover160){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover165){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover170){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover175){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }

  		else if(bullets[i].mover185){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover190){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover195){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover200){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover205){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover210){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover215){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover220){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover225){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover230){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover235){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover240){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover245){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover250){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover255){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover260){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover265){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }

  		// Remove bullets if exceed the map limits
	 	if(bullets[i].x < 0 || bullets[i].y < 0)								bullets.splice(i,1);
    	else if(bullets[i].x > canvas.width || bullets[i].y > canvas.height)	bullets.splice(i,1);
  	}
}

function weapon2(player, bullets){

	// Make bullets
	if((key == formatKey("X") || key == formatKey("CTRL")) && player.munitionWeapon2 > 0){
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

		player.munitionWeapon2 = player.munitionWeapon2 - 3;
		loadSound(sWeapon1);

		key = null;
	}else if((key == formatKey("X") || key == formatKey("CTRL")) && player.munitionWeapon2 <= 0){
		loadSound(sNoMunition);
		key = null;
	}

	// Mover bullets
	// ------------
	// bullets[i].mover360 		-->		La bala sólo se mueva hacia arriba, aunque cambie la rotación
	// bullets[i].permitir		-->		Impide que 1 bala concreta cambie de direccion cuando gire la nave(rotación)
	for(i in bullets){
		if((player.rotation == 0 || player.rotation == 360) && !bullets[i].permitir){	bullets[i].mover360 = true;	bullets[i].permitir = true;	}
		else if(player.rotation == 90 && !bullets[i].permitir){          		bullets[i].mover90 = true;	bullets[i].permitir = true;	}
		else if(player.rotation == 180 && !bullets[i].permitir){				bullets[i].mover180 = true;	bullets[i].permitir = true; 	}
		else if(player.rotation == 270 && !bullets[i].permitir){				bullets[i].mover270 = true;	bullets[i].permitir = true;	}

		else if(player.rotation == 275 && !bullets[i].permitir){  			bullets[i].mover275 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 280 && !bullets[i].permitir){  			bullets[i].mover280 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 285 && !bullets[i].permitir){  			bullets[i].mover285 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 290 && !bullets[i].permitir){  			bullets[i].mover290 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 295 && !bullets[i].permitir){  			bullets[i].mover295 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 300 && !bullets[i].permitir){  			bullets[i].mover300 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 305 && !bullets[i].permitir){  			bullets[i].mover305 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 310 && !bullets[i].permitir){  			bullets[i].mover310 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 315 && !bullets[i].permitir){  			bullets[i].mover315 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 320 && !bullets[i].permitir){  			bullets[i].mover320 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 325 && !bullets[i].permitir){  			bullets[i].mover325 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 330 && !bullets[i].permitir){  			bullets[i].mover330 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 335 && !bullets[i].permitir){  			bullets[i].mover335 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 340 && !bullets[i].permitir){  			bullets[i].mover340 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 345 && !bullets[i].permitir){  			bullets[i].mover345 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 350 && !bullets[i].permitir){  			bullets[i].mover350 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 355 && !bullets[i].permitir){  			bullets[i].mover355 = true; 	bullets[i].permitir = true; 	}

		else if(player.rotation == 5 && !bullets[i].permitir){  			bullets[i].mover5 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 10 && !bullets[i].permitir){  			bullets[i].mover10 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 15 && !bullets[i].permitir){  			bullets[i].mover15 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 20 && !bullets[i].permitir){  			bullets[i].mover20 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 25 && !bullets[i].permitir){  			bullets[i].mover25 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 30 && !bullets[i].permitir){  			bullets[i].mover30 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 35 && !bullets[i].permitir){  			bullets[i].mover35 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 40 && !bullets[i].permitir){  			bullets[i].mover40 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 45 && !bullets[i].permitir){  			bullets[i].mover45 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 50 && !bullets[i].permitir){  			bullets[i].mover50 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 55 && !bullets[i].permitir){  			bullets[i].mover55 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 60 && !bullets[i].permitir){  			bullets[i].mover60 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 65 && !bullets[i].permitir){  			bullets[i].mover65 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 70 && !bullets[i].permitir){  			bullets[i].mover70 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 75 && !bullets[i].permitir){  			bullets[i].mover75 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 80 && !bullets[i].permitir){  			bullets[i].mover80 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 85 && !bullets[i].permitir){  			bullets[i].mover85 = true; 		bullets[i].permitir = true; 	}

		else if(player.rotation == 95 && !bullets[i].permitir){  			bullets[i].mover95 = true; 		bullets[i].permitir = true; 	}
		else if(player.rotation == 100 && !bullets[i].permitir){  			bullets[i].mover100 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 105 && !bullets[i].permitir){  			bullets[i].mover105 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 110 && !bullets[i].permitir){  			bullets[i].mover110 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 115 && !bullets[i].permitir){  			bullets[i].mover115 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 120 && !bullets[i].permitir){  			bullets[i].mover120 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 125 && !bullets[i].permitir){  			bullets[i].mover125 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 130 && !bullets[i].permitir){  			bullets[i].mover130 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 135 && !bullets[i].permitir){  			bullets[i].mover135 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 140 && !bullets[i].permitir){  			bullets[i].mover140 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 145 && !bullets[i].permitir){  			bullets[i].mover145 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 150 && !bullets[i].permitir){  			bullets[i].mover150 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 155 && !bullets[i].permitir){  			bullets[i].mover155 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 160 && !bullets[i].permitir){  			bullets[i].mover160 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 165 && !bullets[i].permitir){  			bullets[i].mover165 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 170 && !bullets[i].permitir){  			bullets[i].mover170 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 175 && !bullets[i].permitir){  			bullets[i].mover175 = true; 	bullets[i].permitir = true; 	}

		else if(player.rotation == 185 && !bullets[i].permitir){  			bullets[i].mover185 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 190 && !bullets[i].permitir){  			bullets[i].mover190 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 195 && !bullets[i].permitir){  			bullets[i].mover195 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 200 && !bullets[i].permitir){  			bullets[i].mover200 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 205 && !bullets[i].permitir){  			bullets[i].mover205 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 210 && !bullets[i].permitir){  			bullets[i].mover210 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 215 && !bullets[i].permitir){  			bullets[i].mover215 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 220 && !bullets[i].permitir){  			bullets[i].mover220 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 225 && !bullets[i].permitir){  			bullets[i].mover225 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 230 && !bullets[i].permitir){  			bullets[i].mover230 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 235 && !bullets[i].permitir){  			bullets[i].mover235 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 240 && !bullets[i].permitir){  			bullets[i].mover240 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 245 && !bullets[i].permitir){  			bullets[i].mover245 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 250 && !bullets[i].permitir){  			bullets[i].mover250 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 255 && !bullets[i].permitir){  			bullets[i].mover255 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 260 && !bullets[i].permitir){  			bullets[i].mover260 = true; 	bullets[i].permitir = true; 	}
		else if(player.rotation == 265 && !bullets[i].permitir){  			bullets[i].mover265 = true; 	bullets[i].permitir = true; 	}

		// Movemos las bullets
  		if(bullets[i].mover360)			bullets[i].y -= bullets[i].velY;
  		else if(bullets[i].mover180)		bullets[i].y += bullets[i].velY;
  		else if(bullets[i].mover270)		bullets[i].x -= bullets[i].velX;
  		else if(bullets[i].mover90)		bullets[i].x += bullets[i].velX;

  		else if(bullets[i].mover275){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover280){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover285){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover290){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover295){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover300){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover305){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover310){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover315){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover320){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover325){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover330){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover335){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover340){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover345){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover350){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover355){		bullets[i].y -= bullets[i].velY;	bullets[i].x -= bullets[i].velX; }

		else if(bullets[i].mover5){			bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover10){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover15){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover20){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover25){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover30){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover35){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover40){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover45){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover50){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover55){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover60){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover65){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover70){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover75){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover80){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover85){		bullets[i].y -= bullets[i].velY;	bullets[i].x += bullets[i].velX; }

  		else if(bullets[i].mover95){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover100){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover105){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover110){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover115){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover120){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover125){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover130){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover135){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover140){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover145){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover150){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover155){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover160){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
		else if(bullets[i].mover165){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover170){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }
  		else if(bullets[i].mover175){		bullets[i].y += bullets[i].velY;	bullets[i].x += bullets[i].velX; }

  		else if(bullets[i].mover185){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover190){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover195){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover200){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover205){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover210){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover215){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover220){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover225){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover230){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover235){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover240){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover245){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover250){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
		else if(bullets[i].mover255){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover260){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }
  		else if(bullets[i].mover265){		bullets[i].y += bullets[i].velY;	bullets[i].x -= bullets[i].velX; }

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

function weaponTest(player, bullets){
	// Make bullets
	if((key == formatKey("C")) && bullets.length <= 30){
		bullets.push(new Bullet(player.x+5,player.y,2,10,1,5));
		bullets.push(new Bullet(player.x+9,player.y,2,10,1,5));
		loadSound(sWeapon2);
		key = null;
	}

	// Move bullets
	for(i in bullets){
		bullets[i].y -= bullets[i].velY;
		//bullets[i].x -= bullets[i].velX;
	 	if(bullets[i].y < player.y-100)
    		bullets.splice(i,1);
    	/*else if(bullets[i].x > canvas.width || bullets[i].y > canvas.height)
    		bullets.splice(i,1);*/
  	}
}