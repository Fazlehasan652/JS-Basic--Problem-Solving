// qus-16: "Check if every number is positive",
const arr = [1, 2, -3]; // Output: true",

function positiveNamber(arr) {
  let value = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      console.log(arr[i]);
      console.log(false);
    }else{
        console.log(true)
    }
  }
  return value;
}
let result = positiveNamber(arr);
console.log(result);

//Problem Solved by Method Use
let newArr = arr.every((el) => el > 0);
// console.log(newArr)
