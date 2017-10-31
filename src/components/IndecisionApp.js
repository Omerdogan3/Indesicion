import AddOption from './AddOption.js';
import Header from './Header.js';
import Action from './Action.js';
import Options from './Options.js';
import OptionModal from './OptionModal'

import React from 'react';


// const obj = {
// 	name: 'Vikram',
// 	getName(){
// 		return this.name;
// 	}
// };

// const getName = obj.getName.bind(obj);
// console.log(getName());

//stateless functional components


export default class IndecisionApp extends React.Component{	
	state = {
		options: [],
		selectedOption: undefined
	};

	handleCloseModal =() => {
		this.setState(()=>({
			selectedOption: false
		}));
	}


	handleDeleteOptions = () => {
		this.setState(()=>({
			options:[]
		}));
	};

	handleDeleteOption = (optionToRemove) => {
		this.setState((previousState)=>({
			options: previousState.options.filter((option)=>{
				return optionToRemove !== option;
			})
		}));
	};

	handlePick = () => {
		const randnum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randnum];
		this.setState(() => ({
			selectedOption: option
		}));
	};

	handleAddOption = (option) => {
		if(!option){
			return 'Enter a valid value to add item';
		}else if(this.state.options.indexOf(option) > -1){
			return 'This option already exists';
		}
		this.setState((previousState) => ({options: previousState.options.concat(option)}));
	};

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


	

	render(){
		const subtitle = 'Put your life in the hands of the computer.';
		return(
			<div>
				<Header subtitle = {subtitle}/>
				<div className="container">
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
					
				<OptionModal
					selectedOption={this.state.selectedOption}
					closeModal={this.handleCloseModal}
				/>
				
			</div>
		);
	}
}

IndecisionApp.defaultProps = {
	options: []
}
