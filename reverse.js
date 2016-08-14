//reverse strings

function reverseString(myString){
  var newString = "";
  for (i=myString.length-1; i>=0; i--){
      newString +=  myString[i];
  }
  console.log(newString);
  return newString;
}

reverseString("Enakshi")
