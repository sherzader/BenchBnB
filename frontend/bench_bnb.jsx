var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('./stores/bench');
var ApiUtil = require('./util/apiUtil');
var Search = require('./components/search.jsx');

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
  <Search />,
  document.getElementById('root'));
});
