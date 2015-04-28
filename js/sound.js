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
	// Before: map1		After: sMap1
	var soundCurrentMap = "s" + currentMap.charAt(0).toUpperCase() + currentMap.substr(1, currentMap.length);
	if(soundCurrentMap == "sMap1")
		loadSound(sMap1, true);
	else if(soundCurrentMap == "sMap2")
		loadSound(sMap2, true);
	else if(soundCurrentMap == "sMap3")
		loadSound(sMap3, true);
	else if(soundCurrentMap == "sMap4")
		loadSound(sMap4, true);
	else if(soundCurrentMap == "sMap5")
		loadSound(sMap5, true);
	else if(soundCurrentMap == "sMap6")
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