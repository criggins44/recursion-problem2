//Recursion Problem 2

/*
Write a JavaScript function to compute the sum of an array of integers
*/
const practiceArray = [1,2,3];

function sumArray(arr) {

  if (arr.length === 1) {
    return arr[0];
  }
  else {
    return arr.pop() + sumArray(arr);
//takes the last element of the array and adds it with the last element of the next iteration of the function

  }
};

console.log(sumArray(practiceArray));
