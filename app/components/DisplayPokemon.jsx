var React = require('react');
var ReactDOM = require('react-dom');
var ReferencePokemon = require('./ReferencePokemon');

var DisplayPokemon = React.createClass({
  onDelete(){
    this.props.onDelete(this.props.id);
  },
  onSelect(e){
    this.props.onSelect(this.props.id);
  },
  isActive(value){
    if (this.props.id.charAt(0) === 'd'){
      return (value == this.props.selectedDefender.key)? 'defender-selected': '';
    } else if (this.props.id.charAt(0) === 'a'){
      return (value == this.props.selectedAttacker.key)? 'attacker-selected': '';
    }
  },
  isAttacker(){
    if (this.props.id.charAt(0) === 'a'){
      return(['Atk.', Math.round(this.props.pokemon.adjustedAttack)]);
    } else {
      return (['Def.', Math.round(this.props.pokemon.adjustedDefense)]);
    }
  },
  render: function() {
    var types = [];
    if (this.props.type2 === ''){
      types.push(this.props.pokemon.type1);
    } else {
      types.push(this.props.pokemon.type1);
      types.push(this.props.pokemon.type2);
    }
    types = types.map(function(t, index){
      return (
        <div key={"t"+index} className={t}>{t}</div>
      );
    });
    var fastMoves = this.props.pokemon.possibleFM.map(function(m, index){
      return (
        <option key={"fm"+index}>{m.name}</option>
      );
    });
    var chargeMoves = this.props.pokemon.possibleCM.map(function(m, index){
      return (
        <option key={"cm"+index}>{m.name}</option>
      );
    });
    var side = this.isAttacker();
    return (
      <div onClick={this.onSelect} className={this.isActive(this.props.id)}>
        <div className="display-top">
          <div className="cp"><span>CP</span>{Math.round(this.props.pokemon.cp)}</div>
          <div className="name">{this.props.pokemon.name}</div>
          <div className="level"><span>LVL</span>{Math.round(this.props.pokemon.level)}</div>
        </div>
        <div className="display-mid">
          <div className="ivs">
            <div className="ivs-label">IV's</div>
            <div className="attack-iv"><span>A</span>{this.props.pokemon.attackIV}</div>
            <div className="defense-iv"><span>D</span>{this.props.pokemon.defenseIV}</div>
            <div className="hp-iv"><span>HP</span>{this.props.pokemon.hpIV}</div>
          </div>
          <div className="pic">
            img
          </div>
          <div className="main-adjusted">
            <div className="adjusted-label">{side[0]}</div>
            <div className="adjusted-value">{side[1]}</div>
          </div>
        </div>
        <div className="display-bot">
          <div className="types">
            {types}
          </div>
          <div className="fast-move">
            <div className="fast-choice">
              <select>
                {fastMoves}
              </select>
            </div>
            <div className="fast-dps">dps</div>
          </div>
          <div className="charge-move">
            <div className="charge-choice">
              <select>
                {chargeMoves}
              </select>
            </div>
            <div className="charge-dps">dps</div>
          </div>
          <button onClick={this.onDelete}>D</button>
        </div>
      </div>
    );
  }
});

module.exports = DisplayPokemon;
