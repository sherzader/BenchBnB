var ApiActions = require('../actions/apiActions.js');

var ApiUtil = {
  fetchBenches: function (bounds){
    $.ajax({
      url: "api/benches",
      data: { bounds: bounds },
      success: function (benches) {
        ApiActions.receiveAll(benches);
      }
    });
  },
  fetchBench: function (id) {
    $.ajax({
      url: "api/benches" + id,
      success: function (bench) {
        ApiActions.receiveBench(bench);
      }
    });
  },
  createBench: function (bench, callback) {
    $.ajax({
      url: "api/benches",
      method: "POST",
      data: {bench: bench},
      success: function (b) {
        ApiActions.receiveBench(b);
        callback && callback(b.id);
      }
    });
  }
};

module.exports = ApiUtil;
