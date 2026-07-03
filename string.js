// let name='hari'
// let age=34;


// console.log(`my name is ${name}.my age is ${age}`)


// const name= new String (` bimarsh`);
// console.log(name);



// console.log(`my name is bimarsh .i live in ${address}`)//


// const address = new String (`devinagar`);
// console.log(address[0]);
// console.log(address.__proto__);
// console.log(address.length);
// console.log(address[4])
// console.log(address.toUpperCase());
// console.log(address.charAt(5));


const roll=45;
console.log(roll);

const balance = new Number(500);
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);

const otherno = 123.995678;
console.log(otherno.toPrecision(3));

const bank = 10000000;
console.log(bank.toLocaleString());

// console.log(Math.abs(-4));
// console.log(Math.random());
// console.log(Math.random());



forrrr color changingggg event listener 


console.log(Math.random()*10);
console.log((Math.random()*10)+1)

const max=20;
const min=10;
console.log (Math.floor(Math.random() *(max-min +1))+min );   // random valur generate betn 10-20//

const  randomcolor=function(){
    const hex="0123456ABCDEF";
    let color="#";
    for(let i=0; i<6 ; i++){
    color += hex[Math.floor(Math.random()*10)];
    }

return color;
};
let intervalid
const startchanging=function(){
  if(!intervalid){
      intervalid= setInterval(changebg,1000)
  }
    
    function changebg(){
        document.body.style.backgroundColor=randomcolor();
    }

};
const stopchanging=function(){
    clearInterval(intervalid);
    intervalid=null;
};

document.querySelector("#start").addEventListener
("click",startchanging);

document.querySelector("#stop").addEventListener
("click",stopchanging);




