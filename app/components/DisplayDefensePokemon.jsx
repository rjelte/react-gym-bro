//var React = require('react');
var ReactDOM = require('react-dom');
var ReferencePokemon = require('./ReferencePokemon');

import React from 'react'

//<img src={"svg/" + this.props.pokemon.id + "-" + this.props.pokemon.name.toLowerCase() + ".svg"} />

var DisplayDefensePokemon = React.createClass({
  fMoveSelect(e){
    var testID = this.props.id;
    var move;
    this.props.pokemon.possibleFM.forEach(function(m){
      if (m.name === e.target.value){move = m;}
    });
    this.props.onFMoveChange(move, testID);
  },
  onDelete(){
    this.props.onDelete(this.props.id);
  },
  onSelect(e){
    this.props.onSelect(this.props.id);
  },
  setTypes(){
    var types = [];
    if (!this.props.pokemon.type2){
      types.push(this.props.pokemon.type1);
    } else {
      types.push(this.props.pokemon.type1);
      types.push(this.props.pokemon.type2);
    }
    types = types.map(function(t, index, ar){
      if (ar.length === 2){
        return (
          <div key={"t"+index} className={t + " col-xs-6 center "}>{t}</div>
        );
      } else {
        return (
          <div key={"t"+index} className={t + " col-xs-12 center"}>{t}</div>
        );
      }
    });
    return types;
  },
  setFastMoveOptions(){
    var fastMoves = this.props.pokemon.possibleFM.map(function(m, index){
      return (
        <option key={"fm"+index}>{m.name}</option>
      );
    });
    return fastMoves;
  },
  setChargeMoveOptions(){
    var chargeMoves = this.props.pokemon.possibleCM.map(function(m, index){
      return (
        <option key={"cm"+index}>{m.name}</option>
      );
    });
    return chargeMoves;
  },
  render: function() {
    var types = this.setTypes();
    var fastMoves = this.setFastMoveOptions();
    var chargeMoves = this.setChargeMoveOptions();
    var active = (this.props.id == this.props.selectedDefender.key)? 'defender-selected': '';
    return (
      <div className={active + " display-pokemon"}>
        <div>{this.props.pokemon.fMove.name}</div>
        <div className="row">
          <div className="cp col-xs-3 center"><span>CP</span>{Math.round(this.props.pokemon.cp)}</div>
          <div className="name col-xs-6 center">{this.props.pokemon.name}</div>
          <div className="level col-xs-3 center"><span>LVL</span>{Math.round(this.props.pokemon.level)}</div>
        </div>
        <div className="row">
          <div className="ivs col-xs-2">
            <div className="ivs-label">IV's</div>
            <div className="attack-iv"><span>A</span>{this.props.pokemon.attackIV}</div>
            <div className="defense-iv"><span>D</span>{this.props.pokemon.defenseIV}</div>
            <div className="hp-iv"><span>HP</span>{this.props.pokemon.hpIV}</div>
          </div>
          <div className="pic col-xs-8 center">
            IMAGE
          </div>
          <div className="main-adjusted col-xs-2">
            <div className="adjusted-label">Def.</div>
            <div className="adjusted-value">{Math.round(this.props.pokemon.adjustedDefense)}</div>
          </div>
        </div>
        <div className="row">
          {types}
        </div>
        <div className="row">
          <div className="fast-move col-xs-6">
            <select onChange={this.fMoveSelect} >
              {fastMoves}
            </select>
          </div>
          <div className="fast-dps col-xs-4 center">dps</div>
        </div>
        <div className="row">
          <div className="charge-move col-xs-6">
            <select>
              {chargeMoves}
            </select>
          </div>
          <div className="charge-dps col-xs-4 center">dps</div>
        </div>
        <button className="btn btn-danger" onClick={this.onDelete}>D</button>
        <button className="btn btn-success" onClick={this.onSelect}>Select</button>
      </div>
    );
  }
});

module.exports = DisplayDefensePokemon;
