var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/appDispatcher');
var _benches = [];
var BenchStore = new Store(AppDispatcher);
var BenchConstants = require('../constants/benchConstants');

BenchStore.all = function () {
  return _benches.slice();
};

var resetBenches = function (benches) {
  _benches = benches;
};

BenchStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      resetBenches(payload.benches);
      BenchStore._emitChange();
      break;
  }
};


window.BenchStore = BenchStore;
module.exports = BenchStore;
