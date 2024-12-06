
//hoisting
console.log(x);//undefined
var x =10;
console.log(x)//10

// above var x js engine treat like
// var x;
//so that why we are getting console.log(x) as undefine
// x =10
//so will get 10 when we log

// console.log(y) //ReferenceError: Cannot access 'y' before initialization
let y=20;
console.log(y)


a()
function a(){

}

//hoisting cannot be  applicable fun statement and arrow
//can't invoke  
funState()
var funState = function (){

}

arrowfun()
var arrowfun = ()=>{
    
}