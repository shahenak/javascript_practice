//recursion

function fib(i){

  if (i === 0){
  return i;
} else if (i === 1){
  return i;
} else {
  return fib(i-1) + fib(i-2);
  }
}

console.log(fib(6));


function fibonacci(i){
  var array = [0, 1];
  var j = 0;
  while (j < i){
    array.push(array[j] + array[(j+1)]);
    j++;
  }
  console.log(array);
}

fibonacci(6);
