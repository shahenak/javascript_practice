//find subarray in array with largest sum

//very inefficient
//1. outer loop i
//2. inner loop j
//3. take array slices from i to j
//4. check if current slice is greater than prev slice and store current slice accordingly


function findSum(array){
  var l = array.length;
  var sum = 0
  //initialize to negative number for first condition of sum > bestSum to always hold true
  var bestSum = -1;
  var length = 0;
  var bestLength = 0;

  for (i=0; i<l; i++){
    //initally will run

    if (sum + array[i] >= 0) {
      sum += array[i]
      length++;
    } else {
      length = 1;
      sum = array[i]
    }
    if (sum > bestSum){
      //initially bestSum = 0 & bestLength = 0
      bestSum = sum;
      bestLength = length;
    } else {
      length = 0;
      sum = 0;
    }
  }
    console.log(bestSum + " at " + bestLength);
}

  var array = [3,-4,4,6,-8,2,4];
  findSum(array);
