// const obj = {
// 	name: 'Vikram',
// 	getName(){
// 		return this.name;
// 	}
// };

// const getName = obj.getName.bind(obj);
// console.log(getName());

//stateless functional components



class IndecisionApp extends React.Component{
	constructor(props){
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			options : []
		};
	}
	handleDeleteOptions(){
		this.setState(()=>{
			return{
				options: []
			};
		});
	}

	handlePick(){
		const randnum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randnum];
		alert(option);
	}

	handleAddOption(option){
		if(!option){
			return 'Enter a valid value to add item';
		}else if(this.state.options.indexOf(option) > -1){
			return 'This option already exists';
		}
		this.setState((previousState) => {
			return{
				options: previousState.options.concat(option)
			};
		});
	}

	render(){
		const title = 'Indecision';
		const subtitle = 'Put your life in the hands of the computer.';
		return(
			<div>
				<Header title={title} subtitle = {subtitle}/>
				<Action
					hasOptions={this.state.options.length > 0}
					handlePick={this.handlePick}				
				/>
				<Options 
					options={this.state.options}
					handleDeleteOptions = {this.handleDeleteOptions}
				/>
				<AddOption
					handleAddOption = {this.handleAddOption}
				/>
			</div>
		);
	}
}

const Header = (props) =>{
	return (
		<div>
			<h1>{props.title}</h1>
			<h2>{props.subtitle}</h2>
		</div>
	);
}

// class Header extends React.Component {
// 	render(){
// 		return (
// 			<div>
// 				<h1>{this.props.title}</h1>
// 				<h2>{this.props.subtitle}</h2>
// 			</div>
// 		);
// 	}
// }

const Action = (props) =>{
	return (
		<div>
			<button 
			onClick={props.handlePick}
			disabled={!props.hasOptions}
			>
			What Should I do?
			</button>
		</div>
	);
};


//add removeall button
//Options -> Options component


const Options = (props) =>{
	return(
		<div>
			<button onClick={props.handleDeleteOptions}>Remove All</button>
			{props.options.map((option) => <Option key={option} optionText={option}/>	)}
			
		</div>
	);
}


// class Options extends React.Component{
// 	render(){
// 		return(
// 			<div>
// 				<button onClick={this.props.handleDeleteOptions}>Remove All</button>
// 				{this.props.options.map((option) => <Option key={option} optionText={option}/>	)}
				
// 			</div>
// 		);
// 	}
// }

//Option -> Option Component Here

const Option = (props) => {
	return(
		<div>
			{props.optionText}
		</div>
	);
}


// class Option extends React.Component{
// 	render(){
// 		return(
// 			<div>
// 				{this.props.optionText}
// 			</div>
// 		);
// 	}
// }

//1. setup the form wtih text and submit button
//2.wire up onSubmit
//3.handleaddoption -> if exist alert


class AddOption extends React.Component{
	constructor(props){
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined
		};
	}

	handleAddOption(e){
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		e.target.elements.option.value = '';
		const error = this.props.handleAddOption(option);

		this.setState(()=>{
			return {
				error: error
			};
		});
	}
	render(){
		return(
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option"/>
					<button>AddOption</button>
				</form>
			</div>
		);
	}
}

//Add option -> AddOption component.


// const User = (props) => {
// 	return (
// 		<div>
// 			<p>Name: {props.name}</p>
// 			<p>Age: {props.age}</p>
// 		</div>
// 	);
// };



const jsx = (
	<div>
		<h1>Title</h1>
		<Header/>
		<Action/>
		<Options/>
		<AddOption/>
	</div>
);

ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));