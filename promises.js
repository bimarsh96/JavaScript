// const myPromise1= new Promise((resolve,reject)=>{
//     setTimeout(resolve,200,"king")
// })


// const myPromise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "Queen");
// });


// Promise.all([myPromise1, myPromise2]).then((x) => {
//   myDisplay(x);                  //promise all
// });


// Promise.allSettled([myPromise1,myPromise2].then((results) => 
//      results.forEach((x) => myDisplay)(x.status))

// )



//  Promise.any([myPromise1,myPromise2]).then((x)=>{
//     myDisplay(X);
// })



// const mypr= new Promise((resolve,reject) => {
// setTimeout((king) => {
    
// }, 100);
// })





// let timeout;


// function  myfunction() {
//     timeout=setTimeout(alertfxn,3000);


// }

// function alertfxn(){
//     console.log("hello")
// }

// let timeout;

// function myFunction() {
//   timeout = setTimeout(alertFunc, 3000);
// }

// function alertFunc() {
//   alert("Hello!");
// }




myDisplay("a");
setTimeout(() => {
    myDisplay("b")
}, 2000);
myDisplay("c")


console.log(myDisplay)