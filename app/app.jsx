var React = require('react');
var ReactDOM = require('react-dom');
//var fs = require('fs');
var PokemonApp = require('./components/PokemonApp');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');



ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={PokemonApp}>

    </Route>
  </Router>,
  document.getElementById('app')
);
