//function should identify first set of duplicates in array

//assume sorted

function duplicates(array){
  var newArr = array.sort();
  for (i=0; i < array.length; i++){
    if (newArr[i] == newArr[i+1]){
      var duplicate = newArr[i];
      index(array, duplicate)
    }
  }//end for
}//end function

function index(array, duplicate){
  for (i=0; i < array.length; i++){
    if (array[i] == duplicate){
      console.log(array[i] + " duplicated at index of " + i)
    }
  }//end for
}//end function

// var array = [1,3,6,2,7,8,2,7,3,6,8,3]
// duplicates(array);


//n^2

function duplicate(array){
  loop1:
  for (var i=0; i<array.length; i++){
    loop2:
    for (var j=i+1; j < array.length; j++){
      if (array[i] == array[j]){
        break loop1;
      }
    }//end inner for
  }//end outer for
  console.log(array[i] + " duplicated at index of " + i)
}//end function

// var array = [1, 2, 3, 4, 2, 6, 4, 7, 8, 5]
// duplicate(array);

function duplicateHash(array){
  var myMap = new Map();
  var min = -1;
  for (i=0; i<array.length; i++){
    if(myMap.has(array[i]) == false) {
      myMap.set(array[i],i);
    } else {
      if (min == -1) {
        min = myMap.get(array[i]);
      } else if (myMap.get(array[i]) < min) {
          min = myMap.get(array[i]);
      }
    }
  }
    console.log('pos: ', min);
}


var array = ["e", "n", "a", "a", "k", "e"];
duplicateHash(array)
