var React = require('react');
var ReactDOM = require('react-dom');

var DisplayPokemon = require('./DisplayPokemon');


var SideDefense = React.createClass({
  render(){
    var defenders = this.props.pokeDefenders;
    var defendersMapped = defenders.map(function(p, index){
      return (
        <DisplayPokemon
          key={"d" + index}
          id={"d" + index}
          pokemon={p}
          onSelect={this.props.onSelect}
          selectedDefender={this.props.selectedDefender}
          onDelete={this.props.onDefenderDelete}/>
        );
    }, this);
    return (
      <div>{defendersMapped}</div>
    );
  }
});

module.exports = SideDefense;
