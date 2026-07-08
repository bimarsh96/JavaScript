localStorage.setItem(key,value);        //save data to local storage
//key name of key  value value of key
localStorage.setItem("lastname","smith")

let lastname = localStorage.getItem(key)   //read data from local storage

localStorage.removeItem(key);   //remve data from local storage
localStorage.clear()      //clear  local storage



if(localStorage.clickcount){
    localStorage.clickcount= Number(localStorage.clickcount) + 1
}
else{
    localStorage.clickcount=1;
}
