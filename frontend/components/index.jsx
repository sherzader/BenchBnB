var React = require('react');
var BenchStore = require('../stores/bench');
var ApiUtil = require('../util/apiUtil');

var Index = React.createClass({
  getInitialState: function () {
    return ({ benches: BenchStore.all() });
  },
  _onChange: function () {
    this.setState({ benches: BenchStore.all() });
  },
  componentDidMount: function () {
    this.benchListener = BenchStore.addListener(this._onChange);
    // ApiUtil.fetchBenches();
  },
  componentWillUnmount: function () {
    this.benchListener.remove();
  },
  render: function () {
    var benches = this.state.benches.map(function (bench) {
      return (<div className="bench" key={bench.id}>
              <li key={bench.id}>
              {bench.description}</li><br></br>
              {bench.lat}, {bench.lng} </div>
              );
    });
    return(
      <div>{benches}</div>
    );
  }
});

module.exports = Index;
