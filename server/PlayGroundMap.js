const array = [1, 1, -2, -3];

function multiplyElements(array){
    return array.map(item => item * 2);
}

const newArray = multiplyElements(array);

console.log('PrimerArray',array);
console.log('SegundoArray',newArray);


/*Ejemplo 1:

Input: [2, 4, 5, 6, 8]
Output: [4, 8, 10, 12, 16]

Ejemplo 2:

Input: [1, 1, -2, -3]
Output: [2, 2, -4, -6]*/