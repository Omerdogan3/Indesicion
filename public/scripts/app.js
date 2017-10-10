console.log('App.js is running');

// JSX - Javascript XML
var template = React.createElement(
    "h1",
    { id: "app" },
    "Hello React"
);

var appRoot = document.getElementById('app');

ReactDOM.render(template,appRoot);