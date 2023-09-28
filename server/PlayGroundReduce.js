const array = [2, 4, 8];

function calcSum(numbers) {
    return numbers.reduce((result, value) => result + value, 0);
}

const newArray = calcSum(array);
console.log('array', array);
console.log('newArray', newArray);
/*Tienes un array de números y tu reto es retornar la suma de todos los valores en él.

Para solucionarlo vas a encontrar una función llamada calcSum que recibe un parámetro de entrada:

numbers: Un array de números
Dentro del cuerpo de la función calcSum debes escribir tu solución.

Ejemplo 1:

Input: [1, 1, 1]
Ouput: 3

Ejemplo 2:

Input: [2, 4, 8]
Output: [2, 4, 8]

Ejemplo 3:

Input: []
Output: 0*/