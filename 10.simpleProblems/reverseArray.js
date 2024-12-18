function reverseArray(arr){
    let left =0;
    let right = arr.length-1;
    for(let num of arr){
        while(left < right){
            [arr[left],arr[right]] = [arr[right],arr[left]];
            left++;
            right--
        }
    }
    console.log('reversed arr: ',arr)

    //reverse each numbers
    for(let i=0;i<arr.length;i++){
        let reverse =0;
        let num= arr[i]
        while(num > 0){
            let digit = num % 10;
            reverse = reverse*10 + digit
            num= Math.floor(num/10)
        }
        arr[i] = reverse
    }
    console.log('each:',arr)
}

const arr = [10,25,33,4,6,99,41,2]
reverseArray(arr)