//write function to find smallest and second smallest elements of array

function smallestElements(array){
  var l = array.length;
  var smallest = array[0];
  var secondSmallest = array[1];
  for (i=0; i<l; i++){
    if (array[i] < smallest){
      secondSmallest = smallest;
      smallest = array[i];
    } else if (smallest !== array[i] && secondSmallest > array[i]){
      secondSmallest = array[i];
    }
  } //end for loop
  console.log("smallest: " + smallest + ", second smallest: " + secondSmallest);
} //end function

var array = [1,5,6,2,6,7,3,6,3]
smallestElements(array);
