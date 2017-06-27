//how switches work:
//the value is analyzed once
//it is then compared with a set of cases
//if a match is found, that code is runs

var marginOfSoxWin = 3;
var result;

switch(marginOfSuperBowlWin){
	case 3:
		result = "that would be a good game";
		break;
	case 7:
		result = "I like it. pretty close game";
		break;
	case 17:
		result = "At least were still beating the cubs";
		break;
	default:
	result = "I have no clue";
}

console.log("switch result:",result);//console.log("switch result: "+result);
