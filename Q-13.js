// qus-13: "Create a new array with only strings from a mixed array",
const arr = [1, "a", 2, "b"]; // Output: ["a", "b"]',

function stringsNamber(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
let result = stringsNamber(arr);
console.log(result);

//Problem Solved by Method Use
let newArr = arr.filter(el=> typeof el === "string")
console.log(newArr)