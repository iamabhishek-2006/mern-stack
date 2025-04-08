/* 1.  Find the largest number in an array */

// let array=[10,20,30,40,50];
// let res=array.sort((a,b)=>b-a);
// console.log(res)
// console.log("The largest number ", res[0]);

// second method
// function largeNumber(array) {
//   return array.reduce((acc, num) => {
//     if (num > acc) {
//       return num;
//     } else {
//       return acc;
//     }
//   }, 0);
// }
// let res = largeNumber([12, 45, 9, 2, 7, 58, 32, 1, 4]);
// console.log(res);

/*3. Reverse a given string */
// let str = "rahul";
// console.log(str.split("").reverse().join(""))

/* 4. write a function to duplicates  from an array */

/* convert the first letter of each word in a sentence to uppercase */

// function upperCase(str1) {
//   let arr = str1.split(" ");
//   return arr
//     .map((abhi) => {
//       return abhi[0].toUpperCase() + abhi.slice(1);
//     })
//     .join(" ");
// }
// let res = upperCase("abhishek");
// console.log(res);

/*2. write a function to count the occurences of a letter in a string */
// let word = "malyalam";
// function findOcc(word) {
//   let countval = {};
// }
// for (let val of word) {
//   console.log(val);
//   countval[word] = countval[word] ? countLetter[word] + 1 : 1;
// }
// let res = findOcc(word);
// console.log(res);

// let word = "javascript";

// function findOcc(word) {
//   let countLetter = {};

//   for (let letter of word) {
// countLetter[letter] = countLetter[letter] ? countLetter[letter] + 1 : 1;
//     countLetter[letter] = (countLetter[letter] || 0) + 1;
//   }

//   return countLetter;
// }

// const res = findOcc(word);
// console.log(res);

// let word = "javascript";

// let word="malyalam";

// function findOcc(word) {
//   let countLetter = {};

//   for (let letter of word) {
//     countLetter[letter] = countLetter[letter] ? countLetter[letter] + 1 : 1;
//     // countLetter[letter] = (countLetter[letter] || 0) + 1;
//   }

//   return countLetter;
// }

// const res = findOcc(word)
// console.log(res);

/* sort an array of number in ascending order */
// let array=[2,3,44,6,5,70];
// let array2=array.sort((a,b)=>a-b);
// console.log(array2);

/* find the sum of all even numbers in array */
// function findEven(array) {
//   return array.reduce((acc, num) => {
//     if (num % 2 == 0) {
//       return acc+num;
//     }
//     return acc;
//   }, 0);
// }
// let res = findEven([2, 3, 6, 4, 5, 7, 8, 65, 22, 42, 78]);
// console.log(res);

/* merge two objects */
// let obj1 = {
//   firstName: "abhishek",
//   lastName: "shrivastav",
//   age: 18,
// };
// let obj2 = {
//   company: "DRDO",
//   address: "moradabad",
//   ...obj1,
// };
// let obj3 = {
//   ...obj2,
// };
// console.log(obj3);

// write a funcnction to remove duplicates from an array
// function removeSame(arry) {
//   return arry.reduce((acc, num) => {
//     if (!acc.includes(num)) {
//       acc.push(num);
//     }
//     return acc;
//   }, []);
// }
// let res = removeSame([4, 5, 4, 9, 6, 3, 4, 9, 8]);
// console.log(res);

/* count the numbers of vovels in a string */
// let str = "my name is naman";
// let arr = [...str];
// let arr1 =
// }, 0);

// console.log(arr1);

// function count(str) {
//   let arr = [...str];
//   return arr.reduce((acc, str1) => {
//     if (str1 == "a" ||str1 == "e" ||str1 == "i" ||str1 == "o" ||str1 == "u" ||str1 == "A" ||str1 == "E" ||str1 == "I" ||str1 == "O" || str1 == "U") {
//     //   return (acc += 1);
//     return acc=acc+1;
//     }
//     else{
//         return acc;
//     }
//   }, 0);
// }
// let res = count("aeiouaeiou");
// console.log(res);

// function myFunction() {
//   return "hellow world";
// }
// console.log(myFunction( ));

// function myfun( ){
//   console.log("print hellow")
// }
// myfun( );

// function sum(a, b) {
// s = a + b;
// return a * b;
// }
// console.log("sum", ":", 4 +5);
// console.log(sum(2,3));
// let res=sum(4,5);;
// console.log(res);
// function oneArg(txt) {
//   return txt;
// }
// console.log(oneArg("hello"));

// function printName(name, job) {
//   console.log("welocome to my" + "  " +  name + "the great"+ " " +job);
// }
// printName("abhishek", "developer");
// function sayHello(n) {
//   console.log(n);
// }

// sayHello("hellow guys");
// sayHello(2);
// sayHello(8);

/* 5.find the factorial of a number */
// function findFact(num) {
//   let fact = 1;
//   for (let i = 1; i <= num; i++) {
//     fact = fact * i;
//   }
//   return fact;
// }
// let val = findFact(5);
// console.log(val);



/* count the number of vovels in a string */
// function countVovels(str) {
//   let count = 0;
//   let vovels = "a,e,i,o,u,j,a,i,o,y,i,k,l";

//   for (let i = 0; i <= str.length; i++) {
//     if (vovels.includes(str[i])) {
//       count++;
//     }
//   }
//     return count;

// }
// let res = countVovels(" hellow world ");
// console.log(res);

// function findLength( str){
//     let str1="a,e,i,o,u"
//     for(let i=0;i<=str1.length;i++)

// }
//   let res=findLength("helllow world");
//   console.log(res);

//reverse each word in a sentences

// javascript is an interactive language
// function reserveWord(str ){
//   str.reserveWord(str);

// }
// let res=reserveWord("javascript is an interactive language");
// console.log(res);

/* check if an object has  a specific  properties */
/* Convert if all elements into an array of key -value pairs */

/* check the if all elements in array are positive */

// let array=[2,3,4,5,6,7,8,9,10,-11,12,-13,-14,15,46];
// let array1=array.reduce((acc,num)=>{
//             if(num>=0){
//                 acc.push(num);
//             }
//             return acc;

// },[ ]);
// console.log(array1);

// function checkPositive(arr) {
//   return arr.filter(num=> num>= 0);
// }
// let res = checkPositive([1, -1, 2, -3, 4, 7, -8, 5, 6, -9, -2, 4.5, 6]);
// console.log(res);
// 
/* Find the second largest numeber in an array */
// let array = [3, 4, 5, 6, 7, 12, 32, 54, 63, 98, 2, 9, 6, 23, 45];
// let array2 = array.sort((a, b) => {
//   return b-a;
// });
// console.log(array2);
// console.log(array[1]);
// console.log(array[array.length-2])

// second method
// function largeNumber(arr) {
//   let large  = arr.sort((a, b) => b-a);
//     return large.slice(1,2);
// }
// let res = largeNumber([2, 5, 9, 13, 14, 15, 45, 74, 92]);
// console.log(res);


/* check if an object has  a specific  properties */
/* Convert if all elements into an array of key -value pairs */
