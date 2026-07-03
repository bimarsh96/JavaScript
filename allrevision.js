// const coding = ["js","ruby","python","cap"];

// const values=coding.forEach((item)=>{
//     // console.log(item);
//     return item
// })
// console.log(values)


// const  newnum = [1,2,3,4,5,6,7,8,9];


// const newval = values.filter( (num) =>{
//   return num>5
// })
// console.log(newval)



// const newnum = []

// myNum.forEach((num)=>{

//     if(num>5){
//         newnum.push(num)
//     }
// })
// console.log(newnum)



// const books = [
//     {title : 'book one ' , genure : "friction" ,publish :1981,
//         edition: 2004 },
// {
//     title: "book two" ,genure :"non -friction" ,publish :1992,
//     edition:2008
// },
//     {title : 'book three ' , genure : "history" ,publish :1999,
//         edition: 2007},
// {
//     title: "book four" ,genure :"non -friction" ,publish :1989,
//     edition:2010
// },
//     {title : 'book five ' , genure : "science" ,publish :2009,
//         edition: 2014 },

// {
//     title: "book six" ,genure :"friction" ,publish :1987,
//     edition:2010
// },
//     {title : 'book seven ' , genure : "history" ,publish :1986,
//         edition: 1996 },

// {
//     title: "book eight" ,genure :"science" ,publish :2011,
//     edition:2016
// }
// ]

// let  user = books.filter((bk)=>{
//     return bk.genure === "history"
// })

// user=books.filter((bk)=>{
//     return bk.publish >=2000  && bk.genure ==="history"

// }
// )
// console.log(user);


// const myNum=[1,2,3,4,5,6,7,8];

// const newnums= myNum.map((num)=>{
//     return num+10
// })
// console.log(newnums)


// function one(){
//     const username="ram"

//     function two(){
//         const website = "youtube"
//          console.log(username );
//     }
//     // console.log(website);
// two();

// }
// // one()

// if(true){
//     const username="ram"
//     if(username === "ram"){
//         const website=" youtube "
//         console.log(username + website)
//     }
//     // console.log(website);
// }

// // console.log(username )


// const user = {
//     username : "ram",
//     price :1000,

//     welcomeMessage : function() {
//         console.log(`${this.username} , welcome to the website `)
// console.log(this)
//     }
// }
// // user.welcomeMessage()
// // user.username="shyam"
// // user.welcomeMessage()

// console.log(this)

// ((name)=>{
//     console.log(   `db connected ${name}`)
// })
// ("ram")

// const newAryy=[3,4,5,6,7,8]
// const newnums = newAryy.map((num)=>{
//     return num*10 
// }).map((num)=>{
//     return num+1
// }).filter((num)=>{
//     return num>=40
// })
// console.log(newnums)


// const newval=[1,2,3,4,5];
// const mytotal = newval.reduce((acc,inp)=>{
//     console.log(`acc:${acc} and input ${inp}`)
//     return acc+inp
// },0);
// console.log(mytotal)


// document.getElementById("first heading").innerHTML = "<h1>chai aur code </h1>"


// function one(){
//      const username="rma"

//      function two(){
//         const website ="youtube "
//         console.log(username);
//      }
//     //  console.log(website)
//     //   two()
// }
// one()



if(true){
    const username="ram"
    if(username === "ram"){
        const website ="youtube"
        console.log(website+username )
    }
    // console.log(website )
}
// console.log(username)


const details={
    name:"ram",
  price:566,
   function() {
    console.log(`${this.name},price `)
   }
}