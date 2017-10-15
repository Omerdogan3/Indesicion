/*commands:
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
live-server public
*/
console.log('App.js is running');

var app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: ['One','Two']
};

// JSX - Javascript XML
var template = (
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		<p>{app.options.length >= 2 ? 'Here are your options' : 'No Options'}</p>
		<ol>
			<li>{app.options[0]}</li>
			<li>{app.options[1]}</li>
		</ol>
	</div>
);  
var user = {
	name : "Omer",
	age : 22,
	loc : "Istanbul"
};

function getLocation(location){
	if(location){
		return <p>Location: {location}</p>;
	}	
}

var template2 =(
	<div>
		<h1>{user.name ? user.name : 'Anonymous'}</h1>
		<p>Age:{user.age}</p>
		{getLocation(user.loc)}
	</div>
);




var appRoot = document.getElementById('app');
var nameRoot = document.getElementById('name');


ReactDOM.render(template,appRoot);
ReactDOM.render(template2,nameRoot);