//Strings are a collection of characters
//Strings must go in either "" or ''

console.log("python is best");

var international = "stuffs";
console.log(international);

//You can join vars with srings using +
var birthCity = "Cicero";
var birthState = "Illinois";
console.log(birthCity+ "," +birthState);


var ageInAugust = 40;
var highSchool = "Rauner";
var gradHS = "2014";

console.log(highSchool+ ","+ gradHS);
console.log("My age in August:",ageInAugust);
console.log("I graduated from "+highSchool+" in "+gradHS+".");

//String Methods(Functions)
console.log(highSchool.length);
console.log(highSchool.toUpperCase());
console.log(highSchool.toLowerCase());
console.log(highSchool.split(" "));
console.log(highSchool.slice(2));
//sliced off everything before index 2.