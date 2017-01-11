// Load Ramda module
var R = require('ramda');

// defines simple function for this simple sample project
var square = function square(x) {
	return x * x;
};

// Tell Ramda to do stuff
var squares = R.chain(square, [1, 2, 3, 4, 5]);

// Find div #response and set its innerHTML to squares
document.getElementById('response').innerHTML = squares;