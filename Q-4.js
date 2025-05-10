// qus-04: "Find the smallest number in an array",
const nums = [10, 50, 30, 70]; // Output: 10",
let min = nums[0]
for (let i = 0; i < nums.length; i++)
    if (nums[i] <= min){
        // console.log(arr[i] > max)
        console.log(".......1st.........")
        max = nums[i];
        // console.log(min)
    }
    console.log(min)

    const arr = [5,10, 324,88894,2, 45, 90, 98008];

    let smallNumber = arr[0]

    for (let i = 0; i < arr.length; i++)
        if (arr[i] <= smallNumber){
            // console.log(arr[i] > max)
            console.log(".......2nd.........")
            smallNumber = arr[i];
        }
        console.log(smallNumber)

        let small =Math.min.apply(Math,arr)
        console.log(small)