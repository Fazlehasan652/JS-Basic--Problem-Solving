u// qus-15: "Sum all numbers using .reduce()",
const arr = [1, 2, 3]; // Output: 6",
function sumNumber(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
let result = sumNumber(arr);
console.log(result);

//Problem Solved by Method Use

let res = arr.reduce((acc, el) => {
  return (acc += el);
}, 0);
console.log(res);
