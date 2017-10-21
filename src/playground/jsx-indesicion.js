/*commands:
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
live-server public
*/
console.log('App.js is running');

const app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: []
};

const onFormSubmit =(e) =>{
	e.preventDefault(); //will stop pullpage refresh
	const option = e.target.elements.option.value;
	if(option){
		app.options.push(option);
		e.target.elements.option.value = '';
		renderTestApp();
	}
};

const removeAll = (e) =>{
	e.preventDefault(); //will stop pullpage refresh
	app.options.splice(0,app.options.length);
	renderTestApp();
}

const onMakeDesicion = () => {
	const randnum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randnum];
	alert(option);
};

// JSX - Javascript XML
const renderTestApp = () =>{
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{app.options.length >= 2 ? 'Here are your options' : 'No Options'}</p>
			<button disabled={app.options.length===0} onClick={onMakeDesicion}>What should I do for you?</button>
			<ol>
			{
				app.options.map((option)=>{
					return <li key={option}>{option}</li>;
				})
			}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option"/>
				<button>Add Option</button>
			</form>
			<button onClick={removeAll}>Remove All</button>
			


		</div>
	);
	ReactDOM.render(template,appRoot);
};

const user = {
	name : "Omer",
	age : 22,
	loc : "Istanbul"
};

function getLocation(location){
	if(location){
		return <p>Location: {location}</p>;
	}	
}

const template2 =(
	<div>
		<h1>{user.name ? user.name : 'Anonymous'}</h1>
		<p>Age:{user.age}</p>
		{getLocation(user.loc)}
	</div>
);

const appRoot = document.getElementById('app');
//ReactDOM.render(template,appRoot);
renderTestApp();