//If statements are used to make the computer make a choice about which code to execute.
var isOff = true;
var isCold = true;
//shorthand way of checking for true
if(isOff){
	console.log("the light is off");
}
//longhand way
if(isOff===true){
	console.log("the light is still off")
}
//conditional operators
//And -> &&
//or -> ||
//not -> !

if(isOff && isCold){
	console.log("the light is off and it is cold");
}

if(isoff || isoff){
	console.log("I don't know what to say");
}

if(!isOff){
	console.log("the light is on");
}
