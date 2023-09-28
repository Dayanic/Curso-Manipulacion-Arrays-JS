const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => b - a);
console.log(numbers);

const words = ['réservé', 'premier', 'comuniqué', 'café', 'adieu', 'éclair','banana'];
words.sort((a,b) => a.localeCompare(b));
console.log(words);

const orders = [
    {
        customerName: "Nicolás",
        total: 600,
        delivered: true,
        //initDate: "01/05/2023",
        initDate: new Date("2023-05-01"),
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
        //initDate: "01/10/2023",
        initDate: new Date("2023-10-01"),
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
        //initDate: "26/06/2024",
        initDate: new Date("2024-06-26"),
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
        //initDate: "09/02/2022",
        initDate: new Date("2022-02-09"),
    },
];
//orders.sort((a,b) => b.total - a.total);
//console.log(orders);

//Reto de poner fechas al objeto y ordenar desde la más reciente a la más antigua
orders.sort((a, b) => b.initDate - a.initDate);
console.log(orders);