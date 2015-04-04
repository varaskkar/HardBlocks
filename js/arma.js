const _SizeShoot1 = 3;
var rot = 0;

function armaSimple(){

	// Crear balas
	if((tecla == formatKey("Z")) && balas.length < 500){
		if(rotacion == 0 || rotacion == 360)	balas.push(new Figura(jugador.x+jugador.width/2,jugador.y,_SizeShoot1,_SizeShoot1,4,4));
		else if(rotacion == 90)					balas.push(new Figura(jugador.x+jugador.width,jugador.y+jugador.height/2,_SizeShoot1,_SizeShoot1,4,4));
		else if(rotacion == 180)				balas.push(new Figura(jugador.x+jugador.width/2,jugador.y+jugador.height,_SizeShoot1,_SizeShoot1,4,4));
		else if(rotacion == 270)				balas.push(new Figura(jugador.x,jugador.y+jugador.height/2,_SizeShoot1,_SizeShoot1,4,4));

		else if(rotacion == 275){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 8,jugador.y + 4,_SizeShoot1,_SizeShoot1,4,1));  }
		else if(rotacion == 280){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 8,jugador.y + 4,_SizeShoot1,_SizeShoot1,4,1));  }
		else if(rotacion == 285){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 7,jugador.y + 3,_SizeShoot1,_SizeShoot1,4,1));  }
		else if(rotacion == 290){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 7,jugador.y + 3,_SizeShoot1,_SizeShoot1,4,2));  }
		else if(rotacion == 295){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 6,jugador.y + 2,_SizeShoot1,_SizeShoot1,4,2));  }
		else if(rotacion == 300){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 6,jugador.y + 2,_SizeShoot1,_SizeShoot1,4,2));  }
		else if(rotacion == 305){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 5,jugador.y,_SizeShoot1,_SizeShoot1,4,3));  }
		else if(rotacion == 310){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 5,jugador.y,_SizeShoot1,_SizeShoot1,4,3));  }
		else if(rotacion == 315){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 4.5,jugador.y,_SizeShoot1,_SizeShoot1,3,3));  }
		else if(rotacion == 320){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 4.5,jugador.y,_SizeShoot1,_SizeShoot1,3,4));  }
		else if(rotacion == 325){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 3,jugador.y,_SizeShoot1,_SizeShoot1,3,4));  }
		else if(rotacion == 330){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 3,jugador.y,_SizeShoot1,_SizeShoot1,2,4));  }
		else if(rotacion == 335){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 2,jugador.y,_SizeShoot1,_SizeShoot1,2,4));  }
		else if(rotacion == 340){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 0.75,jugador.y,_SizeShoot1,_SizeShoot1,2,4));  }
		else if(rotacion == 345){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 0.75,jugador.y,_SizeShoot1,_SizeShoot1,1,4));  }
		else if(rotacion == 350){ 	balas.push(new Figura(jugador.x+jugador.width/2,jugador.y,_SizeShoot1,_SizeShoot1,1,4));  }
		else if(rotacion == 355){ 	balas.push(new Figura(jugador.x+jugador.width/2,jugador.y,_SizeShoot1,_SizeShoot1,1,4));  }

		else if(rotacion == 5){ 	balas.push(new Figura(jugador.x+jugador.width/2,jugador.y,_SizeShoot1,_SizeShoot1,1,4));  }
		else if(rotacion == 10){ 	balas.push(new Figura(jugador.x+jugador.width/2,jugador.y,_SizeShoot1,_SizeShoot1,1,4));  }
		else if(rotacion == 15){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 0.75,jugador.y,_SizeShoot1,_SizeShoot1,1,4));  }
		else if(rotacion == 20){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 0.75,jugador.y,_SizeShoot1,_SizeShoot1,2,4));  }
		else if(rotacion == 25){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 2,jugador.y,_SizeShoot1,_SizeShoot1,2,4));  }
		else if(rotacion == 30){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 3,jugador.y,_SizeShoot1,_SizeShoot1,2,4));  }
		else if(rotacion == 35){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 3,jugador.y,_SizeShoot1,_SizeShoot1,3,4));  }
		else if(rotacion == 40){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 4.5,jugador.y,_SizeShoot1,_SizeShoot1,3,4));  }
		else if(rotacion == 45){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 4.5,jugador.y,_SizeShoot1,_SizeShoot1,3,3));  }
		else if(rotacion == 50){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 5,jugador.y,_SizeShoot1,_SizeShoot1,4,3));  }
		else if(rotacion == 55){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 5,jugador.y,_SizeShoot1,_SizeShoot1,4,3));  }
		else if(rotacion == 60){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 6,jugador.y + 2,_SizeShoot1,_SizeShoot1,4,2));  }
		else if(rotacion == 65){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 6,jugador.y + 2,_SizeShoot1,_SizeShoot1,4,2));  }
		else if(rotacion == 70){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 7,jugador.y + 3,_SizeShoot1,_SizeShoot1,4,2));  }
		else if(rotacion == 75){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 7,jugador.y + 3,_SizeShoot1,_SizeShoot1,4,1));  }
		else if(rotacion == 80){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 8,jugador.y + 4,_SizeShoot1,_SizeShoot1,4,1));  }
		else if(rotacion == 85){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 8,jugador.y + 4,_SizeShoot1,_SizeShoot1,4,1));  }

		else if(rotacion == 95){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 8,jugador.y+jugador.height - 4,_SizeShoot1,_SizeShoot1,4,1));  }
		else if(rotacion == 100){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 8,jugador.y+jugador.height - 4,_SizeShoot1,_SizeShoot1,4,1));  }
		else if(rotacion == 105){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 7,jugador.y+jugador.height - 3,_SizeShoot1,_SizeShoot1,4,1));  }
		else if(rotacion == 110){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 7,jugador.y+jugador.height - 3,_SizeShoot1,_SizeShoot1,4,2));  }
		else if(rotacion == 115){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 6,jugador.y+jugador.height - 2,_SizeShoot1,_SizeShoot1,4,2));  }
		else if(rotacion == 120){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 6,jugador.y+jugador.height - 2,_SizeShoot1,_SizeShoot1,4,2));  }
		else if(rotacion == 125){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 5,jugador.y+jugador.height,_SizeShoot1,_SizeShoot1,4,3));  }
		else if(rotacion == 130){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 5,jugador.y+jugador.height,_SizeShoot1,_SizeShoot1,4,3));  }
		else if(rotacion == 135){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 4.5,jugador.y+jugador.height,_SizeShoot1,_SizeShoot1,3,3));  }
		else if(rotacion == 140){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 4.5,jugador.y+jugador.height,_SizeShoot1,_SizeShoot1,3,4));  }
		else if(rotacion == 145){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 3,jugador.y+jugador.height,_SizeShoot1,_SizeShoot1,3,4));  }
		else if(rotacion == 150){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 3,jugador.y+jugador.height,_SizeShoot1,_SizeShoot1,2,4));  }
		else if(rotacion == 155){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 2,jugador.y+jugador.height,_SizeShoot1,_SizeShoot1,2,4));  }
		else if(rotacion == 160){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 0.75,jugador.y+jugador.height,_SizeShoot1,_SizeShoot1,2,4));  }
		else if(rotacion == 165){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 0.75,jugador.y+jugador.height,_SizeShoot1,_SizeShoot1,1,4));  }
		else if(rotacion == 170){ 	balas.push(new Figura(jugador.x+jugador.width/2,jugador.y+jugador.height,_SizeShoot1,_SizeShoot1,1,4));  }
		else if(rotacion == 175){ 	balas.push(new Figura(jugador.x+jugador.width/2,jugador.y+jugador.height,_SizeShoot1,_SizeShoot1,1,4));  }

		else if(rotacion == 185){ 	balas.push(new Figura(jugador.x+jugador.width/2,jugador.y+jugador.height,_SizeShoot1,_SizeShoot1,1,4));  }
		else if(rotacion == 190){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 2,jugador.y+jugador.height,_SizeShoot1,_SizeShoot1,1,4));  }
		else if(rotacion == 195){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 2.5,jugador.y+jugador.height,_SizeShoot1,_SizeShoot1,1,4));  }
		else if(rotacion == 200){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 2.5,jugador.y+jugador.height,_SizeShoot1,_SizeShoot1,2,4));  }
		else if(rotacion == 205){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 3,jugador.y+jugador.height,_SizeShoot1,_SizeShoot1,2,4));  }
		else if(rotacion == 210){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 3,jugador.y+jugador.height,_SizeShoot1,_SizeShoot1,2,4));  }
		else if(rotacion == 215){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 4,jugador.y+jugador.height,_SizeShoot1,_SizeShoot1,3,4));  }
		else if(rotacion == 220){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 5.5,jugador.y+jugador.height,_SizeShoot1,_SizeShoot1,3,4));  }
		else if(rotacion == 225){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 6.5,jugador.y+jugador.height,_SizeShoot1,_SizeShoot1,3,3));  }
		else if(rotacion == 230){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 8,jugador.y+jugador.height,_SizeShoot1,_SizeShoot1,4,3));  }
		else if(rotacion == 235){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 8,jugador.y+jugador.height,_SizeShoot1,_SizeShoot1,4,3));  }
		else if(rotacion == 240){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 6,jugador.y+jugador.height - 3,_SizeShoot1,_SizeShoot1,4,2));  }
		else if(rotacion == 245){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 6,jugador.y+jugador.height - 3,_SizeShoot1,_SizeShoot1,4,2));  }
		else if(rotacion == 250){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 7,jugador.y+jugador.height - 4,_SizeShoot1,_SizeShoot1,4,2));  }
		else if(rotacion == 255){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 7,jugador.y+jugador.height - 4,_SizeShoot1,_SizeShoot1,4,1));  }
		else if(rotacion == 260){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 8,jugador.y+jugador.height - 5,_SizeShoot1,_SizeShoot1,4,1));  }
		else if(rotacion == 265){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 8,jugador.y+jugador.height - 6,_SizeShoot1,_SizeShoot1,4,1));  }

		tecla = null;
	}

	// Mover balas
	// ------------
	// balas[i].mover360 		-->		La bala sólo se mueva hacia arriba, aunque cambie la rotación
	// balas[i].permitir		-->		Impide que 1 bala concreta cambie de direccion cuando gire la nave(rotación)
	for(i in balas){
		if((rotacion == 0 || rotacion == 360) && !balas[i].permitir){	balas[i].mover360 = true;	balas[i].permitir = true;	}	// Indicamos la dir balas
		else if(rotacion == 90 && !balas[i].permitir){          		balas[i].mover90 = true;	balas[i].permitir = true;	}
		else if(rotacion == 180 && !balas[i].permitir){					balas[i].mover180 = true;	balas[i].permitir = true; 	}
		else if(rotacion == 270 && !balas[i].permitir){					balas[i].mover270 = true;	balas[i].permitir = true;	}

		else if(rotacion == 275 && !balas[i].permitir){  				balas[i].mover275 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 280 && !balas[i].permitir){  				balas[i].mover280 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 285 && !balas[i].permitir){  				balas[i].mover285 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 290 && !balas[i].permitir){  				balas[i].mover290 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 295 && !balas[i].permitir){  				balas[i].mover295 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 300 && !balas[i].permitir){  				balas[i].mover300 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 305 && !balas[i].permitir){  				balas[i].mover305 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 310 && !balas[i].permitir){  				balas[i].mover310 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 315 && !balas[i].permitir){  				balas[i].mover315 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 320 && !balas[i].permitir){  				balas[i].mover320 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 325 && !balas[i].permitir){  				balas[i].mover325 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 330 && !balas[i].permitir){  				balas[i].mover330 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 335 && !balas[i].permitir){  				balas[i].mover335 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 340 && !balas[i].permitir){  				balas[i].mover340 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 345 && !balas[i].permitir){  				balas[i].mover345 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 350 && !balas[i].permitir){  				balas[i].mover350 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 355 && !balas[i].permitir){  				balas[i].mover355 = true; 	balas[i].permitir = true; 	}

		else if(rotacion == 5 && !balas[i].permitir){  					balas[i].mover5 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 10 && !balas[i].permitir){  				balas[i].mover10 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 15 && !balas[i].permitir){  				balas[i].mover15 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 20 && !balas[i].permitir){  				balas[i].mover20 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 25 && !balas[i].permitir){  				balas[i].mover25 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 30 && !balas[i].permitir){  				balas[i].mover30 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 35 && !balas[i].permitir){  				balas[i].mover35 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 40 && !balas[i].permitir){  				balas[i].mover40 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 45 && !balas[i].permitir){  				balas[i].mover45 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 50 && !balas[i].permitir){  				balas[i].mover50 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 55 && !balas[i].permitir){  				balas[i].mover55 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 60 && !balas[i].permitir){  				balas[i].mover60 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 65 && !balas[i].permitir){  				balas[i].mover65 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 70 && !balas[i].permitir){  				balas[i].mover70 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 75 && !balas[i].permitir){  				balas[i].mover75 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 80 && !balas[i].permitir){  				balas[i].mover80 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 85 && !balas[i].permitir){  				balas[i].mover85 = true; 	balas[i].permitir = true; 	}

		else if(rotacion == 95 && !balas[i].permitir){  				balas[i].mover95 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 100 && !balas[i].permitir){  				balas[i].mover100 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 105 && !balas[i].permitir){  				balas[i].mover105 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 110 && !balas[i].permitir){  				balas[i].mover110 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 115 && !balas[i].permitir){  				balas[i].mover115 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 120 && !balas[i].permitir){  				balas[i].mover120 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 125 && !balas[i].permitir){  				balas[i].mover125 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 130 && !balas[i].permitir){  				balas[i].mover130 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 135 && !balas[i].permitir){  				balas[i].mover135 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 140 && !balas[i].permitir){  				balas[i].mover140 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 145 && !balas[i].permitir){  				balas[i].mover145 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 150 && !balas[i].permitir){  				balas[i].mover150 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 155 && !balas[i].permitir){  				balas[i].mover155 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 160 && !balas[i].permitir){  				balas[i].mover160 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 165 && !balas[i].permitir){  				balas[i].mover165 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 170 && !balas[i].permitir){  				balas[i].mover170 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 175 && !balas[i].permitir){  				balas[i].mover175 = true; 	balas[i].permitir = true; 	}

		else if(rotacion == 185 && !balas[i].permitir){  				balas[i].mover185 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 190 && !balas[i].permitir){  				balas[i].mover190 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 195 && !balas[i].permitir){  				balas[i].mover195 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 200 && !balas[i].permitir){  				balas[i].mover200 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 205 && !balas[i].permitir){  				balas[i].mover205 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 210 && !balas[i].permitir){  				balas[i].mover210 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 215 && !balas[i].permitir){  				balas[i].mover215 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 220 && !balas[i].permitir){  				balas[i].mover220 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 225 && !balas[i].permitir){  				balas[i].mover225 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 230 && !balas[i].permitir){  				balas[i].mover230 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 235 && !balas[i].permitir){  				balas[i].mover235 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 240 && !balas[i].permitir){  				balas[i].mover240 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 245 && !balas[i].permitir){  				balas[i].mover245 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 250 && !balas[i].permitir){  				balas[i].mover250 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 255 && !balas[i].permitir){  				balas[i].mover255 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 260 && !balas[i].permitir){  				balas[i].mover260 = true; 	balas[i].permitir = true; 	}
		else if(rotacion == 265 && !balas[i].permitir){  				balas[i].mover265 = true; 	balas[i].permitir = true; 	}

  		if(balas[i].mover360)			balas[i].y -= balas[i].velY;		// Movemos las balas
  		else if(balas[i].mover180)		balas[i].y += balas[i].velY;
  		else if(balas[i].mover270)		balas[i].x -= balas[i].velX;
  		else if(balas[i].mover90)		balas[i].x += balas[i].velX;

  		else if(balas[i].mover275){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
		else if(balas[i].mover280){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
		else if(balas[i].mover285){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
  		else if(balas[i].mover290){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
  		else if(balas[i].mover295){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
		else if(balas[i].mover300){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
		else if(balas[i].mover305){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
  		else if(balas[i].mover310){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
  		else if(balas[i].mover315){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
		else if(balas[i].mover320){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
		else if(balas[i].mover325){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
  		else if(balas[i].mover330){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
  		else if(balas[i].mover335){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
		else if(balas[i].mover340){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
		else if(balas[i].mover345){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
  		else if(balas[i].mover350){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
  		else if(balas[i].mover355){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }

		else if(balas[i].mover5){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
		else if(balas[i].mover10){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
		else if(balas[i].mover15){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
  		else if(balas[i].mover20){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
  		else if(balas[i].mover25){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
		else if(balas[i].mover30){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
		else if(balas[i].mover35){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
  		else if(balas[i].mover40){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
  		else if(balas[i].mover45){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
		else if(balas[i].mover50){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
		else if(balas[i].mover55){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
  		else if(balas[i].mover60){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
  		else if(balas[i].mover65){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
		else if(balas[i].mover70){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
		else if(balas[i].mover75){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
  		else if(balas[i].mover80){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
  		else if(balas[i].mover85){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }

  		else if(balas[i].mover95){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
		else if(balas[i].mover100){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
		else if(balas[i].mover105){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
  		else if(balas[i].mover110){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
  		else if(balas[i].mover115){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
		else if(balas[i].mover120){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
		else if(balas[i].mover125){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
  		else if(balas[i].mover130){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
  		else if(balas[i].mover135){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
		else if(balas[i].mover140){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
		else if(balas[i].mover145){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
  		else if(balas[i].mover150){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
  		else if(balas[i].mover155){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
		else if(balas[i].mover160){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
		else if(balas[i].mover165){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
  		else if(balas[i].mover170){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
  		else if(balas[i].mover175){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }

  		else if(balas[i].mover185){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
		else if(balas[i].mover190){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
		else if(balas[i].mover195){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
  		else if(balas[i].mover200){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
  		else if(balas[i].mover205){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
		else if(balas[i].mover210){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
		else if(balas[i].mover215){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
  		else if(balas[i].mover220){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
  		else if(balas[i].mover225){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
		else if(balas[i].mover230){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
		else if(balas[i].mover235){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
  		else if(balas[i].mover240){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
  		else if(balas[i].mover245){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
		else if(balas[i].mover250){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
		else if(balas[i].mover255){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
  		else if(balas[i].mover260){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
  		else if(balas[i].mover265){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }

  		// borrar balas si exceden los límites del mapa
	 	if(balas[i].x < 0 || balas[i].y < 0)								balas.splice(i,1);
    	else if(balas[i].x > canvas.width || balas[i].y > canvas.height)	balas.splice(i,1);
  	}
}
function armaDoble(){
	// Crear balas
	if((tecla == formatKey("X")) && balas2.length <= 30){
		balas2.push(new Figura(jugador.x+5,jugador.y,2,10,1,10));
		balas2.push(new Figura(jugador.x+9,jugador.y,2,10,1,10));
		tecla = null;
	}

	// Mover bala 1
	for(i in balas2){
		balas2[i].y -= balas2[i].velY;
		//balas2[i].x -= balas2[i].velX;
	 	if(balas2[i].y < jugador.y-100)
    		balas2.splice(i,1);
    	/*else if(balas2[i].x > canvas.width || balas2[i].y > canvas.height)
    		balas2.splice(i,1);*/
  	}
}

// function armaSimple(){

// 	// Crear balas
// 	if((tecla == formatKey("Z")) && balas.length < 500){

// 		while(rotacion <= 360){

// 			if(rotacion == rot){
// 				balas.push(new Figura(jugador.x+jugador.width/2,jugador.y,_SizeShoot1,_SizeShoot1,4,4));
// 				rot = 0;
// 			}else
// 				rot += 5;
// 		}






// 		if(rotacion == 0 || rotacion == 360)	balas.push(new Figura(jugador.x+jugador.width/2,jugador.y,3,3,4,4));
// 		else if(rotacion == 90)					balas.push(new Figura(jugador.x+jugador.width,jugador.y+jugador.height/2,3,3,4,4));
// 		else if(rotacion == 180)				balas.push(new Figura(jugador.x+jugador.width/2,jugador.y+jugador.height,3,3,4,4));
// 		else if(rotacion == 270)				balas.push(new Figura(jugador.x,jugador.y+jugador.height/2,3,3,4,4));

// 		else if(rotacion == 275){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 8,jugador.y + 4,3,3,4,1));  }
// 		else if(rotacion == 280){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 8,jugador.y + 4,3,3,4,1));  }
// 		else if(rotacion == 285){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 7,jugador.y + 3,3,3,4,1));  }
// 		else if(rotacion == 290){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 7,jugador.y + 3,3,3,4,2));  }
// 		else if(rotacion == 295){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 6,jugador.y + 2,3,3,4,2));  }
// 		else if(rotacion == 300){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 6,jugador.y + 2,3,3,4,2));  }
// 		else if(rotacion == 305){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 5,jugador.y,3,3,4,3));  }
// 		else if(rotacion == 310){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 5,jugador.y,3,3,4,3));  }
// 		else if(rotacion == 315){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 4.5,jugador.y,3,3,3,3));  }
// 		else if(rotacion == 320){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 4.5,jugador.y,3,3,3,4));  }
// 		else if(rotacion == 325){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 3,jugador.y,3,3,3,4));  }
// 		else if(rotacion == 330){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 3,jugador.y,3,3,2,4));  }
// 		else if(rotacion == 335){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 2,jugador.y,3,3,2,4));  }
// 		else if(rotacion == 340){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 0.75,jugador.y,3,3,2,4));  }
// 		else if(rotacion == 345){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 0.75,jugador.y,3,3,1,4));  }
// 		else if(rotacion == 350){ 	balas.push(new Figura(jugador.x+jugador.width/2,jugador.y,3,3,1,4));  }
// 		else if(rotacion == 355){ 	balas.push(new Figura(jugador.x+jugador.width/2,jugador.y,3,3,1,4));  }

// 		else if(rotacion == 5){ 	balas.push(new Figura(jugador.x+jugador.width/2,jugador.y,3,3,1,4));  }
// 		else if(rotacion == 10){ 	balas.push(new Figura(jugador.x+jugador.width/2,jugador.y,3,3,1,4));  }
// 		else if(rotacion == 15){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 0.75,jugador.y,3,3,1,4));  }
// 		else if(rotacion == 20){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 0.75,jugador.y,3,3,2,4));  }
// 		else if(rotacion == 25){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 2,jugador.y,3,3,2,4));  }
// 		else if(rotacion == 30){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 3,jugador.y,3,3,2,4));  }
// 		else if(rotacion == 35){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 3,jugador.y,3,3,3,4));  }
// 		else if(rotacion == 40){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 4.5,jugador.y,3,3,3,4));  }
// 		else if(rotacion == 45){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 4.5,jugador.y,3,3,3,3));  }
// 		else if(rotacion == 50){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 5,jugador.y,3,3,4,3));  }
// 		else if(rotacion == 55){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 5,jugador.y,3,3,4,3));  }
// 		else if(rotacion == 60){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 6,jugador.y + 2,3,3,4,2));  }
// 		else if(rotacion == 65){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 6,jugador.y + 2,3,3,4,2));  }
// 		else if(rotacion == 70){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 7,jugador.y + 3,3,3,4,2));  }
// 		else if(rotacion == 75){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 7,jugador.y + 3,3,3,4,1));  }
// 		else if(rotacion == 80){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 8,jugador.y + 4,3,3,4,1));  }
// 		else if(rotacion == 85){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 8,jugador.y + 4,3,3,4,1));  }

// 		else if(rotacion == 95){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 8,jugador.y+jugador.height - 4,3,3,4,1));  }
// 		else if(rotacion == 100){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 8,jugador.y+jugador.height - 4,3,3,4,1));  }
// 		else if(rotacion == 105){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 7,jugador.y+jugador.height - 3,3,3,4,1));  }
// 		else if(rotacion == 110){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 7,jugador.y+jugador.height - 3,3,3,4,2));  }
// 		else if(rotacion == 115){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 6,jugador.y+jugador.height - 2,3,3,4,2));  }
// 		else if(rotacion == 120){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 6,jugador.y+jugador.height - 2,3,3,4,2));  }
// 		else if(rotacion == 125){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 5,jugador.y+jugador.height,3,3,4,3));  }
// 		else if(rotacion == 130){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 5,jugador.y+jugador.height,3,3,4,3));  }
// 		else if(rotacion == 135){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 4.5,jugador.y+jugador.height,3,3,3,3));  }
// 		else if(rotacion == 140){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 4.5,jugador.y+jugador.height,3,3,3,4));  }
// 		else if(rotacion == 145){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 3,jugador.y+jugador.height,3,3,3,4));  }
// 		else if(rotacion == 150){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 3,jugador.y+jugador.height,3,3,2,4));  }
// 		else if(rotacion == 155){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 2,jugador.y+jugador.height,3,3,2,4));  }
// 		else if(rotacion == 160){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 0.75,jugador.y+jugador.height,3,3,2,4));  }
// 		else if(rotacion == 165){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 0.75,jugador.y+jugador.height,3,3,1,4));  }
// 		else if(rotacion == 170){ 	balas.push(new Figura(jugador.x+jugador.width/2,jugador.y+jugador.height,3,3,1,4));  }
// 		else if(rotacion == 175){ 	balas.push(new Figura(jugador.x+jugador.width/2,jugador.y+jugador.height,3,3,1,4));  }

// 		else if(rotacion == 185){ 	balas.push(new Figura(jugador.x+jugador.width/2,jugador.y+jugador.height,3,3,1,4));  }
// 		else if(rotacion == 190){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 2,jugador.y+jugador.height,3,3,1,4));  }
// 		else if(rotacion == 195){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 2.5,jugador.y+jugador.height,3,3,1,4));  }
// 		else if(rotacion == 200){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 2.5,jugador.y+jugador.height,3,3,2,4));  }
// 		else if(rotacion == 205){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 3,jugador.y+jugador.height,3,3,2,4));  }
// 		else if(rotacion == 210){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 3,jugador.y+jugador.height,3,3,2,4));  }
// 		else if(rotacion == 215){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 4,jugador.y+jugador.height,3,3,3,4));  }
// 		else if(rotacion == 220){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 5.5,jugador.y+jugador.height,3,3,3,4));  }
// 		else if(rotacion == 225){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 6.5,jugador.y+jugador.height,3,3,3,3));  }
// 		else if(rotacion == 230){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 8,jugador.y+jugador.height,3,3,4,3));  }
// 		else if(rotacion == 235){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 8,jugador.y+jugador.height,3,3,4,3));  }
// 		else if(rotacion == 240){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 6,jugador.y+jugador.height - 3,3,3,4,2));  }
// 		else if(rotacion == 245){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 6,jugador.y+jugador.height - 3,3,3,4,2));  }
// 		else if(rotacion == 250){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 7,jugador.y+jugador.height - 4,3,3,4,2));  }
// 		else if(rotacion == 255){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 7,jugador.y+jugador.height - 4,3,3,4,1));  }
// 		else if(rotacion == 260){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 8,jugador.y+jugador.height - 5,3,3,4,1));  }
// 		else if(rotacion == 265){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 8,jugador.y+jugador.height - 6,3,3,4,1));  }

// 		tecla = null;
// 	}

// 	// Mover balas
// 	// ------------
// 	// balas[i].mover360 		-->		La bala sólo se mueva hacia arriba, aunque cambie la rotación
// 	// balas[i].permitir		-->		Impide que 1 bala concreta cambie de direccion cuando gire la nave(rotación)
// 	for(i in balas){
// 		if((rotacion == 0 || rotacion == 360) && !balas[i].permitir){	balas[i].mover360 = true;	balas[i].permitir = true;	}	// Indicamos la dir balas
// 		else if(rotacion == 90 && !balas[i].permitir){          		balas[i].mover90 = true;	balas[i].permitir = true;	}
// 		else if(rotacion == 180 && !balas[i].permitir){					balas[i].mover180 = true;	balas[i].permitir = true; 	}
// 		else if(rotacion == 270 && !balas[i].permitir){					balas[i].mover270 = true;	balas[i].permitir = true;	}

// 		else if(rotacion == 275 && !balas[i].permitir){  				balas[i].mover275 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 280 && !balas[i].permitir){  				balas[i].mover280 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 285 && !balas[i].permitir){  				balas[i].mover285 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 290 && !balas[i].permitir){  				balas[i].mover290 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 295 && !balas[i].permitir){  				balas[i].mover295 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 300 && !balas[i].permitir){  				balas[i].mover300 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 305 && !balas[i].permitir){  				balas[i].mover305 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 310 && !balas[i].permitir){  				balas[i].mover310 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 315 && !balas[i].permitir){  				balas[i].mover315 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 320 && !balas[i].permitir){  				balas[i].mover320 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 325 && !balas[i].permitir){  				balas[i].mover325 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 330 && !balas[i].permitir){  				balas[i].mover330 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 335 && !balas[i].permitir){  				balas[i].mover335 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 340 && !balas[i].permitir){  				balas[i].mover340 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 345 && !balas[i].permitir){  				balas[i].mover345 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 350 && !balas[i].permitir){  				balas[i].mover350 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 355 && !balas[i].permitir){  				balas[i].mover355 = true; 	balas[i].permitir = true; 	}

// 		else if(rotacion == 5 && !balas[i].permitir){  					balas[i].mover5 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 10 && !balas[i].permitir){  				balas[i].mover10 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 15 && !balas[i].permitir){  				balas[i].mover15 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 20 && !balas[i].permitir){  				balas[i].mover20 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 25 && !balas[i].permitir){  				balas[i].mover25 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 30 && !balas[i].permitir){  				balas[i].mover30 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 35 && !balas[i].permitir){  				balas[i].mover35 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 40 && !balas[i].permitir){  				balas[i].mover40 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 45 && !balas[i].permitir){  				balas[i].mover45 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 50 && !balas[i].permitir){  				balas[i].mover50 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 55 && !balas[i].permitir){  				balas[i].mover55 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 60 && !balas[i].permitir){  				balas[i].mover60 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 65 && !balas[i].permitir){  				balas[i].mover65 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 70 && !balas[i].permitir){  				balas[i].mover70 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 75 && !balas[i].permitir){  				balas[i].mover75 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 80 && !balas[i].permitir){  				balas[i].mover80 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 85 && !balas[i].permitir){  				balas[i].mover85 = true; 	balas[i].permitir = true; 	}

// 		else if(rotacion == 95 && !balas[i].permitir){  				balas[i].mover95 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 100 && !balas[i].permitir){  				balas[i].mover100 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 105 && !balas[i].permitir){  				balas[i].mover105 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 110 && !balas[i].permitir){  				balas[i].mover110 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 115 && !balas[i].permitir){  				balas[i].mover115 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 120 && !balas[i].permitir){  				balas[i].mover120 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 125 && !balas[i].permitir){  				balas[i].mover125 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 130 && !balas[i].permitir){  				balas[i].mover130 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 135 && !balas[i].permitir){  				balas[i].mover135 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 140 && !balas[i].permitir){  				balas[i].mover140 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 145 && !balas[i].permitir){  				balas[i].mover145 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 150 && !balas[i].permitir){  				balas[i].mover150 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 155 && !balas[i].permitir){  				balas[i].mover155 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 160 && !balas[i].permitir){  				balas[i].mover160 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 165 && !balas[i].permitir){  				balas[i].mover165 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 170 && !balas[i].permitir){  				balas[i].mover170 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 175 && !balas[i].permitir){  				balas[i].mover175 = true; 	balas[i].permitir = true; 	}

// 		else if(rotacion == 185 && !balas[i].permitir){  				balas[i].mover185 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 190 && !balas[i].permitir){  				balas[i].mover190 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 195 && !balas[i].permitir){  				balas[i].mover195 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 200 && !balas[i].permitir){  				balas[i].mover200 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 205 && !balas[i].permitir){  				balas[i].mover205 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 210 && !balas[i].permitir){  				balas[i].mover210 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 215 && !balas[i].permitir){  				balas[i].mover215 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 220 && !balas[i].permitir){  				balas[i].mover220 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 225 && !balas[i].permitir){  				balas[i].mover225 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 230 && !balas[i].permitir){  				balas[i].mover230 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 235 && !balas[i].permitir){  				balas[i].mover235 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 240 && !balas[i].permitir){  				balas[i].mover240 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 245 && !balas[i].permitir){  				balas[i].mover245 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 250 && !balas[i].permitir){  				balas[i].mover250 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 255 && !balas[i].permitir){  				balas[i].mover255 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 260 && !balas[i].permitir){  				balas[i].mover260 = true; 	balas[i].permitir = true; 	}
// 		else if(rotacion == 265 && !balas[i].permitir){  				balas[i].mover265 = true; 	balas[i].permitir = true; 	}

//   		if(balas[i].mover360)			balas[i].y -= balas[i].velY;		// Movemos las balas
//   		else if(balas[i].mover180)		balas[i].y += balas[i].velY;
//   		else if(balas[i].mover270)		balas[i].x -= balas[i].velX;
//   		else if(balas[i].mover90)		balas[i].x += balas[i].velX;

//   		else if(balas[i].mover275){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
// 		else if(balas[i].mover280){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
// 		else if(balas[i].mover285){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
//   		else if(balas[i].mover290){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
//   		else if(balas[i].mover295){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
// 		else if(balas[i].mover300){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
// 		else if(balas[i].mover305){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
//   		else if(balas[i].mover310){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
//   		else if(balas[i].mover315){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
// 		else if(balas[i].mover320){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
// 		else if(balas[i].mover325){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
//   		else if(balas[i].mover330){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
//   		else if(balas[i].mover335){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
// 		else if(balas[i].mover340){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
// 		else if(balas[i].mover345){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
//   		else if(balas[i].mover350){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }
//   		else if(balas[i].mover355){	balas[i].y -= balas[i].velY;	balas[i].x -= balas[i].velX; }

// 		else if(balas[i].mover5){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
// 		else if(balas[i].mover10){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
// 		else if(balas[i].mover15){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
//   		else if(balas[i].mover20){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
//   		else if(balas[i].mover25){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
// 		else if(balas[i].mover30){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
// 		else if(balas[i].mover35){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
//   		else if(balas[i].mover40){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
//   		else if(balas[i].mover45){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
// 		else if(balas[i].mover50){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
// 		else if(balas[i].mover55){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
//   		else if(balas[i].mover60){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
//   		else if(balas[i].mover65){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
// 		else if(balas[i].mover70){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
// 		else if(balas[i].mover75){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
//   		else if(balas[i].mover80){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }
//   		else if(balas[i].mover85){	balas[i].y -= balas[i].velY;	balas[i].x += balas[i].velX; }

//   		else if(balas[i].mover95){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
// 		else if(balas[i].mover100){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
// 		else if(balas[i].mover105){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
//   		else if(balas[i].mover110){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
//   		else if(balas[i].mover115){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
// 		else if(balas[i].mover120){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
// 		else if(balas[i].mover125){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
//   		else if(balas[i].mover130){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
//   		else if(balas[i].mover135){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
// 		else if(balas[i].mover140){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
// 		else if(balas[i].mover145){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
//   		else if(balas[i].mover150){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
//   		else if(balas[i].mover155){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
// 		else if(balas[i].mover160){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
// 		else if(balas[i].mover165){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
//   		else if(balas[i].mover170){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }
//   		else if(balas[i].mover175){	balas[i].y += balas[i].velY;	balas[i].x += balas[i].velX; }

//   		else if(balas[i].mover185){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
// 		else if(balas[i].mover190){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
// 		else if(balas[i].mover195){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
//   		else if(balas[i].mover200){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
//   		else if(balas[i].mover205){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
// 		else if(balas[i].mover210){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
// 		else if(balas[i].mover215){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
//   		else if(balas[i].mover220){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
//   		else if(balas[i].mover225){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
// 		else if(balas[i].mover230){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
// 		else if(balas[i].mover235){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
//   		else if(balas[i].mover240){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
//   		else if(balas[i].mover245){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
// 		else if(balas[i].mover250){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
// 		else if(balas[i].mover255){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
//   		else if(balas[i].mover260){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }
//   		else if(balas[i].mover265){	balas[i].y += balas[i].velY;	balas[i].x -= balas[i].velX; }

//   		// borrar balas si exceden los límites del mapa
// 	 	if(balas[i].x < 0 || balas[i].y < 0)								balas.splice(i,1);
//     	else if(balas[i].x > canvas.width || balas[i].y > canvas.height)	balas.splice(i,1);
//   	}
// }