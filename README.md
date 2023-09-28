# Curso Manipulación de Arrays
Bienvenido/a al curso de **Manipulación de Arrays en JavaScript**. Esta vez conocerás los arrays en JavaScript, aprenderás desde cómo crearlos hasta los distintos métodos que tiene.

Profesor: [Nicolas Molina](https://platzi.com/profes/nicobytes/), Google Developer Expert.

## **Requisitos iniciales**
Como requisito inicial, deberás tener dos carpetas: `client` y `server` que servirán para ejercicios en el navegador y en el servidor, respectivamente. También necesitarás instalar una dependencia llamada `http-server``. Asimismo puedes clonar el [repositorio de GitHub](https://github.com/platzi/curso-manipulacion-de-arrays/tree/main) del curso.

![](https://static.platzi.com/media/articlases/Images/manipulacion_arrays01.PNG)

Si no conoces cómo iniciar un proyector para instalar dependencias, te recomiendo que realices el curso de [Gestión de Dependencias y Paquetes con NPM](https://platzi.com/cursos/npm/).

Te recomiendo usar [Codi.link](https://codi.link/), es un editor de código para escribir HTML, CSS y JavaScript y visualizar el resultado a tiempo real. Daña el código, resuelve los problemas de cada clase o genera nuevos ejemplos que te ayuden a reforzar los temas aprendidos.

# ForEach
El método `forEach` de los *arrays* consiste **en ejecutar una función *(callback)* para cada uno de los elementos iterados**. Iterar significa repetir una acción varias veces.

Este método recibe **dos argumentos**:

* La función que itera cada elemento del *array* (obligatorio).
* Un objeto al que puede hacer referencia el contexto `this` en la función. Si se lo omite, será `undefined`. Recuerde que `this` en *arrow functions* es el objeto global.
```javascript
array.forEach(function(), thisArg)
```
La función, que recibe como argumento el método `forEach`, utiliza **tres parámetros opcionales**:
* El **valor actual del elemento iterado**. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
* El **índice del elemento iterado**. Es decir, si es la primera iteración, será el índice `0`, y así sucesivamente.
* El **array que está iterando.**
```javascript
array.forEach(function(element, index, array))
```
## **Diferencia entre la estructura *for* y el método *forEach***
Los métodos de *arrays* nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura `for`, con un resultado igual o parecido.
```javascript
const letters=['a','b','c']

// Utilizando la estructura repetitiva for
for(let index=0; index<letters.length; index++){
    const element=letters[index]
    console.log('for',element)
}

// Utilizando el método forEach
letters.forEach(item => console.log('forEach',item))
```
## **Mostrar elementos de un *array* al usuario**
Ahora que ya conoces cómo funciona el método `forEach`, utilízalo para agregar elementos al HTML y así que el usuario lo mire.

Por ejemplo, en un archivo HTML agrega una etiqueta `div` con un id `app`, que nos servirá para agregar nuestros elementos.
```javascript
<div id="app"></div>
```
Después crea la lógica en un archivo de JavaScript.
```javascript
const products = [
  { title: 'Burger', price: 121 },
  { title: 'Pizza', price: 20 },
  { title: 'Soda', price: 5 },
]

const app = document.getElementById('app')

products.forEach(product => {
  app.innerHTML += `<li>${product.title} -$ ${product.price}</li>`
})
```
Y listo, en pantalla aparecerán los elementos del *array* `products` con su título y precio. Revisa el resultado en este [codi.link](https://codi.link/PGRpdiBpZD0iYXBwIj48L2Rpdj4=%7C%7CY29uc3QgcHJvZHVjdHMgPSBbDQogIHsgdGl0bGU6ICdCdXJnZXInLCBwcmljZTogMTIxIH0sDQogIHsgdGl0bGU6ICdQaXp6YScsIHByaWNlOiAyMCB9LA0KICB7IHRpdGxlOiAnU29kYScsIHByaWNlOiA1IH0sDQpdDQoNCmNvbnN0IGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKQ0KDQpwcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3QgPT4gew0KICBhcHAuaW5uZXJIVE1MICs9IGA8bGk+JHtwcm9kdWN0LnRpdGxlfSAtJCAke3Byb2R1Y3QucHJpY2V9PC9saT5gDQp9KQ0K).

## **Ejercicio utilizando la función *forEach***
**Crea** una lista de tareas, a partir de un array que contenga el título y el estado (completado o no) y muéstralos en un archivo HTML. Puedes utilizar un *input* de tipo `checkbox` para indicar el estado de la tarea. ¡Comparte tu trabajo en la sección de aportes!

# Mutable o Inmutable
Los conceptos de **mutabilidad e inmutabilidad** son muy importantes para los siguientes métodos de *arrays*. Existen métodos mutables que cambian el *array* original; e inmutables que devuelven un *array* diferente al original.

## **Referencias en memoria**
En JavaScript, cada estructura está guardada en una referencia en memoria, por lo que si cambiamos un elemento en el *array*, también lo haremos en esa referencia. Al clonar *arrays*, se crea un nuevo *array* que tiene las mismas referencias en memoria que el original, por lo que si se realiza un cambio en el original, también cambiará en la copia.
```javascript
const original = [1,2,3]
const copia = original
copia[0] = "Hola"

console.log(original) // [ 'Hola', 2, 3 ]
```
## **Diferencia entre mutabilidad e inmutabilidad**
Con lo mencionado anteriormente, **mutable es aquella acción que cambia el valor en la referencia en memoria del elemento del *array* original**, provocando que cambien el original y la copia. **Inmutable es la acción en la que se cambia el valor, pero en una referencia diferente del original**, provocando que el original siga igual.

La mutabilidad es más flexible y una buena opción si se requiere cambiar, actualizar o eliminar datos; pero esto puede ocasionar fallos o resultados erróneos en nuestra aplicación. La inmutabilidad es más exigente, te permite generar nuevas estructuras para manejarlas sin cambiar la original; pero esto puede provocar que la memoria colapse.

Por lo que, ¿cuál es mejor? La respuesta es ninguna, cada uno te permite manejar estructuras de datos, por ende es necesario identificar cuál forma es la adecuada a aplicar en un algoritmo.

# Qué es el método map
El método `map` consiste en crear un nuevo *array* a partir de los elementos originales transformados mediante una función *(callback)* y **es inmutable**.

La transformación implica cambiar cualquier elemento en otro, ya sea un número, un objeto, otro *array*. Las posibilidades son infinitas.

Este método recibe **dos argumentos**:

* La función que itera y transforma cada elemento del *array* (obligatorio).
* Un objeto al que puede hacer referencia el contexto `this` en la función. Si se lo omite, será `undefined`. Recuerde que `this` en *arrow functions* es el objeto global.
```javascript
let otherArray = array.map(function(), thisArg)
```
La función, que recibe como argumento el método `map`, utiliza **tres parámetros**:

* El **valor actual del elemento iterado**. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
* El **índice del elemento iterado**. Es decir, si es la primera iteración, será el índice `0`, y así sucesivamente.
* El ***array*** **que está iterando**.
```javascript
const other = array.map(function(element, index, array))
```
## **Diferencia entre la estructura *for* y el método *map***
Los métodos de *arrays* nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura `for`, con un resultado igual o parecido.

Por ejemplo, hagamos un algoritmo que transforme cada elemento de un array en el doble de sí mismo.

Si utilizamos la estructura `For`, necesitaremos un *array* adicional vacío y utilizarlo con el método `push` para agregar los elementos transformados. El método `push` es mutable.
```javascript
const numbers = [1,2,3,4,5]
const newNumbers = []

for(let i=0; i< numbers.length; i++){
    const number = numbers[i]
    newNumbers.push(number*2)
}

console.log(newNumbers) // [ 2, 4, 6, 8, 10 ]
```
Con el método `map`, solo debemos establecer la función que indique la transformación para cada elemento.
```javascript
const numbers = [1,2,3,4,5]
const newNumbers = numbers.map( function(number){
    return number * 2
})
// o 
const newNumbers = numbers.map(number => number * 2)

console.log(newNumbers) // [ 2, 4, 6, 8, 10 ]
```
Recuerda siempre retornar un valor en la función `callback` del método.

## **Diferencia entre *forEach* y *map***
La principal diferencia entre estos dos es que `forEach` solamente itera cada elemento, mientras que `map` itera y transforma cada elemento en un nuevo *array*.

¿Pero también se pueden transformar los elementos con `forEach` Sí, sin embargo, necesitas agregar cada elemento en cada iteración a un *array* nuevo, caso contrario puedes mutar el *array* original.

# Map Reloaded
Ahora que ya sabes cómo funciona el método `map` de *arrays* estudiemos diferentes situaciones que deberás manejar *array* de objetos como los siguientes datos de `orders`.
```javascript
const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
]
```
## **Extrayendo datos necesarios**
De un conjunto de datos a veces necesitas ciertos atributos para realizar una operación, extraer los nombres o cuantificar un suceso. El método `map` te permite extraer estos datos según los puedas utilizar.
```javascript
const totales = orders.map(order => order.total)

