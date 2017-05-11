var React =     require('react');
var ReactDOM =  require('react-dom');

var FormAttacker = require('./FormAttacker');
var DisplayPokemon = require('./DisplayPokemon');
var ReferencePokemon = require('./ReferencePokemon');
var FormDefender = require('./FormDefender');
var SorterAttacker = require('./SorterAttacker');
var ReferenceMoves = require('./ReferenceMoves');
var SideAttack = require('./SideAttack');
var SideDefense = require('./SideDefense');


var PokemonApp = React.createClass({
  getInitialState(){
    return {
      pokeAttackers: [],
      selectedAttacker: '',
      pokeDefenders: [],
      selectedDefender: '',
    }
  },
  handleSort(type){
    var attackers = this.state.pokeAttackers;
    if (type === "Level"){
      function compareLevel(a, b){
        if (a.level < b.level){
          return -1;
        }
        if (a.level > b.level){
          return 1;
        }
      }
      attackers = attackers.sort(compareLevel);
      this.setState({
        pokeAttackers: attackers
      });
    }
  },
  handleNewAttacker(poke){
    ReferenceMoves.setMoves(poke);
    ReferencePokemon.setAttacker(poke);
    this.setState({
      pokeAttackers: this.state.pokeAttackers.concat([poke])
    });
  },
  handleNewDefender(poke){
    ReferenceMoves.setMoves(poke);
    ReferencePokemon.setDefender(poke);
    this.setState({
      pokeDefenders: this.state.pokeDefenders.concat([poke])
    });
  },
  handleDeleteAttacker(key){
    var index = Number(key.slice(1));
    var newAttackers = this.state.pokeAttackers
    newAttackers.splice(index, 1);
    this.setState({
      pokeAttackers: newAttackers
    });
  },
  handleDeleteDefender(key){
    var index = Number(key.slice(1));
    var newDefenders = this.state.pokeDefenders
    newDefenders.splice(index, 1);
    this.setState({
      pokeDefenders: newDefenders
    });
  },
  handleSelect(key){
    if (key.charAt(0) === 'd'){
      var index = Number(key.slice(1));
      this.setState({
        selectedDefender: {
          pokemon: this.state.pokeDefenders[index],
          key: key
        }
      });
    }
    if (key.charAt(0) === 'a'){
      var index = Number(key.slice(1));
      this.setState({
        selectedAttacker: {
          pokemon: this.state.pokeAttackers[index],
          key: key
        }
      });
    }
  },
  render: function() {
    return (
      <div className="container">
        <div>
          <h1>Gym Bro</h1>
        </div>
        <div className="row">
          <FormAttacker onNewName={this.handleNewAttacker}/>
          <FormDefender onNewName={this.handleNewDefender}/>
        </div>
        <div className="row">
          <div className="col-xs-6 col-md-9">
            <SorterAttacker onSort={this.handleSort} />
            <SideAttack
              onSelect={this.handleSelect}
              onAttackerDelete={this.handleDeleteAttacker}
              selectedAttacker={this.state.selectedAttacker}
              pokeAttackers={this.state.pokeAttackers}
              selectedDefender={this.state.selectedDefender}/>
          </div>
          <div className="col-xs-6 col-md-3">
            <SideDefense
              onSelect={this.handleSelect}
              onDefenderDelete={this.handleDeleteDefender}
              selectedDefender={this.state.selectedDefender}
              pokeDefenders={this.state.pokeDefenders}/>
          </div>
        </div>
    </div>
    );
  }
});

module.exports = PokemonApp;
