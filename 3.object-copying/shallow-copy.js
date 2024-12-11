let obj1 = {
    name : 'Ansa',
    place : 'Kakkanad',
    address: {
        city : 'Ekm',
        zip: '10093',
        state : 'kerala'
    }
}

//shallow copy
let shallowObj = {...obj1}
shallowObj.address.city = 'Alappy';
console.log('from obj1: ', obj1.address.city); //from obj1:  Alappy
console.log('from shallowObj: ', shallowObj.address.city) //from shallowObj:  Alappy