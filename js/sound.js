console.log("Lib 'Sound' loaded");

function toggleSound(){
	sound = !sound;
	templateSetSound(sound);

	if(sound)
		playMapSound();
	else
		stopSounds();
}

function loadSound(nameVarSound, repeat){
	if (typeof repeat == "undefined")
		repeat = false;

	if(sound){
		nameVarSound.play();
		nameVarSound.loop = repeat;
	}else
		nameVarSound.pause();
}

function playMapSound(){
	// Convert nameMap to nameSoundMap
	// Before: map_1	After: sMap_1
	var soundCurrentMap = "s" + currentMap.charAt(0).toUpperCase() + currentMap.substr(1, currentMap.length);
	if(soundCurrentMap == "sMap_1")
		loadSound(sMap1, true);
	else if(soundCurrentMap == "sMap_2")
		loadSound(sMap2, true);
	else if(soundCurrentMap == "sMap_3")
		loadSound(sMap3, true);
	else if(soundCurrentMap == "sMap_4")
		loadSound(sMap4, true);
	else if(soundCurrentMap == "sMap_5")
		loadSound(sMap5, true);
	else if(soundCurrentMap == "sMap_6")
		loadSound(sMap6, true);
}

function stopSounds(){
	sWeapon1.pause();
	sWeapon2.pause();
	sGetLife.pause();
	sLoseLife.pause();
	sRebounds.pause();
	sContinue.pause();
	sNoMunition.pause();
	sPortalInput.pause();
	sPortalOutput.pause();
	sGameOver.pause();
	sExplosion.pause();
	sHome.pause();
	sMap1.pause();
	sMap2.pause();
	sMap3.pause();
	sMap4.pause();
	sMap5.pause();
	sMap6.pause();
}