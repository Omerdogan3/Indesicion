'use strict';

var visibility = false;

var showDetail = function showDetail() {
    visibility = !visibility;
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h2',
            null,
            'Visibility Toogle'
        ),
        React.createElement(
            'button',
            { onClick: showDetail },
            visibility ? 'Hide Details' : 'Show Details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'There are some details!'
            )
        )
    );
    ReactDOM.render(template, nameRoot);
};
var nameRoot = document.getElementById('name');
render();
