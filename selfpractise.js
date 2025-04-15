//for loop
// var arr = [10, 20, 30, 40, 50,100];
// for(let i=0;i<arr.length;i++){
// arr[2].push(30);

// console.log(arr[i]);
// arr[1].push(90);
// console.log(arr[i])

// arr[i]=[arr[i]]
// arr[i].push(90);
// console.log(arr[i]);
// }

// for each loop
// var arr = [10, 20, 30, 40, 50];
// function print(a) {
//   console.log(a);
// }
// arr.forEach(print);
// arr.forEach(print);
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// return,break,continue ka use nahi karte foreach me this is the limitations of javascript
// arr.forEach((a,index) => {
//   console.log(index, a);
// });

// function mufun() {
//   console.log("hellow duniya");
// }

// function mynum(mufun) {
//   return mufun;
// }
// console.log(mufun(mynum));
// let res = mynum(mufun);
// console.log(res);
// res( );

// var city = [
//   "harayana",
//   "ludiyana",
//   "punjab",
//   "kanpur dihat",
//   "meerut",
//   "gujarat",
// ];
// city.forEach((val, index) => {
//   console.log(index, val.toUpperCase());
// });

// function myfun( ){
//    city.forEach((val,index)=>{
//         console.log(index,val);
//    })
// }
// myfun(city);
//  let arr=[3,4,5,6,7,2];
//  arr.forEach(num=>{
//     console.log(num*num);
//  });

// let arr=[10,20,30,40,50];
// let arr2=arr.reduce((acc,curr)=>{
//       if(curr<30){
//         return acc+curr;
//       }
//       return acc;
// },0);
// console.log(arr2);

// let arr=[10,20,30,40,50];
// let arr2=arr.map((v,i)=>{
//   return v*2;
// });
// console.log(arr2);

// let arr = [10, 20, 30, 40, 50];
// let arr2 = arr.map((v, i) => {
//     if(v<30){
//       return v*2;
//     }
// });
// console.log(arr2);

// let arr = [10, 20, 30, 40, 50];
// let arr2 = arr.reduce((v, i) => {
//   v.push(i * 2);
//   return v;
// }, []);
// console.log(arr2);

// let arr = [10, 20, 30, 40, 50];
// let arr2 = arr.every((v) => v > 0);
// console.log(arr2);

// let arr = [10, 20, -30, 40, 50];
// let arr2 = arr.some((v) => v < 0);
// console.log(arr2);

// let arr = [10, 20, 30, 40, 50];
// console.log(arr.indexOf(30))                  // condition wrong hone par -1 return kar deta hai agar value exist nahi karti

// var arr1 = [10, 20, 30, 40, 50];
// console.log(arr1.includes(30));               // include method check karta hai ki value exist karti  hai ya nahi or true ya false return karta hai

// find method
// var arr1 = [10, 20, 30, 40, 50];
// console.log(arr1.find((v)=>v>30));
//  find|| some

//join method

// var arr1 = [10, 20, 30, 40, 50];
// console.log(arr1.join(" "));

// split method

// var str = "hellow I'm student! bca from mbd";
// let str = "abhishek";
// console.log(str.split(""));
// let str1 = str.split("");
// console.log(str);
// console.log(str.reverse());

// reverse method
// concat method

// var arr1=[10,20,30];
// var arr2=[40,50,60];
// var arr3=[70,80,90];
// console.log(arr1.concat(arr2,arr3));
// console.log(...arr1,...arr2,...arr3);
// console.log(arr1.reverse());

// var marks=[65,78,32,32,98];
// var total=marks.reduce((acc,num)=>acc+num,0);
// console.log(total);

// var arr = [10, 20, 30, 40, 50];
// const newArr = arr.reduce((a, v, i) => {
// a[i] = v;
//   a.push(v);
//   return a;
// }, []);
// console.log(newArr);

// let str = "hellow";
// let res = str.split("").reverse().join("");
// console.log(res);
// let str = "hellow";
// let res = str.split("");
// console.log(res);

// console.log(str.split(""));

// var str = "hellow I'm student! bca from mbd";
// let str2 = str.split(" "); ub
// console.log(str2);
// console.log(str2.length);

// const findLength = (str) => {
//   let longestWord = "";

//   let arr = str.split(" ");
//   for (w of arr) {
//     if (w.length > longestWord.length) {
//       longestWord = w;
//     }
//   }
//   return longestWord;
// };
// console.log(findLength(str));

// const findLongestWord = (str) => {
//   return str.split(" ").reduce((acc, curr) => {
//     if (curr.length > acc.length) {
//       return curr;
//     }
//     return acc;
//   }, "");
// };
// console.log(findLongestWord(str));

// function findLongestWord(str) {
//   return str.split(" ").reduce((acc, curr) => (curr.length > acc.length ? curr : acc), "");
// }

//find the index that's a multiple of both 3 and 7

// var arr=[10,20,33,49,84,100,105];
// let arr2=arr.findIndex((val)=>val%3===0 && val%7===0);
// console.log(arr2);
// var arr = [10, 20, 33, 49, 84, 100, 105];
// var arr2 = arr.reduce((acc, curr, i) => {
//   if (curr % 3 === 0 && curr % 7 === 0) {
//     acc.push(i);
//     return acc;
//   }
//   return acc;
// }, []);
// console.log(arr2);





 

