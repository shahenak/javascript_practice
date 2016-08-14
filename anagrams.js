//check two strings to see if they're anagrams - have same characters

function anagram(string, string2){
  //first check if same number of characters
  if (string.length == string2.length){
    //push contents of string 1 into string 2 and check for number of duplicates equal to string length/2
    var newString = string + string2;

    duplicate(newString);
    // for (i=0; i < string2.length; i++){
    //   //push
    //   var len = string.length
    //   string[len] = string2[i]
    //   len++;
    //   string.length = len;
    //}
  }
}

function duplicate(newString){
  var counter = 0;
  for (var i=0; i<newString.length; i++){
    for (var j=i+1; j < newString.length; j++){
      if (newString[i] == newString[j]){
        counter++;
      }
    }//end inner for
  }//end outer for
  if (counter == (newString.length)/2){
    console.log("Anagram");
  } else {
    console.log("Not Anagram");
  }
}//end function

anagram("race", "care");

//alternatively can sort strings - split, sort, join - and see if they're equal. 
