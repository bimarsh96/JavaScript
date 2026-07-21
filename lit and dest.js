// const person={
//     name:"ram",
//     age:34,
// };

// let{name,age ,country="us"}=person;
// console.log(name,age,country)


//destructuring maps ...
// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ]);

// let text = "";
// for (const [key, value] of fruits) {
//   text += key + " is " + value + " ";
// }

// console.log (text)


// const fruits =['bana','appple','org']
// let[fruit1,,fruit2]=fruits;         //yauta comma la yauta array ko index lai jump garxa

// console.log(fruit1,fruit2);



const numbers = [10,20,30,40,50,60,70]

const [a,b, ...rest]=numbers
console.log(a,b,...rest)      //...use garey yauta array ma retrun garxa natrw array bhitrw array print aunxa


let firstname="ram";
let lastname="arya";

let per=[firstname,lastname] =[lastname,firstname]    //for swapping 
console.log(per)


