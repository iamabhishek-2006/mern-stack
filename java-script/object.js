// let obj={name:"shraddha khpara",age:30,city:"bangalore"};
// console.log(obj);
// console.log(obj.name);
// obj.marks=300;
// console.log(obj);
// obj.name="jonh Doe";
// console.log(obj);
// delete obj.city;
// console.log(obj);
// let obj2=Object.keys(obj);
// console.log(obj2);
// console.log(obj["name"]);

// let obj3=Object.values(obj);
// console.log(obj3);
// Object.freeze(obj);
// obj.name="jone sina";
// console.log(obj);

// let obj4 = Object.entries(obj);
// console.log(obj4);

// var student = { name: "shraddha khpara", age: 30, city: "bangalore" };
// console.log(obj1.hasOwnProperty("marks"));
// if(student.hasOwnProperty("name")){
//     console.log("value exist");
// }else{
    // console.log("value does not exist");
// }

// var key="name";
// var key="marks";
// if(student.hasOwnProperty(key)){
//         console.log(`${key} exist`);
// }else{
//     console.log(`${key} does not exist`);
// }

// short hand properties
// let company="MICROSOFT";
// var student = { name: "shraddha khpara", age: 30, city: "bangalore",company };
// console.log(student);

// dynamic properties

// let key="Namangupta";
// var student = { [key]: "sandeepkumardev", age: 30, city: "bangalore" };
// console.log(student);

// destructring array
// var student = { name: "shraddha khpara", age: 30, city: "bangalore" };
// const {name,age,city}=student;
// console.log( name,city,age);

// To check the object Object is empty or not
// var students={ name:"aman shukla"};
// falsy values ["false",0," ",null,undefined,nan];
// truthy values => { },[ ]

// let res=Object.keys(students);
// if(res.length){
//     console.log("object me value hai");
// }else{
//     console.log("object me value nahi hai");
// }

// spread operator
// let a = { a: 1, b: 2 };
// let b = { c: 3, d: 4 };
// let res = { ...a, ...b };
// console.log(res);
// let {a,b}={a:1,b:2}
// console.log(a,b);

// let [e,z]=[2,3];
// console.log(e,z);

// swaping of two values without using temp;
// var a = 10;
// var b = 2;
// console.log("a",a,"b",b);

// a = b;
// b = a;
// var [b,a]=[a,b];
// console.log("a",a,"b",b);
// let str="naman sukla"
// let name="aman dhattarawal";
// console.log(str,name)
// console.log(`${str} ${name}`);
// if(name.startsWith("a")){
//     console.log("yes");
// }else{
//     console.log("No");
// }


// slice
// includes
// startwith
// endwith
// indexOf("1")
// keys
// values
// evenly
// hasOwnproperty
// toLowerCase()
// trim( )
// replace( );
 
// let zz="   hellow   ";
// console.log(zz);
// console.log(zz.trim());



// let str="hellow";
// console.log(str.replace("h","w"));
// console.log(str.replaceAll("h","w"));


// uppercase 
// let str="hellow";
// let res1="world";
// console.log(res.concat(" ",res1,"@"));
// console.log(res.replace("h","w"));
// console.log(res.toUpperCase( ));
// console.log(str[0].toUpperCase().concat(str.slice(1)));
// console.log(`${str[0].toUpperCase()}${str.slice(1)}`);
// console.log(str[0].toUpperCase(),str.slice(2));

// find the iddex that's a multiple of both 3 and 7
// const nums=[10,52,3,7,49,84,100,105,104,45,62,78,35,12,44];
// console.log(nums.find((n)=>{n%3===0 && n%7===0}));
