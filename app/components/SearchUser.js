var React = require('react');
var GitHubUser = require('../services/GitHubUser');

var SearchUser = React.createClass({
     handleSubmit: function(e) {
        //Previne a ação padrão do browser (reload da página).
        e.preventDefault();
        
        GitHubUser.getByUsername(this.refs.username.value).then(function(response) {
            this.props.updateUser(response.data);
        }.bind(this));

        GitHubUser.getReposByUsername(this.refs.username.value).then(function(response) {
            this.props.updateRepos(response.data);
        }.bind(this));
    },
    render: function() {
        return (
            <div className="jumbotron">
                <h1>GitHub Info</h1>
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" ref="username" 
                            className="form-control" placeholder="Ex: wdmeida" />
                        </div>
                        <button type="submit" className="btn btn-primary">Buscar</button>
                    </form>
                </div>
            </div>   
        );
    }
});

//Garantes que as propriedades são passada com suas propriedades corretas.
SearchUser.propTypes = {
    updateUser: React.PropTypes.func.isRequired,
    updateRepos: React.PropTypes.func.isRequired,
};

module.exports = SearchUser;