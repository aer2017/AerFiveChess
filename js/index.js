var chess = getElem('.chess');
var ctx = chess.getContext('2d');
var logo = new Image();
var chessBoard = [];
var isWhite = true;
var prompt = getElem('#prompt');
logo.src = "img/logo.png";
logo.onload = function(){
	ctx.drawImage(logo,80,150,296,128);
	drawChessBoard();
}
for(var i = 0;i<15;i++){
	chessBoard[i]=[];
	for(var j = 0;j<15;j++){
		chessBoard[i][j]=0;
	}
}
ctx.strokeStyle = "#bfbfbf";
var drawChessBoard = function(){
for(var i = 0;i<15;i++){
	ctx.beginPath();
	ctx.moveTo(15 + i*30,15);
	ctx.lineTo(15 + i*30,435);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(15,15 + i*30);
	ctx.lineTo(435,15 + i*30);
	ctx.stroke();
}
}

var oneStep = function(i,j,isWhite){
	ctx.beginPath();
	ctx.arc(15 + i*30,15 + j*30,13,0,2*Math.PI);
	ctx.closePath();
	var gradient = ctx.createRadialGradient(15 + i*30+2,15 + j*30-2,13,15 + i*30,15 + j*30,0);
	if(isWhite){
		gradient.addColorStop(0,"#d1d1d1")
		gradient.addColorStop(1,"#f9f9f9")
	}else{
		gradient.addColorStop(0,"#0a0a0a")
		gradient.addColorStop(1,"#636766")	
	}
	ctx.fillStyle = gradient;
	ctx.fill();
}

chess.onclick = function(e){
	var x = e.offsetX;
	var y = e.offsetY;
	var i = Math.floor(x/30);
	var j = Math.floor(y/30);
	if(chessBoard[i][j]==0){
		oneStep(i,j,isWhite);
		if(isWhite){
			chessBoard[i][j]=1;
		}else{
			chessBoard[i][j]=2;
		}
	}else{
		return;
	}
	
	isWhite = !isWhite;
	if(isWhite){
		prompt.innerText = "白方"
	}else{
		prompt.innerText = "黑方"
	}
}
