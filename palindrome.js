//without library functions

function isPalidrome(myString){
  var counter = 0;
  for (i=0; i<(myString.length/2); i++){
    if (myString[i] == myString[myString.length-i-1]){
      counter++;
    }

  }//end for
  if (counter == myString.length/2){
    console.log("Word is a palindrome.");
  } else {
    console.log("Word is not a palindrome");
  }
}//end function

isPalidrome("anna");

//else with library functions: 
// split string, reverse, join, check if reverse string is same as original.
