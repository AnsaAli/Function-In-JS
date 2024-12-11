let cb = function (num, index, arr){
    return num % 2 === 0
}

Array.prototype.myFilter = function(cb){
    const filteredrArr = []
    for(let i =0; i< this.length;i++){
       if(cb(this[i])){
        filteredrArr.push(this[i])
       }
    }

        return filteredrArr;
}

const arr = [1,2,3,4,5,6]
const res = arr.myFilter(cb)
console.log(res) //[ 2, 4, 6 ]