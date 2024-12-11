//map(cb)

let cb = function(num, index, arr){
    return num*2
}
Array.prototype.myMap = function(cb){
    const mappedArr =[];
    for(let i=0;i<this.length; i++){
        mappedArr.push(cb(this[i]))
    }
  
    return mappedArr;
}

const arr = [1,2,3,4]
let res = arr.myMap(cb);
console.log(res) //[ 2, 4, 6, 8 ]