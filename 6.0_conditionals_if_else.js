//If else
// else statements give the computer an alternative code to execute if the if condition is not met.
var stairsUp = true;
var stairsDown = true;
var stairsBroken = true;
var stairsStuck = true;
var stairsNumber = 24;

if (stairsUp===true){
	console.log("going up");
}else{
	console.log("going down");
}


//If else can describe if the stairs are broken or not

if (stairsBroken===true){
	console.log("the stairs are broken");
}else{
	console.log("the stairs are working");
}

//combining var types for conditionals
if (stairsStuck && stairsNumber===24){
	console.log("today is NOT our lucky day");
}else{
	console.log("no worries");
}
