// function hello(){
//     console.log("hello");
// }
// setTimeout(hello,2000)



// setTimeout(() => {
// console.log("hello")
// }



// const arr =()=>{
//     console.log("arr")
// }
// setTimeout(arr,3000)


// let age=90;

// if (age>=18) {

//    if(age>=60){
//     console.log("senior")      ///nesting
//    } else {
//     console.log("middle")
//    } 
// }
// else {
// console.log("child")
//    }




//    for (let i=0; i<5 ; i++){
//   let str="";
//   for (let j=0; j<5; j++){
//     str=str+j;

//   }
// console.log(str);

//    }


// function getData (dataId){
//    setTimeout(()=>{ 
//     console.log("data",dataId)

//    },2000)
// }


// function  getData(data,nextdata){
// setTimeout(  () =>{
//     console.log("data",data);
//  if(nextdata){
//     nextdata();
//  }
// },2000)
// }
// getData(1, ()=> {
//     getData(2,()=>{               //callback hell yauta function bhitrw arko function call back agri rakheko xa 
//         getData(3,()=>{
//              getData(4);
//         });
//     });
// });



// let promise = new Promise((resolve,reject)=> {
//     console.log("it wil print ");
//     resolve("some error occured");
// });




// const promiseone = new Promise( (resolve,reject) => {
//  setTimeout(function() {
//     console.log("ascy task")
//     resolve();
//  },2000)
// })
// promiseone.then(function(){
//     console.log("promise consumed")
// })



// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('task 2')
//         resolve();

//     },2000);
   
// }).then(()=>{
//     console.log("asy wait")
// })



// const promiseTwo = new Promise((resolve,reject) => {
//     setTimeout(()=>{
// console.log("It is good")
// resolve({name:"ramu" , rollno:4,gmail:"bim@gmail.com"})
//     },2000)
// })

// promiseTwo.then((user)=>{
//     console.log(user)
// })



// const promisethree= new Promise ((resolve,reject) =>{
//     setTimeout(()=>{
//         let error=false;
//         if(!error){
//   resolve({name:"chintu",password:"123"})
//         }else{
//             reject( 'error:something went wrong')
//         }
//     },2000)
// });

// promisethree.then((user)=>{
//     console.log(user)
//     return user.name
// })
// .then((name)=>{                        nested call back use gareko .then .catch and .finally
//     console.log(name)
// }) 
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>
//     console.log("finally completed")
// )



// const lib = new Promise ((resolve,reject) => {
//     setTimeout(()=>{
//     let error=true;
// if(!error){
//   resolve({username:"kaka",address:"butwal"})
// }else{
//     reject("js went wrong")
// }
//  },2000);
// })

//  async function fornxt(){
// //     const pap=await lib               asynn wait use agreko
// //   console.log(pap);
  
// try {
//      const pap=await lib
//       console.log(pap);
// } catch (error) {
//     console.log(error)
// }
// }
// fornxt()


const data=new Promise((resolve,reject)=>{
    setTimeout(()=>{
resolve("sucess")
    },2000 )
})
(async function() {
console.log("data1....")
await getdata(1);

console.log("data2....")
await getdata(2);

console.log("data3...")
await getdata(3);
})();