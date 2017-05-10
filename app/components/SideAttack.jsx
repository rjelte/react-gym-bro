var React = require('react');
var ReactDOM = require('react-dom');

var DisplayPokemon = require('./DisplayPokemon');


var SideAttack = React.createClass({
  render(){
    var attackers = this.props.pokeAttackers;
    var attackersMapped = attackers.map(function(p, index){
      return (
        <DisplayPokemon
          key={"a"+index}
          id={"a"+index}
          pokemon={p}
          onSelect={this.props.onSelect}
          selectedAttacker={this.props.selectedAttacker}
          onDelete={this.props.onAttackerDelete}
         />
        );
    }, this);
    return (
      <div>{attackersMapped}</div>
    );
  }
});

module.exports = SideAttack;
