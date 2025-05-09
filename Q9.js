// qus-09: "Find the index of the first negative number",
const arr = [3, 5, -1, 6]; // Output: 2",

function negative(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      console.log(`Array Element =  ${arr[i]} index is ${i}`);
      return i;
    }
  }
}
let result = negative(arr);
console.log(result);

//Problem Solved by Method Use

// input array
let arr1 = [12, 34, 13, -1, -4, 45, -55, -66];

// Printing negative numbers using forEach method
arr1.forEach((number) => {
  if (number < 0) {
    // Printing result
    console.log(number);
  }
});

// Input arr
let arr2 = [12, 34, 13, -1, -4, 45, -55, -66];

// Filtering and printing negative
// numbers  using filter method
let res = arr2.filter((number) => number < 0);

// Printing output
console.log(res);
