// qus-10: "Sum only the odd numbers in an array",
const nums = [1, 2, 3, 4, 5]; // Output: 9",

function oddNumberSum(arr) {
    let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        sum += arr[i]
        // console.log(arr[i])
        
    }
  }
  return sum
}
let result = oddNumberSum(nums);
// console.log(result);

//Problem Solved by Method Use

let res = nums.reduce((acc,el)=>{
   
   return  el % 2 !== 0 ? acc + el : acc
})


// Printing output
console.log(res);



const arr=[1,2,3,4,5,6,7]

const result1 = arr.reduce((accumulator, currentValue) =>
  currentValue % 2 !== 0 ? accumulator + currentValue : accumulator
)

console.log(result1)