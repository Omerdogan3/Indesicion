import Option from './Option.js';
import React from 'react';

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

export default Options;