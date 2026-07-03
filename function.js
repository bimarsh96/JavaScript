// function sum(num1,num2){
//  console.log(num1+num2)
// }
// sum(3,4)



// function sum(num1,num2){
// let result=num1 +num2;
// return result;
// }
//        let result =sum(3,3)
// console.log(result)



// function login (username="ram"){
//  if(!username){
// console.log("plese enter a username")
// return
//  }
// return `${username} Just logged in `
// }

// // console.log(login())



// function mycart(val1,val2, ...num1){     //VAL1 AND VAL2  to store value..
// return num1
// }
// console.log(mycart(200,400,500))



// const office={
//     name:"ramu",
//     price:400,
// }

// function room(anyobject){
//     console.log(`user name is ${anyobject.name} total price is ${anyobject.price}`)
// }
// console.log(room(office))

// const newArry=[200,400,100,50]

// function returnArry(getarry){
//          return getarry[2]
// }
// console.log(returnArry(newArry))

//  if(true){
//     const username="ritesh"
//     if(username == "ritesh"){
//         const website = " google"
//         console.log(username+website);

//     }
    // console.log(website)
// }
// console.log(username)           //because from child to parent cannt be executed bt from parent to child can be
  


// const menu = (num1 ,num2)  => {
//     return num1+ num2
// }

// console.log(menu(3,4))

// ( ()  => {
//    console.log(`hello`)             //iife
// })();

// ( function ()  {
//    console.log(`hello`)
// })()

// function addtwo(a,b){
// return a+b;
// }
// let b=addtwo(4,5)
// console.log(b)



// function loginuser(username="ram"){
//     if(!username ){
//        console.log("please enter a username ")
//        return
//     }
//     return `${username} just logged in`
// }
// // console.log(loginuser("hitesh"));

// console.log(loginuser())


function calculatecart(val1,val2,...num1){
    return num1;

}
console.log(calculatecart(200,400,600,1000))




const user ={
    name:"ram",
    age:6,

}

function handleobject(anyobject ){
console.log(`username is ${anyobject.name} and the price is  ${anyobject.price}`)
}handleobject(user);



const newarry=[2,3,4,5]
function handlearry(anyarry){
    return anyarry[2]
}
console.log(handlearry(newarry))