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

var template2 =(
	<div>
		<h1>Omer Dogan</h1>
		<p>Age:22</p>
		<p>Location: Istanbul</p>
	</div>
);

var appRoot = document.getElementById('app');
var nameRoot = document.getElementById('name');


ReactDOM.render(template,appRoot);
ReactDOM.render(template2,nameRoot);