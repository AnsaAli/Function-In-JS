

function anagram(a,b){
    if(a.length !== b.length) return false;

    let obj = {}
    for(let char of a){
        if(!obj[char]){
            obj[char] = 1
        }else{
            obj[char] ++
        }
    }

    for(let char of b){
        if(!obj[char]){
            return false
        }else{
            return true
        }
    }
}
let a = 'listetn'
let b = 'silent'
let res = anagram(a,b)
console.log(res)