var turn=0;
var posR=0;
var posW=0;
var player1=1;
let diceValue=0;
let dis=0;
let redfriend=0;
let whitefriend=0;
let winner=" ";
let snakePositions   =[13,20,28,44,58,59,65,72,78]


let snakeNewPositions=[11,10,7,34,48,39,25,52,69]
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

function snakeChangePositions(pos){
	if(pos==13){
		return 11;
	}else if(pos==20){
		return 10;
	}else if(pos==28){
		return 7;
	}else if(pos==44){
		return 34;
	}else if(pos==58){
		return 48;
	}else if(pos==59){
		return 39;
	}else if(pos==65){
		return 25;
	}else if(pos==72){
		return 52;
	}else if(pos==78){
		return 69;
	}else{
		return -1;
}
}

function ladderChangePositions(pos){
	if(pos==5){
		return 33;
    }else if(pos==16){
		return 36;
	}else if(pos==21){
		return 61;
	}else if(pos==37){
		return 56;
	}else if(pos==42){
		return 53;
	}else if(pos==73){
		return 76;
	}else if(pos==67){
		return 77;
	}else if(pos==60){
		return 80;
	}else{
		return -1;
    }
}
	

function changeSnake(type , pos){
	let newPos=snakeChangePositions(pos);
	
	if(newPos==-1){
		return false;
	}
	if(type=='White'){
		posW=newPos;
	}else{
		posR=newPos;
	}
	
	document.getElementById("position"+(newPos)).innerHTML="<img  src='images"+type+"/"+(newPos)+".png'  height=70 width=70></div>";
  console.log( "new pos :" + newPos);
  document.getElementById("position"+(pos)).innerHTML="<img  src='images/"+(pos)+".png'  height=70 width=70></div>";
	if(pos!=11){
		document.getElementById("position"+(pos- diceValue)).innerHTML="<img  src='images/"+(pos - diceValue)+".png'  height=70 width=70></div>";
	}
		
	console.log( "new pos2 :" + pos);
	return true;
	
}
function changeLadder(type , pos){
	let newPosition=ladderChangePositions(pos);
	
	if(newPosition==-1){
		return false;
	}
	if(type=='White'){
		posW=newPosition;
	}else{
		posR=newPosition;
	}
	
	document.getElementById("position"+(newPosition)).innerHTML="<img  src='images"+type+"/"+(newPosition)+".png'  height=70 width=70></div>";
  console.log( "laadder for 5  :" + newPosition);
  document.getElementById("position"+(pos)).innerHTML="<img  src='images/"+(pos)+".png'  height=70 width=70></div>";
	    if((pos-diceValue)>0){
		document.getElementById("position"+(pos- diceValue)).innerHTML="<img  src='images/"+(pos - diceValue)+".png'  height=70 width=70></div>";
		}
	console.log( "deleted one :" + pos);
	return true;
	
}

	
function changePositionR(){
	dis=dis+1;
	console.log( "new pos3 :" + posR);
	if(posR==29 || posR==46){
		redfriend=1;
	}
	
	
	if(redfriend==0){
		if (changeSnake('Red', posR)==true){
		return;
	}
	}
	if(changeLadder('Red',posR)==true){
		return;
	}
	if(posW==posR){
		
		changePositionB();
		if(dis>1){
			document.getElementById("position"+(posR-diceValue)).innerHTML="<img  src='images/"+(posR-diceValue)+".png'  height=70 width=70></div>";
		}  
		return;
	}	
	
    if(posW==(posR-diceValue) && posW!=0  ){
	
	document.getElementById("position"+(posR)).innerHTML="<img  src='imagesRed/"+(posR)+".png'  height=70 width=70></div>";
	document.getElementById("position"+(posW)).innerHTML="<img  src='imagesWhite/"+(posW)+".png'  height=70 widfcth=70></div>";
	
	return;
	}	


	document.getElementById("position"+posR).innerHTML="<img  src='imagesRed/"+posR+".png'  height=70 width=70></div>";
	
	if(dis>1){
	document.getElementById("position"+(posR-diceValue)).innerHTML="<img  src='images/"+(posR-diceValue)+".png'  height=70 width=70></div>";
	 
	}	
	console.log('vgike red'+ diceValue);
}


function changePositionW(){
	if(posW==29 || posW==46){
		whitefriend=1;
	}
	 if(whitefriend==0){
	 if (changeSnake('White', posW)==true){
		return;
	}
	 }
	 if(changeLadder('White',posW)==true){
		return;
	}
	if(posW==posR){
		
		changePositionB();
		if(dis>1){
			document.getElementById("position"+(posW-diceValue)).innerHTML="<img  src='images/"+(posW-diceValue)+".png'  height=70 width=70></div>";
		}  
		return;
	}	
	
    if(posR==(posW-diceValue)){
		
	document.getElementById("position"+(posW)).innerHTML="<img  src='imagesWhite/"+(posW)+".png'  height=70 width=70></div>";
	document.getElementById("position"+(posR)).innerHTML="<img  src='imagesRed/"+(posR)+".png'  height=70 width=70></div>";
	
	return;
	}	
	
    document.getElementById("position"+posW).innerHTML="<img  src='imagesWhite/"+posW+".png'  height=70 width=70></div>";	
		
	if(dis>1){
	document.getElementById("position"+(posW-diceValue)).innerHTML="<img  src='images/"+(posW-diceValue)+".png'  height=70 width=70></div>";
	}

}


function changePositionB(){
	
	document.getElementById("position"+posR).innerHTML="<img  src='imagesBoth/"+posR+".png'  height=70 width=70></div>";
	
}


function printInfo(){
	let temp=" ";
	let tmp="";
	if(player1==1){
		temp='white';
	}else{
		temp='red';
	}

	tmp=won();
	document.getElementById("infobox").innerHTML= temp + " " +diceValue+ " "+ tmp;
}

function won(){
	
	if((posR==80) && (posW<80)){
	winner="red won";

    }else if((posW==80) && (posR<80)){
    winner="white won";

	}
	else if((posW==80) && (posR==80)){
		winner="Both white and red won";
	
	}else{
		winner=" "  ;
	}
	
	return winner;
}

function MovePlayer(){
	
	if(player1==1){
	    if(diceValue===6){
		
		posR=posR+ diceValue;
		changePositionR();
		printInfo();
		console.log("mpike sto ksana 6 o red");
		 return ;
		}
		posR=posR+ diceValue;
		changePositionR();
		player1=0;
	}else {
		if(diceValue===6){
			posW=posW+ diceValue;
		changePositionW();
		printInfo();
		console.log("mpike sto ksana 6 o white");
		 return ;
		}
		posW=posW+diceValue;
		changePositionW();
		player1=1;
	}
	printInfo();
	
}




function roll(){
    
    const dice = document.querySelector("img");
    diceValue = Math.ceil(Math.random()* 6);
    dice.classList.add("shake");
	
    setTimeout(() => {
        
       
        document.querySelector("#dice-id").setAttribute("src", `img/dice${diceValue}.png`);
        	
			
		
    }, 1000); 
  MovePlayer();
}



	

		
		
		
		
	

