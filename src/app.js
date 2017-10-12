/*commands:
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
live-server public
*/

console.log('App.js is running');

// JSX - Javascript XML
var template = (
	<div>
		<h1>This is JSX!</h1>
		<p>Hello</p>
		<ol>
			<li>Item One</li>
			<li>Item Two</li>
		</ol>
	</div>
);  
/*
var template = React.createElement(
    "h1",
    { id: "app" },
    "Hello React"
);*/

var user = {
	name : "Omer",
	age : 22,
	loc : "istanbul"
};

var userName = 'Omer';
var userAge = 22;
var userLocation = 'Istanbul';
var template2 =(
	<div>
		<h1>{user.name}</h1>
		<p>Age:{user.age}</p>
		<p>Location: {user.loc}</p>
	</div>
);

var appRoot = document.getElementById('app');
var nameRoot = document.getElementById('name');


ReactDOM.render(template,appRoot);
ReactDOM.render(template2,nameRoot);