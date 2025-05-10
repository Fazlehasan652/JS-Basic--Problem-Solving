// qus-14: "Capitalize all strings in an array",
   const arr = ['apple', 'banana']; // Output: ['APPLE', 'BANANA']",

   function capitalizeNamber(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    
      newArray.push(arr[i].toUpperCase());
    
  }
  return newArray;
}
let result = capitalizeNamber(arr);
console.log(result);

//Problem Solved by Method Use
let newArr = arr.map(el=> el.toUpperCase())
console.log(newArr)