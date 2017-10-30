// //import './utils.js';
// import subtract,{square, add} from './utils.js';
// import isSeniour,{isAdult,canDrink } from './person.js';


// console.log('app.js is running');
// console.log(square(10));
// console.log(add(1000,25));
// console.log(isAdult(20));
// console.log(canDrink(10));
// console.log(subtract(10,6));
// console.log(isSeniour(67));


// install -> import ->use
// import validator from 'validator';
// console.log(validator.isEmail('omerdogan3@gmail.com'));

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp.js';






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

// const Action = (props) =>{
// 	return (
// 		<div>
// 			<button 
// 			onClick={props.handlePick}
// 			disabled={!props.hasOptions}
// 			>
// 			What Should I do?
// 			</button>
// 		</div>
// 	);
// };


//add removeall button
//Options -> Options component


// const Options = (props) =>{
// 	return(
// 		<div>
// 			<button onClick={props.handleDeleteOptions}>Remove All</button>
// 			{props.options.length ===0 && <p>Please add an option to get started!</p>}
// 			{
// 				props.options.map((option) => (
// 					<Option 
// 					key={option} 
// 					optionText={option}
// 					handleDeleteOption={props.handleDeleteOption}
// 					/>
// 				))
// 			}
// 		</div>
// 	);
// }


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

// const Option = (props) => {
// 	return(
// 		<div>
// 			{props.optionText}
// 			<button onClick={(e)=>props.handleDeleteOption(props.optionText)}>remove</button>
// 		</div>
// 	);
// }


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




//Add option -> AddOption component.


// const User = (props) => {
// 	return (
// 		<div>
// 			<p>Name: {props.name}</p>
// 			<p>Age: {props.age}</p>
// 		</div>
// 	);
// };



// const jsx = (
//     <div>
// 		<h1>Title</h1>
// 		<Header/>
// 		<Action/>
// 		<Options/>
// 		<AddOption/>
// 	</div>
// );

ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));

class OldSyntax{
    constructor(){
        this.name = 'Mike';
    }
    getGreeting(){
        return "Hi my name is $(this.name)";
    }
}
const oldSyntax = new OldSyntax();
console.log(oldSyntax);

class NewSyntax{
    name = 'OD';
    getGreeting = () =>{
        return "Hi my name is $(this.name)"; 
    }
}

const newSyntax = new NewSyntax();
const newGetGreeting = new newSyntax.getGreeting;
console.log(newSyntax);
console.log(newGetGreeting);class OldSyntax{
    constructor(){
        this.name = 'Mike';
    }
    getGreeting(){
        return "Hi my name is $(this.name)";
    }
}
const oldSyntax = new OldSyntax();
console.log(oldSyntax);

class NewSyntax{
    name = 'OD';
    getGreeting = () =>{
        return "Hi my name is $(this.name)"; 
    }
}

// const newSyntax = new NewSyntax();
// const newGetGreeting = new newSyntax.getGreeting;
// console.log(newSyntax);
// console.log(newGetGreeting);class OldSyntax{
//     constructor(){
//         this.name = 'Mike';
//     }
//     getGreeting(){
//         return "Hi my name is $(this.name)";
//     }
// }
// const oldSyntax = new OldSyntax();
// console.log(oldSyntax);

// class NewSyntax{
//     name = 'OD';
//     getGreeting = () =>{
//         return "Hi my name is $(this.name)"; 
//     }
// }

// const newSyntax = new NewSyntax();
// const newGetGreeting = new newSyntax.getGreeting;
// console.log(newSyntax);
// console.log(newGetGreeting);