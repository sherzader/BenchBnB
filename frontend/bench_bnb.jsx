var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('./stores/bench');
var ApiUtil = require('./util/apiUtil');
var Index = require('./components/index.jsx');

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
  <Index />,
  document.getElementById('root'));
});
