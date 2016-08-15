//reverse strings

function reverseString(myString){
  var newString = "";
  for (i=myString.length-1; i>=0; i--){
      newString +=  myString[i];
  }
  console.log(newString);
  return newString;
}

// reverseString("Enakshi")

//recursive solution
// strings not mutable

function recursiveReverse(myString, newString, i){
  if (i < 0) {
    return newString;
  }

  newString += myString[i];
  //console.log(newString);
  recursiveReverse(myString, newString, --i);
}


function helper(myString){
  var newString = "";
  var i = myString.length-1;
  recursiveReverse(myString, newString, i);
  return newString;
}

var newString = helper("Enakshi");
console.log(newString);
