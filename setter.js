


// function user(username,email,password){
//      this.username=username;
//     this.email=email;
//     this.password=password
// }
//        user.prototype.encryptPassword=function(){
//  return `${this.password}abc`
//        }

//     user.prototype.changeUsername=function(){
//         return `${this.username.toUpperCase()}`
    
//     }

//  const chai = new user("ram","ram@gmail","123")

//  console.log(chai.encryptPassword());
//  console.log(chai.changeUsername());


//  class User{
// constructor(username){
//     this.username=username;

// }
// login(){
// console.log(`username is ${this.username}`);

// }}
 
//  class Teacher extends User  {
//     constructor(username,email,password){
//         super(username)                 //user class bhitrw gayrw khojxa
//         this.email=email;
//         this.password=password;
//     }
//      addcourse(){
//     console.log(`a new course was added ${this.username}`)
//  }
//  }


// const chai =new  Teacher("chai","@mmmm.com","123")
// chai.addcourse()


// const masla= new User("masalachai")
// masla.login();



// class User {
//     constructor(username,email,password){
//     this.username=username;
//     this.email=email;
//     this.password=password

// }
// encryptPassword(){
//     return `${this.password}abc`
    
// }}
//  const chai = new User("ram","ram@gmail","123")
// console.log(chai.encryptPassword());



// class car{
//     constructor(name,year){
//        this.name=name;
//        this.year=year;
//     }
//     model(){
//         return`the car model year is ${this.year}`
//     }
// }
// const mycar= new car ("ford",2013)
// console.log(mycar.model())





class car{
    constructor(brand){
        this.brand=brand;

    }
present(){
    return(`the brand name is ${this.brand}`)
}
}
class Model extends car{
constructor(brand,mod){
    super(brand);            //automaticallly parent class bata value  extract gardinxa
    this.model= mod
}

show(){
    return(`${this.brand} and model is ${this.model}`)
}

}

const mycar = new Model("ford","mustang");
console.log(mycar.show())



