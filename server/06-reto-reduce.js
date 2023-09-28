const array = [10,9,10,8,7,5,4,1,7,5,2,3,4,5,9,8,7];

const newArray = array.reduce((obj, value) => {
    if (value < 5) {
        obj["1-4"] = obj["1-4"] + 1;
    } else if (value < 8) {
        obj["5-7"] = obj["5-7"] + 1;
    } else if (value < 11) {
        obj["8-10"] = obj["8-10"] + 1;
    } 

    return obj;
}, {
    "1-4": 0,
    "5-7": 0,
    "8-10": 0
});

console.log(newArray);