//quick sort finds pivot point
//pointer starts at left and right
//left pointer determines if item in array is less than pivot. if it is, shift one more step and compare until item is greater than pivot
//right pointer determines if item is greater than pivot. if it is, shit one more step and compare until item is less than pivot
//at stopping point for both pointers, swap elements via swap function
//move pointers one more step in each direction
//if pointers equal (at pivot), more one more step and stop

function swap(array, item1, item2){
  var temp = array[item1];
  array[item1] = array[item2];
  array[item2] = temp;
}

function partition(array, left, right){
  var pivot = array[Math.floor((right+left)/2)];
  var i = right;
  var j = left;

  while (i <= j){
    while (items[i] < pivot){
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    //runs when while conditions above aren't met
    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i; //used to determine where partitioning will start next time
}

function quick_sort(array, left, right){
  var index;

  if (array.length > 1) {
    index = partition(array, left, right);
    if (left < index - 1){
      quick_sort(items, left, index - 1);
    }
    if (index < right) {
      quick_sort(items, index, right)
    }
  }
  return array;
}
