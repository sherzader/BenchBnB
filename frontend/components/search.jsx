var React = require('react');
var Map = require('./map.jsx');
var Index = require('./index.jsx');

var Search = React.createClass({
  clickMapHandler: function () {
    this.props.history.pushState(null, "/benches/new", {});//this.props.location.query);
  },

  render: function () {
    return(
      <div>
        <Map clickMapHandler={this.clickMapHandler} />
        <Index />
      </div>
    );
  }
});


module.exports = Search;
