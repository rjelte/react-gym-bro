var React = require('react');
var ReactDOM = require('react-dom');
var ReferencePokemon = require('./ReferencePokemon');

var FormAttacker = React.createClass({
  onButtonClick(e){
    e.preventDefault();
    var name = this.refs.name.value;
    var poke = ReferencePokemon.getPokemonReference(name);
    if (poke !== false){
      poke.attackIV = Number(this.refs.atk_iv.value);
      poke.defenseIV = Number(this.refs.def_iv.value);
      poke.hpIV = Number(this.refs.hp_iv.value);
      poke.level = Number(this.refs.lvl.value);
      this.props.onNewAttacker(poke);
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
      <div className="col-xs-6 col-md-9">
        <h3>Attacker</h3>
        <form onSubmit={this.onButtonClick}>
          <input className="form-control" type="text" ref="name" placeholder="pokemon"/>
          <div className="form-inLine">
            <div className="row">
              <div className="col-xs-6 col-sm-3">
                <select className="form-control" ref="atk_iv" required>
                  <option value="">Atk IV</option>
                  {arrayIV}
                </select>
              </div>
              <div className="col-xs-6 col-sm-3">
                <select className="form-control" ref="def_iv" required>
                  <option value="">Def IV</option>
                  {arrayIV}
                </select>
              </div>
              <div className="col-xs-6 col-sm-3">
                <select className="form-control" ref="hp_iv" required>
                  <option value="">HP IV</option>
                  {arrayIV}
                </select>
              </div>
              <div className="col-xs-6 col-sm-3">
                <select className="form-control" ref="lvl" required>
                  <option value="">Level</option>
                  {arrayLVL}
                </select>
              </div>
            </div>
          </div>
          <button className="btn-danger form-control">Attacker</button>
        </form>
      </div>
    );
  }
});

module.exports = FormAttacker;
