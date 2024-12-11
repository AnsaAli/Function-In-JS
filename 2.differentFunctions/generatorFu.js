function* generatorFun(){
    let i=0;
    while(true){
        yield i++
    }
}
const counter = generatorFun();
console.log(counter.next()) //{ value: 0, done: false }
console.log(counter.next())//{ value: 1, done: false }
console.log(counter.next())//{ value: 2, done: false }