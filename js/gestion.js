window.addEventListener('load',init,false);
var canvas = null, ctx = null;
var tecla = null;
var teclaPresionada = [];
var puntuacion = 0;
var tiempoInmunidad = 0;
var verInfo = true, pausa = true, gameOver = false, pantallaCompleta = false;
var fps = 0, now, lastUpdate = (new Date)*1 - 1, fpsFilter = 50;
var iNave = new Image(), iVida = new Image(), iLadrillo = new Image(), iBarrera = new Image(), iFuego = new Image();
var balas = [], balas2 = [], muro = [], enemigo = [], barrera = [], mapa1 = [], mapa2 = [];
var rotacion = 360;
var cadena = "";

mapa1 = [
		[' ',' ', 5 , 5 , 5 ,' ', 5 , 5 , 5 ,' ', 5 ,' ',' ',' ', 5 ,' ', 5 , 5 , 5 ,' ', 5 , 5 , 5 ,' ',' '],
		[' ',' ', 5 ,' ',' ',' ', 5 ,' ',' ',' ', 5 ,' ',' ',' ', 5 ,' ', 5 ,' ', 5 ,' ', 5 ,' ',' ',' ',' '],
		[' ',' ', 5 , 5 ,' ',' ', 5 , 5 ,' ',' ', 5 ,' ',' ',' ', 5 ,' ', 5 , 5 , 5 ,' ', 5 , 5 ,' ',' ',' '],
		[' ',' ', 5 ,' ',' ',' ', 5 ,' ',' ',' ', 5 ,' ',' ',' ', 5 ,' ', 5 ,' ',' ',' ', 5 ,' ',' ',' ',' '],
		[' ',' ', 5 ,' ',' ',' ', 5 , 5 , 5 ,' ', 5 , 5 , 5 ,' ', 5 ,' ', 5 ,' ',' ',' ', 5 , 5 , 5 ,' ',' '],
		[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
		[' ',' ', 4 ,' ',   , 4 , 4 ,   , 4 , 4 ,' ',   , 4 ,   , 4 , 4 , 4 ,   , 4 , 4 ,   ,' ', 4 ,' ',' '],
		[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
		[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
		[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
		[ 3 ,' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ', 3 ],
		[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
		[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
		[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
		[ 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ]];

mapa2 = [
		[' ', 5 , 5 , 5 ,' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
		[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ', 5 ,' ',' '],
		[' ', 5 , 5 , 5 ,' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ', 5 ,' ',' '],
		[' ', 5 ,' ', 5 ,' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ', 5 ,' ',' '],
		[' ', 5 ,' ', 5 ,' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
		[' ', 5 ,' ',' ',' ',' ',' ',' ',' ',' ',' ', 5 , 5 , 5 ,' ',' ',' ',' ',' ',' ',' ', 5 ,' ',' ',' '],
		[' ', 5 ,' ', 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ,' ', 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ,' ',' ',' '],
		[' ', 5 ,' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
		[' ', 5 ,' ', 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ,' ', 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ,' ',' ',' ',' '],
		[' ', 5 ,' ', 5 ,' ',' ',' ',' ',' ',' ',' ', 5 , 5 , 5 ,' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
		[' ', 5 ,' ', 5 ,' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
		[' ', 5 ,' ', 5 , 5 , 5 , 5 , 5 , 5 ,' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
		[' ', 5 ,' ',' ',' ',' ',' ',' ', 5 ,' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
		[' ', 5 , 5 , 5 , 5 , 5 ,' ',' ', 5 ,' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
		[' ',' ',' ',' ',' ', 5 ,' ',' ', 5 ,' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']];

var jugador = new Figura(225,200,15,15,0,0,5);
var objeto = new Figura(80,80,15,15);

iNave.src     = 'assets/img/nave.png';
iVida.src     = 'assets/img/vida.png';
iLadrillo.src = 'assets/img/ladrilloMarron.png';
iBarrera.src  = 'assets/img/ladrilloBlanco.png';
iFuego.src    = 'assets/img/fuego2.png';

window.requestAnimFrame=(function(){
 return window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function(callback){window.setTimeout(callback,17);};
})();

function init(){
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	mostrarFps();
	efectosPorDefecto();
	crearMapa(mapa1, 20);
	unsetFullscreen();
	run();
}
function crearMapa(mapa, width){
	for(var i = 0; i < mapa.length; i++) {			// i = fila   j = columna
		for(var j = 0; j < mapa[i].length; j++) {
			if(mapa[i][j] == 5)
				muro.push(new Figura(j*width,i*width,width,width,null,null,0));
			else if(mapa[i][j] == 4)
				enemigo.push(new Figura(j*width,i*width,width,width,null,null,0));
			else if(mapa[i][j] == 3)
				barrera.push(new Figura(j*width,i*width,width,width,null,null,0));
		}
	}
}
function borrarMapa(){
	var nºCosasBorrar = muro.length + enemigo.length;
	for(var i = 0; i < 999; i++) {
		muro.splice(0,1);
		enemigo.splice(0,1);
		barrera.splice(0,1);
	}
}
function mostrarFps(){
	setTimeout(mostrarFps,1);
  	var thisFrameFPS = 1000 / ((now = new Date) - lastUpdate);
  	fps += (thisFrameFPS - fps) / fpsFilter;
  	lastUpdate = now*1-1;
}
function efectosPorDefecto(){
	setTimeout(efectosPorDefecto,100);
	document.getElementById('score').style.color = '#DFE1E4';

	var mensaje = document.getElementById("img1");
	mensaje.innerHTML = "<img src='assets/img/efectoLuz.png'>";

	var mensaje2 = document.getElementById("img2");
	mensaje2.innerHTML = "<img src='assets/img/efectoLuz.png'>";
}
function efectosEspeciales(){
	document.getElementById('score').style.color='#94A2B7';
	var mensaje = document.getElementById("img1");
	mensaje.innerHTML = "<img src='assets/img/foco.png'>";

	var mensaje2 = document.getElementById("img2");
	mensaje2.innerHTML = "<img src='assets/img/foco.png'>";
}
function run(){
	//setTimeout(run,50);
	requestAnimFrame(run);
	juego();
	pintar();
	mostrarPuntos();
}
function juego(){
	if(!pausa){
		if(gameOver)	reset();

		if(jugador.vida < 1){
			gameOver = true;
			pausa = true;
		}
		if(tiempoInmunidad > 0)
            tiempoInmunidad--;

        if(rotacion > 360)
			rotacion = 0;
        else if(rotacion < 0)
			rotacion = 360;

		// Movimiento
		if(teclaPresionada[38]){				// Arriba
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

			for(i in muro){
				if(jugador.chocar(muro[i])){										// Si choca contra el muro, invertimos el desplazamiento (cambio el signo)
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
		if(teclaPresionada[40]){				// Abajo
			/*for(i in muro){
				if(jugador.chocar(muro[i]))		jugador.y -= 7;
			}*/
		}
		if(teclaPresionada[37]){				// Izquierda
			rotacion -= 5;
			/*for(i in muro){
				if(jugador.chocar(muro[i]))		jugador.x += 7;
			}*/
		}
		if(teclaPresionada[39]){				// Derecha
			rotacion += 5;
			/*for(i in muro){
				if(jugador.chocar(muro[i]))		jugador.x -= 7;
			}*/
		}

		// No salirse de la Pantalla
		if(jugador.x > canvas.width - jugador.width)	jugador.x = canvas.width - jugador.width;
		if(jugador.y > canvas.height - jugador.height)	jugador.y = canvas.height - jugador.height;
		if(jugador.x <= 0)								jugador.x = 0;
		if(jugador.y <= 0)								jugador.y = 0;

		interseccion();
		disparoSimple();
		disparoDoble();
	}
	if(tecla == 13){
		pausa =! pausa;
		tecla = null;
	}else if(tecla == 97){
		borrarMapa();
		crearMapa(mapa1, 20);
		tecla = null;
	}else if(tecla == 98){
		borrarMapa();
		crearMapa(mapa2, 20);
		tecla = null;
	}else if(tecla == 99){
		borrarMapa();
		tecla = null;
	}else if(tecla == 77){
		if(!pantallaCompleta){
			pantallaCompleta = true;
			setFullscreen();
		}else{
			unsetFullscreen();
			pantallaCompleta = false;
		}
		tecla = null;
	}else if(tecla == 103){
		verInfo =! verInfo;
		tecla = null;
	}else if(tecla == 81){
		rotacion -= 10;
		tecla = null;
	}else if(tecla == 87){
		rotacion += 10;
		tecla = null;
	}
}
function pintar() {
	ctx.clearRect(0,0,canvas.width,canvas.height);

	if(tiempoInmunidad > 0){
		if(tiempoInmunidad%2 == 0)
			mostrarNaveRotada();
	}else{
		mostrarNaveRotada();
	}

	ctx.fillStyle = '#0D641A';
	ctx.drawImage(iVida,objeto.x,objeto.y);

	for(i in muro){
		if(muro[i].vida == 0)		ctx.fillStyle = '#828486';
		else if(muro[i].vida == 1)	ctx.fillStyle = '#5D6366';
		else if(muro[i].vida == 2)	ctx.fillStyle = '#494E51';
		else if(muro[i].vida == 3)	ctx.fillStyle = '#494E51';
		ctx.drawImage(iLadrillo,muro[i].x,muro[i].y,muro[i].width,muro[i].height);
	}

	for(i in barrera){
		ctx.drawImage(iBarrera,barrera[i].x,barrera[i].y,barrera[i].width,barrera[i].height);
	}

	ctx.fillStyle = '#7F0707';
	for(i in enemigo)
		ctx.drawImage(iFuego,enemigo[i].x,enemigo[i].y,enemigo[i].width,enemigo[i].height);

	ctx.fillStyle = '#614E70';
	for(i in balas)
  		ctx.fillRect(balas[i].x,balas[i].y,balas[i].width,balas[i].height);

  	ctx.fillStyle = '#4A6192';
	for(i in balas2)
  		ctx.fillRect(balas2[i].x,balas2[i].y,balas2[i].width,balas2[i].height);

	ctx.fillStyle = '#fff';
	if(verInfo){
		ctx.fillText('Tecla: '+tecla,5,15);
		ctx.fillText('Puntuacion: '+puntuacion,5,30);
		ctx.fillText('Balas Simple: '+balas.length,5,45);
		ctx.fillText('Balas Dobles: '+balas2.length,5,60);
		ctx.fillText('Fps: '+fps.toFixed(1),5,75);
		ctx.fillText('Salud: '+jugador.vida,5,90);
		ctx.fillText('Inmunidad: '+tiempoInmunidad,5,105);
		ctx.fillText('Rotación: '+rotacion,5,120);
	}

	if(pausa){
		if(gameOver)
			ctx.fillText('GAME OVER',230,140);
		else if(pausa)
			ctx.fillText('PAUSA',230,140);
	}
}
function random(max){
	//return Math.floor(Math.random()*max);
	return ~~(Math.random()*max*1-1);
}
function reset(){
	puntuacion      = 0;
	jugador.vida    = 5;
	tiempoInmunidad = 0;
	jugador.x       = 250;
	jugador.y       = 250;
	objeto.x        = random(canvas.width - 10);
	objeto.y        = random(canvas.height - 10);
	gameOver        = false;
	crearMapa(mapa1, 20);
}
function disparoSimple(){

	// Crear balas
	if((tecla == 90) && balas.length <= 500){
		if(rotacion == 0 || rotacion == 360)	balas.push(new Figura(jugador.x+jugador.width/2,jugador.y,3,3,4,4));
		else if(rotacion == 90)					balas.push(new Figura(jugador.x+jugador.width,jugador.y+jugador.height/2,3,3,4,4));
		else if(rotacion == 180)				balas.push(new Figura(jugador.x+jugador.width/2,jugador.y+jugador.height,3,3,4,4));
		else if(rotacion == 270)				balas.push(new Figura(jugador.x,jugador.y+jugador.height/2,3,3,4,4));

		else if(rotacion == 275){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 8,jugador.y + 4,3,3,4,1));  }
		else if(rotacion == 280){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 8,jugador.y + 4,3,3,4,1));  }
		else if(rotacion == 285){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 7,jugador.y + 3,3,3,4,1));  }
		else if(rotacion == 290){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 7,jugador.y + 3,3,3,4,2));  }
		else if(rotacion == 295){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 6,jugador.y + 2,3,3,4,2));  }
		else if(rotacion == 300){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 6,jugador.y + 2,3,3,4,2));  }
		else if(rotacion == 305){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 5,jugador.y,3,3,4,3));  }
		else if(rotacion == 310){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 5,jugador.y,3,3,4,3));  }
		else if(rotacion == 315){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 4.5,jugador.y,3,3,3,3));  }
		else if(rotacion == 320){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 4.5,jugador.y,3,3,3,4));  }
		else if(rotacion == 325){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 3,jugador.y,3,3,3,4));  }
		else if(rotacion == 330){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 3,jugador.y,3,3,2,4));  }
		else if(rotacion == 335){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 2,jugador.y,3,3,2,4));  }
		else if(rotacion == 340){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 0.75,jugador.y,3,3,2,4));  }
		else if(rotacion == 345){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 0.75,jugador.y,3,3,1,4));  }
		else if(rotacion == 350){ 	balas.push(new Figura(jugador.x+jugador.width/2,jugador.y,3,3,1,4));  }
		else if(rotacion == 355){ 	balas.push(new Figura(jugador.x+jugador.width/2,jugador.y,3,3,1,4));  }

		else if(rotacion == 5){ 	balas.push(new Figura(jugador.x+jugador.width/2,jugador.y,3,3,1,4));  }
		else if(rotacion == 10){ 	balas.push(new Figura(jugador.x+jugador.width/2,jugador.y,3,3,1,4));  }
		else if(rotacion == 15){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 0.75,jugador.y,3,3,1,4));  }
		else if(rotacion == 20){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 0.75,jugador.y,3,3,2,4));  }
		else if(rotacion == 25){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 2,jugador.y,3,3,2,4));  }
		else if(rotacion == 30){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 3,jugador.y,3,3,2,4));  }
		else if(rotacion == 35){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 3,jugador.y,3,3,3,4));  }
		else if(rotacion == 40){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 4.5,jugador.y,3,3,3,4));  }
		else if(rotacion == 45){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 4.5,jugador.y,3,3,3,3));  }
		else if(rotacion == 50){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 5,jugador.y,3,3,4,3));  }
		else if(rotacion == 55){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 5,jugador.y,3,3,4,3));  }
		else if(rotacion == 60){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 6,jugador.y + 2,3,3,4,2));  }
		else if(rotacion == 65){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 6,jugador.y + 2,3,3,4,2));  }
		else if(rotacion == 70){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 7,jugador.y + 3,3,3,4,2));  }
		else if(rotacion == 75){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 7,jugador.y + 3,3,3,4,1));  }
		else if(rotacion == 80){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 8,jugador.y + 4,3,3,4,1));  }
		else if(rotacion == 85){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 8,jugador.y + 4,3,3,4,1));  }

		else if(rotacion == 95){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 8,jugador.y+jugador.height - 4,3,3,4,1));  }
		else if(rotacion == 100){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 8,jugador.y+jugador.height - 4,3,3,4,1));  }
		else if(rotacion == 105){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 7,jugador.y+jugador.height - 3,3,3,4,1));  }
		else if(rotacion == 110){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 7,jugador.y+jugador.height - 3,3,3,4,2));  }
		else if(rotacion == 115){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 6,jugador.y+jugador.height - 2,3,3,4,2));  }
		else if(rotacion == 120){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 6,jugador.y+jugador.height - 2,3,3,4,2));  }
		else if(rotacion == 125){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 5,jugador.y+jugador.height,3,3,4,3));  }
		else if(rotacion == 130){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 5,jugador.y+jugador.height,3,3,4,3));  }
		else if(rotacion == 135){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 4.5,jugador.y+jugador.height,3,3,3,3));  }
		else if(rotacion == 140){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 4.5,jugador.y+jugador.height,3,3,3,4));  }
		else if(rotacion == 145){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 3,jugador.y+jugador.height,3,3,3,4));  }
		else if(rotacion == 150){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 3,jugador.y+jugador.height,3,3,2,4));  }
		else if(rotacion == 155){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 2,jugador.y+jugador.height,3,3,2,4));  }
		else if(rotacion == 160){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 0.75,jugador.y+jugador.height,3,3,2,4));  }
		else if(rotacion == 165){ 	balas.push(new Figura(jugador.x+jugador.width/2 + 0.75,jugador.y+jugador.height,3,3,1,4));  }
		else if(rotacion == 170){ 	balas.push(new Figura(jugador.x+jugador.width/2,jugador.y+jugador.height,3,3,1,4));  }
		else if(rotacion == 175){ 	balas.push(new Figura(jugador.x+jugador.width/2,jugador.y+jugador.height,3,3,1,4));  }

		else if(rotacion == 185){ 	balas.push(new Figura(jugador.x+jugador.width/2,jugador.y+jugador.height,3,3,1,4));  }
		else if(rotacion == 190){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 2,jugador.y+jugador.height,3,3,1,4));  }
		else if(rotacion == 195){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 2.5,jugador.y+jugador.height,3,3,1,4));  }
		else if(rotacion == 200){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 2.5,jugador.y+jugador.height,3,3,2,4));  }
		else if(rotacion == 205){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 3,jugador.y+jugador.height,3,3,2,4));  }
		else if(rotacion == 210){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 3,jugador.y+jugador.height,3,3,2,4));  }
		else if(rotacion == 215){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 4,jugador.y+jugador.height,3,3,3,4));  }
		else if(rotacion == 220){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 5.5,jugador.y+jugador.height,3,3,3,4));  }
		else if(rotacion == 225){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 6.5,jugador.y+jugador.height,3,3,3,3));  }
		else if(rotacion == 230){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 8,jugador.y+jugador.height,3,3,4,3));  }
		else if(rotacion == 235){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 8,jugador.y+jugador.height,3,3,4,3));  }
		else if(rotacion == 240){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 6,jugador.y+jugador.height - 3,3,3,4,2));  }
		else if(rotacion == 245){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 6,jugador.y+jugador.height - 3,3,3,4,2));  }
		else if(rotacion == 250){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 7,jugador.y+jugador.height - 4,3,3,4,2));  }
		else if(rotacion == 255){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 7,jugador.y+jugador.height - 4,3,3,4,1));  }
		else if(rotacion == 260){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 8,jugador.y+jugador.height - 5,3,3,4,1));  }
		else if(rotacion == 265){ 	balas.push(new Figura(jugador.x+jugador.width/2 - 8,jugador.y+jugador.height - 6,3,3,4,1));  }

		tecla = null;
	}

	// Mover balas
	// ------------
	// balas[i].mover360 		-->		La bala sólo se mueva hacia arriba, aunque cambie la rotación
	// balas[i].permitir		-->		Impide que la 1 bala concreta cambie de direccion cuando gire la nave(rotación)
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

	 	if(balas[i].x < 0 || balas[i].y < 0)								balas.splice(i,1);	// Eliminamos las balas si sobrepasan los límites del mapa
    	else if(balas[i].x > canvas.width || balas[i].y > canvas.height)	balas.splice(i,1);
  	}
}
function disparoDoble(){
	// Crear balas
	if((tecla == 88) && balas2.length <= 30){
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
function interseccion(){
 	// Jugador -> objeto
	if(jugador.chocar(objeto)){
  		jugador.vida++;
  		objeto.x = random(canvas.width - 10);
  		objeto.y = random(canvas.height - 10);
 	}

	// Objeto -> muro
	for(i in muro){
		if(objeto.chocar(muro[i])){
  			objeto.x = random(canvas.width - 10);
  			objeto.y = random(canvas.height - 10);
		}
	}

	// Jugador -> enemigo
	for(i in enemigo){
		if(jugador.chocar(enemigo[i]) && tiempoInmunidad < 1){
			jugador.vida--;
			tiempoInmunidad = 125;
		}
	}

	// Balas -> muro
	for(i in balas){
		for(j in muro){
			if(balas[i].chocar(muro[j])){
	  			puntuacion += 3;

	  			balas[i].velY = -balas[i].velY;		// Rebota
	  			balas[i].velX = -balas[i].velX;

				muro[j].vida++;
				if(muro[j].vida == 3)
					muro.splice(j,1);

				efectosEspeciales();
			}
		}
	}

	// Balas -> Enemigo
	for(i in balas){
		for(j in enemigo){
			if(balas[i].chocar(enemigo[j])){
	  			balas[i].velY = -balas[i].velY;		// Rebota
	  			balas.splice(i,1);
	  			efectosEspeciales();
 			}
		}
	}

	// Balas -> Barrera
	for(i in balas){
		for(j in barrera){
			if(balas[i].chocar(barrera[j])){
	  			balas[i].velY = -balas[i].velY;		// Rebota
	  			balas[i].velX = -balas[i].velX;		// Rebota

	  			efectosEspeciales();
 			}
		}
	}

	// Balas -> objeto
	for(i in balas){
		if(balas[i].chocar(objeto)){
	  		puntuacion++;
	  		objeto.x = random(canvas.width - 10);
	  		objeto.y = random(canvas.height - 10);
		}
	}
}
function mostrarPuntos(){
	var puntos = document.getElementById("score");
    puntos.innerHTML = "Puntuación: "+puntuacion;
}
function setFullscreen(){
	var w = window.innerWidth/canvas.width;
	var h = window.innerHeight/canvas.height;
	var scale = Math.min(h,w);

	canvas.style.width      = (canvas.width*scale)+'px';
	canvas.style.height     = (canvas.height*scale)+'px';
	canvas.style.position   = 'fixed';
	canvas.style.left       = '50%';
	canvas.style.top        = '50%';
	canvas.style.marginLeft =- (canvas.width*scale)/2+'px';
	canvas.style.marginTop  =- (canvas.height*scale)/2+'px';
}
function unsetFullscreen(){
	canvas.style.width      ='';
	canvas.style.height     ='';
	canvas.style.position   ='';
	canvas.style.left       ='';
	canvas.style.top        ='';
	canvas.style.marginLeft ='';
	canvas.style.marginTop  ='';
}
function Figura(x,y,ancho,alto,velX,velY,vida){
	this.x = x;
 	this.y = y;
 	this.width = ancho;
 	this.height = alto;
 	this.velX = velX;
 	this.velY = velY;
 	this.vida = vida;
	// Atributos de las balas
 	this.mover360 = false;		// Arriba
 	this.mover180 = false;		// Abajo
 	this.mover270 = false;		// Izquierda
 	this.mover90 = false;		// Derecha

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
 	this.chocar = function(algo){
	  	if(algo != null){
	   		return(this.x<algo.x+algo.width && this.x+this.width>algo.x &&
	   		this.y<algo.y+algo.height && this.y+this.height>algo.y);
	  	}
 	}
}
function mostrarNaveRotada(){
	ctx.save();
	ctx.translate(jugador.x+jugador.width/2,jugador.y+jugador.height/2);
	ctx.rotate(rotacion*Math.PI/180);
	ctx.drawImage(iNave,-jugador.width/2,-jugador.height/2);
	ctx.restore();
}

document.addEventListener('keydown',function(evt){
	tecla = evt.keyCode;
	teclaPresionada[evt.keyCode] = true;
},false);
document.addEventListener('keyup',function(evt){
	teclaPresionada[evt.keyCode] = false;
},false);

