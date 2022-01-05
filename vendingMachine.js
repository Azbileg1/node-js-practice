
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let products = [
    { number: 1, price: 100, name: 'Orange juice' },
    { number: 2, price: 200, name: 'Soda' },
    { number: 3, price: 150, name: 'Chocolate snack' },
    { number: 4, price: 250, name: 'Cookies' },
    { number: 5, price: 180, name: 'Gummy bears' },
    { number: 6, price: 500, name: 'Chocolates' },
    { number: 7, price: 120, name: 'Crackers' },
    { number: 8, price: 220, name: 'Potato chips' },
    { number: 9, price: 80, name: 'Small snack' },
];

let coins = [500, 200, 100, 50, 20, 10];
const vendingMachine = (el,coin,num1) => {
    let change1 = [];
    let num = num1 - 1;
    if (num < 1 || num > 9) {
        return 'Enter a valid product number';
    }else if (coin < el[num].price){
        return 'Not enough money for this product';
    }else {
        for (let i = 0; i < coins.length; i++) {
            if (coin > coins[i]) {
                change1.push(coins[i]);
                coin -= coins[i];
            }
        }
    }
    let payment = {product: el[num].name, change: change1}
    return payment;
    
}

// let result, too, coin;
// rl.question('Number, Coins: ', (userInput) => {
//     too = parseInt(userInput.split(' ')[0]);
//     coin = parseInt(userInput.split(' ')[1]);
//     rl.close()
// });

result = vendingMachine(products, 200, 7);

console.log(result)