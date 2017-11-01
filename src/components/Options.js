import Option from './Option.js';
import React from 'react';

const Options = (props) =>{
	return(
		<div>
			<div className='widget-header'>
				<h3 className="widget-header__title">Your Options</h3>
				<button className="button button--link" onClick={props.handleDeleteOptions}>Remove All</button>
			</div>
			
			{props.options.length ===0 && <p className="widget__message">Please add an option to get started!</p>}
			{
				props.options.map((option,index) => (
					<Option 
					key={option} 
					optionText={option}
					count = {index+1}
					handleDeleteOption={props.handleDeleteOption}
					/>
				))
			}
		</div>
	);
}

export default Options;