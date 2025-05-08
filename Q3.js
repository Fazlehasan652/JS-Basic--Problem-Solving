const { result } = require("lodash");

// qus03: "Find the largest number in an array",
const nums = [10, 50, 30,20,80, 70]; // Output: 70",

let max1 = nums[0];
console.log(".......Initial value........")
        console.log(max1)
        console.log()
for (let i = 0; i < nums.length; i++) {
    console.log(".......Befor not Matching value........")
    console.log("3rd Data " + nums[2] + ' ' + (30 > 50))
    console.log("4th Data " + nums[3] + ' ' + (20 > 50))
    console.log("6th Data " + nums[5] + ' ' + (70 > 80))
    console.log()
        

    if (nums[i] > max1 ) {
        console.log(".......After Match Condition value........")
        console.log("1st Data " + nums[0] + ' ' + (10 > 0))
        console.log("2nd Data " + nums[1] + ' ' + (50 > 10))
        console.log("5th  Data " + nums[4] + ' ' + (80 > 50))
        console.log()
        
        // console.log(30 > 50)
        // console.log(70 > 50)
        max1 = nums[i]
        // console.log(max1)
    }
    
}
// console.log(max1)
// console.log(`largest Number is ${max1}`)

// Second Option Function Use 

function largest(arr) {
    let max = arr[0];
    // console.log(max)
 
    // Traverse from second and compare
    // every element with current max
    for (let i = 0; i < arr.length; i++)
        if (arr[i] > max){
            // console.log(arr[i] > max)
            console.log("................")
            max = arr[i];
            console.log(max)
        }
            
    return max;
}
const arr = [5,10, 324,88894,2, 45, 90, 98008];
// let max = largest(arr)
let max =  largest(nums)
console.log(`largest Number is ${max}`);

//  Math.max Method Use 
var largest = Math.max.apply(Math, arr);
console.log(largest)

//  Math.min Method Use 
var lowest = Math.min.apply(Math, arr);
console.log(lowest)