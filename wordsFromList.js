// see if sentence only contains words from a list

const listArr = ["the", "dog", "ran", "squirrel", "boy", "blue", "after"];
const sentence = "the dog ran away from the boy";
const sentence2 = "the dog ran after the squirrel";

function checkSentence(arr, sentence) {

    let counter = 0;
    const sentenceArr = sentence.split(" ");
    for (let i = 0; i < sentenceArr.length; i++) {

        for (let j = 0; j < arr.length; j++) {

            if (sentenceArr[i] == arr[j]) {

                counter++;
            }
        }
    }

    if (counter == sentenceArr.length) {

        console.log("true");
    } else {

        console.log("false");
    }
}

// checkSentence(listArr, sentence);
checkSentence(listArr, sentence2);