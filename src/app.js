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
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.state = {
			options: props.options
		};
	}
	componentDidMount(){
		try{
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);
	
			if(options){
				this.setState(() => ({options}));
			}
		}catch(e){
			//Do nothing
		}	
	}
	componentDidUpdate(previousProps, previousState){
		if(previousState.options.length !== this.state.options.length){
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options',json);
		}
		
	}
	componentWillUnmount(){
		console.log('component will unmount');
	}


	handleDeleteOptions(){
		this.setState(()=>({
			options:[]
		}));
	}

	handleDeleteOption(optionToRemove){
		this.setState((previousState)=>({
			options: previousState.options.filter((option)=>{
				return optionToRemove !== option;
			})
		}));
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
		this.setState((previousState) => ({options: previousState.options.concat(option)}));
	}

	render(){
		const subtitle = 'Put your life in the hands of the computer.';
		return(
			<div>
				<Header subtitle = {subtitle}/>
				<Action
					hasOptions={this.state.options.length > 0}
					handlePick={this.handlePick}				
				/>
				<Options 
					options={this.state.options}
					handleDeleteOptions = {this.handleDeleteOptions}
					handleDeleteOption = {this.handleDeleteOption}
				/>
				<AddOption
					handleAddOption = {this.handleAddOption}
				/>
			</div>
		);
	}
}

IndecisionApp.defaultProps = {
	options: []
}

const Header = (props) =>{
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subtitle && <h2>{props.subtitle}</h2>}
		</div>
	);
}

Header.defaultProps = {
	title: 'Indecision'
};

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
			{props.options.length ===0 && <p>Please add an option to get started!</p>}
			{
				props.options.map((option) => (
					<Option 
					key={option} 
					optionText={option}
					handleDeleteOption={props.handleDeleteOption}
					/>
				))
			}
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
			<button onClick={(e)=>props.handleDeleteOption(props.optionText)}>remove</button>
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

		this.setState(()=>({error}));

		if(!error){
			e.target.elements.option.value = "";
		}
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