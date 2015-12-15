var React = require('react');
var BenchStore = require('../stores/bench');
var ApiUtil = require('../util/apiUtil');
var Map = require('./map.jsx');

var Show = React.createClass({
  getInitialState: function () {
    return({bench: BenchStore.fetchBench(this.props.params)});
  },
  render: function () {
    return(
      <div><Map bench={this.state.bench}/></div>
    );
  }
});

module.exports = Show;