console.log(totales) // [ 60, 120, 180, 240 ]
```
## **Transformando objetos dentro de un *array***
De un conjunto de datos, de los cuales son objetos, a veces requieres añadir una propiedad nueva o eliminar una que no es necesaria. Si necesitas transformar objetos dentro de un *array*, debes tener en cuenta que **cada objeto tiene una referencia en memoria propia**. Por lo que si transformas un objeto, también lo harás en el original como en el nuevo, aun cuando el método `map` es inmutable.

Los parámetros por referencia los debes tener presente cuando manejes objetos y *arrays*.
```javascript
// Ejemplo donde transformas los objetos originales
const tarifas = orders.map(order => {
    order.tax = 0.19
    return order
})

tarifas[0] === orders[0] // true
tarifas[1] === orders[1] // true
```
Una forma de evitar este comportamiento, es crear un nuevo objeto con el [spread operator](https://platzi.com/clases/1815-ecmascript-6/25942-que-se-implemento-en-es9/) (operador de propagación).
```javascript
// Ejemplo donde no transformas los objetos originales
const tarifas = orders.map(order => {
    return {
        ...order,
        item: 0.19,
    }
})

tarifas[0] === orders[0] // false
tarifas[1] === orders[1] // false
```

# Filter
El método `filter` consiste en crear un nuevo *array* a partir de los elementos originales filtrados mediante una función *(callback)* que indica la **condición a cumplir y es inmutable**. Si la condición se cumple, retorna el elemento completo.

Este proceso recibe **dos argumentos**:

* La función que itera y evalúa si cada elemento del *array* si cumple con la condición especificada (obligatorio).
* Un objeto al que puede hacer referencia el contexto `this` en la función. Si se lo omite, será `undefined`. Recuerde que `this` en *arrow functions* es el objeto global.
```javascript
let otherArray = array.filter(function(), thisArg)
```
La función, que recibe como argumento el método `filter`, utiliza **tres parámetros**:

* El **valor actual del elemento iterado**. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
* El **índice del elemento iterado**. Es decir, si es la primera iteración, será el índice `0`, y así sucesivamente.
* El ***array*** **que está iterando**.
```javascript
const other = array.map(function(element, index, array))
```
## **Diferencia entre la estructura *for* y el método *filter***
Los métodos de *arrays* nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura `for`, con un resultado igual o parecido.

Por ejemplo, hagamos un algoritmo que filtre los elementos que tengan más de 6 letras en un *array* de palabras.

Si empleamos la estructura `for`, necesitaremos un *array* adicional vacío y usarlo con el método `push` para agregar los elementos que cumplan la condición. El método `push` es mutable.
```javascript
const words = ["spray", "elites", "limit", "apple", "exuberant"]
const newWords = []

