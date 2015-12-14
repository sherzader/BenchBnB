var React = require('react');
var ApiUtil = require('../util/apiUtil');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var BenchForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  blankAttrs: {
    description: '',
    lat: 37.7791909,
    lng: -122.4189681,
    seating: 1,
  },

  getInitialState: function () {
    return this.blankAttrs;
  },

  createBench: function (e) {
    e.preventDefault();
    var bench = this.state;

    ApiUtil.createBench(bench, function (id) {
      this.history.pushState(null, "/benches/" + id, {});
    }.bind(this));
    this.setState(this.blankAttrs);
  },
  render: function () {
    var options = [];
    for (var i = 1; i <= 10; i++){
      options.push(<option key={i}
                           valueLink={this.linkState("seating")}>
                           {i}</option>);
    }
    return(
      <form className='new-bench' onSubmit={this.createBench}>
        <div>
          <label htmlFor='bench_description'>Description:</label>
          <input
            type='text'
            id='bench_description'
            valueLink={this.linkState("description")}
          />
        </div>

        <div>
          <label htmlFor='bench_lat'>Latitude:</label>
          <input
            type='number'
            step='0.000001'
            id='bench_lat'
            valueLink={this.linkState("lat")}
          />
        </div>

        <div>
          <label htmlFor='bench_lng'>Longitude:</label>
          <input
            type='number'
            step='0.000001'
            id='bench_lng'
            valueLink={this.linkState("lng")}
          />
        </div>

        <div>
          <label htmlFor='bench_seating'>Seating: </label>
          <select name='bench_seating'>
            {options}
          </select>
        </div>

        <button>Create Bench</button>
        <br />
      </form>
    );
  }
});

module.exports = BenchForm;
