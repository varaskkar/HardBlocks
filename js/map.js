//								Width 			Height
// -------------------------------------------------------------
// Canvas 						560				360
// _SizeBlock = 20				20				20
// Blocks fit					560/20 > 28 	360/20 > 18

// Blocks fit on screen 		28 * 18 = 504

// Maps
var currentMap = "";
var mapList = [],
	map1    = [],
	map2    = [],
	map3    = [],
	map4    = [],
	map5    = [],
	map6    = [],
	map7    = [];

// Elements
var player, life;
var blockBrown     = [],
	blockRed       = [],
	blockWhiteVert = [],
	blockWhiteHor  = [],
	home           = [],
	portalInput    = [],
	portalOutput   = [],
	enemy          = [];

var portalInputCrossed = false, portalOutputCrossed = false;

// Backup for when return to previous map
var blockBrownCopyMap1 = [],
	blockBrownCopyMap2 = [];

function createMap(){
	mapList.push(new Map("map1", map1, sMap1, "#011224", _SizeBlock));
	mapList.push(new Map("map2", map2, sMap2, "#010F1D", _SizeBlock));
	mapList.push(new Map("map3", map3, sMap3, "#010B16", _SizeBlock));
	mapList.push(new Map("map4", map4, sMap4, "#08212F", _SizeBlock));
	mapList.push(new Map("map5", map5, sMap5, "#0F2F40", _SizeBlock));
	mapList.push(new Map("map6", map6, sMap6, "#011224", _SizeBlock));

	player = new Player(null,null,16,16);
}

function loadMap(map, posX, posY, rotation){
	clearMap();

	var k = parseInt(map.charAt(map.length - 1)) - 1;			// Get the index of map received  		"map1" > 1 > 0

	for(var i = 0; i < mapList[k].map.length; i++) {			// i = row   j = column
		for(var j = 0; j < mapList[k].map[i].length; j++) {
			if(mapList[k].map[i][j] == 5)
				blockBrown.push(new Element(j*mapList[k].size,i*mapList[k].size,mapList[k].size,mapList[k].size, _LifeBlock));
			else if(mapList[k].map[i][j] == 4)
				blockRed.push(new Element(j*mapList[k].size,i*mapList[k].size,mapList[k].size,mapList[k].size));
			else if(mapList[k].map[i][j] == 3)
				blockWhiteVert.push(new Element(j*mapList[k].size,i*mapList[k].size,mapList[k].size,mapList[k].size));
			else if(mapList[k].map[i][j] == 2)
				blockWhiteHor.push(new Element(j*mapList[k].size,i*mapList[k].size,mapList[k].size,mapList[k].size));
			else if(mapList[k].map[i][j] == 0)
				life = new Element(j*mapList[k].size,i*mapList[k].size,mapList[k].size,mapList[k].size);
			else if(mapList[k].map[i][j] == 'P1')
				portalInput.push(new Element(j*mapList[k].size,i*mapList[k].size,mapList[k].size,mapList[k].size));
			else if(mapList[k].map[i][j] == 'P2')
				portalOutput.push(new Element(j*mapList[k].size,i*mapList[k].size,mapList[k].size,mapList[k].size));
			else if(mapList[k].map[i][j] == 'H')
				home.push(new Element(j*mapList[k].size,i*mapList[k].size,mapList[k].size,mapList[k].size));
			else if(mapList[k].map[i][j] == 'E')
				enemy.push(new Enemy(j*mapList[k].size,i*mapList[k].size,mapList[k].size,mapList[k].size, _LifeEnemy));
		}
	}
	templateSetBackgroundColor(mapList[k].colorBackground);
	loadSound(mapList[k].sound, true);
	currentMap = map;

	if(typeof posX != "undefined" && typeof posY != "undefined" && typeof rotation != "undefined")
		setPositionPlayer(posX, posY, rotation);
}
function clearMap(){
	blockBrown.splice(0, blockBrown.length);
	blockRed.splice(0, blockRed.length);
	blockWhiteVert.splice(0, blockWhiteVert.length);
	blockWhiteHor.splice(0, blockWhiteHor.length);
	bullets1.splice(0, bullets1.length);
	bullets2.splice(0, bullets2.length);
	bulletsTest.splice(0, bulletsTest.length);
	portalInput.splice(0, portalInput.length);
	portalOutput.splice(0, portalOutput.length);
	home.splice(0, home.length);
	enemy.splice(0, enemy.length);
	stopSounds();
}
function makeBackupMap(nameMap){
	if(nameMap == "map1"){
		blockBrownCopyMap1.splice(0, blockBrownCopyMap1.length);
		for(i in blockBrown)
			blockBrownCopyMap1[i] = blockBrown[i];
	}else if(nameMap == "map2"){
		blockBrownCopyMap2.splice(0, blockBrownCopyMap2.length);
		for(i in blockBrown)
			blockBrownCopyMap2[i] = blockBrown[i];
	}
}
function loadBackupMap(nameMap){
	if(nameMap == "map1"){
		if(blockBrownCopyMap1.length != 0){
			// delete the current blocks
			blockBrown.splice(0, blockBrown.length);
			// Put the previous blocks on the current blocks
			for(i in blockBrownCopyMap1)
				blockBrown[i] = blockBrownCopyMap1[i];
		}
	}else if(nameMap == "map2"){
		if(blockBrownCopyMap2.length != 0){
			blockBrown.splice(0, blockBrown.length);
			for(i in blockBrownCopyMap2)
				blockBrown[i] = blockBrownCopyMap2[i];
		}
	}
}
function setPositionPlayer(posX, posY, rotation){
	player.x        = posX;
	player.y        = posY;
	player.rotation = rotation;
}

