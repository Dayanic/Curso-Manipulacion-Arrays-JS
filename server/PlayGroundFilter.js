const array = ['rosa', 'gol', 'pez', 'día', 'gafas'];

function filterByLength(arrays) {
    return arrays.filter(item => item.length >= 4);
}

const newArray = filterByLength(array);
console.log('newArray',newArray);
console.log('original',array);
/*Tienes un array de strings que contienen diferentes palabras, tu reto es retornar un array solo con las que cumplan con la condición de tener 4 o más letras.

Para solucionarlo vas a encontrar una función llamada filterByLength que recibe un parámetro de entrada:

array: Un array de strigs con palabras
Dentro del cuerpo de la función filterByLength debes escribir tu solución.

Ejemplo 1:

Input: ['amor', 'sol', 'piedra', 'día']
Output: [ 'amor', 'piedra' ]

Ejemplo 2:

Input: ['rosa', 'gol', 'pez', 'día', 'gafas']
Output: [ 'rosa', 'gafas' ]*/