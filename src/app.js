const obj = {
	name: 'Vikram',
	getName(){
		return this.name;
	}
};

const getName = obj.getName.bind(obj);
console.log(getName());

class IndecisionApp extends React.Component{
	render(){
		const title = 'Indecision';
		const subtitle = 'Put your life in the hands of the computer.';
		const options = ['Thing One', 'Thing Two', 'Thing Three'];
		return(
			<div>
				<Header title={title} subtitle = {subtitle}/>
				<Action/>
				<Options options={options}/>
				<AddOption/>
			</div>
		);
	}
}


class Header extends React.Component {
	render(){
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</div>
		);
	}
}

class Action extends React.Component{
	handlePick(){
		alert('Handle');
	}
	render(){
		return (
			<div>
				<button onClick={this.handlePick}>What Should I do?</button>
			</div>
		);
	}
}

//add removeall button
//Options -> Options component
class Options extends React.Component{
	constructor(props){
		super(props);
		this.handleRemoveAll = this.handleRemoveAll.bind(this);
	}
	handleRemoveAll(){
		//alert('Remove All');
	}
	render(){
		return(
			<div>
				{this.props.options.map((option) => <Option key={option} optionText={option}/>	)}
				<button onClick={this.handleRemoveAll}>Remove All</button>
			</div>
		);
	}
}

//Option -> Option Component Here
class Option extends React.Component{
	render(){
		return(
			<div>
				{this.props.optionText}
			</div>
		);
	}
}

//1. setup the form wtih text and submit button
//2.wire up onSubmit
//3.handleaddoption -> if exist alert


class AddOption extends React.Component{
	handleAddOption(e){
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		if(option){
			alert(option);
		}
	}
	render(){
		return(
			<div>
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option"/>
					<button>AddOption</button>
				</form>
			</div>
		);
	}
}

//Add option -> AddOption component.


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