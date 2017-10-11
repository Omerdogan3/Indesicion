"use strict";

console.log('App.js is running');

// JSX - Javascript XML
var template = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		"This is JSX!"
	),
	React.createElement(
		"p",
		null,
		"Hello"
	),
	React.createElement(
		"ol",
		null,
		React.createElement(
			"li",
			null,
			"Item One"
		),
		React.createElement(
			"li",
			null,
			"Item Two"
		)
	)
);
/*
var template = React.createElement(
    "h1",
    { id: "app" },
    "Hello React"
);*/

var user = {
	name: "Omer",
	age: 22,
	loc: "istanbul"
};

var userName = 'Omer';
var userAge = 22;
var userLocation = 'Istanbul';
var template2 = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		user.name
	),
	React.createElement(
		"p",
		null,
		"Age:",
		user.age
	),
	React.createElement(
		"p",
		null,
		"Location: ",
		user.loc
	)
);

var appRoot = document.getElementById('app');
var nameRoot = document.getElementById('name');

ReactDOM.render(template, appRoot);
ReactDOM.render(template2, nameRoot);
