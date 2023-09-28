const words = ['spray','limit','elite','exuberant'];

const newArray = [];

for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if (item.length >= 6) {
        newArray.push(item);
    }
}

console.log('newArray', newArray);
console.log('original', words);

const rta = words.filter(item => item.length >= 6);

console.log('newArray2', rta);
console.log('original2', words);

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

const rta3 = orders.filter(item => item.delivered);
console.log('rta3', rta3);
console.log('orders', orders);

const rta4 = orders.filter(item => item.delivered && item.total >=  100);
console.log('rta4', rta4);
console.log('orders', orders);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log(search('a'));