requirejs(['recursos']);
requirejs(['pojoFigura']);
requirejs(['mapa']);
requirejs(['arma']);

window.addEventListener('load',init,false);

const _LifesPlayer = 1, _LifesBlock = 3,
	  _PointsStart = 0, _PointsBlock = 3,
	  _DamageWeapon1 = 1, _MaxRebounds = 100,
	  _SizeBlock = 20, _TimeProtected = 125;

var canvas = null, ctx = null;
var tecla = null;
var teclaPresionada = [];
var puntuacion, tiempoInmunidad;
var rotacion = 360;
var verInfo = true, pausa = false, gameOver = false, pantallaCompleta = false, reboteBalas = true;
var jugador, bloqueVida;
var balas = [], balas2 = [], bloqueMarron = [], bloqueRojo = [], bloqueBlancoVert = [], bloqueBlancoHor = [];
var iNave = new Image(),
 	iBloqueVida = new Image(),
 	iBloqueMarron0 = new Image(),
 	iBloqueMarron1 = new Image(),
 	iBloqueMarron2 = new Image(),
 	iBloqueMarron3 = new Image(),
 	iBloqueRojo = new Image(),
 	iBloqueBlanco = new Image();

function init(){
	// Esperamos a que le de tiempo a los scripts de la cabecera que carguen por completo
	setTimeout(function(){
		canvas = document.getElementsByTagName('canvas')[0];
		ctx = canvas.getContext('2d');

		jugador = new Figura(225,200,16,16,0,0);
		bloqueVida = new Figura(null,null,16,16);

		iNave.src          = 'assets/img/nave.png';
		iBloqueVida.src    = 'assets/img/vida.png';
		iBloqueRojo.src    = 'assets/img/fuego2.png';
		iBloqueBlanco.src  = 'assets/img/bloqueBlanco.png';
		iBloqueMarron0.src = 'assets/img/bloqueMarron0.png';
		iBloqueMarron1.src = 'assets/img/bloqueMarron1.png';
		iBloqueMarron2.src = 'assets/img/bloqueMarron2.png';
		iBloqueMarron3.src = 'assets/img/bloqueMarron3.png';

		pressKey();
		reset();
		run();
	}, 250);
}
function reset(){
	puntuacion      = _PointsStart;
	jugador.vida    = _LifesPlayer;
	tiempoInmunidad = 0;
	jugador.x       = 270;
	jugador.y       = 330;
	bloqueVida.x    = random(canvas.width - 10);
	bloqueVida.y    = random(canvas.height - 10);
	gameOver        = false;
	borrarMapa();
	crearMapa(mapa4, _SizeBlock);
	printLightEfectsBefore();
}
function run(){
	requestAnimFrame(run);
	juego();
	pintar();
	printPoints(puntuacion);
	printLives(jugador.vida);
}

 function juego(){

    if(!pausa){
	    movimientoJugador();
		colision();
		armaSimple();
		armaDoble();
	}
	keyboard();

	if(gameOver){
		pausa = true;
		reset();
	}else{
		if(jugador.vida < 1)
			gameOver = true;
		if(tiempoInmunidad > 0)
	        tiempoInmunidad--;
	}
}

