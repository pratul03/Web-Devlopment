// let arr = [1,2,3,4,5,6,[7,8,9]]

// let arr1 = arr.slice(1,5);

// console.log(arr1)
// console.log(typeof arr1)

// arr1.splice(2,1);
// console.log(arr1);
// console.log(typeof arr1);

// arr.sort((a,b)=> a-b);
// console.log(arr);

//  console.log(arr.toString())
// console.log(arr);
//  arr.flat();
// console.log(arr);

// const arr = [ 1,2,3,3,4,5,6,7]

// for(i=0;i<arr.length-1;i++){
//     if(arr[i]==arr[i+1]){
//         arr.splice(i,1)
//         i--;
//     }

// }
// console.log(arr)

// const arr = [ 1,2,3,3,4,5,6,7]
// const arr1 = []
// for(i=arr.length-1;i>=0;i--){
//     arr1.push(arr[i]);
// }
// console.log(arr1)

// const arr = [ 1,2,3,3,4,5,6,7]

// const arr1 = []

// arr.forEach((Element) => {
//     arr1.unshift(arr[Element])
// })
// console.log(arr1)
// let arr = [9, 4, 1, 5, 8, 3, 2];


// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = 0; j < arr.length - i - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//       arr[j] = arr[j+1];
//       arr[j+1] = temp;
//     }
//   }
// }
// console.log(arr);


let arr = [9, 4, 1, 5, 8, 3, 2];

for( let i = 0; i<arr.length-1;i++){
    let currentIndex = arr[i];
    let j = i-1;
    while(j>=0 && arr[j]>currentIndex){
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1]=currentIndex;
}
console.log(arr)
