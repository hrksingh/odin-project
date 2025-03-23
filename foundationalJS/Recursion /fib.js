function fibrec(number, fibArray = [0]) {
  if (number < 0) {
    console.log("Input should be a non-negative integer");
    return;
  }
  if (number === 0) {
    return fibArray;
  }
  if (number === 1) {
    return fibArray;
  }
  if (fibArray.length < number) {
    if (fibArray.length === 1) {
      fibArray.push(1);
    } else {
      fibArray.push(
        fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]
      );
    }
    return fibrec(number, fibArray);
  }
  return fibArray;
}

console.log(fibrec(1));
console.log(fibrec(2));
console.log(fibrec(3));
console.log(fibrec(5));
console.log(fibrec(8));
