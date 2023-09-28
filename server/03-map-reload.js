const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true,
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true,
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true,
    },
];
console.log('original', orders);
const rta = orders.map(item => item.total);
console.log('new',rta);

//En este caso se modifica arreglo original porque hacemos copia del objeto en memoria
/*const rta2 = orders.map(item => {
    item.tax = .19;
    return item;
});
console.log('new2',rta2);
console.log('original', orders);*/

//De esta forma se retorna un objeto para no afectar la referencia original
const rta3 = orders.map(item => {
    return {
        ...item,
        tax: .19
    };
});
console.log('new3',rta3);
console.log('original', orders);