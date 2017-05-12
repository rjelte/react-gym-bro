var React =     require('react');
var ReactDOM =  require('react-dom');

var FormAttacker = require('./FormAttacker');
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
    };
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
    let newAttackers = this.state.pokeAttackers;
    newAttackers.push(poke);
    this.setState({
      pokeAttackers: []
    });
    this.setState({
      pokeAttackers: newAttackers
    });
  },
  handleFMoveChange(move, key){
    var index = Number(key.slice(1));
    var side = key.slice(0, 1);
    console.log("key" + key);
    console.log("side" + side);
    console.log(side === 'd');

    console.log('index ' + index);
    if (side === 'a'){
      console.log('attacker move changed');
      var attacker = this.state.pokeAttackers[index];
      attacker.fMove = move;
      console.log("fMove changed to: " + attacker.fMove.name);
      var newAttackers = this.state.pokeAttackers;
      newAttackers.splice(index, 1, attacker);
      this.setState({
        pokeAttackers: newAttackers
      });
    } else if (side === 'd'){
      console.log('defender move changed');
      var defender = this.state.pokeDefenders[index];
      defender.fMove = move;
      console.log("fMove changed to: " + defender.fMove.name);
      var newDefenders = this.state.pokeDefenders;
      newDefenders.splice(index, 1, defender);
      this.setState({
        pokeDefenders: newDefenders
      });
    }
  },
  handleNewDefender(poke){
    ReferenceMoves.setMoves(poke);
    ReferencePokemon.setDefender(poke);
    let newDefenders = this.state.pokeDefenders;
    newDefenders.push(poke);
    this.setState({
      pokeDefenders: newDefenders
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
      let index = Number(key.slice(1));
      this.setState({
        selectedDefender: {
          pokemon: this.state.pokeDefenders[index],
          key: key
        }
      });
    }
    if (key.charAt(0) === 'a'){
      let index = Number(key.slice(1));
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
          <FormAttacker onNewAttacker={this.handleNewAttacker}/>
          <FormDefender onNewDefender={this.handleNewDefender}/>
        </div>
        <div className="row">
          <div className="col-xs-6 col-md-9">
            <SorterAttacker onSort={this.handleSort} />
            <SideAttack
              onFMoveChange={this.handleFMoveChange}
              onSelect={this.handleSelect}
              onAttackerDelete={this.handleDeleteAttacker}
              selectedAttacker={this.state.selectedAttacker}
              pokeAttackers={this.state.pokeAttackers}
              selectedDefender={this.state.selectedDefender}/>
          </div>
          <div className="col-xs-6 col-md-3">
            <SideDefense
              onFMoveChange={this.handleFMoveChange}
              onSelect={this.handleSelect}
              onDefenderDelete={this.handleDeleteDefender}
              selectedDefender={this.state.selectedDefender}
              pokeDefenders={this.state.pokeDefenders}
              selectedAttacker={this.state.selectedAttacker}/>
          </div>
        </div>
    </div>
    );
  }
});

module.exports = PokemonApp;
