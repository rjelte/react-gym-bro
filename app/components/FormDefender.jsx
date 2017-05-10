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
      this.props.onNewName(poke);
      this.refs.name.value = '';
    } else {
      this.refs.name.value = '';
    }
  },
  render() {
    return (
      <div>
        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name" placeholder="defender pokemon"/>
          <input type="number" ref="cp" placeholder="cp" required />
          <button>Defender</button>
        </form>
      </div>
    );
  }
});

module.exports = FormDefender;
