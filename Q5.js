// qus-05: "Check if a number exists in an array",
const nums = [10, 3, 1, 5, 7, 50]; // output true or false",

// Problem Solved by function Use
function isHas(val, arr) {
  let value = "";
  for (const el of arr) {
    if (el == val) {
      value = true;
      // console.log(el)
      break;
    } else if (el !== val) {
      value = false;
      // console.log(el)
    }
  }

  return value;
}
let result = isHas(10, nums);
console.log(result);

//Problem Solved by Method Use

let result1 = nums.some((el) => el == 7);
// console.log(result)
let result2 = nums.some((el) => el == 10);
// console.log(result2)
