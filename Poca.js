var gameover = false;
var smith = false;
var alive = false;

while (gameover === false && alive === false) {
	var user = prompt("You are enjoying a lovely day outside in your canoe when you come to a fork in the river bend. It's actually starting to look like a TRIPLE FORK!", "Which course would you like to choose: left, center, or right?").toLowerCase();
	switch (user) {
		case "smoothest":
		case "the smoothest":
		case "the smoothest course":
			alert("You can't tell from your location which course is the smoothest.");
			break;
		case "left":
			alert("You choose to continue to the left. Strangely it is a circle that loops back around to your starting point.");
			alert("Looks like you have gone ~once~ around the river bend.");
			gameover = true;
			break;
		case "center":
			alert("You choose to continue straight ahead. Uh-oh! The river has picked up and you are heading straight for a huge waterfall.");
			var turn = confirm("Do you want to try to avoid it? Click OK for yes or CANCEL to take your chances.");
			if (turn) {
				alert("You pull aside like a pansy.");
				gameover = true;
				break;
			}
			alert("You decide to be brave and take your chances. After all, it's just a waterfall. You sing happily as you plunge to death.");
			alert("...");
			alert("Just kidding. You're Pocahontas. You're completely fine!");
			alive = true;
			break;
		case "right":
			alert("You choose to continue right. The river is calm and pretty boring. Too bad there wasn't a waterfall or anything exciting.");
			alive = true;
			break;
		default:
			alert("I'm sorry, that is not a valid choice.");
	}
}

if (gameover === false) {
	alert("You come to the end of the river and exit your canoe.");
	alert("You notice some footsteps of a stranger and decide to follow them.");
	while (gameover === false && smith === false) {
		var marry = prompt("Waiting up ahead for you is Kocoum and John Rolfe. Who will you decide to marry?").toLowerCase();
		switch (marry) {
			case "kocoum":
			case "kokoum":
				alert("You decide to marry Kocoum and live unhappily forever wondering what could have been.");
				gameover = true;
				break;
			case "john rolfe":
			case "john":
			case "rolfe":
				alert("You decide to marry John Rolfe. WHY WOULD YOU CHOOSE THIS?");
				gameover = true;
				break;
			case "john smith":
			case "smith":
				alert("John Smith is not a choice here.");
				alert("Suddenly you hear rustling in the nearby bushes.");
				alert("IT'S JOHN SMITH!");
				smith = true;
				break;
			case "neither":
			case "none":
			case "no one":
			case "noone":
				alert("You can't possibly marry Kocoum or John Rolfe. Suddenly, you hear rusting in the nearby bushes.");
				alert("IT'S JOHN SMITH!");
				smith = true;
				break;
			default:
				alert("I'm sorry, that is not a valid choice.");
		}
	}
}

if (gameover === true) {
	alert("GAME OVER.");
}

if (smith === true) {
	alert("YOU WIN!");
	alert("..........");
	alert("Until Pocahontas 2 where everything is ruined!");
}