//check if substring in string

// function substring(substring, myString){
//
//   if (myString.indexOf(substring) !== -1)
//     console.log("found")
//   }
//
// }

function findString(substring, myString) {
  var i = 0;
  var j = 0;

  while (substring[j] != null && myString[i] != null) {
    if (myString[i] != substring[j]) {
      j = 0;
    } else {
      j++;
    }
    i++;
  }

  if (substring[j] == null){
    console.log(substring + " found!");
  } else {
    console.log(substring + " not found!");
  }
}
// palindrome numbers
// armstrong numbers
// reverse a string (recursive)
//

findString("moooooo", "noon");
