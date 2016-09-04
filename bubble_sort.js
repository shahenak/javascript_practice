//bubble sort compares adjacent element to current and bubbles larger element upwards
//O(n^2), great for small data sets

function bubble_sort(array){
  //outer loop is number of passes
  for (i=0; i < array.length; i++){
    //iterates through array per pass and decreases length of array checked because largest element already bubbled to end
    for (j=0; j < array.length-i-1; j++){
      if (array[j+1] < array[j]){
        var temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp
      }
    }
  }
  return array;
}

var array = [2,3,1,7,4,6,7,5,9];
console.log(bubble_sort(array));