for(let i=0; i< words.length; i++){
    const word = words[i]
    if (word.length >= 6){
        newWords.push(word)
    }
}

console.log(newWords) // [ 'elites', 'exuberant' ]
```
Con el método `filter``, solo debemos establecer la función que indique la condición a cumplir para cada elemento.
```javascript
const words = ["spray", "elites", "limit", "apple", "exuberant"]

const newWords = words.filter( function(word){
    if (word.length >=6){
      return true
    }else{
      return false
    }
})
// o 
const newWords = words.filter(word => word.length >= 6)

console.log(newWords) // [ 'elites', 'exuberant' ]
```
Recuerda siempre retornar un valor en la función `callback` del método.

## **Filtrar elementos a partir de la propiedad de un objeto**
Con el método `filter` puedes filtrar los objetos de un *array* a partir de una condición referente a la propiedad de cada elemento.

Teniendo en cuenta que el nuevo *array* contendrá el **objeto completo** que haya cumplido con la condición especificada.
```javascript
const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
]
```
Por ejemplo, filtremos los elementos del *array* `orders` cuyo total sea mayor a 150.
```javascript
const newOrders = orders.filter(order => order.total > 150)

console.log(newOrders) 
/* [
  {
    customerName: 'Santiago',
    total: 180,
    delivered: true
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true
  }
]
*/
```

# Reduce
El método `reduce` **es inmutable** y consiste retornar un solo valor del *array* iterado a partir de una función *(callback)* que indica de qué manera se itera cada elemento para reducirlo.

Este método recibe **dos argumentos**:

* La función que itera y reduce cada elemento del *array*. (obligatorio)
* El valor inicial que utilizará como argumento la función. Si no se especifica, en la primera iteración el valor inicial será el primer elemento del *array* y no ejecuta la función.
```javascript
let reducedValue = array.reduce(function(), initialValue)
```
La función, que recibe como argumento el método `map`, utiliza **cuatro parámetros**:

* El **valor acumulado por la función** *(callback)*. En la primera iteración será igual al valor inicial del argumento del método. (obligatorio)
* El **valor actual del elemento iterado**. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente. (obligatorio)
* El **índice del elemento iterado**. Es decir, si es la primera iteración, será el índice `0`, y así sucesivamente.
* El ***array*** **que está iterando**.
```javascript
let reducedValue = array.reduce(
    function(acumulator,element, index, array), 
    valorInicial
)
```
## **Diferencia entre la estructura *for* y el método *reduce***
Los métodos de *arrays* nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura `for`, con un resultado igual o parecido.

Por ejemplo, hagamos un algoritmo que calcule la suma de los cuadrados de los elementos de un *array*.

