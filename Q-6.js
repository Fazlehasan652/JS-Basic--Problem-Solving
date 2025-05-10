// qus-06: "Count how many times a specific number appears",
const nums = [1, 2, 1, 3, 1]; // Count of 1 = 3",

// Problem Solved by function Use
function count(val, arr) {
    let value = "";
  for (const el of arr) {
    if (el == val) {
      value += val;
      
    } 
  }

  return value;
}
let countNum = count(1,nums)
console.log(countNum.length)
