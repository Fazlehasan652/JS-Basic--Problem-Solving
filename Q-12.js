// qus-12: "Filter out even numbers",
   const arr = [1, 2, 3, 4]; // Output: [1, 3]",
   function evenNumber(arr){
     let newArray = []
 for (let i  = 0; i  < arr.length; i ++) {
    if (arr[i]%2 !== 0) {
        newArray.push(arr[i]) 
        
    }
 }
 return newArray
}
let result = evenNumber(arr)
console.log(result)

//Problem Solved by Method Use
let newArr = arr.filter(el=> el%2 !== 0)
console.log(newArr)