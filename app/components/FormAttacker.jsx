var React = require('react');
var ReactDOM = require('react-dom');
var ReferencePokemon = require('./ReferencePokemon');

var FormAttacker = React.createClass({
  onButtonClick(e){
    e.preventDefault();
    var name = this.refs.name.value;
    var poke = ReferencePokemon.getPokemonReference(name);
    if (poke !== false){
      poke.attackIV = this.refs.atk_iv.value;
      poke.defenseIV = this.refs.def_iv.value;
      poke.hpIV = this.refs.hp_iv.value;
      poke.level = this.refs.lvl.value;
      this.props.onNewName(poke);
      this.refs.name.value = '';
    } else{
      this.refs.name.value = '';
    }
  },
  render() {
    //create array for IV's
    var arrayIV = [];
    for (var i=1; i<=15; i++){ arrayIV.push(i); }
    arrayIV = arrayIV.map(function(num){ return(<option key={"aIV"+num}>{num}</option>); });
    //create array for LVL
    var arrayLVL = [];
    for (var i=1; i<=40; i++){ arrayLVL.push(i); }
    arrayLVL = arrayLVL.map(function(num){ return(<option key={"aLVL"+num}>{num}</option>); });
    return (
      <div>
        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name" placeholder="attacker pokemon"/>
          <select ref="atk_iv" required>
            <option value="">Atk IV</option>
            {arrayIV}
          </select>
          <select ref="def_iv" required>
            <option value="">Def IV</option>
            {arrayIV}
          </select>
          <select ref="hp_iv" required>
            <option value="">HP IV</option>
            {arrayIV}
          </select>
          <select ref="lvl" required>
            <option value="">Level</option>
            {arrayLVL}
          </select>
          <button>Attacker</button>
        </form>
      </div>
    );
  }
});

module.exports = FormAttacker;
