var chess = getElem('.chess');
var ctx = chess.getContext('2d');
var logo = new Image();
var chessBoard = [];
var isWhite = true;
var isOver = false;
var prompt = getElem('#prompt');
//赢法数组
var wins = [];
var count = 0;
for(var i = 0;i<15;i++){
	wins[i]=[];
	for(var j=0;j<15;j++){
		wins[i][j]=[]
	}
}

for(var i =0;i<15;i++){
	for(var j =0;j<11;j++){
		for(var k=0;k<5;k++){
			wins[i][j+k][count] = true;
		}
		count++;
	}
}
for(var i =0;i<15;i++){
	for(var j =0;j<11;j++){
		for(var k=0;k<5;k++){
			wins[j+k][i][count] = true;
		}
		count++;
	}
}
for(var i =0;i<11;i++){
	for(var j =0;j<11;j++){
		for(var k=0;k<5;k++){
			wins[i+k][j+k][count] = true;
		}
		count++;
	}
}
for(var i =0;i<11;i++){
	for(var j =14;j>3;j--){
		for(var k=0;k<5;k++){
			wins[i+k][j-k][count] = true;
		}
		count++;
	}
}
//赢法统计数组
var whiteWin = [];
var blackWin = [];
for(var i=0;i<count;i++){
	whiteWin[i]=0;
	blackWin[i]=0;
}

//画出棋盘
logo.src = "img/logo.png";
logo.onload = function(){
	ctx.drawImage(logo,80,150,296,128);
	drawChessBoard();
}
//棋盘是否已经有棋数组
for(var i = 0;i<15;i++){
	chessBoard[i]=[];
	for(var j = 0;j<15;j++){
		chessBoard[i][j]=0;
	}
}
//画棋盘函数
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
//下棋函数
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
//鼠标点击下棋函数
chess.onclick = function(e){
	if(isOver){
		return;
	}
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
	
	if(isWhite){
		prompt.innerText = "白方"
	}else{
		prompt.innerText = "黑方"
	}
	for(var k=0;k<count;k++){
		if(wins[i][j][k]){
			if(isWhite){
				whiteWin[k]++;
				blackWin[k]=6;
			}else{
				whiteWin[k]=6;
				blackWin[k]++;
			}
			
			if(whiteWin[k]==5){
				setTimeout(function(){
					window.alert("白方赢了!");
					isOver = true;
				},20)
			}else if(blackWin[k]==5){
				setTimeout(function(){
					window.alert("黑方赢了!");
					isOver = true;
				},20)
			}
		}
	}
	isWhite = !isWhite;
}







