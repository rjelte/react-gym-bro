var React =     require('react');
var ReactDOM =  require('react-dom');

var ReferencePokemon = require('./ReferencePokemon');

var FormDefender = React.createClass({
  onButtonClick(e){
    e.preventDefault();
    var name = this.refs.name.value;
    var poke = ReferencePokemon.getPokemonReference(name);
    if (poke !== false){
      poke.cp = Number(this.refs.cp.value);
      this.props.onNewDefender(poke);
      this.refs.name.value = '';
    } else {
      this.refs.name.value = '';
    }
  },
  render() {
    return (
      <div className="col-xs-6 col-md-3">
        <h3>Defender</h3>
        <form onSubmit={this.onButtonClick}>
          <input className="form-control" type="text" ref="name" placeholder="pokemon"/>
          <input className="form-control" type="number" ref="cp" placeholder="cp" required />
          <button className="btn btn-primary form-control">Defender</button>
        </form>
      </div>
    );
  }
});

module.exports = FormDefender;
