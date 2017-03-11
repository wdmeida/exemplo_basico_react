var React = require('react');
var ReactDOM = require('react-dom');

var GitHub = require('./components/GitHub');

//Lib que vai renderizar um componente em uma determinada div.
ReactDOM.render(React.createElement(GitHub), document.getElementById('app'));