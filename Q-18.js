// qus-18: "Find the first number greater than 10",
const arr = [5, 8, 15, 3]; // Output: 15",

function greatNumber(arr, num) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      sum = arr[i];
    }
  }
  return sum;
}
let result = greatNumber(arr, 10);
console.log(result);

//Problem Solved by Method Use
let res = arr.filter((el) => el > 10);
console.log(res);
