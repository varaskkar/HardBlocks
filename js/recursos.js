var fps = 0, now, lastUpdate = (new Date)*1 - 1, fpsFilter = 50;

// var ElementLives  = $("#livesNum");
// var ElementPoints = $("#scoreNum");
// var ElementLight1 = $("#light1");
// var ElementLight2 = $("#light2");
// var body          = $("body");

var ElementLives  = document.getElementById("livesNum");
var ElementPoints = document.getElementById("scoreNum");
var ElementLight1 = document.getElementById("light1");
var ElementLight2 = document.getElementById("light2");
var body          = document.getElementsByTagName("body");

function getFps(){
	// setTimeout(mostrarFps,1);
  	var thisFrameFPS = 1000 / ((now = new Date) - lastUpdate);
  	fps += (thisFrameFPS - fps) / fpsFilter;
  	lastUpdate = now*1-1;

  	return fps;
}

window.requestAnimFrame=(function(){
	return window.requestAnimationFrame ||
  	window.webkitRequestAnimationFrame ||
  	window.mozRequestAnimationFrame ||
  	function(callback){
  		window.setTimeout(callback,17);
  	};
})();

function setFullscreen(canvas){
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

	// canvas.css({
	// 	"width": (canvas.width*scale)+"px",
	// 	"height": (canvas.height*scale)+"value2",
	// 	"position": "fixed",
	// 	"left": "50%",
	// 	"top": "50%",
	// 	"marginLeft": (canvas.width*scale)/2+"px",
	// 	"marginTop": (canvas.height*scale)/2+"px"
	// });


	// body.style.background = "#f00";
	// $("body").css('background', '#f00');


	return true;
}

function setNotFullscreen(canvas){
	canvas.style.width      = '';
	canvas.style.height     = '';
	canvas.style.position   = '';
	canvas.style.left       = '';
	canvas.style.top        = '';
	canvas.style.marginLeft = '';
	canvas.style.marginTop  = '';

	return false;
}

function printLives(lives){ ElementLives.innerHTML = lives; }
function printPoints(puntuacion){ ElementPoints.innerHTML = puntuacion; }

function printLightEfectsBefore(){
	setTimeout(printLightEfectsBefore,100);
	ElementLives.style.color = '#DFE1E4';
	ElementPoints.style.color = '#DFE1E4';
	ElementLight1.innerHTML = "<img src='assets/img/efectoLuz.png'>";
	ElementLight2.innerHTML = "<img src='assets/img/efectoLuz.png'>";
}

function printLightEfectsAfter(){
	ElementLives.style.color = '#94A2B7';
	ElementPoints.style.color='#94A2B7';
	ElementLight1.innerHTML = "<img src='assets/img/foco.png'>";
	ElementLight2.innerHTML = "<img src='assets/img/foco.png'>";
}

// function teclaPulsada(){
// 	var teclaPresionada = [];

// 	document.addEventListener('keydown',function(evt){
// 		// tecla = evt.keyCode;
// 		teclaPresionada[evt.keyCode] = true;
// 	},false);
// 	document.addEventListener('keyup',function(evt){
// 		teclaPresionada[evt.keyCode] = false;
// 	},false);
// }

