var turn=0;
var posR=0;
var posW=0;
var player1=0;

const n = 6;
function initBoard(){
	var table = document.getElementById('mainTable');
	var tr = document.createElement('tr');
	
	for (var i = 8; i >=1; i--) {
	  var tr = document.createElement('tr');
	  for (var j = 9; j >=0; j--) {
	  var td1 = document.createElement('td');
	  var num=i*10-j;
	  td1.innerHTML="<div id='position"+num+"'><img  src='images/"+num+".png'  height=70 width=70></div>";
	  
	  tr.appendChild(td1);
	  
	  }
	  table.appendChild(tr);
	}
}

function changePositionR(diceValue){
	document.getElementById("position"+diceValue).innerHTML="<img  src='imagesRed/"+diceValue+".png'  height=70 width=70></div>";
	
}


function changePositionW(diceValue){
    document.getElementById("position"+diceValue).innerHTML="<img  src='imagesWhite/"+diceValue+".png'  height=70 width=70></div>";	
}


function changePositionB(diceValue){
	document.getElementById("position"+diceValue).innerHTML="<img  src='imagesBoth/"+diceValue+".png'  height=70 width=70></div>";
	
}

function playerTurn(){
	 if(turn==0){
		player1=1;
		turn=1;   
	}else{
		player1=0;
        turn=0;
	}	
	return player1;
}

function MovePlayer(){
	if(playerTurn()==1){
		posR=posR+ roll();
		changePositionR(posR);
	}else {
		posW=posW+roll();
		changePositionW(posW);
	}
	
}

function Play(){
	MovePlayer();
}
	

function roll(){

    const dice = document.querySelector("img");
    dice.classList.add("shake");
    setTimeout(() => {
        dice.classList.remove("shake");
        const diceValue = Math.ceil(Math.random()* 6);
        document.querySelector("#dice-id").setAttribute("src", `img/dice${diceValue}.png`);
   
    }, 1000); 
	return diceValue;
}



	

		
		
		
		
	

