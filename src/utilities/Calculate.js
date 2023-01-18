const add = (first, second) => {
    return first + second;
};

// export default add;
const multiply = (first, second) => {
    return first * second
}

// reduce in array

// const numbers = [20, 45, 65, 78, 12, 36];
// const sumReducer = (previous, current) => previous + current;
// let total = numbers.reduce(sumReducer, 0);

// const items = [
//     { id: 1, name: 'alta', price: 100 },
//     { id: 2, name: 'alta', price: 100 },
//     { id: 3, name: 'alta', price: 100 },
//     { id: 4, name: 'alta', price: 100 }
// ];
// const itemReducer = (previous, current) => previous + current.price;
// const itemTotal = items.reduce(itemReducer, 0);

const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}

export { add, multiply, getTotalPrice as getTotal }