//booleans either return true or false.
var tired = false;
var awake = true;
var hungry = true;

console.log(tired);

//comparison operators

// == Equality
// === Strict Equality
// != Inequality
// !== Strict inequal
// <
// >
// <=
// >= greater than or equal to

console.log(2>1);

var test = 2 >= 3;
console.log(test);

console.log("Two is greater than one? "+(2>1));
//When checking for inequal, you always want to use === over the == in JS. Since === is super strict.
2==="2" //false
2=="2" //true
1+1===2 //true

//inequal
"Juan"!=="Carlos" //true
10!==10 //false

//overview, difference between=,==,===
var one = 1;
var stringOne = "1"
console.log("Two equal?"one===stringOne);

//Logical operatators
//operatators      meaning       true experssions
//&&    			and				4 > 0 && -2 < 0
//||				or 				4 > 0 || -2 > 0
//!					not				!(5<0)

console.log("&& operatators",2===2&&1==1);