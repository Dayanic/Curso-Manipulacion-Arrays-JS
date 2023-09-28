const elements = [1,1,2,2];
const othersElements = [3,3,4,4];
//Se copia array de esta forma para no hacer referencia al stage del array
const newArray = [...elements];

for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}

console.log('for',newArray);

const newArray2 = elements.concat(othersElements);
const newArray3 = [...elements,...othersElements];
console.log('concat',newArray2);
console.log('...',newArray3);
const newArray4 = [...elements,'random'];
console.log('...String',newArray4);

const newArray5 = [...elements,...'random'];
console.log('...String',newArray5);

//Con esta opción se modifica el array original
elements.push(...othersElements);
console.log('mutable',elements);