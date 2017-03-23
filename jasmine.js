'use strict';

let answer = require('./hiker.js');

describe("answer", function() {
  // it("to life the universe and everything", function() {
  //   expect(answer()).toEqual(42);
  // });

  it("its a 1 by 1 grid", () () => {
    var grid = grid([1,1], [[0]]);
    expect(grid.nextState()).toEqual([ [0,0], [0,0] ]);
  });
  it("fewer than 2 live neighbors", function() {
    var grid = grid([2,2], [[0,1], [0,0] ]);
    expect(grid.nextState()).toEqual([ [0,0], [0,0] ]);
  });
});



// 1. Any live cell with fewer than two live neighbours
//    dies, as if caused by underpopulation.
// 2. Any live cell with more than three live neighbours
//    dies, as if by overcrowding.
// 3. Any live cell with two or three live neighbours
//    lives on to the next generation.
// 4. Any dead cell with exactly three live neighbours
//    becomes a live cell.
