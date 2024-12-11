let obj = {
    name : 'Ansa',
    education : 'degree',
    address: {
        place: 'ekm',
        sate : 'Kerala'
    }
}

let deepCopy = JSON.parse(JSON.stringify(obj));
deepCopy.address.place = 'Tvm';
console.log('from obj: ', obj.address.place);//from obj:  ekm
console.log('from deep: ', deepCopy.address.place) //from deep:  Tvm