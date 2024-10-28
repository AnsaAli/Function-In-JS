let profile ={
    name: 'Ann',
    address:{
        place: 'Kakkanad',
        state:'Kerala'
    }
}

let shallowCopy = {...profile};
shallowCopy.address.state = 'Karnataka'
console.log('From profile:',profile.address.state) //From profile: Karnataka
console.log('From shallow:',profile.address.state) //From shallow: Karnataka

let profile2 ={
    name: 'Ann',
    address:{
        place: 'Kakkanad',
        state:'Kerala'
    }
}
let deepCopy = JSON.parse(JSON.stringify(profile2))
deepCopy.address.state = 'Tamilnadu';
console.log('From profile2:',profile2.address.state)//From profile2: Kerala
console.log('From deepcopy:',deepCopy.address.state)//From deepcopy: Tamilnadu