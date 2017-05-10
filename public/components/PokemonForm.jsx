var React = require('react');
var ReactDOM = require('react-dom');
var PokemonList = require('PokemonList');

var PokemonForm = React.createClass({
  onInputChange: function(e){
    console.log(e.target.name);
  },
  render: function(){
    return (
      // <form onSubmit={this.onButtonClick}>
        <input onChange={this.onInputChange}/>
      // <button>Build</button>
      // </form>
    );
  }
});

module.exports = PokemonForm;
