document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="pig.png" id="pig">');
var pig = document.getElementById('pig');
pig.style.position = 'fixed';


var mouseListener = function(event){mouseMoveFunc(event)};
document.addEventListener("mousemove", mouseListener);

function mouseMoveFunc(event){
	pig.style.left=event.clientX - 64 + "px" ;
	pig.style.top=event.clientY - 64 + "px" ;
	checkCollision();
}

function checkCollision(){
	console.log();
	if (
		Math.sqrt(Math.pow(pig.offsetLeft - orange.offsetLeft,2) +
			Math.pow(pig.offsetTop - orange.offsetTop,2)) <128

		)
	{
		spawnOrange();
		score++;
		setScore(score);
	}
}

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="orange.png" id="orange">');
var orange = document.getElementById('orange');
orange.style.position = 'fixed';



function spawnOrange(){
	orange.style.top=Math.random()*(920) + 'px';
	orange.style.left=Math.random()*(1920) + 'px';
}	

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<div id="scoreObj"></div>');
var scoreObj = document.getElementById('scoreObj');
scoreObj.style.textAlign = "center";
scoreObj.style.fontSize = 72+"pt";
var score=0;


function setScore(scoreToSet){
	scoreObj.innerHTML = "Очки: " + scoreToSet;
}
setScore(5);