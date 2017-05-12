var React = require('react');
var ReactDOM = require('react-dom');

var DisplayDefensePokemon = require('./DisplayDefensePokemon');


var SideDefense = React.createClass({
  render(){
    let defenders = this.props.pokeDefenders;
    let defendersMapped = defenders.map(function(p, index){
      return (
        <DisplayDefensePokemon
          onFMoveChange={this.props.onFMoveChange}
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
