function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var random1 = getRandomIntInclusive(1, 50);
var random2 = getRandomIntInclusive(1, 50);
var random3 = getRandomIntInclusive(1, 50);
var random4 = getRandomIntInclusive(1, 50);
var random5 = getRandomIntInclusive(1, 50);
var random6 = getRandomIntInclusive(1, 50);

console.log(random1);
console.log(random2);
console.log(random3);
console.log(random4);
console.log(random5);
console.log(random6);

// arrow funtion
function checkLoto() {
	var firstname = document.forms["myForm"]["fname"].value;
	if (firstname == "") {
		notice_firstname = "Merci de remplir ton Préno";
		document.getElementById("notice_firstname").innerHTML = notice_firstname;
		return false;
	}

	var lastname = document.forms["myForm"]["lname"].value;
	if (lastname == "") {
		notice_lastname = "Merci de saisir ton nom";
		document.getElementById("notice_lastname").innerHTML = notice_lastname;
		return false;
	}

	var email = document.forms["myForm"]["email"].value;

	if (email.length < 8 || email.length > 30) {
		alert(
			"L'adresse mail n'est pas valide. Elle doit conternir entre 8 et 30 charactères."
		);
		return false;
	}

	var reg_syntax_email = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,3}$/;
	var resultat = reg_syntax_email.test(email);
	if (resultat == false) {
		alert(
			"L'adresse mail n'est pas valide. Elle doit conternir un @ et un point et avoir 2-3 lettres après le point."
		);
		return false;
	}

	var lotoNumber1 = document.getElementById("number1").value;
	var lotoNumber2 = document.getElementById("number2").value;
	var lotoNumber3 = document.getElementById("number3").value;
	var lotoNumber4 = document.getElementById("number4").value;
	var lotoNumber5 = document.getElementById("number5").value;
	var lotoNumber6 = document.getElementById("number6").value;

	if (
		lotoNumber1 == "" ||
		lotoNumber2 == "" ||
		lotoNumber3 == "" ||
		lotoNumber4 == "" ||
		lotoNumber5 == "" ||
		lotoNumber6 == ""
	) {
		alert("Merci de saisir tous les chiffres");
		return false;
	}

	if (
		lotoNumber1 == random1 &&
		lotoNumber2 == random2 &&
		lotoNumber3 == random3 &&
		lotoNumber4 == random4 &&
		lotoNumber5 == random5 &&
		lotoNumber6 == random6
	) {
		alert("Bravo vous avez gagné");
	} else {
		alert("Vous avez perdu. Cliquer OK pour voir s'il y des nombres gagnants:");
	}

	var random_array = [random1, random2, random3, random4, random5, random6];
	var loto_array = [
		lotoNumber1,
		lotoNumber2,
		lotoNumber3,
		lotoNumber4,
		lotoNumber5,
		lotoNumber6,
	];

	var array_match = [];

	for (i = 0; i < random_array.length; i++) {
		if (random_array[i] == loto_array[i]) {
			array_match.push(loto_array[i]);
		}
	}
	array_match.forEach((element) => console.log(element));
	// var x = array_match.toString();

	array_match.forEach(function (item) {
		alert("Matches:" + item);
	});

	console.log(array_match);
}
