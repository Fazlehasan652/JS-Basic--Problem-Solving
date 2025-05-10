// qus-19: "Convert number array to string array",
const arr = [1, 2, 3]; // Output: ["1", "2", "3"]',
function stringNumber(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].toString());
  }
  return newArr;
}

let result = stringNumber(arr);
console.log(result);

//Problem Solved by Method Use
let strArray = arr.map((el) => el.toString());
console.log(strArray);
