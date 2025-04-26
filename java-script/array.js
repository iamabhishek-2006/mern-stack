// let array = [34, 64, 4, 86, 45];
// array.sort();
// console.log(array);

// console.log(array.length);
// array[2] = 46;
// console.log(array[2]);

// let heros = ["shaktiman", "thor", "hulk", "spiderman", "batman"];
// for (let i = heros.length-1; i > 0; i--) {
//   console.log(heros[i]);
// }
// using for of loop
// for(let val of heros){
//     console.log(val);
// }

// let cities=["moradabad","rampur","bareilly"];
// for (let city of cities){
//     console.log(city);
// }

// let newArr=new Array(1,2,3);
// console.log(newArr);
// console.log(newArr.push(40));
// console.log(newArr);
// console.log(newArr.shift(70));

// console.log(newArr);

// shift method
// let array1=[34,76,75,23,35,26];
// console.log(array1.length);
// console.log(array1.slice(1,-2));
// console.log(array1);

/* splice method */
// let array2=[34,65,45,75,38,43];
//  let array3=array2.splice(1,3,100);
//  console.log(array3);
//  console.log(array2);
//  console.log(array2.splice(3));

/* map method  */
// let arr=[3,4,6,"7",2,3,"abhinav arrora"];
// let arr1=arr.map((val,index)=>{
//         return val*3;
// });
// console.log(arr1);
/* filter method */

/*  map short method */
// let arry4 = [5, 9, 4, "7", 2, 3, "abhishek shukla"];
// let arry5 = arry4.map((val,index) => val*2);
// console.log(arry5);

/* filter method */
// let arryC = [4, 3, 5, 6, 7, 2];
// let arryD = arryC.filter((val, index) => {
//   return val % 2 == 0;
// });
// console.log(arryD);

// let arry1=[8,5,6,3,2,8];
// let arry2=arry1.reduce((acc,num)=>{
//   console.log(acc,num);
//             return  acc+num;
// },1);
// console.log(arry2);


// let arr1=[1,4,5,6,7,,-2,3,2];
// // let arry1=arr1.every((num)=>num>0);       // har 1 condition pe jakar check karta hai agar 1 condition false hogi fir bhi kar karega
// let arry2 = arr1.some((num) => num >0);    //condition false hote hi return kar deta hai
// console.log(arry2);

// let arr1 = [1, 4, 5, 6, 7, 3, 2];
// let arr2=arr1.includes( 2);       // .include function (isse hum check karte hai ki value array me hai ya nahi)
// console.log(arr2);

// let arr1 = [1, 4, 5, 6, 7, 3, 2];
// let arr2=arr1.find(num=>num>2);            // .find function
// console.log(arr2);

// let arryL=["a","l","c","k","P","O","r"];
// let num4=["1","20","35","5","6","3","27","32","65"];
// num4.sort();
//  console.log(num4);
// num4.sort((a,b)=>a-b);
// console.log(num4);

//   let arrK=["A","Z","c","b","B","C","d","z"]
//   arrK.sort((a,b)=>a.localeCompare(b));
// console.log(arrK);

//   let arry1=[1,2,3,4,5,6];
//   let arry2=[ ];
//   for(i=arry1.length-1;i>=0;i--){
//     // arry1.reverse( );
//     arry2.push(arry1[(i)])
//   }
//   console.log(arry2);

/* filter method */
// let arryC=[4,3,5,6,7,2];
// let arryD=arryC.filter((num)=>{
//           return num%2==0;
// },0);
// console.log(arryD);
// console.log(arryC);

// let arr1=[1,2,3,4,5];
// let arr2=[3,5,7,6,1];
// let arr5=arr1.filter(num=>arr2.includes(num));
// console.log(arr5);

// arr1=[1,2,3,4,5,6,3,4];
// arr2=[ ];
//  val=arr1.reduce((prev,num)=>{
//   if(prev.includes(num)) return prev;
//   prev.push(num)
//   return prev;
//  },[ ]);
//  console.log(val);

// arr1 = [1, 2, 3, 4, 5, 6, 3, 4,1,2,7,8,4,3,6,8,2,1];
// arr2 = [];
// commonValues = arr1.reduce((acc, num) => {
//   if (! acc.includes(num)) {
//     acc.push(num);
//   }
//   return acc;
// }, []);
// console.log(commonValues);

/* reduce method */
// function arr(arr1) {
//    return arr1.reduce((acc, num) => {
//     if (num % 2 == 0) {
//        acc.push(num);
//     }
//     return acc;
//   }, []);
// }
// let arr2 = arr([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
// console.log(arr2);
// for(let i=0;i<3;i++){
//     console.log(i);
// }

/* map method  */
// let arr1=[2,3,4,5,6,7,8];
// let arr2=arr1.map((acc)=>{
//     return acc*2;
// });
// console.log(arr2);

/*  map short method */
// let arry4 = [5, 9, 4, "7", 2, 3, "abhishek shukla"];
// let arry5 = arry4.map((val,index) => val*2);
// console.log(arry5);

// let arr1=[5,6,7];
// let arr2=arr1.map((name)=>{
//     return name*name;
// })
// console.log(arr2);

// let object=[
//     {name:"abhishek",marks:"55"},
//     {name:"karan",marks:"44"},
//     {name:"hariom",marks:"98"},
// ]
// let object2=object.map(object=>object.marks);
// console.log(object2);

/* include method  value check karte hai ki value exist karti hai ya nahi*/
// let arr1=["arun","abhishek","aman","shyam"];
// let arr2=arr1.includes("arun");
// console.log(arr2);

// var a=4;
// var b=4;
// console.log(b );

// console.log(a);
// var y=45;
// function test( ){
//     if(true){
//         var  y = 34;

//         console.log(y)
//     }
// }
// test( );
// console.log(y);
// console.log(y);
// console.log(y);
// console.log(0.2+0.1==0.3);
// console.log([ ]==false);
// console.log(true=="1");

// slice method
// let numbers = [4, 5, 6, 9, 8, 7, 3];
// let slicedNumbers = numbers.slice(2, 5); // index 2 se 4 tak lega (5 nahi lega)
// console.log(slicedNumbers);
