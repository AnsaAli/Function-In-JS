//this will treated as bundle
function add(...args){
   
 let sum=0;
 for(const value of args){
    sum = sum + value
 }
 return sum;
}

let res = add(1,2)
console.log(res) //3

let res2 = add(1,2,6,4) //i can add multiple args
console.log(res2) //13

function find(a,b,...args){
    let multiply = a*b;
    let sum =0;
    for(let arg of args){
        sum +=arg
    }
    return [multiply,sum]
}
console.log(find(1,2,1,1,1,1)) //[ 2, 4 ]
 