//iterate through elements and find smallest, place at first index of array and repeat for i=1 and beyond elements

function selection_sort(array){
  var l = array.length
  //number of passes
  for (i=0; i < l - 1 ; i++){
    var min = i //i hold initial min number and min holds current min number specific to pass
    for (j=i+1; j < l; j++){ //j = i + 1 b/c we only need to go through unsorted array
      if (array[j] < array[min]){
        min = j
      }
      if (min != i) {
        //if current min position not equal to initial, swamp numbers so initial min is current min 
        var temp = array[i]
        array[i] = array[min]
        array[min] = temp
      }
    }
  }
  return array;
}

var array = [13,5,2,6,7,2,9,4,31,4,6,65,1]
console.log(selection_sort(array))
