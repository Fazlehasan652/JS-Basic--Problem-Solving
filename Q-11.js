// qus-11: "Double all numbers in an array",
const arr = [1, 2, 3]; // Output: [2, 4, 6]",

function doubleNumber(arr){
     let newArray = []
 for (let i  = 0; i  < arr.length; i ++) {
        newArray.push(arr[i]*2) 
 }
 return newArray
}
let result = doubleNumber(arr)
console.log(result)

//Problem Solved by Method Use
let newArr = arr.map(el=> el*2)
console.log(newArr)