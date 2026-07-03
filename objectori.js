// const user={
//     name:"ram",
//     age:4,
//     price:900,
//     day:"monday",
//     getUser :function(){
// console.log(`username is ${this.name}`)
//     }
// }
// console.log(user.getUser());


// function User(loginCount,username,islogout){
// this.loginCount =loginCount;
// this.username =username;
// this.islogout = loginCount;

// return this 
// }

// const dataone  =new  User(12,"ram",true)
// const datatwo =new User(21,"hari",false )
// console.log(datatwo)



// const mewhearo=["hulk","spiderman"]



// function obj(num1,num2){
//    return num1*num2
// }
// console.log(obj(4,5))


function createUser(username,score){
    this.username = username;
    this.score= score;
    
}
createUser.prototype.increment = function (){
    this.score++
}
createUser.prototype.printMe = function(){
console.log(`score is ${this.score}`)
}
const chai =new  createUser("chai",25)
const tea=new createUser("tea",250)
chai.printMe()


