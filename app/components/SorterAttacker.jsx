var React =     require('react');
var ReactDOM =  require('react-dom');

var SorterAttacker = React.createClass({
  sort(e){
    console.log(e);
    this.props.onSort(e.target.value);
  },
  render(){
      return (
        <div>
          <form>
            <select onChange={this.sort}>
              <option>Original</option>
              <option>CP</option>
              <option>Level</option>
              <option>Adjusted Attack</option>
            </select>
          </form>
        </div>
      );
  }
});

module.exports = SorterAttacker;
