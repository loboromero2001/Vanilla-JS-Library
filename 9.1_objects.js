var exampleObject = {};

var billClinton ={
	//properties
	name: "Bill Clinton",
	age: 73,
	vocation: "Former President of the USA",
	isRetired:true,
	//methods
	greeting :function(){
		console.log("Hello, I am " +this.name+ ". "+this.vocation);
	},
	hisAge: function (){
		console.log("Hello, my age is: "+this.age+ " years old!");
	},
	extendedGreeting: function(){
		this.greeting();
		this.hisAge();
	}
};
console.log("__________________________________________");
johnQualls.extendedGreeting();
console.log(johnQualls.name);
console.log(johnQualls.age);

console.log("__________________________________________");

var animal = {
	type   			: "polar bear",
	habitat			: "artic",
	weight 			: 500,
	commonInIndiana : false
};

console.log(animal.weight);
console.log(animal["weight"]);

var jakeWidner = {
	Hobby		: "NRA",
	House		:"SNU",
	residence	: "suburbs",
	age			: 21
};

var demolitionMan = {
	Type  : "action/sci-fi",
	Year  : 1994,
	Stars : "Sylvester Stallone, Wesley Snippes",
	Rating: "R"
};

var blackOps = {
	Type : "FPS",
	Year: 2010,
	isFun: true,
	bestMap: "Nuke Town"
};

jakeWidner.age = 40;
console.log(jakeWidner.age);
animal.color = "red";
console.log(animal.color);
delete animal.color;
console.log(animal.color);

//properties can be more than just strings,booleans, and numbers
//Can inclode arrays and other objects

animal.moviesAboutMe = ["Lion King","Happy Feet", "Marley & Me"];

console.log(animal.moviesAboutMe[1]);

console.log(Object.keys(animal));

//Inheritance
//Long hand way
var car = {
	make: "",
	model: "",
	year: 0,
	constructor : function (make,model,year){
		this.make = make;
		this.model = model;
		this.year = year;
	}
};

var myCar = Object.create(car);
myCar.constructor("Acura","Integra",1998);
console.log(myCar.make);

//shorthand way

var book = {
	title: "",
	yearPublished: 0,
	numPages: 0,
	constructor:function(title,yearPublished,numPages){
		this.title = title;
		this.yearPublished = yearPublished;
		this.numPages = numPages;
		return this;
	}
};

var myFavBook = new book.constructor("Steelheart",2015,300);
console.log(myFavBook.title);