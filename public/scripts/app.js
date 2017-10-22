'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const obj = {
// 	name: 'Vikram',
// 	getName(){
// 		return this.name;
// 	}
// };

// const getName = obj.getName.bind(obj);
// console.log(getName());

//stateless functional components


var IndecisionApp = function (_React$Component) {
	_inherits(IndecisionApp, _React$Component);

	function IndecisionApp(props) {
		_classCallCheck(this, IndecisionApp);

		var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

		_this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
		_this.handlePick = _this.handlePick.bind(_this);
		_this.handleAddOption = _this.handleAddOption.bind(_this);
		_this.state = {
			options: []
		};
		return _this;
	}

	_createClass(IndecisionApp, [{
		key: 'handleDeleteOptions',
		value: function handleDeleteOptions() {
			this.setState(function () {
				return {
					options: []
				};
			});
		}
	}, {
		key: 'handlePick',
		value: function handlePick() {
			var randnum = Math.floor(Math.random() * this.state.options.length);
			var option = this.state.options[randnum];
			alert(option);
		}
	}, {
		key: 'handleAddOption',
		value: function handleAddOption(option) {
			if (!option) {
				return 'Enter a valid value to add item';
			} else if (this.state.options.indexOf(option) > -1) {
				return 'This option already exists';
			}
			this.setState(function (previousState) {
				return {
					options: previousState.options.concat(option)
				};
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var title = 'Indecision';
			var subtitle = 'Put your life in the hands of the computer.';
			return React.createElement(
				'div',
				null,
				React.createElement(Header, { title: title, subtitle: subtitle }),
				React.createElement(Action, {
					hasOptions: this.state.options.length > 0,
					handlePick: this.handlePick
				}),
				React.createElement(Options, {
					options: this.state.options,
					handleDeleteOptions: this.handleDeleteOptions
				}),
				React.createElement(AddOption, {
					handleAddOption: this.handleAddOption
				})
			);
		}
	}]);

	return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			props.title
		),
		React.createElement(
			'h2',
			null,
			props.subtitle
		)
	);
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

var Action = function Action(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'button',
			{
				onClick: props.handlePick,
				disabled: !props.hasOptions
			},
			'What Should I do?'
		)
	);
};

//add removeall button
//Options -> Options component


var Options = function Options(props) {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'button',
			{ onClick: props.handleDeleteOptions },
			'Remove All'
		),
		props.options.map(function (option) {
			return React.createElement(Option, { key: option, optionText: option });
		})
	);
};

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

var Option = function Option(props) {
	return React.createElement(
		'div',
		null,
		props.optionText
	);
};

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


var AddOption = function (_React$Component2) {
	_inherits(AddOption, _React$Component2);

	function AddOption(props) {
		_classCallCheck(this, AddOption);

		var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

		_this2.handleAddOption = _this2.handleAddOption.bind(_this2);
		_this2.state = {
			error: undefined
		};
		return _this2;
	}

	_createClass(AddOption, [{
		key: 'handleAddOption',
		value: function handleAddOption(e) {
			e.preventDefault();
			var option = e.target.elements.option.value.trim();
			e.target.elements.option.value = '';
			var error = this.props.handleAddOption(option);

			this.setState(function () {
				return {
					error: error
				};
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				this.state.error && React.createElement(
					'p',
					null,
					this.state.error
				),
				React.createElement(
					'form',
					{ onSubmit: this.handleAddOption },
					React.createElement('input', { type: 'text', name: 'option' }),
					React.createElement(
						'button',
						null,
						'AddOption'
					)
				)
			);
		}
	}]);

	return AddOption;
}(React.Component);

//Add option -> AddOption component.


// const User = (props) => {
// 	return (
// 		<div>
// 			<p>Name: {props.name}</p>
// 			<p>Age: {props.age}</p>
// 		</div>
// 	);
// };


var jsx = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Title'
	),
	React.createElement(Header, null),
	React.createElement(Action, null),
	React.createElement(Options, null),
	React.createElement(AddOption, null)
);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
