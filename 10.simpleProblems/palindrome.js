

function palindrome(strng){
    let l= strng.length-1;
    for(let i=0;i< strng.length;i++){
        if(strng[i] !== strng[l]){
            return false
        }
        l--;
    }
    return true
}
let s = 'malaylam'
let res = palindrome(s)
console.log(res)