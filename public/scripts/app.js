'use strict';

console.log('App.js is running');

// JSX - Javascript XML
var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'This is JSX!'
	),
	React.createElement(
		'p',
		null,
		'Hello'
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'Item One'
		),
		React.createElement(
			'li',
			null,
			'Item Two'
		)
	)
);
/*
var template = React.createElement(
    "h1",
    { id: "app" },
    "Hello React"
);*/

var template2 = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Omer Dogan'
	),
	React.createElement(
		'p',
		null,
		'Age:22'
	),
	React.createElement(
		'p',
		null,
		'Location: Istanbul'
	)
);

var appRoot = document.getElementById('app');
var nameRoot = document.getElementById('name');

ReactDOM.render(template, appRoot);
ReactDOM.render(template2, nameRoot);
