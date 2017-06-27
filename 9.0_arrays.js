//Arrays are a collection of items
//we define them using square brackets

var rainbowColors=["red","orange","blue","green"];
var raceWinners=[33,72,64];

console.log(rainbowColors);

//arrays have indexes

var countries=["USA","Spain","Mexico"];
//indexes		0		1		2

console.log(countries[2]);



//iterating over arrays

//Becomes easier with practice

var movies=["The Departed","Star Wars","Fight Club"];

for(var i=0;i<movies.length;i++){
	console.log("The index is:",i);
	console.log(movies[i]);
}

var games=["none","Ratchet and Clank","Crash","Sly Copper","Jak and Daxter"];

for (var i=1;i<games.length;i++) {
	console.log("game accessed:",i);
	console.log(games[i]);
}