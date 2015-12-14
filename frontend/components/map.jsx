var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('../stores/bench');
var ApiUtil = require('../util/apiUtil');
var History = require('react-router').History;

var Map = React.createClass({
  mixins: [History],

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
      var infowindow = new google.maps.InfoWindow({
        content: "ELLO DER, CARE TO VISIT?!"
      });
      marker.setMap(that.map);
      var streetview = that.map.getStreetView();
      marker.addListener('click', function() {
        infowindow.open(marker.get('map'), marker);
        streetview.setPosition(marker.position);
        streetview.setVisible(true);
        // that.map.setCenter(marker.getPosition());
      });
    });
  },
  componentDidMount: function(){
    var that = this;
    var map = ReactDOM.findDOMNode(this.refs.map);
    var mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);

    this.map.addListener('click', function () {
      that.props.clickMapHandler();
    });

    this.map.addListener('idle', function () {
      var LatLngBounds = that.map.getBounds();
      var ne = LatLngBounds.getNorthEast();
      var sw = LatLngBounds.getSouthWest();
      ApiUtil.fetchBenches({
        "northEast" : { lat : ne.lat(), lng : ne.lng() },
        "southWest" : { lat : sw.lat(), lng : sw.lng() }
      });
    });

    this.mapChange = BenchStore.addListener(this._onChange);
  },
  componentWillUnmount: function () {
    this.mapChange.remove();
  },
  render: function () {
    return(<div className="map" ref="map"></div>);
  }
});

module.exports = Map;
