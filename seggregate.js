//seggregate array of numbers into even and odd

function splitArr(array){
  var even = [];
  var odd = []
  var l = array.length;
  for (i=0; i<l; i++){
    if (array[i] % 2 == 0){
      //essentially how push works
      //find length of new array
      var len = even.length
      //add value to index of new array that's equal to length
      even[len] = array[i]
      // increment length since new element added
      len++;
      // length of new array has changed
      even.length = len;
    } else if (array[i] % 2 == 1){
      var len = odd.length
      odd[len] = array[i]
      len++;
    }
  } //end for
  console.log(even);
  console.log(odd);
  rejoin(even, odd);
} //end function

function rejoin(even, odd){
  var newArr = [];
  var l = even.length
  for (i=0; i < l; i++){
    newArr[i] = even[i];
  } // end for
  for (i=0; i < odd.length; i++){
    newArr[i + l] = odd[i];
  } // end for
  console.log(newArr);
  return newArr;
}

var array = [1,2,3,4,5,6]
splitArr(array);
