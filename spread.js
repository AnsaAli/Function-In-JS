function add(a,b){
    return a+b
}
let res = add(1,2)
console.log(res)//3

let arrRes = add([1,2])
console.log(arrRes)//1,2undefined

const arr = [1,2]
let arrRes2 = add(...arr) //spread operator
console.log(arrRes2)//3 , spread will treated as individual elmns