var React = require('react');
var SearchUser = require('./SearchUser');
var UserInfo = require('./UserInfo');

//Cria um componente associado a uma variável.
var GitHub = React.createClass({
     //Função do nativa do react para setar componentes iniciais que serão utilizados.
     getInitialState: function() {
        return {
            user: null,
            repos: []
        };
     },
     updateUser: function(user) {
        //Forma que o react usa para atualizar um state.
        this.setState({user: user});
     },
     updateRepos: function(repos) {
         this.setState({repos: repos});
     },
     render: function() {
        return (
            <div className="container">
                <SearchUser updateUser={this.updateUser} updateRepos={this.updateRepos} />
                <UserInfo user={this.state.user} repos={this.state.repos} />
            </div>   
        );    
    }
});

//Exporta a variável.
module.exports = GitHub;