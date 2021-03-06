// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This benchmark is based on the six-speed benchmark build output.
// Copyright 2014 Kevin Decker <https://github.com/kpdecker/six-speed/>


new BenchmarkSuite('ArrayDestructuring-ES5', [1000], [
  new Benchmark('ES5', false, false, 0, ES5),
]);

new BenchmarkSuite('ArrayDestructuring-ES6', [1000], [
  new Benchmark('ES6', false, false, 0, ES6),
]);

// ----------------------------------------------------------------------------
// Benchmark: ES5
// ----------------------------------------------------------------------------

function ES5() {
  "use strict";
  var data = [1, 2, 3];
  var c = data[0];
  return c;
}


// ----------------------------------------------------------------------------
// Benchmark: ES6
// ----------------------------------------------------------------------------

function ES6() {
  "use strict";
  var data = [1, 2, 3];
  var [c] = data;
  return c;
}
