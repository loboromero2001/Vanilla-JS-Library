for(var i=1;i<50;i++){
	console.log(i);
}

for(var i=0,i<=100;i+=5){
	console.log(i);
}

for(var i=3;i<40;i+=7){
	console.log(i);
}

//break statement
//breaks are used to prematurely exit a loop

for(var i=0,i<20;i++){
	console.log("testing:",i);
	if (i===20) {
		console.log("found 20!");
		break;
	}
}
//for in loops
//do while loops


//loops are used to do things mulitple things easily
//the while loop tells JS to repeat statements until a condition is false.

//example
var score = 0;

while(score<10){
	score++;//score= score+1
	console.log("score is:",score);
}

//Another example
var age = 0;
while(age<100){
	age+=10;
	console.log("our age is:",age);
}
if(age===100){
	console.log("I am a century old");
}

//challenge
//write a while that prints 10-100 by 10s
//at 50, print "halfway there"

var ct = 0;
while(ct<100){
	ct+=10;
	if (ct===50){
		console.log("halfway there!")
	}
	console.log(ct);
}