map1 = [
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 5 , 5 , 5 , 5 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 5 , 5 , 5 ,   ,   , 5 , 5 , 5 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 5 , 5 ,   ,   ,   ,   , 5 , 5 ,   ,   ,   ,'E',   ,   ,   ,   ,'P1','P1'],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 5 , 5 , 5 ,   ,   , 5 , 5 , 5 ,   ,   ,   ,   ,   ,   ,   ,   ,'P1','P1'],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 5 , 5 , 5 , 5 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ],
	[   ,   ,   ,   ,   , 2 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 2 ,   ,   ,   ,   ,   ],
	[ 4 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 4 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,'E',   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 3 , 3 , 3 , 3 , 4 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 4 , 3 , 3 , 3 , 3 ],
	[ 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[ 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ,   ,   ,   ,   ,   ,   ,   ,   , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[ 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ,   ,'H','H','H','H',   , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[ 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ,   ,'H','H','H','H',   , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ]
	];

map2 = [
	[ 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[ 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[ 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[ 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[ 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[ 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[ 5 ,   ,   , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[ 5 ,   ,   , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[ 2 ,   ,   , 3 , 3 , 3 ,   ,   , 3 , 3 , 3 ,   , 3 , 3 , 3 , 3 ,   , 3 , 3 , 3 ,   ,   , 3 , 3 , 3 ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,'P1','P1',   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,'P1','P1',   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,   ,   , 3 , 3 , 3 ,   ,   , 3 , 3 , 3 ,   ,   ,   ,   ,   ,   , 3 , 3 , 3 ,   ,   , 3 , 3 , 3 ,   ,   , 2 ],
	[ 5 ,   ,   , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ,   ,   , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[ 5 ,   ,   , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ,   ,   ,   ,   , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[ 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ,   ,   ,   ,   , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[ 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ,   ,   ,   ,   ,   ,   , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ]
	];

map3 = [
	[ 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 ],
	[ 2 ,   ,   ,   ,   ,   ,   , 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ,   ,   ,   ,   ,   ,'P2','P2', 2 ],
	[ 2 ,   ,   ,   ,   ,   ,   , 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ,   ,   ,   ,   ,   ,'P2','P2', 2 ],
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
	[ 2 ,'P1','P1',   ,   ,   ,   ,   ,   ,   ,   , 3 , 2 , 3 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[ 2 ,'P1','P1',   ,   ,   ,   ,   ,   ,   ,   , 2 , 2 , 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
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

map6 = [
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 5 , 5 , 5 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 5 , 5 , 5 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 5 , 5 , 5 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 5 , 5 , 5 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 5 , 5 , 5 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 5 , 5 , 5 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 , 5 ],
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

map7 = [
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ,   ,   ,   , 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ,   ,   ,   , 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ,   ,   ,   , 2 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 ,   ,   ,   , 2 ],
	[   ,   ,   ,   ,   ,   ,   ,   ,   ,   ,   , 2 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 , 3 ],
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

map8 = [
	['H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H'],
	['H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H'],
	['H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H'],
	['H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H'],
	['H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H'],
	['H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H'],
	['H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H'],
	['H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H'],
	['H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H'],
	['H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H'],
	['H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H'],
	['H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H'],
	['H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H'],
	['H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H'],
	['H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H'],
	['H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H'],
	['H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H'],
	['H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H']
	];




