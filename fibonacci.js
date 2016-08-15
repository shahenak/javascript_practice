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
