var React = require('react');
var Map = require('./map.jsx');
var Index = require('./index.jsx');

var Search = React.createClass({
  clickMapHandler: function (coords) {
    this.props.history.pushState(null, "/benches/new",
                                  coords);
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
