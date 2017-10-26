class Counter extends React.Component{
	constructor(props){
		super(props);
		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.state = {
			count: 0
		};
	}
	componentDidMount(){
		const stringCount = localStorage.getItem('count');
		const count = parseInt(stringCount,10);

		if(!isNaN(count)){
			this.setState(()=>({count}));
		}
	}


	componentDidUpdate(prevProps,prevState){
		if(prevState.count != this.state.count){
			localStorage.setItem('count', this.state.count)
		}
	}


	handleAddOne(){
		this.setState((previousState)=>{
			return{
				count: previousState.count + 1
			};
		});
	}
	handleMinusOne(){
		this.setState((previousState)=>{
			return{
				count: previousState.count - 1
			};
		});
	}
	handleReset(){
		this.setState((previousState)=>{
			return{
				count: 0
			};
		});
	}

	render(){
		return(
		<div>
			<h1>Count: {this.state.count}</h1>
			<button onClick={this.handleAddOne}>+1</button>
			<button onClick={this.handleMinusOne}>-1</button>
			<button onClick={this.handleReset}>Reset</button>
		</div>
		);
	}
}

//handleAddOne,handleMinusOne,handleReset

// Counter.defaultProps = {
// 	count: 0
// };


ReactDOM.render(<Counter count={-19}/>,document.getElementById('app'));

// let count = 0;
// const someId = 'myIdHere';

// const addOne = () =>{
// 	count++;
// 	renderCounterApp();
// };

// const subOne = () =>{
// 	count--;
// 	renderCounterApp();
// };

// const resetButton = () =>{
// 	count=0;
// 	renderCounterApp();
// };

// const nameRoot = document.getElementById('name');


// //ReactDOM.render(template,appRoot);
// //ReactDOM.render(template2,nameRoot);

// const renderCounterApp =() =>{
// 	const templateTwo = (
// 		<div>
// 			<h1> Count: {count}</h1>
// 			<button id={someId} className="button" onClick={addOne}>+1</button>
// 			<button id={someId} className="button" onClick={subOne}>-1</button>
// 			<button id={someId} className="button" onClick={resetButton}>reset</button>
// 		</div>
// 	);
// 	ReactDOM.render(templateTwo,nameRoot);
// };

// renderCounterApp();