function pintar() {
	ctx.clearRect(0,0,canvas.width,canvas.height);

	if(tiempoInmunidad > 0){
		if(tiempoInmunidad%2 == 0)
			mostrarNaveRotada();
	}else
		mostrarNaveRotada();

	ctx.drawImage(iBloqueVida,bloqueVida.x,bloqueVida.y, bloqueVida.width, bloqueVida.height);

	for(i in bloqueMarron){
		if(bloqueMarron[i].vida == 0)
			ctx.drawImage(iBloqueMarron0,bloqueMarron[i].x,bloqueMarron[i].y,bloqueMarron[i].width,bloqueMarron[i].height);
		else if(bloqueMarron[i].vida == 1)
			ctx.drawImage(iBloqueMarron1,bloqueMarron[i].x,bloqueMarron[i].y,bloqueMarron[i].width,bloqueMarron[i].height);
		else if(bloqueMarron[i].vida == 2)
			ctx.drawImage(iBloqueMarron2,bloqueMarron[i].x,bloqueMarron[i].y,bloqueMarron[i].width,bloqueMarron[i].height);
		else if(bloqueMarron[i].vida == 3)
			ctx.drawImage(iBloqueMarron3,bloqueMarron[i].x,bloqueMarron[i].y,bloqueMarron[i].width,bloqueMarron[i].height);
	}

	for(i in bloqueBlancoVert){
		ctx.drawImage(iBloqueBlanco,bloqueBlancoVert[i].x,bloqueBlancoVert[i].y,bloqueBlancoVert[i].width,bloqueBlancoVert[i].height);
	}

	for(i in bloqueBlancoHor){
		ctx.drawImage(iBloqueBlanco,bloqueBlancoHor[i].x,bloqueBlancoHor[i].y,bloqueBlancoHor[i].width,bloqueBlancoHor[i].height);
	}

	for(i in bloqueRojo)
		ctx.drawImage(iBloqueRojo,bloqueRojo[i].x,bloqueRojo[i].y,bloqueRojo[i].width,bloqueRojo[i].height);

	ctx.fillStyle = '#614E70';
	for(i in balas)
  		ctx.fillRect(balas[i].x,balas[i].y,balas[i].width,balas[i].height);

  	ctx.fillStyle = '#4A6192';
	for(i in balas2)
  		ctx.fillRect(balas2[i].x,balas2[i].y,balas2[i].width,balas2[i].height);

	ctx.font = "10px Verdana";
	ctx.fillStyle = '#fff';
	if(verInfo){
		ctx.fillText('Tecla: '+tecla,5,15);
		ctx.fillText('Puntuacion: '+puntuacion,5,30);
		ctx.fillText('Balas Simple: '+balas.length,5,45);
		ctx.fillText('Balas Dobles: '+balas2.length,5,60);
		ctx.fillText('Fps: '+getFps().toFixed(1),5,75);
		ctx.fillText('Salud: '+jugador.vida,5,90);
		ctx.fillText('Inmunidad: '+tiempoInmunidad,5,105);
		ctx.fillText('Rotación: '+rotacion,5,120);
	}

	ctx.font = "18px Verdana";
	ctx.fillStyle = '#FFA112';
	if(pausa){
		if(gameOver)
			ctx.fillText('GAME OVER',canvas.width/2 - 35,canvas.height/2 - 10);
		else
			ctx.fillText('PAUSA',canvas.width/2 - 35,canvas.height/2 - 10);
	}
}

