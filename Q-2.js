//  qus-02: "Count how many even numbers are in an array",
const nums = [1, 2, 3, 4, 5, 6, 7]; // Output: 3",

//   Even Number Solving
let totalEven = "";
for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  // console.log(num)
  if (num % 2 == 0) {
    totalEven += num;
  }
}
console.log(totalEven.length);
console.log(totalEven);
console.log(totalEven.split(""));

//   Odd Number Solving
let totalOdd = "";

for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  // console.log(num)
  if (num % 2 !== 0) {
    totalOdd += num;
  }
}
console.log(totalOdd.length);
console.log(totalOdd);
let NewArr = totalOdd.split("");
console.log(NewArr);

//   Problem Solving Use For Method

let even = nums.filter((el) => {
  return el % 2 == 0;
});
console.log(even);
console.log(even.length);
