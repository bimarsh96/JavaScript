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



function login (username="ram"){
 if(!username){
console.log("plese enter a username")
return
 }
    
   
  return `${username} Just logged in `
}

console.log(login())