function movimientoJugador(){
    if(rotacion > 360)
		rotacion = 0;
    else if(rotacion < 0)
		rotacion = 360;

	// Movimiento
	if(teclaPresionada[formatKey("UP")]){
		if(rotacion == 0 || rotacion == 360)	jugador.y -= 4;
		else if(rotacion == 90)		jugador.x += 4;
		else if(rotacion == 180)	jugador.y += 4;
		else if(rotacion == 270)	jugador.x -= 4;

		else if(rotacion == 275){		jugador.y -= 1;		jugador.x -= 4; }
		else if(rotacion == 280){		jugador.y -= 1;		jugador.x -= 4; }
		else if(rotacion == 285){		jugador.y -= 1;		jugador.x -= 4; }
		else if(rotacion == 290){		jugador.y -= 2;		jugador.x -= 4; }
		else if(rotacion == 295){		jugador.y -= 2;		jugador.x -= 4; }
		else if(rotacion == 300){		jugador.y -= 2;		jugador.x -= 4; }
		else if(rotacion == 305){		jugador.y -= 3;		jugador.x -= 4; }
		else if(rotacion == 310){		jugador.y -= 3;		jugador.x -= 4; }
		else if(rotacion == 315){		jugador.y -= 3;		jugador.x -= 3; }
		else if(rotacion == 320){		jugador.y -= 4;		jugador.x -= 3; }
		else if(rotacion == 325){		jugador.y -= 4;		jugador.x -= 3; }
		else if(rotacion == 330){		jugador.y -= 4;		jugador.x -= 2; }
		else if(rotacion == 335){		jugador.y -= 4;		jugador.x -= 2; }
		else if(rotacion == 340){		jugador.y -= 4;		jugador.x -= 2; }
		else if(rotacion == 345){		jugador.y -= 4;		jugador.x -= 1; }
		else if(rotacion == 350){		jugador.y -= 4;		jugador.x -= 1; }
		else if(rotacion == 355){		jugador.y -= 4;		jugador.x -= 1; }

		else if(rotacion == 5){			jugador.y -= 4;		jugador.x += 1; }
		else if(rotacion == 10){		jugador.y -= 4;		jugador.x += 1; }
		else if(rotacion == 15){		jugador.y -= 4;		jugador.x += 1; }
		else if(rotacion == 20){		jugador.y -= 4;		jugador.x += 2; }
		else if(rotacion == 25){		jugador.y -= 4;		jugador.x += 2; }
		else if(rotacion == 30){		jugador.y -= 4;		jugador.x += 2; }
		else if(rotacion == 35){		jugador.y -= 4;		jugador.x += 3; }
		else if(rotacion == 40){		jugador.y -= 4;		jugador.x += 3; }
		else if(rotacion == 45){		jugador.y -= 3;		jugador.x += 3; }
		else if(rotacion == 50){		jugador.y -= 3;		jugador.x += 4; }
		else if(rotacion == 55){		jugador.y -= 3;		jugador.x += 4; }
		else if(rotacion == 60){		jugador.y -= 2;		jugador.x += 4; }
		else if(rotacion == 65){		jugador.y -= 2;		jugador.x += 4; }
		else if(rotacion == 70){		jugador.y -= 2;		jugador.x += 4; }
		else if(rotacion == 75){		jugador.y -= 1;		jugador.x += 4; }
		else if(rotacion == 80){		jugador.y -= 1;		jugador.x += 4; }
		else if(rotacion == 85){		jugador.y -= 1;		jugador.x += 4; }

		else if(rotacion == 95){		jugador.y += 1;		jugador.x += 4; }
		else if(rotacion == 100){		jugador.y += 1;		jugador.x += 4; }
		else if(rotacion == 105){		jugador.y += 1;		jugador.x += 4; }
		else if(rotacion == 110){		jugador.y += 2;		jugador.x += 4; }
		else if(rotacion == 115){		jugador.y += 2;		jugador.x += 4; }
		else if(rotacion == 120){		jugador.y += 2;		jugador.x += 4; }
		else if(rotacion == 125){		jugador.y += 3;		jugador.x += 4; }
		else if(rotacion == 130){		jugador.y += 3;		jugador.x += 4; }
		else if(rotacion == 135){		jugador.y += 3;		jugador.x += 3; }
		else if(rotacion == 140){		jugador.y += 4;		jugador.x += 3; }
		else if(rotacion == 145){		jugador.y += 4;		jugador.x += 3; }
		else if(rotacion == 150){		jugador.y += 4;		jugador.x += 2; }
		else if(rotacion == 155){		jugador.y += 4;		jugador.x += 2; }
		else if(rotacion == 160){		jugador.y += 4;		jugador.x += 2; }
		else if(rotacion == 165){		jugador.y += 4;		jugador.x += 1; }
		else if(rotacion == 170){		jugador.y += 4;		jugador.x += 1; }
		else if(rotacion == 175){		jugador.y += 4;		jugador.x += 1; }

		else if(rotacion == 185){		jugador.y += 4;		jugador.x -= 1; }
		else if(rotacion == 190){		jugador.y += 4;		jugador.x -= 1; }
		else if(rotacion == 195){		jugador.y += 4;		jugador.x -= 1; }
		else if(rotacion == 200){		jugador.y += 4;		jugador.x -= 2; }
		else if(rotacion == 205){		jugador.y += 4;		jugador.x -= 2; }
		else if(rotacion == 210){		jugador.y += 4;		jugador.x -= 2; }
		else if(rotacion == 215){		jugador.y += 4;		jugador.x -= 3; }
		else if(rotacion == 220){		jugador.y += 4;		jugador.x -= 3; }
		else if(rotacion == 225){		jugador.y += 3;		jugador.x -= 3; }
		else if(rotacion == 230){		jugador.y += 3;		jugador.x -= 4; }
		else if(rotacion == 235){		jugador.y += 3;		jugador.x -= 4; }
		else if(rotacion == 240){		jugador.y += 2;		jugador.x -= 4; }
		else if(rotacion == 245){		jugador.y += 2;		jugador.x -= 4; }
		else if(rotacion == 250){		jugador.y += 2;		jugador.x -= 4; }
		else if(rotacion == 255){		jugador.y += 1;		jugador.x -= 4; }
		else if(rotacion == 260){		jugador.y += 1;		jugador.x -= 4; }
		else if(rotacion == 265){		jugador.y += 1;		jugador.x -= 4; }

		for(i in bloqueMarron){
			if(jugador.chocar(bloqueMarron[i])){										// Si choca contra el bloqueMarron, invertimos el desplazamiento (cambio el signo)
				if(rotacion == 0 || rotacion == 360)	jugador.y += 7;
				else if(rotacion == 90)		jugador.x -= 7;
				else if(rotacion == 180)	jugador.y -= 7;
				else if(rotacion == 270)	jugador.x += 7;

				else if(rotacion == 280){		jugador.y += 1;		jugador.x += 7; }
				else if(rotacion == 290){		jugador.y += 2;		jugador.x += 7; }
				else if(rotacion == 300){		jugador.y += 4;		jugador.x += 7; }
				else if(rotacion == 310){		jugador.y += 6;		jugador.x += 7; }
				else if(rotacion == 320){		jugador.y += 7;		jugador.x += 6; }
				else if(rotacion == 330){		jugador.y += 7;		jugador.x += 4; }
				else if(rotacion == 340){		jugador.y += 7;		jugador.x += 2; }
				else if(rotacion == 350){		jugador.y += 7;		jugador.x += 1; }

				else if(rotacion == 10){		jugador.y += 7;		jugador.x -= 1; }
				else if(rotacion == 20){		jugador.y += 7;		jugador.x -= 2; }
				else if(rotacion == 30){		jugador.y += 7;		jugador.x -= 4; }
				else if(rotacion == 40){		jugador.y += 7;		jugador.x -= 6; }
				else if(rotacion == 50){		jugador.y += 6;		jugador.x -= 7; }
				else if(rotacion == 60){		jugador.y += 4;		jugador.x -= 7; }
				else if(rotacion == 70){		jugador.y += 2;		jugador.x -= 7; }
				else if(rotacion == 80){		jugador.y += 1;		jugador.x -= 7; }

				else if(rotacion == 100){		jugador.y -= 1;		jugador.x -= 7; }
				else if(rotacion == 110){		jugador.y -= 2;		jugador.x -= 7; }
				else if(rotacion == 120){		jugador.y -= 4;		jugador.x -= 7; }
				else if(rotacion == 130){		jugador.y -= 6;		jugador.x -= 7; }
				else if(rotacion == 140){		jugador.y -= 7;		jugador.x -= 6; }
				else if(rotacion == 150){		jugador.y -= 7;		jugador.x -= 4; }
				else if(rotacion == 160){		jugador.y -= 7;		jugador.x -= 2; }
				else if(rotacion == 170){		jugador.y -= 7;		jugador.x -= 1; }

				else if(rotacion == 190){		jugador.y -= 7;		jugador.x += 1; }
				else if(rotacion == 200){		jugador.y -= 7;		jugador.x += 2; }
				else if(rotacion == 210){		jugador.y -= 7;		jugador.x += 4; }
				else if(rotacion == 220){		jugador.y -= 7;		jugador.x += 6; }
				else if(rotacion == 230){		jugador.y -= 6;		jugador.x += 7; }
				else if(rotacion == 240){		jugador.y -= 4;		jugador.x += 7; }
				else if(rotacion == 250){		jugador.y -= 2;		jugador.x += 7; }
				else if(rotacion == 260){		jugador.y -= 1;		jugador.x += 7; }
			}
		}
	}
	if(teclaPresionada[formatKey("DOWN")]){
		// Poner TURBO
	}
	if(teclaPresionada[formatKey("LEFT")]){
		rotacion -= 5;
		/*for(i in bloqueMarron){
			if(jugador.chocar(bloqueMarron[i]))		jugador.x += 7;
		}*/
	}
	if(teclaPresionada[formatKey("RIGHT")]){
		rotacion += 5;
		/*for(i in bloqueMarron){
			if(jugador.chocar(bloqueMarron[i]))		jugador.x -= 7;
		}*/
	}

	// No salirse de la Pantalla
	if(jugador.x > canvas.width - jugador.width)	jugador.x = canvas.width - jugador.width;
	if(jugador.y > canvas.height - jugador.height)	jugador.y = canvas.height - jugador.height;
	if(jugador.x <= 0)								jugador.x = 0;
	if(jugador.y <= 0)								jugador.y = 0;
}