### **Uso de la estructura *for* para una reducción**
Si utilizamos la estructura `for`, necesitaremos una variable acumuladora para sumar los elementos en cada iteración.
```javascript
const numbers = [5,4,8,6,2]
let suma = 0

for(let i = 0; i<numbers.length; i++){
  const number = numbers[i]
  suma = suma + number**2
}

console.log(suma) // 145
```
### **Uso del método *reduce* para una reducción**
Con el método `reduce`, solo debemos establecer la función que indique la reducción para cada elemento.
```javascript
const numbers = [5,4,8,6,2]

const reducedValue = numbers.reduce((suma, number) => suma + number**2)

console.log(reducedValue) // 125
```
Observa que si **no especificamos el valor inicial** del método, entonces tomará el primer elemento sin ejecutar la función reductora.

|Iteración | Reducción|
|----------|----------|
| 1 | 5 |
| 2 | 5 + 4**2 = 21 |
| 3 | 21 + 8**2 = 85 |
| 4 | 85 + 6**1 = 121 |
| 5 | 121 + 2**2 = 125 |

Por lo que debes **especificar el valor inicial** para solucionar este problema.
```javascript
const numbers = [5,4,8,6,2]

const reducedValue = numbers.reduce((suma, number) => (
    suma + number**2
), 0) // <- Valor inicial

console.log(reducedValue) // 145
```
De esta manera se ejecutará la función reductora adecuadamente.

| Iteración | Reducción |
| --------- | --------- |
| 1 | 0 + 5**2 = 25 |
| 2	| 25 + 4**2 = 41 |
| 3	| 21 + 8**2 = 105 |
| 4	| 85 + 6**1 = 141 |
| 5	| 121 + 2**2 = 145 |

Si se ingresa otro valor inicial, por ejemplo `3`, entonces cambiaría la primera iteración.

| Iteración | Reducción |
| --------- | --------- |
| 1	| 3 + 5**2 = 28 |
| 2	| 28 + 4**2 = 44 |
| …	| … |
| 5	| 144 + 2**2 = 148 |

# Reduce Reloaded
Ahora que ya sabes cómo funciona el método `reduce` de *arrays*, podemos utilizarlo para crear un objeto con la frecuencia de cada elemento de un array, es decir, cuántas veces aparece.

## **Objeto de frecuencias**
Para obtener un objeto de frecuencias de cada elemento de un *array* es necesario tener presente las siguientes consideraciones:

* Establecer un objeto vacío como valor inicial del método `reduce`.
* El objeto vacío también será nuestro acumulador.
* Verificar si el elemento ya existe en nuestro objeto de frecuencias.
* Si no existe, creamos la propiedad referente al elemento del *array* y le inicializamos en 1.
* Si ya existe solamente debemos aumentar en una unidad la propiedad de nuestro objeto referente al elemento del array.
* Finalmente, debes retornar el objeto dentro de la función del método `reduce`.

Por ejemplo, con el siguiente *array* llamado `items``:
```javascript
const items = [5, 6, 7, 6, 5, 7, 7, 8]
```
El objeto de frecuencias será el siguiente:
```javascript
{
    5: 2,
    6: 3,
    7: 2,
    8: 1,
}
```
## **Utilizando el método reduce para crear un objeto de frecuencias**
Una vez entendido la entrada y salida del algoritmo, entonces el código será utilizado de la siguiente manera:
```javascript
const frecuencias = items.reduce((objeto, elemento) => {
    if (!objeto[elemento]){
        objeto[elemento] = 1
    }else{
        objeto[elemento] = objeto[elemento] + 1
    }
    
    return objeto
}, {})
```
De esta manera obtendrás el objeto de frecuencias. Puedes utilizar este algoritmo para contar elementos de cualquier *array*.

# Some
El método `somes` es **inmutable** y consiste retornar un valor lógico verdadero **si existe al menos un elemento que cumpla la condición** establecida en la función *(callback)*.

Este método recibe **dos argumentos**:

* La función que itera y evalúa cada elemento del *array* hasta que al menos uno cumpla con la condición especificada (obligatorio).
* Un objeto al que puede hacer referencia el contexto `this` en la función. Si se lo omite, será `undefined`. Recuerde que `this` en *arrow functions* es el objeto global.
```javascript
array.some(function(), thisArg)
```
La función, que recibe como argumento el método `some`, utiliza **tres parámetros**:

* El **valor actual del elemento iterado**. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
* El **índice del elemento iterado**. Es decir, si es la primera iteración, será el índice `0`, y así sucesivamente.
* El **array que está iterando**.
```javascript
array.some(function(element, index, array))
```
## **Diferencia entre la estructura *for* y el método *some***
Los métodos de *arrays* nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura `for`, con un resultado igual o parecido.

Por ejemplo, hagamos un algoritmo que indique si en un *array* existe al menos un número par.

Si utilizamos la estructura `for`, necesitaremos una variable de tipo booleana con el valor `false` e iterar hasta que la condición se cumpla. La palabra reservada `break` rompe el ciclo repetitivo.
```javascript
const numbers = [1, 2, 3, 5]

let respuesta = false
for (let i=0; i < numbers.length; i++){
    const element = numbers[i]
    if (element % 2 === 0) {
        respuesta = true
        break
    }
}

console.log(respuesta) // true
```
Con el método `some` solo debemos establecer la función que indique la condición a cumplir para cada elemento.
```javascript
const numbers = [1, 2, 3, 5]

