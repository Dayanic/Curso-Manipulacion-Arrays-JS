const products = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥮" },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productIndex = products.findIndex(item => item.id === '🍔');
/*if (productIndex !== -1) {
    myProducts.push(products[productIndex]);
    products.splice(productIndex, 1);//Este método quita un elemento del array original (mutable).
}

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));*/

//***Reto eliminar un elemento de un array de forma inmutable sin modificar el original.***//
let newProducts = [];
if (productIndex !== -1) {
    myProducts.push(products[productIndex]);
    newProducts = products.filter((item, index) => index != productIndex);
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("newProducts", newProducts);
console.log("-".repeat(10));

//Update
const productsV2 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥮" },
];
const update = {
    id: "🥮",
    changes: {
        price: 200,
        description: 'delicioso'
    }
}

/*const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
productsV2[productIndexV2] = {
    ...productsV2[productIndexV2],
    ...update.changes,
};
console.log(productsV2);*/

//***Reto realizar modificación de array sin modificar original***//
const newProductsV2 = products.map(item => {
    if(item.id === '🍔')
        return Object.assign({}, item, update.changes)
    return item
});
console.log({productsV2});
console.log({newProductsV2});
