const letters = ['a','b','c'];

//Prueba con antigua forma utilizando un FOR
/*const newArray = [];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element + '++');
}*/

//Prueba utilizando método Map de los arreglos.
const newArray = letters.map(item => item + '++')
console.log('Original',letters);
console.log('New',newArray);