function colision(){
	// bloqueVida -> bloqueRojo
	for(i in bloqueRojo){
		if(bloqueVida.chocar(bloqueRojo[i])){
  			bloqueVida.x = random(canvas.width - 10);
  			bloqueVida.y = random(canvas.height - 10);
		}
	}

	// bloqueVida -> bloqueBlanco
	for(i in bloqueBlancoVert){
		if(bloqueVida.chocar(bloqueBlancoVert[i])){
  			bloqueVida.x = random(canvas.width - 10);
  			bloqueVida.y = random(canvas.height - 10);
		}
	}
	for(i in bloqueBlancoHor){
		if(bloqueVida.chocar(bloqueBlancoHor[i])){
  			bloqueVida.x = random(canvas.width - 10);
  			bloqueVida.y = random(canvas.height - 10);
		}
	}

	// bloqueVida -> bloqueMarron
	for(i in bloqueMarron){
		if(bloqueVida.chocar(bloqueMarron[i])){
  			bloqueVida.x = random(canvas.width - 10);
  			bloqueVida.y = random(canvas.height - 10);
		}
	}

	// Jugador -> bloqueVida
	if(jugador.chocar(bloqueVida)){
  		jugador.vida++;
  		bloqueVida.x = random(canvas.width - 10);
  		bloqueVida.y = random(canvas.height - 10);
 	}

	// Jugador -> bloqueRojo
	for(i in bloqueRojo){
		if(jugador.chocar(bloqueRojo[i]) && tiempoInmunidad < 1){
			jugador.vida--;
			tiempoInmunidad = _TimeProtected;
		}
	}

	// Balas -> bloqueMarron
	for(i in balas){
		for(j in bloqueMarron){
			if(balas[i].chocar(bloqueMarron[j])){
	  			puntuacion += _PointsBlock;

				balas.splice(i,1);

				if(bloqueMarron[j].vida >= _LifesBlock)
					bloqueMarron.splice(j,1);
				else
					bloqueMarron[j].vida += _DamageWeapon1;

				printLightEfectsAfter();
			}
		}
	}

	// Balas -> bloqueRojo
	for(i in balas){
		for(j in bloqueRojo){
			if(balas[i].chocar(bloqueRojo[j])){
	  			balas.splice(i,1);

	  			printLightEfectsAfter();
 			}
		}
	}

	// Balas -> bloqueBlanco
	// for(i in balas){
	// 	for(j in bloqueBlanco){
	// 		if(balas[i].chocar(bloqueBlanco[j])){
	//   			balas[i].velY = -balas[i].velY;		// Rebota
	//   			balas[i].velX = -balas[i].velX;		// Rebota
 // 			}
	// 	}
	// }

	if(reboteBalas){
		for(i in balas){
			for(j in bloqueBlancoVert){
		  		if(balas[i].chocar(bloqueBlancoVert[j]))
		  			// balas[i].velY = -balas[i].velY;
		  			if(balas[i].maxRebounds < _MaxRebounds){
		  				balas[i].velY *= -1;
		  				balas[i].maxRebounds++;
		  			}else
						balas.splice(i,1);
			}
		}

		for(i in balas){
			for(j in bloqueBlancoHor){
		  		if(balas[i].chocar(bloqueBlancoHor[j]))
		  			// balas[i].velX = -balas[i].velX;
		  			if(balas[i].maxRebounds < _MaxRebounds){
		  				balas[i].velX *= -1;
		  				balas[i].maxRebounds++;
					}else
						balas.splice(i,1);
			}
		}
	}

	// Balas -> bloqueVida
	for(i in balas){
		if(balas[i].chocar(bloqueVida)){
			jugador.vida++;
	  		bloqueVida.x = random(canvas.width - 10);
	  		bloqueVida.y = random(canvas.height - 10);
		}
	}
}

