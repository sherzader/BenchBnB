var AppDispatcher = require('../dispatcher/appDispatcher');
var BenchConstants = require('../constants/benchConstants');

var ApiActions = {
  receiveAll: function (benches) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  }
};

module.exports = ApiActions;
