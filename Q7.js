// qus-07: "Reverse an array manually using a loop",
const arr1 = [1, 2, 3]; // Output: [3, 2, 1]",

function reverse(array) {
  for (let i = 0; i < array.length; i++) {

    // console.log(array.length)
    // console.log(i)
    // console.log(`i++ Enter index = ${i++}`)
    // console.log(i < array.length)
    // console.log(`i-- Exit index = ${i--}`)
    // console.log('........................')
    // console.log( array[i])

    for (let j = i ; j < array.length; j++) {

    // console.log(array.length)
    // console.log(j)
    //   console.log(`i++ Enter index = ${j++}`);
    //   console.log(j < array.length);
    //   console.log(`i-- Exit index = ${j--}`);
    //   console.log("........................");
    //   console.log(array[j]);

    }
  }
}

// reverse(arr);



function reverse1(array) {
  for (let i = 0; i < array.length; i++) {

    for (let j = i; j < array.length; j++) {
        let b;
        
        
        // console.log(`${array[0]} ${array[1]} ${array[2]}`)
        
        
        // console.log(array[i])
        b = array[i]
        // console.log(b)
        array[i] = array[j]
        // console.log(`${array[i]} = ${array[j]}`)
        // console.log(array[i])
        array[j] = b
        //  console.log(`${array[j]} = ${b}`)
        // console.log(array[j])
        // console.log(b)
        console.log(`${array[0]} ${array[1]} ${array[2]}`)
    }
  }
  return array
}
// let newArr = reverse1(arr1)
// console.log(newArr)

//Problem Solved by Method Use
let newArray = arr1.sort((a,b)=>{
    return b-a
})
console.log(newArray)