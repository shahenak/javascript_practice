// write a function that implements a binary search 

const num = 5;
const arr = [1,7,3,9,2,5,4,2,1,1];

function binarySearch(array, number) {

    const length = array.length;
    // sort array 
    const sorted = array.sort();
    // find middle point 
    let midIndex = Math.floor(array.length/2);

    // check if num is the middle element 
    if (sorted[midIndex] == number) {

        console.log("number occurs at index: ", midIndex);
    }
    // if mid is greater than number, search bottom half of array   
    else if (sorted[midIndex] > number) {

        binarySearch(sorted.splice(0, midIndex), number);
    }
    // if mid is less than number, search top half of array 
    else if (sorted[midIndex] < number) {

        binarySearch(sorted.splice(midIndex + 1, length), number);
    } 
    else {

        console.log("number not here");
    }
}

binarySearch(arr, num);
