var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/appDispatcher');
var FilterBenchStore = new Store(AppDispatcher);
var BenchConstants = require('../constants/benchConstants');

var _filtered_benches = {};

var resetBenches = function (benches) {
  _filtered_benches = {};
  benches.forEach(function (bench) {
    _benches[bench.id] = bench;
  });
};

var addBench = function (bench) {
  _benches[bench.id] = bench;
};

FilterBenchStore.all = function () {
  var benches = [];
  for (var id in _benches){
    benches.push(_benches[id]);
  }
  return benches;
};

FilterBenchStore.__onDispatch = function (payload) {
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


module.exports = FilterBenchStore;
