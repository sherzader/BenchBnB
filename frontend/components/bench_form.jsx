var React = require('react');
var ApiUtil = require('../util/apiUtil');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var BenchForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  blankAttrs: {
    description: '',
    lat: '',
    lng: '',
    seating: '',
  },

  getInitialState: function () {
    return this.blankAttrs;
  },

  componentDidMount: function () {
    var lat = this.props.location.query.lat;
    var lng = this.props.location.query.lng;
    this.setState({lat: lat, lng: lng});
  },

  handleChange: function (e) {
    this.setState({seating: e.target.value});
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
      options.push(<option key={i}>{i}</option>);
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
            type='text'
            id='bench_lat'
            valueLink={this.linkState("lat")}
          />
        </div>

        <div>
          <label htmlFor='bench_lng'>Longitude:</label>
          <input
            type='text'
            id='bench_lng'
            valueLink={this.linkState("lng")}
          />
        </div>

        <div>
          <label htmlFor='bench_seating'>Seating: </label>
          <select name='bench_seating' onChange={this.handleChange}>
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
