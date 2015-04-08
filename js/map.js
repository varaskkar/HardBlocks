//								Width 			Height
// -------------------------------------------------------------
// Canvas 						560				360
// _SizeBlock = 20				20				20
// Bloques que encajan 			560/20 > 28 	360/20 > 18

// Bloques caben en pantalla 	28 * 18 = 504

var currentMap = "";
var map1 = [], map2 = [], map3 = [], map4 = [], map5 = [], map6 = [], map7 = [];
var portal1 = [], portal2 = [];

function createMap(map, width, sound, nameMap, backgroundColor, posX, posY, rotation){
	for(var i = 0; i < map.length; i++) {			// i = fila   j = columna
		for(var j = 0; j < map[i].length; j++) {
			if(map[i][j] == 5)
				blockBrown.push(new Element(j*width,i*width,width,width));
			else if(map[i][j] == 4)
				blockRed.push(new Element(j*width,i*width,width,width));
			else if(map[i][j] == 3)
				blockWhiteVert.push(new Element(j*width,i*width,width,width));
			else if(map[i][j] == 2)
				blockWhiteHor.push(new Element(j*width,i*width,width,width));
			else if(map[i][j] == 'P1')
				portal1.push(new Element(j*width,i*width,width,width));
			else if(map[i][j] == 'P2')
				portal2.push(new Element(j*width,i*width,width,width));
		}
	}
	templateSetBackgroundColor(backgroundColor);
	loadSound(sound, true);
	currentMap = nameMap;

	// Wait a moment to that load the map completely
	// This avoid that player don't appear in the other portal...because the map don't loaded yet
	setTimeout(function(){
		if(typeof posX != "undefined")		player.x = posX;
		if(typeof posY != "undefined")		player.y = posY;
		if(typeof rotation != "undefined")	player.rotation = rotation;
	}, 250);
}
function clearMap(){
	var cantBloquesCabenPantalla = canvas.width/_SizeBlock * canvas.height/_SizeBlock;

	for(var i = 0; i < 999; i++) {
		blockBrown.splice(0,1);
		blockRed.splice(0,1);
		blockWhiteVert.splice(0,1);
		blockWhiteHor.splice(0,1);
		bullets1.splice(0,1);
		portal1.splice(0,1);
		portal2.splice(0,1);
	}
	stopSounds();
}

map1 = [
	[   ,   ,   , 5 , 5 , 5 ,   , 5 , 5 , 5 ,   , 5 ,   ,   ,   , 5 ,   , 5 , 5 , 5 ,   , 5 , 5 , 5 ,   ,   ,   ,   ],
	[   ,   ,   , 5 ,   ,   ,   , 5 ,   ,   ,   , 5 ,   ,   ,   , 5 ,   , 5 ,   , 5 ,   , 5 ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   , 5 , 5 ,   ,   , 5 , 5 ,   ,   , 5 ,   ,   ,   , 5 ,   , 5 , 5 , 5 ,   , 5 , 5 ,   ,   ,   ,   ,   ],
	[   ,   ,   , 5 ,   ,   ,   , 5 ,   ,   ,   , 5 ,   ,   ,   , 5 ,   , 5 ,   ,   ,   , 5 ,   ,   ,   ,   ,'P1','P1'],
	[   ,   ,   , 5 ,   ,   ,   , 5 , 5 , 5 ,   , 5 , 5 , 5 ,   , 5 ,   , 5 ,   ,   ,   , 5 , 5 , 5 ,   ,   ,'P1','P1'],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   , 4 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 4 ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[ 4 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 4 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 3 , 3 , 3 , 3 , 4 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 4 , 3 , 3 , 3 , 3 ],
	[ 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ,   ,   , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[ 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ,   ,   ,   ,   , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[ 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ,   ,   ,   ,   , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[ 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ,   ,   ,   ,   ,   ,   , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ]
	];

map2 = [
	[ 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[ 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[ 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[ 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[ 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[ 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[ 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[ 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[ 2 ,   ,   , 3 , 3 , 3 ,   ,   , 3 , 3 , 3 ,   , 3 , 3 , 3 , 3 ,   , 3 , 3 , 3 ,   ,   , 3 , 3 , 3 ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,'P1','P1',   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,'P1','P1',   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   , 3 , 3 , 3 ,   ,   , 3 , 3 , 3 ,   ,   ,   ,   ,   ,   , 3 , 3 , 3 ,   ,   , 3 , 3 , 3 ,   ,   , 2 ],
	[ 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ,   ,   , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[ 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ,   ,   ,   ,   , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[ 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ,   ,   ,   ,   , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[ 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ,   ,   ,   ,   ,   ,   , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ]
	];

map3 = [
	[ 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 ],
	[ 2 ,   ,   ,   ,   ,   ,   , 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   , 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   , 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   , 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 , 3 ,   ,   , 3 , 3 , 3 , 3 , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   , 3 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 3 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 3 , 2 , 3 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 , 2 , 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 , 2 , 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 , 2 , 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 ]
	];

map4 = [
	[ 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 ]
	];

map5 = [
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ]
	];

map7 = [
	[   ,   ,   ,   ,   ,   ,   ,   ,   , 2 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ,   ,   ,   , 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ,   ,   ,   , 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ,   ,   ,   , 2 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ,   ,   ,   , 2 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   , 2 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ]
	];

map6 = [
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 5 , 5 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 5 , 5 , 5 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 5 , 5 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 5 , 5 , 5 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 5 , 5 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 5 , 5 , 5 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 5 , 5 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 5 , 5 , 5 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 5 , 5 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 5 , 5 , 5 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ]
	];