const respuesta = numbers.some(item => item % 2 === 0)
console.log(respuesta) // true
```

# Every
El método `every` es **inmutable** y consiste retornar un valor lógico verdadero **si todos los elementos cumplen con la condición** establecida en la función *(callback)*.

Este método recibe **dos argumentos**:

* La función que itera y evalúa cada elemento del *array* hasta que al menos uno cumpla con la condición especificada (obligatorio).
* Un objeto al que puede hacer referencia el contexto `this` en la función. Si se lo omite, será `undefined`. Recuerde que `this` en *arrow functions* es el objeto global.
```javascript
array.every(function(), thisArg)
```
La función, que recibe como argumento el método `every`, utiliza **tres parámetros**:

* El **valor actual del elemento iterado**. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
* El **índice del elemento iterado**. Es decir, si es la primera iteración, será el índice `0`, y así sucesivamente.
* El **array que está iterando**.
```javascript
array.every(function(element, index, array))
```
## **Diferencia entre la estructura *for* y el método *every***
Los métodos de *arrays* nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura `for`, con un resultado igual o parecido.

Por ejemplo, hagamos un algoritmo que indique si en un *array*, todos los elementos son menores o iguales a 40.

Si utilizamos la estructura `for`, necesitaremos una variable de tipo booleana con el valor `true` e iterar hasta que una condición contraria al enunciado se cumpla. La palabra reservada `break` rompe el ciclo repetitivo.
```javascript
const numbers = [1, 30, 41, 29, 10, 13]

let respuesta = true
for (let i=0; i < numbers.length; i++){
    const element = numbers[i]
    if (element >= 40) {
        respuesta = false
        break
    }
}

console.log(respuesta) // false
```
Con el método `every`, solo debemos establecer la función que indique la condición a cumplir para cada elemento.
```javascript
const numbers = [1, 30, 39, 29, 10, 13]

const respuesta = numbers.every(item => item < 40)
console.log(respuesta) // true
```

# Find y FindIndex
Los métodos `find` y `findIndex` consisten en encontrar el **primer elemento de un *array* que cumpla con la condición especificada** en la función *(callback)*.

En el caso de `find` retornará el elemento completo, si cumple con la condición, caso contrario retornará `undefined`. El método `findIndex` retornará el índice del elemento encontrado, caso contrario retornará `-1`.

Estos procedimientos reciben **dos argumentos**:

* La función que itera y evalúa cada elemento del *array* hasta encuentre uno que cumpla con la condición especificada (obligatorio).
* Un objeto al que puede hacer referencia el contexto `this` en la función. Si se lo omite, será `undefined`. Recuerde que `this` en arrow functions es el objeto global.
```javascript
array.find(function(), thisArg)
array.findIndex(function(), thisArg)
```
La función, que recibe como argumento los métodos `find` y `findIndex`, utiliza **tres parámetros**:

* El **valor actual del elemento iterado**. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
* El **índice del elemento iterado**. Es decir, si es la primera iteración, será el índice `0`, y así sucesivamente.
* El **array que está iterando**.
```javascript
array.find(function(element, index, array))
array.findIndex(function(element, index, array))
```
## **Diferencia entre la estructura *for* y los métodos *find* y *findIndex***
Los métodos de *arrays* nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura `for`, con un resultado igual o parecido.

Por ejemplo, hagamos un algoritmo que devuelva el primer elemento que sea mayor a 40 de un array.

Si utilizamos la estructura `for`, necesitaremos una variable con el valor `undefined` e iterar hasta que se cumpla la condición. La palabra reservada `break` rompe el ciclo repetitivo.
```javascript
const numbers = [1, 30, 41, 29, 50, 60]

let respuesta = undefined
for (let i=0; i < numbers.length; i++){
    const element = numbers[i]
    if (element >= 40) {
        respuesta = element
        break
    }
}

console.log(respuesta) // 41
```
Si se necesita el índice, en lugar de una variable con el valor de `undefined`, debería estar un valor de `-1`. Y también cambiar el valor del elemento por el del índice del `for`.

Con los métodos `find` y `findIndex`, solo debemos establecer la función que indique la condición a cumplir para cada elemento.
```javascript
const numbers = [1, 30, 41, 29, 50, 60]

const respuesta = numbers.find(item => item >= 40)
const respuesta2 = numbers.findIndex(item => item >= 40)

console.log(respuesta) // 41
console.log(respuesta2) // 2
```
Recuerda que si los métodos `find` y `findIndex` no encuentran EL elemento, devolverán `undefined` y `-1`, respectivamente.
```javascript
const numbers = ["a", "b", "c"]

const respuesta = numbers.find(item => item >= 40)
const respuesta2 = numbers.findIndex(item => item >= 40)

