var nameVar = 'Omer';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameconst' , nameConst);
//Block Level Scope



function getPetName(){
    const petName = 'Hal';
    return petName;
}

getPetName();