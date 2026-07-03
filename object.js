// const sym = Symbol("key1")

// const school={
//     "name":"ram",
//     age:43,
//     [mysym]:"key1",
//     vgpa:4,
//     email:"ram@gmail.com",
//     address:"patan",
// }

// console.log(school);
// console.log(school.age);
// console.log(school["name"])
// console.log(school[sym])   //for symbol
// // Object.freeze(school)     //so that u cannt change 

// school.name="hari"
// console.log(school)  
// school.greeting = function(){
//     console.log("hello")
// }
// console.log(school.greeting());

// const obj1={
//     1:"a",
//     2:"b",
//     3:"c",
// }
// const obj2={
//     4:"d",
//     5:"e",
//     6:"f",
// }
// const obj3={
//     7:"g",
//     8:"h",
//     9:"i",
// }


// const obj4 =Object.assign({},obj1 , obj2 ,obj3)
// console.log(obj4);


// const obj4={...obj1,...obj2}
// console.log(obj4);


// const tinder={
//     name:"ram",
// age:45,
// isloogedin:false,
// gmail:"ghfd@gmail.com",
// }

// console.log(tinder)
// console.log(Object.keys(tinder));
// console.log(Object.values(tinder))


// const course ={
//     coursename:"english",
//     price:1000,
//     courseinstructor:"hitesh"
// }
// const{courseinstructor:instructor}=course 
// console.log(instructor)




// const obj3 = {...obj1,...obj2}

// course.coursename + " " + course.price;



// const life={
//     name:"ram",
// class:4,
// gpa:4,
// }

// let result=("name" in life);         //to know if it exist 
// console.log(life)
// console.log(result)



// const details= {
// firstname:"babu",
// secondname:"thapa",
// age:34,
// fullname:function(){
//     return this.firstname + " " + this.secondname;
// }
// };
// console.log(details)
// console.log(fullname  )

// const regularuser={
//     email:"ram@gmail.com",
//     username:{
//         detail:{

        
//         firstname:"eaa",
//         lastname:"gc",
//         }
//     }
// }
// console.log(regularuser.username.detail.firstname)


// const school={
//     "name":"ram",
//     age:43,
//    [sym]:"key1",
//     vgpa:4,
//     email:"ram@gmail.com",
//     address:"patan",
// }
// console.log(school["email"])
// console.log(school[sym])


// const obj1 ={1:"a",2:"b"}
// const obj2 ={3:"c",4:"c"}
// const obj3={...obj1,...obj2}
// console.log(obj3)

const course ={
    coursename:"js course",
    price:"999",
    courseinst:"ram"
}

const {price:p}=course
console.log(p)