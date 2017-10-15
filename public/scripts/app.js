'use strict';

/*commands:
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
live-server public
*/
console.log('App.js is running');

var app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: ['One', 'Two']
};

// JSX - Javascript XML
var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	app.subtitle && React.createElement(
		'p',
		null,
		app.subtitle
	),
	React.createElement(
		'p',
		null,
		app.options.length >= 2 ? 'Here are your options' : 'No Options'
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			app.options[0]
		),
		React.createElement(
			'li',
			null,
			app.options[1]
		)
	)
);
var user = {
	name: "Omer",
	age: 22,
	loc: "Istanbul"
};

function getLocation(location) {
	if (location) {
		return React.createElement(
			'p',
			null,
			'Location: ',
			location
		);
	}
}

var template2 = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		user.name ? user.name : 'Anonymous'
	),
	React.createElement(
		'p',
		null,
		'Age:',
		user.age
	),
	getLocation(user.loc)
);

var appRoot = document.getElementById('app');
var nameRoot = document.getElementById('name');

ReactDOM.render(template, appRoot);
ReactDOM.render(template2, nameRoot);