console.log(respuesta) // undefined
console.log(respuesta2) // -1
```

# Includes
El método `includes` determina si un *array* o *string* incluye un determinado elemento. Devuelve `true` o `false`, si existe o no respectivamente.

Este método recibe dos argumentos:

* El **elemento** a comparar.
* El **índice inicial** desde donde comparar hasta el último elemento.
## **Índices positivos y negativos**
Los índices positivos comienzan desde 0 hasta la longitud total menos uno, de **izquierda a derecha** del *array*.
```javascript
[0,1,2,3, ...., lenght-1]
```
Los índices negativos comienzan desde -1 hasta el negativo de la longitud total del *array*, de **derecha a izquierda**.
```javascript
[-lenght, ...,  -3, -2, -1]
```
## **Diferencia entre la estructura for y el método includes**
Los métodos de *arrays* nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura `for`, con un resultado igual o parecido.

Por ejemplo, hagamos un algoritmo que indique si en un *array* existe un elemento en específico.

Si utilizamos la estructura `for`, necesitaremos una variable de tipo booleana con el valor `false` e iterar hasta que encuentre el elemento específico. La palabra reservada `break` rompe el ciclo repetitivo.
```javascript
const pets = [ "cat", "dog", "bat" ]

let includeInArray = false
for (let i = 0; i < pets.length; i++){
    const item = pets[i]
    if (item === "cat"){
        includeInArray = true
        break
    }
}

console.log(includeInArray) // true
```
## **Ejemplos utilizando el método *includes***
El método `includes` se utiliza para *arrays* y *strings*. El método es sensible a mayúsculas, minúsculas y espacios.
```javascript
//Utilizando strings
const saludo = "Hola mundo"

saludo.includes("Hola") // true
saludo.includes("Mundo") // false
saludo.includes(" ") // true
saludo.includes("Hola", 1) // false
saludo.includes("mundo", -5) // true
```
```javascript
// Utilizando arrays
const frutas = ["manzana", "pera", "piña", "uva"]

frutas.includes("manzana") // true
frutas.includes("Pera") // false
frutas.includes("sandía") // false
frutas.includes("manzana", 1) // false
frutas.includes("piña", -1) // false
frutas[0].includes("man") // true
```

# Join
El método `join` une los elementos del *array*, mediante una separación, y retorna un *string*. Si un elemento es `undefined` o `null`, se convierte en una cadena vacía.

Este procedimiento recibe un argumento:

* La **separación** de cada elemento del *array* al unirlos.
```javascript
array.join(separación)
```
## **Diferencia entre la estructura *for* y el método *join***
Los métodos de *arrays* nos permiten realizar algoritmos con una menor cantidad de líneas que una estructura `for`, con un resultado igual o parecido.

Si utilizamos la estructura `for` para recrear el método `join`, necesitaremos una variable con el valor acumuladora con un *string* vacío y otra con el valor del separador. Se debe evaluar si existe elementos `null` o `undefined`, se lo puede realizar con el operador [nullish coalescing](https://platzi.com/clases/1815-ecmascript-6/39727-ecmascript-2020-caracteristicas-importantes/).
```javascript
const elements = ["hola", null, "como", "estas"]

let acumulator = ""
const separator = "/"
for (let i = 0; i<elements.length; i++){
  const element = elements[i] ?? ""
  if(i !== elements.length-1){
    acumulator += element + separator
  }else{
    acumulator += element
  }
}

console.log(acumulator) // 'hola//como/estas'
```
Con el método `join` solamente debemos establecer el separador de cada elemento como argumento.
```javascript
const elements = ["hola", null, "como", "estas"]

const resultado = elements.join("/")

console.log(resultado) // 'hola//como/estas'
```
## **Método split de strings**
El método `split` de *strings*, es lo contrario que el método `join`, consiste en separar un *string* en *substrings*, indicando un valor a separar. Este método retornará un *array* de los elementos separados.

Este método recibe dos argumentos:

* El **separador** que especifica el conjunto de caracteres a separar en substrings.
* El **límite** de elementos separados a retornar.
```javascript
const cadena = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web."

cadena.split(" ") 
/* [ 'JavaScript', 'es', 'maravilloso,', 'con', 'JavaScript', 'puedo', 'crear', 'el', 'futuro', 'de', 'la', 'web.' ]
*/
cadena.split(", ") 
/* [ 
    'JavaScript es maravilloso', 
    'con JavaScript puedo crear el futuro de la web.' 
]*/
cadena.split("JavaScript")
/* [
    '', 
    ' es maravilloso, con ', 
    ' puedo crear el futuro de la web.' 
]*/
cadena.split(" ", 3) // [ 'JavaScript', 'es', 'maravilloso,' ]
```

# Concat
El método `concat` **es inmutable** y consiste en crear un nuevo *array* a partir de la unión de otros valores o *arrays* especificados como argumentos.

Este método recibe **uno o varios argumentos**:

* Valores cualesquiera y/o *arrays* para concatenar.
```javascript
let result = array.concat(otherArray)
```
## **Diferencia entre la estructura *for* y el método *concat***
Si deseas utilizar una estructura `for` para concatenar *arrays*, debes copiar el primer *array* **sin su referencia en memoria** para que no exista mutabilidad. Puedes realizar una copia con el *spread operator* (operador de propagación) o con el nuevo método `structuredClone`. También puedes utilizar el método `push` si no importa la mutabilidad del *array* original.

Con el método `concat`, solo debemos establecer el/los elemento/s a concatenar a un *array* de manera **inmutable**, es decir, los elementos originales no cambiarán.
```javascript
const numbers1 = [1,2,3,4]
const numbers2 = [5,6,7,8]
const numbers3 = [9,10,11,12]

