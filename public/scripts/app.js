'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var obj = {
	name: 'Vikram',
	getName: function getName() {
		return this.name;
	}
};

var getName = obj.getName.bind(obj);
console.log(getName());

var IndecisionApp = function (_React$Component) {
	_inherits(IndecisionApp, _React$Component);

	function IndecisionApp() {
		_classCallCheck(this, IndecisionApp);

		return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).apply(this, arguments));
	}

	_createClass(IndecisionApp, [{
		key: 'render',
		value: function render() {
			var title = 'Indecision';
			var subtitle = 'Put your life in the hands of the computer.';
			var options = ['Thing One', 'Thing Two', 'Thing Three'];
			return React.createElement(
				'div',
				null,
				React.createElement(Header, { title: title, subtitle: subtitle }),
				React.createElement(Action, null),
				React.createElement(Options, { options: options }),
				React.createElement(AddOption, null)
			);
		}
	}]);

	return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
	_inherits(Header, _React$Component2);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					null,
					this.props.title
				),
				React.createElement(
					'h2',
					null,
					this.props.subtitle
				)
			);
		}
	}]);

	return Header;
}(React.Component);

var Action = function (_React$Component3) {
	_inherits(Action, _React$Component3);

	function Action() {
		_classCallCheck(this, Action);

		return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
	}

	_createClass(Action, [{
		key: 'handlePick',
		value: function handlePick() {
			alert('Handle');
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'button',
					{ onClick: this.handlePick },
					'What Should I do?'
				)
			);
		}
	}]);

	return Action;
}(React.Component);

//add removeall button
//Options -> Options component


var Options = function (_React$Component4) {
	_inherits(Options, _React$Component4);

	function Options(props) {
		_classCallCheck(this, Options);

		var _this4 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

		_this4.handleRemoveAll = _this4.handleRemoveAll.bind(_this4);
		return _this4;
	}

	_createClass(Options, [{
		key: 'handleRemoveAll',
		value: function handleRemoveAll() {
			//alert('Remove All');
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				this.props.options.map(function (option) {
					return React.createElement(Option, { key: option, optionText: option });
				}),
				React.createElement(
					'button',
					{ onClick: this.handleRemoveAll },
					'Remove All'
				)
			);
		}
	}]);

	return Options;
}(React.Component);

//Option -> Option Component Here


var Option = function (_React$Component5) {
	_inherits(Option, _React$Component5);

	function Option() {
		_classCallCheck(this, Option);

		return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
	}

	_createClass(Option, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				this.props.optionText
			);
		}
	}]);

	return Option;
}(React.Component);

//1. setup the form wtih text and submit button
//2.wire up onSubmit
//3.handleaddoption -> if exist alert


var AddOption = function (_React$Component6) {
	_inherits(AddOption, _React$Component6);

	function AddOption() {
		_classCallCheck(this, AddOption);

		return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
	}

	_createClass(AddOption, [{
		key: 'handleAddOption',
		value: function handleAddOption(e) {
			e.preventDefault();
			var option = e.target.elements.option.value.trim();
			if (option) {
				alert(option);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
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
