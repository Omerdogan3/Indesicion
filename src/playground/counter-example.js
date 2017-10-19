
let count = 0;
const someId = 'myIdHere';

const addOne = () =>{
	count++;
	renderCounterApp();
};

const subOne = () =>{
	count--;
	renderCounterApp();
};

const resetButton = () =>{
	count=0;
	renderCounterApp();
};





const nameRoot = document.getElementById('name');


//ReactDOM.render(template,appRoot);
//ReactDOM.render(template2,nameRoot);

const renderCounterApp =() =>{
	const templateTwo = (
		<div>
			<h1> Count: {count}</h1>
			<button id={someId} className="button" onClick={addOne}>+1</button>
			<button id={someId} className="button" onClick={subOne}>-1</button>
			<button id={someId} className="button" onClick={resetButton}>reset</button>
		</div>
	);
	ReactDOM.render(templateTwo,nameRoot);
};

renderCounterApp();