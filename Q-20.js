// qus-20: "Sort numbers in ascending order",
let array = [5, 3,1, 8, 6, 2];

function bubbleSort(arr) {
  let n = arr.length;
  // console.log(n)
  for (let i = 0; i < n - 1; i++) {
    // console.log(i)
    // console.log(n-1)
    for (let j = 0; j < n - i - 1; j++) {
      // console.log(j)
      // console.log(n-i)
      // console.log(n-i-1)
      if (arr[j] > arr[j + 1]) {
        // console.log(arr[j])
        // console.log(arr[j + 1]);
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log("sorted Array ", bubbleSort(array));

const arr = [3, 1, 4, 2]; // Output: [1, 2, 3, 4]",

function arraySort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let b;
        b = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = b;
      }
    }
  }

  return arr;
}
let result = arraySort(arr);
// console.log( "sorted Array ", result);

//Problem Solved by Method Use
let newArr = arr.sort((a, b) => a - b);
// console.log(newArr);
