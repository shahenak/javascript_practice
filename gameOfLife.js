//create function to accept arr size and arr
class GameofLife {

  constructor(size, grid) {
    this.size = size;
    this.grid = grid;

    // this.findLifeForm(this.size, this.grid);
  }


  this.nextState = (size, grid) => {
    for (var i = 0; i < grid.length; i++) {
      for (var j = 0; j < grid[i].length; j++) {
        var curMember = grid[i][j];
        var aliveCounter = 0;
        var deadCount = 0;
        //check curmember
        if (curMember == 1) {
          //check i-1, j -1
          if ((grid[i-1][j-1] == 1) {
            aliveCounter++;
          }
          //check i, j -1
          if ((grid[i][j-1] == 1) {
            aliveCounter++;
          }
          else {
            deadCount++;
          }
          //check i+1, j -1
          //check i-1, j
          //check i-1, j + 1
          //check i+1, j - 1
          //check i+1, j + 1
        }


      }
    }
    return nextState;
  }
}
