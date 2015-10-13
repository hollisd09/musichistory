// // The following are "if" statements

// var x = prompt("What does a dog wag?");
// if (x === "tail") {
// 	alert("Correct!")
// }
// console.log("x");

// // var x = prompt("Is your favorite color red?");
// // if (x === "yes") {
// // 	alert("WHOA. Same here, buddy");
// // } else {
// // 	alert("Welp. You suck.");
// // }



// // The following are comparison operators

// // ===
// // !==
// // >
// // <
// // >=
// // <=

// // if (yourTicketNumber !== 43859) {
// // 	alert("Better luck next time");
// // }
// // console.log(yourTicketNumber);


// // The following are if...else and else if statements

// if (x === "tail") {
// 	alert("Correct!");
// } else {
// 	alert("Wrong answer");
// }



// The following test sets of conditions

// if (weight > 300 && time < 6) {
// 	alert("Come to our tryout!");
// } else {
// 	alert("Come to our cookout!"):
// }

// var colors = ["Blue", "Red", "Orange", "Purple", "NavajoWhite", "Aquamarine", "Goldenrod", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
// var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

// var hohohoElement = document.getElementById("reindeer");

// var output = " ";

// for (var i = 0; i < reindeer.length; i++) {
// 	var currentReindeer = reindeer[i];
// 	var currentColor = colors[i];

// 	output = output + "<div>";
// 	output = output + currentColor + " " + currentReindeer;
// 	output = output + "</div>";
// }

// console.log(output);
// hohohoElement.innerHTML = output;


// Switch is a fancy if-then-else
// var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "voltron"];
// var criteria = 1;

// // for (var i = 0; i < planets.length; i++) {
// 	var planet = planets[i];

// switch (planet) {
// 	case "mercury";
// 	case "venus";
// 	case "earth";
// 	case "mars";
// 		cosole.log("rocky planet");
// 		break;
// 	case "jupiter";
// 	case "saturn";
// 	case "uranus";
// 	case "neptune";
// 		console.log("gas planet");
// 		break;
// 	default:
// 		console.log("It is a weird planet");
// 	}
// }




// var criteria = 20;

// 	switch (criteria) {
// 		case 10:
// 		case 20:
// 		case 30:
// 		case 40:
// 			console.log("less than 50");
// 			break;
// 		case 50;
// 		case 60;
// 		case 70;
// 		case 80;
// 			console.log("greater than 50");
// 			break;
// 		default:
// 			console.log("Out of bounds");
// 			break;
// 	}




// var scores =[82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
// var criteria = 1;

// var gradesElement = document.getElementById("grades");
// var output = "";

// for (var i = 0; i < scores.length; i++) {
// 	var score = scores[i];

// 	switch (score) {
// 		case 55:
// 		case 58:
// 			console.log("You scored an F");
// 			break;
// 		case 64:
// 		case 69:
// 			console.log("You scored a D");
// 			break;
// 		case 71:
// 		case 72:
// 		case 78:
// 			console.log("You scored a C");
// 			break;
// 		case 82:
// 		case 84:
// 		case 87:
// 			console.log("You scored a B");
// 			break;
// 		case 95:
// 		case 98:
// 			console.log("You scored an A");
// 			break;
// 		default:
// 			console.log("Something here");
// 			break;
// 	}
	
// 	output = output + "<div>" + score + "</div>";

// }

// console.log(score);	

// gradesElement.innerHTML = score;


// // Array.prototype.max = function() {
// // 	return Math.max.apply(null, this);
// // };

// // Array.prototype.min = function() {
// // 	return Math.min.apply(null, this);
// // };

// // alert("Max value is: "+scores.max()+"\nMin value is: " + scores.min());

// var currentScore, 
// 	highestScore = 0,
// 	lowestScore = 101,
// 	gradeA = [],
// 	gradeB = [],
// 	gradeC = [],
// 	gradeD = [],
// 	gradeF = [];

// for (var i = 0; i < scores.length; i++) {
// 	currentScore = scores[i];

// 	if (currentScore > highestScore) {
// 		highestScore = currentScore;
// 	}

// 	if (currentScore < lowestScore) {
// 		lowestScore = currentScore;
// 	}
// switch (true) {
// 	case (currentScore < 61):
// 		gradeF.push(currentScore);
// 		break;
// 	case (currentScore > 60 && currentScore < 71):
// 		gradeD.push(currentScore);
// 		break;
// 	case (currentScore > 70 && currentScore < 81):
// 		gradeC.push(currentScore);
// 		break;
// 	case (currentScore > 80 && currentScore < 91):
// 		gradeB.push(currentScore);
// 		break;
// 	case (currentScore > 90):
// 		gradeA.push(currentScore);
// 		break
// 	}
// }

// console.log(lowestScore);
// console.log(highestScore);




// var i = 0;
// var value = scores[0];
// for (var i = 1; i < scores.length; i++) {
// 	if (scores[i] < 60) {
// 		value = scores[i];
// 		index = i;
// 	}
// }

// console.log(scores[i]);




















