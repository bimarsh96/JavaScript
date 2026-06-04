

// for(let i of coding){
//     console.log(i)
// }


// const coding=["apple","mango","litchi","orange"]


// coding.forEach( function (item) {
  
// console.log(item)
// } )


// coding.forEach( (item) => {
// console.log(item)
// } )


// const mycoding  = [                  //for call back foeeach we ues
//     {
//         languagename:"javascript",
//         languagefilename:"js"
//     },
//      {
//         languagename:"advanced java",
//         languagefilename:"aj"
//     },
//      {
//         languagename:"python",
//         languagefilename:"p"
//     }
// ]


// mycoding.forEach( (item) => {

//     console.log(item.languagename)
// }  )


// const arry=[1,2,3,4,5,6,7,8]

// const newnum= arry.filter( (num)  => { return num > 5} )
// console.log(newnum)





//  const library =[
//      {title: "book1" , genre: "history" , publish: 1981 ,edition:2090},
//       {title:"book2" , genre:"friciton" , publish: 1987 ,edition:2190},
//     {title:"book3" , genre:"crime" , publish: 1990 ,edition:2290},
//       {title:"book4" , genre:"history" , publish: 1988 ,edition:2390},
//         {title:"book5" , genre:"thriller" , publish: 1912 ,edition:4390},
//       {title:"book6" , genre:"suspsense" , publish: 1967 ,edition:6790},
//         {title:"book7" , genre:"history" , publish: 1998 ,edition:3490},
//       {title:"book8" , genre:"thriller" , publish: 1912 ,edition:2990},
// ];

// // let  data = library.filter ( (bk) =>   bk.genre === "history" )
// //  data = library.filter ( (bk) => {
// //      return bk.publish>=1987  && 
// //      bk.genre ==="history"})
// // console.log(data)
// // console.log(know)

// let  data = library.map ( (bk) =>   bk.genre === "history" )
// console.log(data)




// const num =[1,2,3,4,5,6,7,8,9,10];

// // let result = num.map( (bers) => bers +10 )
// const result = num
// .map( (ber)   => ber*10  )
// .map( (ber)   => ber+1  )
// .filter((ber) => ber>=40)



// console.log(result)



// const arry =[1,2,3,4,5];


// // const output= arry.reduce(function (acc,cuur) {
// //     console.log(`acc ${acc} and cuur ${cuur}`)
// // return acc+cuur;
// // },0)


// const output = arry.reduce( (acc,cur) => { return acc+cur} ,0 )


// console.log(output)


const shoppingcart=[
  { itemname:"bread",price:300
  } ,
    { itemname:"milk",price:500
  } ,
    { itemname:"jam",price:1000
  } ,
    { itemname:"egg",price:800
  } ,
]

// const grandtotal= shoppingcart.reduce(  (acc,item) => acc+item.price,0)

// console.log(grandtotal)

const output = shoppingcart.map ( (item) => item)
console.log(output)