//##### TIMER, INSPECTOR, IMPORT TIME #####

function inspector(){
	ispt++;
	if (ispt == 8) {
		document.getElementById("eight_sec").play();
	};
	if (ispt == 12) {
		document.getElementById("twelve_sec").play();
	};
	if (ispt < 15){
		document.getElementById("ispt_display").innerHTML = ispt;
	};
	if (ispt >= 15 && ispt < 17){
		document.getElementById("ispt_display").innerHTML = "+2";
	};
	if (ispt >= 17){
		document.getElementById("ispt_display").innerHTML = "DNF";
	};	
};

function timer(){

	curTime = new Date();
	var time = curTime.getTime() - startTime.getTime();
	time /= 1000;
	var roundTime = parseFloat(time); time = Math.round(roundTime * 100)/100;

	sec = time % 60;
	mnt = Math.floor(time / 60); 

	document.getElementById("scnd").innerHTML = sec.toFixed(2);

	if (mnt > 0) {
		document.getElementById("mnt").style.display = "inline-block";
		document.getElementById("two_dot").style.display = "inline-block";
		document.getElementById("mnt").innerHTML = mnt;
	}
};

function importTime() {
	var enterVal = document.getElementById("import_plhd").value;

	if (enterVal != "") {
		var enterTimeVal = parseFloat(enterVal);

		sec = Math.floor((enterTimeVal % 60) * 100) / 100;
		mnt = Math.floor(enterTimeVal / 60);

		addSolve();
		document.getElementById("import_plhd").value = "";
		generateScram();
	};
};