const users = [
    { userId: 1, username: "Tom", attributes: ["Nice","Cute"] },
    { userId: 2, username: "Mike", attributes: ["Lovely"] },
    { userId: 3, username: "Nico", attributes: ["Nice","Cool"] },
];

const rta = users.map(user => user.attributes).flat();
console.log('map-flat',rta);

const rta2 = users.flatMap(user => user.attributes);
console.log('flatmap',rta2);

const calendars = {
    primaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 15),
            endDate: new Date(2021, 1, 1, 15, 30),
            title: "Cita 1",
        },
        {
            startDate: new Date(2021, 1, 1, 17),
            endDate: new Date(2021, 1, 1, 18),
            title: "Cita 2",
        },
    ],
    secondaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 12),
            endDate: new Date(2021, 1, 1, 12, 30),
            title: "Cita 3",
        },
        {
            startDate: new Date(2021, 1, 1, 9),
            endDate: new Date(2021, 1, 1, 10),
            title: "Cita 4",
        },
    ],
};

console.log('calendars',Object.values(calendars).flat().map(value => value.startDate));

//Solución del profesor
const rta3 = Object.values(calendars).flatMap(item => {
    return item.map(value => value.startDate);
});
console.log({rta3});