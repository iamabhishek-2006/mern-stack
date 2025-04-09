//1. Find the length of the longest word in a sentence;
// function calcLength(arr) {
//   let arr2 = arr.split(" ");
//   let arr3 = arr2.map((word) => word.length);
//   return Math.max(...arr3);
// }
// let res = calcLength("Hellow my name is abhishek shrivastav");
// console.log(res);

// 2.write a function to convert Celsius to farenhite
// function temp(c) {
//   let f = (c * 9) / 5 + 32;
//   return f;
// }
// let res = temp(32);
// console.log(res);

// 4.Find the indehx of an elements in an array
// function findIndex(arr) {
//   return arr.indexOf(2);
// }
// let res = findIndex([2, 36, 8, 4, 7]);
// console.log(res);

//5.Swap the two numbers

// 7. Find the sum of all odd numbers in an array
// function sumCal(arr) {
//   return arr.reduce((acc, num) => {
//     if (num % 2 !== 0) {
//       //   acc.push(num);
//       return acc + num;
//     }
//     return acc;
//   }, 0);
// }
// let res = sumCal([
//   4, 6, 7, 2, 9, 44, 23, 1, 2, 3, 5, 8, 10, 11, 12, 13, 14, 15, 16,
// ]);
// console.log(res);

//6. Count the number of words in a string
// function countSting( arr){
//         for(let i=0;i<arr.length-1;i++){
//             return arr[ i];
//         }
// }
// let res= countSting("abhishek");
// console.log(res);
// function sumCal(arr) {
//   return arr.reduce((acc, num) => {
//     if (num % 2 == 0) {
//        acc.push(num);
//     }
//     return acc;
//   }, []);
// }
// let res = sumCal([
//   4, 6, 7, 2, 9, 44, 23, 1, 2, 3, 5, 8, 10, 11, 12, 13, 14, 15, 16,
// ]);
// console.log(res);

// 3.find the smallest number in an array
function findSmallest(arr) {
  arr.reduce((acc, num) => {
    if (num>acc) {
      return num;
    }
    return acc;
  }, acc[0]);
}
let res = findSmallest([25, 45, 65, 4, 34, 7, 71, 22, 12, 17, 92, 9]);
console.log(res);

