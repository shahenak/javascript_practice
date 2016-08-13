

function binarySearch(array, i){
	var sorted = array.sort()
	var length = sorted.length
	var mid = Math.floor(sorted.length/2);
  console.log(sorted[mid], i);

  if (sorted[mid] == i){
  	console.log("Match occured at index: " + mid);
  } else if (sorted[mid] < i && length > 1) {
    console.log('mid lower', sorted[mid], i);
    binarySearch(sorted.splice(mid, length), i);
  } else if (sorted[mid] > i && length > 1) {
    console.log('mid higher', sorted[mid], i);
    binarySearch(sorted.splice(0, mid), i);
  } else {
    console.log('not here');
    return -1;
  }
}

var array = [1, 4, 2, 2, 4, 6, 8, 3, 9, 5, 1];
binarySearch(array, 12);
