var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('../stores/bench');
var ApiUtil = require('../util/apiUtil');

var Map = React.createClass({
  getInitialState: function () {
    return ({ benches: BenchStore.all() });
  },
  _onChange: function () {
    var that = this;
    this.setState({ benches: BenchStore.all() });

    this.state.benches.forEach(function (bench) {
      var myLatlng = new google.maps.LatLng(bench.lat, bench.lng);
      var marker = new google.maps.Marker({
        position: myLatlng,
        title: 'Bench BnB!'
      });
      marker.setMap(that.map);
      marker.addListener('click', function() {
        that.map.setZoom(15);
        that.map.setCenter(marker.getPosition());
      });
      var infowindow = new google.maps.InfoWindow({
        content: "ELLO DER, CARE TO VISIT"
      });

      marker.addListener('click', function() {
        infowindow.open(marker.get('map'), marker);
      });
    });
  },
  componentDidMount: function(){
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);

    this.mapChange = BenchStore.addListener(this._onChange);
  },
  componentWillUnmount: function () {
    this.mapChange.remove();
  },
  render: function () {
    return(
      <div className="map" ref="map"></div>
    );
  }
});

module.exports = Map;
