//given list of words, detect that sentence only contains words from that list
var listArr = ["I", "dog", "used", "have", "a", "to"];
var sentence = "I have a dog";
// checkList(listArr, sentence);

function checkList(listArr, sentence){
  //sort array
  var arrSorted = listArr.sort();
  console.log(arrSorted);
  //convert string to array and sort
  var sentenceToArr = sentence.split(" ").sort();
  console.log(sentenceToArr);
  counter = 0;

  for (i=0; i < sentenceToArr.length; i++){
    if (arrSorted[i] == sentenceToArr[i]){
      counter++;
    }
  }
  //check to see if same or greater number of words present in sentence are in list of words
  if (counter == sentenceToArr.length) {
    console.log("sentence contains words from list");
  } else {
    console.log("sentence does not contain words from list");
  }
}


//using hash map
function hashMap(listArr, sentence){
  //convert string to array
  //initialize empty hash map
  var counter = 0;
  var sentenceToArr = sentence.split(" ");
  var myMap = new Map;

  for (i=0; i < listArr.length; i++){
    if (myMap.has(listArr[i]) == false){
      myMap.set(listArr[i], i);
    }
  }

  //check if array substrings are present in myMap
  for (j=0; j < sentenceToArr.length; j++){
    if (myMap.has(sentenceToArr[j]) == true){
      counter++;
    }
  }
  if (counter == sentenceToArr.length){
    console.log("Sentence contains words from list.");
  } else {
    console.log("Sentence DOES NOT contain words from list.");
    console.log(counter);

  }
}

hashMap(listArr, sentence);
