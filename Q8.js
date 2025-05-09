// qus-08: "Find all numbers greater than 10",
const nums = [5, 15, 10, 20]; // Output: [15, 20]",

let arr1 = [1, 12, 15, 16, 78, 89, 53];

function lergest (arr,val){
    let result = []
    for (let i  = 0; i  < arr.length; i ++) {
        
        if (arr[i] > val) {
             result +=  " "+ arr[i]
            //  console.log(arr[i])
        }

        
    }
    return result
}

let big = lergest(arr1,50)
console.log(big)

//Problem Solved by Method Use
let lergNum = arr1.filter(el=>{
    return el > 10
})
console.log(lergNum)