// if wrong add animation / take life
// select word on html
// show lives ux
//select difficulty
//add more words
//


var words = ["GAME","SNIPERS","GIZMODO"];
var s;
var item = document.getElementsByClassName('button');



window.onload = function() {

	var word ;
	var guesses = [];
	var letter ;
	var lives = 10;
	var count = 0;

 // Elements

  var canvasStage;
  var ctx; 
  var stage = document.getElementById("stage");
  var wordHolder = document.getElementById("wordHolder");
  var refresh = document.getElementById("reset");
  var outcome = document.getElementById("outcome");
  
function selectedWord(){
	var list = words.length;
	var random = Math.floor((Math.random() * list));

			return word = words[random];
}

function preview(){
	var wordList   = document.createElement("ul");
	wordList.setAttribute("id", "letters")

	for(var i = 0; i < word.length; i++) {
		var guess = document.createElement("li");
		guess.setAttribute("class", "guess");
		guess.innerHTML = "_";
		guesses.push(guess);

		wordHolder.appendChild(wordList);
		wordList.appendChild(guess);
	}
}

function check(){
	for (var i = 0; i < word.length; i++){
		if (word[i] == letter){
			guesses[i].innerHTML = letter;
			count ++
		} 
	}
	var j = word.indexOf(letter)
	if (j=== -1){
		lives -= 1;
		animate();
		results();
	} else {
	
		results();
	}
}

function keys(){
	for (var i=0; i<item.length; i++){
				item[i].disabled = false;
				item[i].onclick = function(){
				letter = this.value;
				this.disabled = true;
				check();
				}
			};
}

function numberOfLetters(){
	 return selectedWord().length
}

function results(){
	if(lives < 1){
		for (var i=0; i<item.length; i++){
				item[i].disabled = true;
		}
		outcome.innerHTML= "Game Over!"
	} else if (count == word.length){
		for (var i=0; i<item.length; i++){
				item[i].disabled = true;
		}
		outcome.innerHTML= "You Win!"
	}
}

//

function animate(){
	var drawLine = lives
	drawArray[drawLine]();
}

//Canvas

function canvas() {

  canvasStage = document.getElementById('hangCanvas');
  ctx = canvasStage.getContext('2d');

  ctx.beginPath();
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 2;

}

function head(){
canvasStage = document.getElementById('hangCanvas');
ctx = canvasStage.getContext('2d');

ctx.beginPath();
ctx.arc(100,70,10,0,Math.PI*2,true);
ctx.stroke();
}

function draw(moveToX, moveToY, lineToX, lineToY) {
  ctx.moveTo(moveToX, moveToY);
  ctx.lineTo(lineToX, lineToY);
  ctx.stroke();
}

function floor() {

  draw(10, 170, 160, 170);
}

function line1() {

  draw(30, 170, 30, 30);
}

function line2() {

  draw(30, 30, 100, 30);
}

function rope() {

  draw(100, 30, 100, 60);
}

function body(){
  draw(100, 80, 100, 120);
}

function rightArm(){
  draw(100, 90, 120, 100);
}

function leftArm(){
  draw(100, 90, 80, 100);
}

function rightLeg(){
  draw(100, 120, 90, 140);
}

function leftLeg(){
  draw(100, 120, 110, 140);
}


drawArray = [leftLeg, rightLeg, leftArm, rightArm, body, head, rope, line2, line1, floor];



function play(){
	lives = 10;
	count = 0;
	keys();
	canvas();
	selectedWord();
	preview();
	results();
}
play();

// Reset


refresh.addEventListener('click', function(){
	wordHolder.innerHTML = "";
	outcome.innerHTML = "";
	guesses = [];
	ctx.clearRect(0,0,200,200);
	play();
})




}




