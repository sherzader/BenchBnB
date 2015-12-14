var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/appDispatcher');
var BenchStore = new Store(AppDispatcher);
var BenchConstants = require('../constants/benchConstants');

var _benches = {};

var resetBenches = function (benches) {
  _benches = {};
  benches.forEach(function (bench) {
    _benches[bench.id] = bench;
  });
};

var addBench = function (bench) {
  _benches[bench.id].push(bench);
};

BenchStore.all = function () {
  var benches = [];
  for (var id in _benches){
    benches.push(_benches[id]);
  }
  return benches;
};

BenchStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      resetBenches(payload.benches);
      this.__emitChange();
      break;
    case BenchConstants.BENCH_RECEIVED:
      addBench(payload.bench);
      this.__emitChange();
      break;
  }
};


module.exports = BenchStore;
