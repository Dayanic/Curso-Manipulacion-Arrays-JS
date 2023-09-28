const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const newArray = [];
for (let index = 0; index < matriz.length; index++) {
    const element = matriz[index];
    for (let index2 = 0; index2 < matriz.length; index2++) {
        const element2 = matriz[index][index2];
        newArray.push(element2);
    }
}
console.log('for',newArray);

const matriz2 = [
    [1,2,3],
    [4,5,6,[1,2,[1,2]]],
    [7,8,9]
];

const rta = matriz2.flat(3);
console.log('flat', rta);