function mostrarNaveRotada(){
	ctx.save();
	ctx.translate(jugador.x+jugador.width/2,jugador.y+jugador.height/2);
	ctx.rotate(rotacion*Math.PI/180);
	ctx.drawImage(iNave,-jugador.width/2,-jugador.height/2, jugador.width, jugador.height);
	ctx.restore();
}

function keyboard(){

	pressKey();

	if(tecla == formatKey("ENTER")){
		pausa = !pausa;
		tecla = null;
	}else if(tecla == formatKey("PadNum1")){
		borrarMapa();
		crearMapa(mapa1, _SizeBlock);
		tecla = null;
	}else if(tecla == formatKey("PadNum2")){
		borrarMapa();
		crearMapa(mapa2, _SizeBlock);
		tecla = null;
	}else if(tecla == formatKey("PadNum3")){
		borrarMapa();
		crearMapa(mapa3, _SizeBlock);
		tecla = null;
	}else if(tecla == formatKey("PadNum4")){
		borrarMapa();
		crearMapa(mapa4, _SizeBlock);
		tecla = null;
	}else if(tecla == formatKey("PadNum5")){
		borrarMapa();
		tecla = null;
	}else if(tecla == formatKey("PadNum6")){
		borrarMapa();
		tecla = null;
	}else if(tecla == formatKey("PadNum7")){
		verInfo =! verInfo;
		tecla = null;
	}else if(tecla == formatKey("M")){
		if(!pantallaCompleta)
			pantallaCompleta = setFullscreen(canvas);
		else
			pantallaCompleta = setNotFullscreen(canvas);
		tecla = null;
	}else if(tecla == formatKey("R")){
		reset();
		borrarMapa();
		crearMapa(mapa1, _SizeBlock);
		tecla = null;
	}
}