const result1 = numbers1.concat("hola", "mundo")
const result2 = numbers1.concat(numbers2)
const result3 = numbers1.concat(numbers2, "hola")
const result4 = numbers1.concat(numbers2, numbers3)

result1 // [ 1, 2, 3, 4, 'hola', 'mundo' ]
result2 // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
result3 // [ 1, 2, 3, 4, 5, 6, 7, 8, 'hola' ]
result4 // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
```

# Flat
El método `flat`` es **inmutable** que consiste en retornar un *array* donde los sub-arrays han sido aplanados hasta una profundidad especificada. El aplanamiento consiste en transformar un *array* de *arrays* a una sola dimensión.

Este procedimiento recibe un argumento:

* La **profundidad** del aplanamiento, por defecto, tiene un valor de 1. Si se desea aplanar todos los *sub-arrays* en una sola dimensión, utiliza el valor de *Infinity*.
```javascript
array.flat(profundidad)
```
## **Diferencia entre la estructura *for* y el método *flat***
Si se utiliza la estructura `for` para aplanar un *array* de *arrays*, es necesario utilizar otra estructura `for` para cada sub-nivel del *array* o recursión.
```javascript
const matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
]

const flatArray = []

for(let i=0; i<matrix.length; i++){
  const array = matrix[i]
  for(let j=0; j<array.length; j++){
    flatArray.push(matrix[i][j])
  }
}

console.log(flatArray)
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
```
Con el método `flat` solamente es necesario indicar la profundidad de aplanamiento del *array*.
```javascript
const array = [1,2,[3,4],5,6]
const result = array.flat() 
result// [1,2,3,4,5,6]

const array2 = [1, 2, [3, 4, [5, 6]]];
const result2 = array2.flat() 
result2// [1, 2, 3, 4, [5, 6]]

const array3 = [1, 2, [3, 4, [5, 6]]]
const result3 = array3.flat(2) 
result3// [1, 2, 3, 4, 5, 6]

const array4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
const result4 = array4.flat(Infinity) 
result4// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

# FlatMap
El método `flatMap` es **inmutable** y consiste en la combinación de los métodos `map` y `flat`. Primero realiza la iteración de los elementos del `array` (como si fuera `map`), y después los aplana en **una sola profundidad** (como si fuera `flat`).

Este procedimiento recibe los mismos argumentos que el [método map](https://platzi.com/clases/2461-arrays/40873-map/).
```javascript
const strings = ["Nunca pares", "de Aprender"]

strings.map(string => string.split(" ")) 
// [ [ 'Nunca', 'pares' ], [ 'de', 'Aprender' ] ]

strings.flatMap(string => string.split(" ")) 
// [ 'Nunca', 'pares', 'de', 'Aprender' ]
```
```javascript
const numbers = [1, 2, 3, 4]

numbers.map(number => [number * 2]) 
// [[2], [4], [6], [8]]

numbers.flatMap(number => [number *2]) 
// [2, 4, 6, 8]
Cuidado con el método flatMap, primero realiza el map y luego el flat.

