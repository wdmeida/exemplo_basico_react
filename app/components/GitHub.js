var React = require('react');
var SearchUser = require('./SearchUser');

//Cria um componente associado a uma variável.
var GitHub = React.createClass({
     render: function() {
        return (
            <div className="container">
                <SearchUser />
            </div>   
        );    
    }
});

//Exporta a variável.
module.exports = GitHub;