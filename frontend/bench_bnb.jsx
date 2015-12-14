var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    BenchStore = require('./stores/bench'),
    ApiUtil = require('./util/apiUtil'),
    Search = require('./components/search.jsx');

var App = React.createClass({
  render: function () {
    return(
      <div>
        <header><h1>BenchBnB</h1></header>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Search}></IndexRoute>
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById('root');
  ReactDOM.render(<Router>{routes}</Router>, root);
});
