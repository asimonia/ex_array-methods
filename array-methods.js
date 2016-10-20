var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");

function outputPlanet(e, i, array) {
	el.innerHTML += "<p>" + e + "</p>";
	console.log(el);
}

planets.forEach(outputPlanet);


// Use the map method to create a new array where the first letter of each planet is capitalized

function capitalize(el, i, array) {
	return el.charAt(0).toUpperCase() + el.slice(1, el.length);
}

var capitalized = planets.map(capitalize);


// Use the filter method to create a new array that contains planets with the letter 'e'

function eFilter(el, i, array) {
	if (el.search('e') >= 0 || el.search('E') >= 0) {
		return el;
	}
}
var ePlanets = planets.filter(eFilter);

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

function create(previous, current, index, array) {
	return previous + " " + current;
}

var sentence = words.reduce(create);

console.log(capitalized);
console.log(ePlanets);
console.log(sentence);