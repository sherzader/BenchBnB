var React = require('react');
var BenchStore = require('../stores/bench');
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

  createBench: function (e) {
    e.preventDefault();
    var bench = {};
    Obj
  },
  render: function () {
    return(

    );
  }
});

module.exports = BenchForm;