const numbers2 = [1,[2,3], 4, 5]
numbers2.flatMap(number => [number *2]) 
// [ 2, NaN, 8, 10 ]
// * Recuerda: NaN = No a Number
```

# Mutable functions
Las funciones mutables consisten en cambiar el *array* original. Estos métodos son:

* push
* unshift
* pop
* shift
* splice
* sort

## **Método push**
El método `push` **agrega** uno o varios elementos al **final** del *array* original. El método recibe como argumento los valores a agregar. Retorna el número de elementos del *array* mutado.
```javascript
const array = [1,2,3]
array.push(4,5)
console.log(array) // [ 1, 2, 3, 4, 5 ]
```
## **Método unshift**
El método `unshift` **agrega** uno o varios elementos al **inicio** del *array* original. El método recibe como argumento los valores a agregar. Retorna el número de elementos del *array* mutado.
```javascript
const array = [3,4,5]
array.unshift(1,2)
console.log(array) // [ 1, 2, 3, 4, 5 ]
```
## **Método pop**
El método `pop` **extrae** el elemento del **final** del *array* original. El método no recibe ningún argumento. Retorna el elemento extraído, si no se guarda en una variable, el [Garbage Collection](https://platzi.com/clases/1798-javascript-navegador/25687-garbage-collection/) {target="_blank"} lo elimina.
```javascript
const array = [1,2,3,4]
const lastElement = array.pop()
console.log(lastElement) // 4
console.log(array) // [ 1, 2, 3 ]
```
## **Método shift**
El método `shift` **extrae** el elemento del **inicio** del *array* original. El método no recibe ningún argumento. Retorna el elemento extraído, si no se guarda en una variable, el [Garbage Collection](https://platzi.com/clases/1798-javascript-navegador/25687-garbage-collection/) {target="_blank"} lo elimina.
```javascript
const array = [1,2,3,4]
const firstElement = array.shift()
console.log(firstElement) // 1
console.log(array) // [ 2, 3, 4 ]
```
## **Método splice**
El método `splice` **extrae** uno o varios elementos del *array* original a partir del índice y los reemplaza con otro elemento especificado como argumento. Retorna un *array* con los elementos extraídos, si no se guarda en una variable, el [Garbage Collection](https://platzi.com/clases/1798-javascript-navegador/25687-garbage-collection/) {target="_blank"} lo elimina.

El método `splice` recibe tres argumentos:

* El **índice** donde comenzará a cambiar el *array*.
* La **cantidad de elementos** que serán reemplazados.
* **Uno o varios elementos** que reemplazarán a los originales del *array*.
```javascript
array.splice(índice, cantidad, items)
array.splice(índice, cantidad, item1, item2, ..., itemN)
```
## **Ejemplos utilizando el método** ***splice***
```javascript
const array = [1,2,3,4]
const elements = array.splice(2,1,"tres")
console.log(elements) // [3]
console.log(array) // [ 1, 2, 'tres', 4 ]

const array = [1,2,3,4]
const elements = array.splice(1,2,"dos", "tres")
console.log(elements) // [ 2, 3 ]
console.log(array) // [ 1, 'dos', 'tres', 4 ]
```

# Sort
El método `sort` es **mutable** y consiste en ordenar un *array* a partir de los valores [Unicode](https://es.wikipedia.org/wiki/Unicode) de los caracteres y este retorna un *array* con la misma referencia en memoria que el original.

Este proceso recibe **un argumento**:

* Una función de comparación que compara cada elemento con otro. Por defecto, evalúa el valor Unicode del caracter.
```javascript
let sortedArray = array.sort(function())
```
La función comparativa, que recibe como argumento el método `sort`, utiliza **dos parámetros**:

* El **primer elemento** a comparar.
* El **segundo elemento** a comparar.
```javascript
array.sort(function(first, second))
```
Si la función comparativa retorna un número mayor que 0, entonces el primer elemento se sitúa antes que el segundo. Si es menor que 0, entonces el segundo elemento se sitúa antes que el primero. Esto es importante, ya que ordenar los elementos por el valor Unicode provoca resultados inesperados.

## **Ordenamiento de palabras**
Si ordenas un *array* de palabras, puede ordenar correctamente por el valor Unicode de los caracteres de la palabra. Sin embargo, en algunos navegadores o entornos de ejecución (como Node) puede que esto falle, por lo tanto, debes utilizar la función `localeCompare`.

Ten en cuenta que las mayúsculas, minúsculas y caracteres con tilde tienen un valor Unicode diferente, por lo que debes asegurarte que todas las palabras estén en la misma condición.
```javascript
const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
]

words.sort((a,b) => a.localeCompare(b))
// [ 'adieu', 'banana', 'café', 'communiqué', 'éclair', 'premier', 'réservé' ]
```
## **Ordenamiento de números**
Si ordenas un *array* de números, provoca un ordenamiento inesperado porque ordena por el valor Unicode de los caracteres del número.
```javascript
const numbers = [1, 30, 4, 21, 100000]
numbers.sort() 
console.log(numbers)
// [ 1, 100000, 21, 30, 4 ]
```
Para arreglar este comportamiento, es necesario utilizar la siguiente función comparativa:

* De manera ascendente `(a, b) => a - b`
* De manera descendente `(a, b) => b - a`
```javascript
// Ascendente
const numbers = [1, 30, 4, 21, 100000]
numbers.sort((a,b) => a - b) 
console.log(numbers)
// [ 1, 4, 21, 30, 100000 ]

// Descendente
const numbers = [1, 30, 4, 21, 100000]
numbers.sort((a,b) => b - a) 
console.log(numbers)
// [ 100000, 30, 21, 4, 1 ]
```
## **Ordenamiento de objetos por su propiedad**
A partir de la función comparativa puedes ordenar los elementos de cualquier forma. Cuando necesites ordenar un *array* de objetos, compara una **propiedad** de tipo numérica de la misma forma que el ordenamiento de números, ya sea de manera descendente o ascendente.
```javascript
const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
]
```
Por ejemplo, creemos un algoritmo que ordene los pedidos del *array* `orders` por su valor total.
```javascript
orders.sort((a,b) => a.total - b.total)

console.log(orders)
/* [
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true
  },
  {
    customerName: 'Nicolas',
    total: 600,
    delivered: true
  },
  {
    customerName: 'Santiago',
    total: 1840,
    delivered: true
  }
]
*/
```