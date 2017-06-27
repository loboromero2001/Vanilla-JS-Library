//functions: input things and output things
	//executes actions consisely
	//Can be used to re-use code
	//makes the code cleaner to read

function hello() {
	console.log("hello world");
}
hello();

function printOneNumber() {
	console.log(1)
}
printOneNumber();

function section() {
	console.log("-------------------------------------");
}

section();

//scope with vars
//Think of it like a sniper scope

var x = 8;

function add() {//it processes what's in the function 1st, then rest of the program.
	var x =2;
	var y = 7;
	console.log(x+y);
}
add();

function subtract() {//scopes can't look into other scopes
	var x=4;
	var y=1;
	console.log(x-y);
}

add();
subtract();

//parameters/arguments

	//parameters are what the names in the fucntion define
	//arguments are what is passed to the function

function numberEntered(x) {//x is a parameter
	console.log("number entered:",x);
	//x and 7 share the same value
}
numberEntered(7);//7 is the argument

//can have as many parameters as you want

function addTwoNums(x,y) {
	console.log(x+y);
}
addTwoNums(4,7);

section();

//return keyword
//when JS hits the return keyword, it will stop executing the function, and return the argument.

function mood() {
 	return "I'm feeling bad, like Michael Jackson.";
 } 

console.log(mood());//mood becomes the argument for console.log()

function multiply(x,y) {
	return x*y;
}
console.log(multiply(12,12));


//write a function that takes two arguments, a 1st and last name
//and combines them to return first name and last name

function printNames(firstName,lastName) {
	return firstName+lastName;
}

console.log(printNames("Emiliano ","Zapata"));
console.log("EL es el mas chingon, wey");

section();

//Loops(small preview)

for (var i = 0;i<5,i++){
	section();
}