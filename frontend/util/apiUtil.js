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
  }
};

module.exports = ApiUtil;
