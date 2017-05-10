var React = require('react');
var ReactDOM = require('react-dom');

var PokemonDisplay = React.createClass({
  render: function() {
    return (
      <div>Pokemon: {this.props.name}</div>
    );
  }
});

module.exports = PokemonDisplay;
